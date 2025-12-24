import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Check, X, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Question } from "@/data/quizQuestions";

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

export const QuizQuestion = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onNext,
}: QuizQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleOptionClick = (index: number) => {
    if (hasAnswered) return;
    
    setSelectedOption(index);
    setHasAnswered(true);
    setShowExplanation(true);
    onAnswer(index === question.correctAnswer);
  };

  const getOptionVariant = (index: number) => {
    if (!hasAnswered) {
      return selectedOption === index ? "optionSelected" : "option";
    }
    if (index === question.correctAnswer) return "optionCorrect";
    if (index === selectedOption && index !== question.correctAnswer) return "optionIncorrect";
    return "option";
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    setHasAnswered(false);
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-3xl mx-auto"
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-sm font-medium text-primary">
            {Math.round((questionNumber / totalQuestions) * 100)}%
          </span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-card border border-border rounded-2xl p-8 mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
          {question.question}
        </h2>

        {question.code && (
          <div className="mb-6 p-4 bg-background rounded-xl border border-border overflow-x-auto">
            <pre className="text-sm md:text-base font-mono text-foreground">
              <code>{question.code}</code>
            </pre>
          </div>
        )}

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant={getOptionVariant(index)}
                size="full"
                onClick={() => handleOptionClick(index)}
                disabled={hasAnswered && index !== selectedOption && index !== question.correctAnswer}
                className="relative"
              >
                <span className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center font-mono text-sm shrink-0">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-left font-mono text-sm md:text-base">{option}</span>
                </span>
                
                {hasAnswered && index === question.correctAnswer && (
                  <Check className="w-5 h-5 text-success ml-auto shrink-0" />
                )}
                {hasAnswered && index === selectedOption && index !== question.correctAnswer && (
                  <X className="w-5 h-5 text-destructive ml-auto shrink-0" />
                )}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Explanation */}
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-card border border-primary/30 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Explanation</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {question.explanation}
              </p>
            </div>

            <Button
              variant="hero"
              size="lg"
              onClick={handleNext}
              className="w-full"
            >
              {questionNumber === totalQuestions ? "See Results" : "Next Question"}
              <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
