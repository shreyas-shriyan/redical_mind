import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

// import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import NotFound from "./pages/NotFound";
import theme from "./utils/theme";
import SentimentAnalysis from "./pages/SentimentAnalysis";
import ExecutiveOverview from "./pages/ExecutiveOverview";
import FTERequires from "./pages/FTERequires";
import CallVolume from "./pages/CallVolume/CallVolume";
import AvarageHoldTime from "./pages/AvarageHoldTime";
import ScheduleShrinkage from "./pages/ScheduleShrinkage";
import Occupancy from "./pages/Occupancy";
import HeadCount from "./pages/HeadCount";
import PlanningView from "./pages/PlanningView";
import ViewFileName from "./pages/ViewFileName";
import ProcessCell from "./pages/ProcessCell/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<PublicRoute restricted={false} />}>
            <Route path="/" element={<ExecutiveOverview />} />
          </Route>
          <Route
            path="/qms/executive-overview"
            element={<PublicRoute restricted={false} />}
          >
            <Route
              path="/qms/executive-overview"
              element={<ExecutiveOverview />}
            />
          </Route>
          <Route
            path="/qms/process-calls"
            element={<PublicRoute restricted={false} />}
          >
            <Route path="/qms/process-calls" element={<ProcessCell />} />
          </Route>
          <Route
            path="/qms/process-calls/view"
            element={<PublicRoute restricted={false} />}
          >
            <Route path="/qms/process-calls/view" element={<ViewFileName />} />
          </Route>
          <Route
            path="/qms/sentiment-analysis"
            element={<PublicRoute restricted={false} />}
          >
            <Route
              path="/qms/sentiment-analysis"
              element={<SentimentAnalysis />}
            />
          </Route>

          <Route
            path="/FTE-required"
            element={<PublicRoute restricted={false} />}
          >
            <Route path="/FTE-required" element={<FTERequires />} />
          </Route>
          <Route
            path="/call-volume"
            element={<PublicRoute restricted={false} />}
          >
            <Route path="/call-volume" element={<CallVolume />} />
          </Route>
          <Route
            path="/average-hold-Time"
            element={<PublicRoute restricted={false} />}
          >
            <Route path="/average-hold-Time" element={<AvarageHoldTime />} />
          </Route>
          <Route
            path="/schedule-shrinkage"
            element={<PublicRoute restricted={false} />}
          >
            <Route path="/schedule-shrinkage" element={<ScheduleShrinkage />} />
          </Route>
          <Route path="/occupancy" element={<PublicRoute restricted={false} />}>
            <Route path="/occupancy" element={<Occupancy />} />
          </Route>
          <Route path="/headcount" element={<PublicRoute restricted={false} />}>
            <Route path="/headcount" element={<HeadCount />} />
          </Route>
          <Route
            path="/planning-view"
            element={<PublicRoute restricted={false} />}
          >
            <Route path="/planning-view" element={<PlanningView />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
