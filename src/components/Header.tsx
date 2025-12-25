import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, BookOpen, Play, ExternalLink, Map as MapIcon, Github, X, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      <Link
        to="/"
        onClick={() => mobile && setIsOpen(false)}
        className={`text-sm transition-colors flex items-center gap-2 ${
          location.pathname === "/"
            ? "text-foreground font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Resources
      </Link>
      <Link
        to="/roadmap"
        onClick={() => mobile && setIsOpen(false)}
        className={`text-sm transition-colors flex items-center gap-2 ${
          location.pathname === "/roadmap"
            ? "text-foreground font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <MapIcon className="w-4 h-4" />
        Roadmap
      </Link>
      <Link
        to="/quiz"
        onClick={() => mobile && setIsOpen(false)}
        className={`text-sm transition-colors flex items-center gap-2 ${
          location.pathname === "/quiz"
            ? "text-foreground font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Play className="w-4 h-4" />
        Quiz
      </Link>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => mobile && setIsOpen(false)}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
      >
        <BookOpen className="w-4 h-4" />
        MDN Docs
      </a>
      <div className={`flex items-center gap-3 ${mobile ? "flex-col" : "pl-3 border-l border-border"}`}>
        <a
          href="https://x.com/sage_pratik"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => mobile && setIsOpen(false)}
          className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          aria-label="X"
        >
          <X className="w-4 h-4" />
          {mobile && <span>X (Twitter)</span>}
        </a>
        <a
          href="https://github.com/pratik20gb/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => mobile && setIsOpen(false)}
          className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4" />
          {mobile && <span>GitHub</span>}
        </a>
      </div>
    </>
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border/40"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
          </div>
          <span className="text-lg sm:text-xl font-bold text-foreground">
            JS<span className="text-primary">4All</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLinks />
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left">Navigation</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-6 mt-8">
              <NavLinks mobile />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};
