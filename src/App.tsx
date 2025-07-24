import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CookiesPolicy";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiesPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;