import { motion } from "framer-motion";
import { Code2, BookOpen, Play, Sparkles, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ResourceCard } from "@/components/ResourceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { resourceCategories } from "@/data/resources";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Master JavaScript</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Your Complete
              <span className="text-gradient"> JavaScript</span>
              <br />
              Learning Hub
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Curated resources, books, and interactive quizzes to master JavaScript from fundamentals to advanced topics. All documentation links point to MDN Web Docs.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link to="/quiz" className="w-full sm:w-auto">
                <Button variant="hero" size="xl" className="w-full sm:min-w-[200px] justify-center">
                  <Play className="w-5 h-5" />
                  Start Quiz
                </Button>
              </Link>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" size="xl" className="w-full sm:min-w-[200px] justify-center">
                  <BookOpen className="w-5 h-5" />
                  MDN Docs
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Bento Grid */}
          <div className="space-y-8">
            {resourceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="space-y-4"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={cn(
                    "h-1 flex-1 bg-gradient-to-r",
                    category.color
                  )} />
                  <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {category.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </div>
                  <div className={cn(
                    "h-1 flex-1 bg-gradient-to-r",
                    category.color
                  )} />
                </div>

                {/* Resources Grid - Bento Style */}
                <div className={cn(
                  "grid gap-4 auto-rows-fr",
                  category.resources.length === 1 ? "grid-cols-1" :
                  category.resources.length === 2 ? "grid-cols-1 md:grid-cols-2" :
                  category.resources.length === 3 ? "grid-cols-1 md:grid-cols-3 lg:grid-cols-3" :
                  "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                )}>
                  {category.resources.map((resource, resourceIndex) => {
                    // Determine size based on position and category for bento effect
                    let size: "small" | "medium" | "large" = "medium";
                    let colSpan = "";
                    let rowSpan = "";

                    if (category.resources.length === 1) {
                      size = "large";
                    } else if (category.resources.length === 2) {
                      if (resourceIndex === 0) {
                        size = "large";
                        colSpan = "md:col-span-2";
                      }
                    } else if (category.resources.length === 3) {
                      if (resourceIndex === 0) {
                        size = "large";
                        colSpan = "md:col-span-2 lg:col-span-2";
                        rowSpan = "md:row-span-2";
                      }
                    } else if (category.resources.length === 4) {
                      if (resourceIndex === 0) {
                        size = "large";
                        colSpan = "md:col-span-2 lg:col-span-2";
                        rowSpan = "md:row-span-2";
                      }
                    }

                    return (
                      <div key={resource.title} className={cn(colSpan, rowSpan)}>
                        <ResourceCard
                          resource={resource}
                          size={size}
                        />
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quiz CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl mb-2">Test Your Knowledge</CardTitle>
                <CardDescription className="text-lg">
                  Practice what you've learned with interactive quizzes covering all JavaScript topics
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link to="/quiz" className="inline-block">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto sm:min-w-[240px] justify-center">
                    <Play className="w-5 h-5" />
                    Start Quiz
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
