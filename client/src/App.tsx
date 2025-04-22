import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
// Temporarily removed ParticleBackground and ThreeBackground due to dependency issues
// import ParticleBackground from "@/components/ParticleBackground";
// import ThreeBackground from "@/components/ThreeBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative min-h-screen bg-gradient-to-b from-[#0A0F1C] to-[#0F172A]">
          {/* Canvas container for background effects (temporarily disabled) */}
          <div className="canvas-container">
            {/* <ParticleBackground />
            <ThreeBackground /> */}
          </div>
          
          <Navbar />
          <Home />
          <Footer />
          <ScrollToTop />
          
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
