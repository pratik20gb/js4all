import { motion } from "framer-motion";
import { ExternalLink, Book, FileText, Video, GraduationCap, Wrench, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Resource } from "@/data/resources";
import { cn } from "@/lib/utils";

interface ResourceCardProps {
  resource: Resource;
  size?: "small" | "medium" | "large";
  className?: string;
}

const iconMap = {
  documentation: Globe,
  book: Book,
  course: GraduationCap,
  article: FileText,
  video: Video,
  tool: Wrench,
};

export const ResourceCard = ({ resource, size = "medium", className }: ResourceCardProps) => {
  const Icon = iconMap[resource.type] || Globe;

  const sizeClasses = {
    small: "p-4",
    medium: "p-6",
    large: "p-8",
  };

  const titleSizes = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-2xl",
  };

  const descriptionSizes = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn("h-full", className)}
    >
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full no-underline"
        onClick={(e) => {
          // Ensure the link works
          e.stopPropagation();
        }}
      >
        <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 group cursor-pointer relative">
          <CardHeader className={sizeClasses[size]}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {resource.type}
                  </span>
                </div>
                <CardTitle className={cn(titleSizes[size], "mb-2 group-hover:text-primary transition-colors font-bold")}>
                  {resource.title}
                </CardTitle>
              </div>
              <div className="flex-shrink-0 p-1 -m-1 rounded hover:bg-primary/10 transition-colors">
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
          </CardHeader>
          <CardContent className={cn(sizeClasses[size], "pt-0 flex-1 flex flex-col")}>
            <CardDescription className={cn(descriptionSizes[size], "mb-4 flex-1 text-muted-foreground")}>
              {resource.description}
            </CardDescription>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:underline">
              Visit Resource
              <ExternalLink className="w-4 h-4" />
            </div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
};

