import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

// import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import theme from "./utils/theme";
import Dashboard from "./pages/Dashboard";
import Summary from "./pages/Summary";
import Overview from "./pages/Overview";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<PublicRoute restricted={false} />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/" element={<PublicRoute restricted={false} />}>
            <Route path="/qms/sentiment-analysis" element={<Home />} />
          </Route>
          <Route
            path="/qms/executive-overview"
            element={<PublicRoute restricted={false} />}
          >
            <Route path="/qms/executive-overview" element={<Overview />} />
          </Route>
          <Route
            path="/FTE-required"
            element={<PublicRoute restricted={false} />}
          >
            <Route path="/FTE-required" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
