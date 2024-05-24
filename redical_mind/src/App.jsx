import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

// import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import theme from "./utils/theme";
import Dashboard from "./pages/Dashboard";
import Summary from "./pages/Summary";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<PublicRoute restricted={false} />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/summary" element={<PublicRoute restricted={false} />}>
            <Route path="/summary" element={<Summary />} />
          </Route>
          <Route path="/dashboard" element={<PublicRoute restricted={false} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
