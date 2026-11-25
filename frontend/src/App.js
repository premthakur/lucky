import { useCallback, useEffect, useState } from "react";
import { HashRouter, Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { QuoteModal } from "@/components/site/QuoteModal";
import { QuoteContext } from "@/components/site/ui";
import { AboutPage } from "@/pages/About";
import { HomePage } from "@/pages/Home";

// New pages start at the top unless a section jump was requested.
const ScrollToTop = () => {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (!state?.scrollTo) window.scrollTo(0, 0);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
};

const Layout = () => (
  <div className="min-h-screen bg-paper text-ink antialiased">
    <ScrollToTop />
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const openQuote = useCallback(() => setQuoteOpen(true), []);

  return (
    <MotionConfig reducedMotion="user">
      <QuoteContext.Provider value={openQuote}>
        <HashRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </HashRouter>
        <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
      </QuoteContext.Provider>
    </MotionConfig>
  );
}

export default App;
