import { motion } from "framer-motion";
import { Trophy, RotateCcw, Home, Sparkles, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  level: string;
  onRestart: () => void;
  onHome: () => void;
}

export const QuizResults = ({
  score,
  totalQuestions,
  level,
  onRestart,
  onHome,
}: QuizResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getGrade = () => {
    if (percentage >= 90) return { grade: "A+", message: "Outstanding! You're a JavaScript master!", icon: Trophy };
    if (percentage >= 80) return { grade: "A", message: "Excellent work! Almost perfect!", icon: Award };
    if (percentage >= 70) return { grade: "B", message: "Great job! Keep learning!", icon: Target };
    if (percentage >= 60) return { grade: "C", message: "Good effort! Room for improvement.", icon: Sparkles };
    return { grade: "D", message: "Keep practicing! You'll get better!", icon: Target };
  };

  const { grade, message, icon: GradeIcon } = getGrade();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-lg mx-auto text-center"
    >
      {/* Trophy Animation */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
        className="mb-8"
      >
        <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
          <GradeIcon className="w-12 h-12 text-primary" />
        </div>
      </motion.div>

      {/* Grade */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-6"
      >
        <h1 className="text-6xl font-bold text-gradient mb-2">{grade}</h1>
        <p className="text-lg text-muted-foreground">{message}</p>
      </motion.div>

      {/* Score Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-card border border-border rounded-2xl p-6 mb-8"
      >
        <div className="flex justify-center items-center gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-foreground">{score}</p>
            <p className="text-sm text-muted-foreground">Correct</p>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-4xl font-bold text-foreground">{totalQuestions}</p>
            <p className="text-sm text-muted-foreground">Total</p>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">{percentage}%</p>
            <p className="text-sm text-muted-foreground">Score</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Level: <span className="text-foreground font-medium capitalize">{level}</span>
          </p>
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button
          variant="outline"
          size="lg"
          onClick={onHome}
          className="flex-1"
        >
          <Home className="w-5 h-5" />
          Home
        </Button>
        <Button
          variant="hero"
          size="lg"
          onClick={onRestart}
          className="flex-1"
        >
          <RotateCcw className="w-5 h-5" />
          Try Again
        </Button>
      </motion.div>
    </motion.div>
  );
};
