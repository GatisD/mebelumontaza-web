import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Lapa nav atrasta — 404"
        description="Pieprasītā lapa nav atrasta. Atgriezieties uz sākumlapu."
        path="/404"
      />
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <p className="text-7xl font-heading font-bold text-primary mb-4">404</p>
        <h1 className="font-heading font-bold text-2xl text-foreground mb-3">Lapa nav atrasta</h1>
        <p className="text-muted-foreground mb-8">
          Pieprasītā lapa neeksistē. Iespējams, adrese ir mainīta vai ierakstīta neprecīzi.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold px-6 py-3 rounded hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Uz sākumlapu
        </Link>
      </div>
    </>
  );
}
