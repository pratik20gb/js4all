import { motion } from "framer-motion";
import { Code2, Zap, Brain } from "lucide-react";

interface LevelCardProps {
  level: "easy" | "medium" | "hard";
  isSelected: boolean;
  onClick: () => void;
}

const levelConfig = {
  easy: {
    title: "Easy",
    description: "JavaScript fundamentals and basic syntax",
    icon: Code2,
    color: "from-green-500/20 to-green-500/5",
    borderColor: "border-green-500/50",
    iconColor: "text-green-500",
  },
  medium: {
    title: "Medium",
    description: "ES6+ features, closures, and async patterns",
    icon: Zap,
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/50",
    iconColor: "text-primary",
  },
  hard: {
    title: "Hard",
    description: "Advanced concepts, gotchas, and edge cases",
    icon: Brain,
    color: "from-red-500/20 to-red-500/5",
    borderColor: "border-red-500/50",
    iconColor: "text-red-500",
  },
};

export const LevelCard = ({ level, isSelected, onClick }: LevelCardProps) => {
  const config = levelConfig[level];
  const Icon = config.icon;

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative w-full p-6 rounded-2xl border-2 text-left transition-all duration-300
        bg-gradient-to-br ${config.color}
        ${isSelected 
          ? `${config.borderColor} shadow-[0_0_30px_hsl(var(--primary)/0.3)]` 
          : "border-border hover:border-muted-foreground/30"
        }
      `}
    >
      {isSelected && (
        <motion.div
          layoutId="levelIndicator"
          className="absolute inset-0 rounded-2xl border-2 border-primary"
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      
      <div className="relative z-10 flex flex-col gap-4">
        <div className={`w-12 h-12 rounded-xl bg-card flex items-center justify-center ${config.iconColor}`}>
          <Icon className="w-6 h-6" />
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">{config.title}</h3>
          <p className="text-sm text-muted-foreground">{config.description}</p>
        </div>

        {isSelected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary"
          />
        )}
      </div>
    </motion.button>
  );
};
