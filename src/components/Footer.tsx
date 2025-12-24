import { motion } from "framer-motion";
import { Code2, Github, X, BookOpen, Map as MapIcon, Play } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                JS<span className="text-primary">4All</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your complete JavaScript learning hub with curated resources, roadmaps, and interactive quizzes.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/sage_pratik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="X"
              >
                <X className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/pratik20gb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/roadmap"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <MapIcon className="w-4 h-4" />
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  to="/quiz"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* External Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  MDN Web Docs
                </a>
              </li>
              <li>
                <a
                  href="https://javascript.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  JavaScript.info
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/getify/You-Dont-Know-JS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  You Don't Know JS
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">About</h3>
            <p className="text-sm text-muted-foreground mb-4">
              JS4All is a comprehensive platform for learning JavaScript, from fundamentals to advanced topics.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} JS4All. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Made by Pratik</span>
          </div>
        </div>
      </div>
      <span className="absolute bottom-4 right-6 text-xs text-muted-foreground/15 font-light pointer-events-none">
        sage
      </span>
    </footer>
  );
};

