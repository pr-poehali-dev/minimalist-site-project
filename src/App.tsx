
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Fashion from "./pages/Fashion";
import Beauty from "./pages/Beauty";
import Culture from "./pages/Culture";
import Lifestyle from "./pages/Lifestyle";
import Travel from "./pages/Travel";
import Art from "./pages/Art";
import Article from "./pages/Article";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/art" element={<Art />} />
          <Route path="/article/:slug" element={<Article />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;