import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./components/Layouts/publicLayout/PublicLayout";
import Home from "./pages/publicPage/homePage/Home";
import About from "./pages/publicPage/aboutPage/About";
import Service from "./pages/publicPage/servicePage/Service";
import Portfolio from "./pages/publicPage/portfolioPage/Portfolio";
import Contact from "./pages/publicPage/contactPage/Contact";
import Login from "./pages/publicPage/loginPage/Login";
import DashbordLayout from "./components/Layouts/dashboardLayout/DashbordLayout.jsx";
import Dashboard from "./pages/adminPage/dashboardPage/Dashboard.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
// ✅ Placeholder pages — create real ones later
const PortfolioAdmin = () => (
  <div style={{ padding: "2rem" }}>
    <h1>Manage Portfolio</h1>
    <p>Coming soon…</p>
  </div>
);
const MessagesAdmin = () => (
  <div style={{ padding: "2rem" }}>
    <h1>Messages</h1>
    <p>Coming soon…</p>
  </div>
);
const SettingsAdmin = () => (
  <div style={{ padding: "2rem" }}>
    <h1>Settings</h1>
    <p>Coming soon…</p>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        {/* ---------- PUBLIC ---------- */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* ---------- ADMIN ---------- */}
        <Route
          path="/admin"
          element={
            <ProtectedRoutes>
              <DashbordLayout />
            </ProtectedRoutes>
          }
        >
          <Route index element={<Dashboard />} /> {/* /admin */}
          <Route path="portfolio" element={<PortfolioAdmin />} />{" "}
          {/* /admin/portfolio */}
          <Route path="messages" element={<MessagesAdmin />} />{" "}
          {/* /admin/messages */}
          <Route path="settings" element={<SettingsAdmin />} />{" "}
          {/* /admin/settings */}
        </Route>
        <Route
          path="*"
          element={
            <div style={{ padding: "2rem", textAlign: "center" }}>
              <h1>404 — Page Not Found</h1>
              <p>The page you're looking for doesn't exist.</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
