import { motion } from "framer-motion";
import { Code2, BookOpen, Play, ExternalLink, Map as MapIcon, Github, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border/40"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
            <Code2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            JS<span className="text-primary">4All</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm transition-colors ${
              location.pathname === "/"
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Resources
          </Link>
          <Link
            to="/roadmap"
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
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            MDN Docs
          </a>
          <div className="flex items-center gap-3 pl-3 border-l border-border">
            <a
              href="https://x.com/sage_pratik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="X"
            >
              <X className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/pratik20gb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};
