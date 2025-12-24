import { useState } from "react";
import { motion } from "framer-motion";
import { MapIcon, BookOpen, ExternalLink, ChevronRight, Code2, Target, Layers, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { roadmapData, RoadmapNode } from "@/data/roadmap";
import { cn } from "@/lib/utils";

const levelColors = {
  beginner: "bg-green-500/20 text-green-400 border-green-500/50",
  intermediate: "bg-blue-500/20 text-blue-400 border-blue-500/50",
  advanced: "bg-purple-500/20 text-purple-400 border-purple-500/50"
};

const categoryIcons = {
  fundamentals: Code2,
  field: Target,
  library: Layers,
  concept: BookOpen
};

const Roadmap = () => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  // Organize nodes by category
  const fundamentals = roadmapData.filter(n => n.category === "fundamentals");
  const fields = roadmapData.filter(n => n.category === "field");
  const libraries = roadmapData.filter(n => n.category === "library");

  // Get next nodes for a given node
  const getNextNodes = (nodeId: string): RoadmapNode[] => {
    const node = roadmapData.find(n => n.id === nodeId);
    if (!node || !node.children) return [];
    return node.children
      .map(id => roadmapData.find(n => n.id === id))
      .filter(Boolean) as RoadmapNode[];
  };

  // Get prerequisite nodes
  const getPrereqNodes = (nodeId: string): RoadmapNode[] => {
    const node = roadmapData.find(n => n.id === nodeId);
    if (!node || !node.prerequisites) return [];
    return node.prerequisites
      .map(id => roadmapData.find(n => n.id === id))
      .filter(Boolean) as RoadmapNode[];
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <MapIcon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Learning Path</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              JavaScript
              <span className="text-gradient"> Roadmap</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A clear path from JavaScript basics to advanced topics, with career paths and essential libraries
            </p>
          </motion.div>

          {/* Fundamentals Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Fundamentals</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {fundamentals.map((node, index) => {
                const nextNodes = getNextNodes(node.id);
                const prereqNodes = getPrereqNodes(node.id);
                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:border-primary/50 transition-all">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-lg">{node.title}</CardTitle>
                          <Badge className={cn("text-xs shrink-0", levelColors[node.level])}>
                            {node.level}
                          </Badge>
                        </div>
                        <CardDescription>{node.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value={node.id} className="border-none">
                            <AccordionTrigger className="py-2 text-sm font-medium hover:no-underline">
                              View Details
                            </AccordionTrigger>
                            <AccordionContent className="space-y-3 pt-2">
                              {prereqNodes.length > 0 && (
                                <div>
                                  <h4 className="text-xs font-semibold text-foreground mb-2">Prerequisites:</h4>
                                  <div className="flex flex-wrap gap-1.5">
                                    {prereqNodes.map(prereq => (
                                      <Badge key={prereq.id} variant="secondary" className="text-xs">
                                        {prereq.title}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {nextNodes.length > 0 && (
                                <div>
                                  <h4 className="text-xs font-semibold text-foreground mb-2">Next Steps:</h4>
                                  <div className="flex flex-wrap gap-1.5">
                                    {nextNodes.map(nextNode => (
                                      <Badge key={nextNode.id} variant="secondary" className="text-xs">
                                        {nextNode.title}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {node.resources && node.resources.length > 0 && (
                                <div>
                                  <h4 className="text-xs font-semibold text-foreground mb-2">Resources:</h4>
                                  <div className="space-y-1.5">
                                    {node.resources.map((resource, idx) => (
                                      <a
                                        key={idx}
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs text-primary hover:underline"
                                      >
                                        <ExternalLink className="w-3 h-3" />
                                        {resource.title}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Career Paths Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Career Paths</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {fields.map((node, index) => {
                const nextNodes = getNextNodes(node.id);
                const prereqNodes = getPrereqNodes(node.id);
                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:border-primary/50 transition-all">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-xl">{node.title}</CardTitle>
                          <Badge className={cn("text-xs shrink-0", levelColors[node.level])}>
                            {node.level}
                          </Badge>
                        </div>
                        <CardDescription className="text-base">{node.description}</CardDescription>
                      </CardHeader>
                      {nextNodes.length > 0 && (
                        <CardContent>
                          <div className="space-y-2 mb-3">
                            <p className="text-sm font-medium text-foreground">Popular Libraries:</p>
                            <div className="flex flex-wrap gap-2">
                              {nextNodes.slice(0, 3).map(nextNode => (
                                <Badge key={nextNode.id} variant="secondary" className="text-xs">
                                  {nextNode.title}
                                </Badge>
                              ))}
                              {nextNodes.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{nextNodes.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </div>
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value={node.id} className="border-none">
                              <AccordionTrigger className="py-2 text-sm font-medium hover:no-underline">
                                View All Details
                              </AccordionTrigger>
                              <AccordionContent className="space-y-3 pt-2">
                                {prereqNodes.length > 0 && (
                                  <div>
                                    <h4 className="text-xs font-semibold text-foreground mb-2">Prerequisites:</h4>
                                    <div className="flex flex-wrap gap-1.5">
                                      {prereqNodes.map(prereq => (
                                        <Badge key={prereq.id} variant="secondary" className="text-xs">
                                          {prereq.title}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}
                                {nextNodes.length > 0 && (
                                  <div>
                                    <h4 className="text-xs font-semibold text-foreground mb-2">All Libraries:</h4>
                                    <div className="flex flex-wrap gap-1.5">
                                      {nextNodes.map(nextNode => (
                                        <Badge key={nextNode.id} variant="secondary" className="text-xs">
                                          {nextNode.title}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}
                                {node.resources && node.resources.length > 0 && (
                                  <div>
                                    <h4 className="text-xs font-semibold text-foreground mb-2">Resources:</h4>
                                    <div className="space-y-1.5">
                                      {node.resources.map((resource, idx) => (
                                        <a
                                          key={idx}
                                          href={resource.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center gap-1.5 text-xs text-primary hover:underline"
                                        >
                                          <ExternalLink className="w-3 h-3" />
                                          {resource.title}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </CardContent>
                      )}
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Libraries Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Libraries & Tools</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {libraries.map((node, index) => {
                const prereqNodes = getPrereqNodes(node.id);
                const nextNodes = getNextNodes(node.id);
                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="h-full hover:border-primary/50 transition-all">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-base">{node.title}</CardTitle>
                          <Badge className={cn("text-xs shrink-0", levelColors[node.level])}>
                            {node.level}
                          </Badge>
                        </div>
                        <CardDescription className="text-sm">{node.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        {prereqNodes.length > 0 && (
                          <div className="text-xs text-muted-foreground mb-3">
                            Requires: {prereqNodes[0].title}
                          </div>
                        )}
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value={node.id} className="border-none">
                            <AccordionTrigger className="py-2 text-xs font-medium hover:no-underline">
                              View Details
                            </AccordionTrigger>
                            <AccordionContent className="space-y-2 pt-2">
                              {prereqNodes.length > 0 && (
                                <div>
                                  <h4 className="text-xs font-semibold text-foreground mb-1.5">Prerequisites:</h4>
                                  <div className="flex flex-wrap gap-1.5">
                                    {prereqNodes.map(prereq => (
                                      <Badge key={prereq.id} variant="secondary" className="text-xs">
                                        {prereq.title}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {nextNodes.length > 0 && (
                                <div>
                                  <h4 className="text-xs font-semibold text-foreground mb-1.5">Next Steps:</h4>
                                  <div className="flex flex-wrap gap-1.5">
                                    {nextNodes.map(nextNode => (
                                      <Badge key={nextNode.id} variant="secondary" className="text-xs">
                                        {nextNode.title}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {node.resources && node.resources.length > 0 && (
                                <div>
                                  <h4 className="text-xs font-semibold text-foreground mb-1.5">Resources:</h4>
                                  <div className="space-y-1.5">
                                    {node.resources.map((resource, idx) => (
                                      <a
                                        key={idx}
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs text-primary hover:underline"
                                      >
                                        <ExternalLink className="w-3 h-3" />
                                        {resource.title}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Roadmap;
