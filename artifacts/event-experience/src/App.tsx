import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ServiceDetails from "@/pages/ServiceDetails";
import BlogsPage from "@/pages/BlogsPage";

const queryClient = new QueryClient();

import { ScrollToTop } from "@/components/ScrollToTop";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/blogs" component={BlogsPage} />
        <Route path="/service/:id" component={ServiceDetails} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { PagePreloader } from "@/components/animations/PagePreloader";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScrollProvider>
        <PagePreloader />
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </SmoothScrollProvider>
    </QueryClientProvider>
  );
}

export default App;
