import { motion } from "framer-motion";

interface QuestionSetSelectorProps {
  selectedSet: 10 | 20 | 30;
  onSelect: (set: 10 | 20 | 30) => void;
}

const sets = [10, 20, 30] as const;

export const QuestionSetSelector = ({ selectedSet, onSelect }: QuestionSetSelectorProps) => {
  return (
    <div className="flex gap-4 justify-center">
      {sets.map((set) => (
        <motion.button
          key={set}
          onClick={() => onSelect(set)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300
            ${selectedSet === set 
              ? "bg-primary text-primary-foreground shadow-[0_0_25px_hsl(var(--primary)/0.4)]" 
              : "bg-card border-2 border-border text-foreground hover:border-primary/50"
            }
          `}
        >
          {selectedSet === set && (
            <motion.div
              layoutId="setIndicator"
              className="absolute inset-0 rounded-xl bg-primary"
              initial={false}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{set} Questions</span>
        </motion.button>
      ))}
    </div>
  );
};
