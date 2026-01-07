import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center bg-gradient-hero">
        <div className="container-wide text-center">
          <div className="text-8xl font-display font-bold text-gradient-brand mb-6">404</div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="bg-gradient-brand hover:opacity-90 text-primary-foreground">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
