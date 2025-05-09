import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, HashRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import ThankYouPage from "./pages/ThankYouPage";

// ScrollToTop component to ensure pages load at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Choose the appropriate router based on environment
// HashRouter is more compatible with static hosting but BrowserRouter looks cleaner
const RouterComponent = process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter;

const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
      {/* Redirect /edit route to main page to prevent white screen */}
      <Route path="/edit/*" element={<Navigate to="/" replace />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <RouterComponent>
          <AppRoutes />
        </RouterComponent>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
