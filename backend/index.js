const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require('cors');
const db = require('./db');
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Campaign API",
            version: "1.0.0",
            description: "API to manage campaigns",
        },
        servers: [
            {
                url: "http://localhost:4000",
                description: "Development server",
            },
        ],
    },
    apis: ["./index.js"],
};


const specs = swaggerJsdoc(options);


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get('/campaign', (req, res) => {
    const callType = req.query.callType;

    if (callType === "inbound") {
        sql = "SELECT distinct group_id as campaign_id FROM vicidial_inbound_groups where active='Y' ORDER BY group_id ASC";
    } else if (callType === "outbound-manual") {
        sql = "SELECT distinct campaign_id FROM vicidial_lists where active='Y' ORDER BY campaign_id ASC";
    } else {
        return res.status(400).json({ message: 'Invalid callType parameter' });
    }

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.json(results);
    });
});

app.get('/call-dates', (req, res) => {
    const campaignId = req.query.campaign_id;

    if (!campaignId) {
        return res.status(400).json({ message: 'Missing campaign_id parameter' });
    }

    const sql = "SELECT DISTINCT DATE_FORMAT(call_date, '%Y-%m-%d') AS 'call_date' FROM vicidial_closer_log WHERE campaign_id = ? ORDER BY call_date DESC";

    db.query(sql, [campaignId], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.json(results);
    });
});

app.get('/users', (req, res) => {
    const campaignId = req.query.campaign_id;
    const callDate = req.query.callDate;

    if (!campaignId || !callDate) {
        return res.status(400).json({ message: 'Missing campaign_id or callDate parameter' });
    }

    const sql = "SELECT distinct user FROM vicidial_closer_log WHERE campaign_id LIKE ? AND call_date >= ?";
    db.query(sql, [`%${campaignId}%`, callDate], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.json(results);
    });
});

app.get('/status', (req, res) => {
    const campaignId = req.query.campaign_id;
    const callDate = req.query.callDate;
    const user = req.query.user;

    if (!campaignId || !callDate || !user) {
        return res.status(400).json({ message: 'Missing campaign_id, callDate, or user parameter' });
    }

    const sql = "SELECT distinct status FROM vicidial_closer_log WHERE campaign_id = ? AND call_date >= ? AND user = ?";
    db.query(sql, [campaignId, callDate, user], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.json(results);
    });
});

app.get('/term-reasons', (req, res) => {
    const campaignId = req.query.campaign_id;
    const callDate = req.query.callDate;
    const user = req.query.user;
    const status = req.query.status;

    if (!campaignId || !callDate || !user || !status) {
        return res.status(400).json({ message: 'Missing campaign_id, callDate, user, or status parameter' });
    }

    const sql = "SELECT distinct term_reason FROM vicidial_closer_log WHERE campaign_id = ? AND call_date >= ? AND user = ? AND status = ?";
    db.query(sql, [campaignId, callDate, user, status], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.json(results);
    });
});

app.get('/lead-ids', (req, res) => {
    const campaignId = req.query.campaign_id;
    const callDate = req.query.callDate;
    const user = req.query.user;
    const status = req.query.status;
    const termReason = req.query.term_reason;

    if (!campaignId || !callDate || !user || !status || !termReason) {
        return res.status(400).json({ message: 'Missing campaign_id, callDate, user, status, or term_reason parameter' });
    }

    const sql = "SELECT lead_id FROM vicidial_closer_log WHERE campaign_id = ? AND call_date >= ? AND user = ? AND status = ? AND term_reason = ?";
    db.query(sql, [campaignId, callDate, user, status, termReason], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.json(results);
    });
});


app.post('/submit', (req, res) => {
    const { callType, campaignId, callDate, callUser, callStatus, callTR, callLeadId } = req.body;

    if (!submit) {
        return res.status(400).json({ message: 'Submit parameter is required' });
    }

    let query = '';
    let params = [];

    if (callType === 'inbound') {
        query = `
            SELECT 
                vicidial_list.phone_number,
                vicidial_list.user,
                recording_log.filename,
                vicidial_list.lead_id,
                vicidial_closer_log.campaign_id
            FROM
                vicidial_list
                LEFT JOIN recording_log ON vicidial_list.lead_id = recording_log.lead_id
                INNER JOIN vicidial_closer_log ON vicidial_closer_log.lead_id = recording_log.lead_id
            WHERE
                recording_log.length_in_sec >= '2'
                AND recording_log.lead_id > '0'
                AND vicidial_closer_log.campaign_id LIKE ?
        `;
        params.push(`%${campaignId}%`);

        if (callDate) {
            query += ' AND DATE(recording_log.start_time) = ?';
            params.push(callDate);
        }
        if (callUser) {
            query += ' AND vicidial_list.user = ?';
            params.push(callUser);
        }
    } else if (callType === 'outbound-manual') {
        query = `
            SELECT 
                vicidial_list.entry_date,
                recording_log.start_time,
                vicidial_list.phone_number,
                vicidial_list.user,
                recording_log.filename,
                vicidial_list.lead_id,
                vicidial_list.security_phrase,
                recording_log.location,
                recording_log.length_in_sec,
                vicidial_closer_log.campaign_id
            FROM
                vicidial_list
                LEFT JOIN recording_log ON vicidial_list.lead_id = recording_log.lead_id
                INNER JOIN vicidial_closer_log ON vicidial_closer_log.lead_id = recording_log.lead_id
            WHERE
                recording_log.length_in_sec >= '2'
                AND recording_log.lead_id > '0'
                AND vicidial_closer_log.campaign_id LIKE ?
        `;
        params.push(`%${campaignId}%`);

        if (callDate) {
            query += ' AND DATE(recording_log.start_time) BETWEEN ? AND ?';
            params.push(callDate, callDate);
        }
        if (callUser) {
            query += ' AND vicidial_list.user = ?';
            params.push(callUser);
        }
    }

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        res.json(results);
    });
});

app.get('/get-ques', (req, res) => {

    const sql = "SELECT * FROM qms_questions WHERE processID = 2";
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.json(results);
    });
});

app.post('/insert-audit-answers', (req, res) => {
    const { hdnQuestionNo, cboFeed, txtFeedScore, hdnLeadId, hdnUser, hdnProcessId, hdnOptions, filename, description } = req.body;

    const query = `INSERT INTO qms_auditanswers (QID, AnswerText, Marks, AuditID, agentId, processId, IsCompliant, SelectedAnswer, isFatal, fileName, description, added_on) 
                   VALUES (?, ?, ?, ?, ?, ?, '', ?, ?, ?, ?, now())`;

    const values = [hdnQuestionNo, cboFeed, txtFeedScore, hdnLeadId, hdnUser, hdnProcessId, hdnOptions, filename, description];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.json({ message: 'Audit answers inserted successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
