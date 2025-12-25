import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LevelCard } from "@/components/LevelCard";
import { QuestionSetSelector } from "@/components/QuestionSetSelector";
import { QuizQuestion } from "@/components/QuizQuestion";
import { QuizResults } from "@/components/QuizResults";
import { Button } from "@/components/ui/button";
import { getQuestions, Question } from "@/data/quizQuestions";

type Level = "easy" | "medium" | "hard";
type QuestionSet = 10 | 20 | 30;
type GameState = "home" | "quiz" | "results";

const Quiz = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level>("easy");
  const [selectedSet, setSelectedSet] = useState<QuestionSet>(10);
  const [gameState, setGameState] = useState<GameState>("home");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleStartQuiz = () => {
    const quizQuestions = getQuestions(selectedLevel, selectedSet);
    setQuestions(quizQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameState("quiz");
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setGameState("results");
    }
  };

  const handleRestart = () => {
    handleStartQuiz();
  };

  const handleHome = () => {
    setGameState("home");
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
        <AnimatePresence mode="wait">
          {gameState === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-5xl mx-auto"
            >
              {/* Hero Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                  JavaScript
                  <span className="text-gradient"> Quiz</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  Challenge yourself with carefully crafted questions from basics to advanced concepts.
                  Learn from detailed explanations after every answer.
                </p>
              </motion.div>

              {/* Level Selection */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-xl font-bold text-foreground text-center mb-6">
                  Select Difficulty
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {(["easy", "medium", "hard"] as Level[]).map((level) => (
                    <LevelCard
                      key={level}
                      level={level}
                      isSelected={selectedLevel === level}
                      onClick={() => setSelectedLevel(level)}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Question Set Selection */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-xl font-bold text-foreground text-center mb-6">
                  Number of Questions
                </h2>
                <QuestionSetSelector
                  selectedSet={selectedSet}
                  onSelect={setSelectedSet}
                />
              </motion.div>

              {/* Start Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <Button
                  variant="hero"
                  size="xl"
                  onClick={handleStartQuiz}
                  className="w-full sm:w-auto sm:min-w-[240px] justify-center"
                >
                  <Play className="w-6 h-6" />
                  Start Quiz
                </Button>

                <p className="mt-4 text-sm text-muted-foreground">
                  {selectedSet} questions • {selectedLevel} level
                </p>
              </motion.div>
            </motion.div>
          )}

          {gameState === "quiz" && questions.length > 0 && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pt-8"
            >
              <QuizQuestion
                question={questions[currentQuestionIndex]}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={questions.length}
                onAnswer={handleAnswer}
                onNext={handleNextQuestion}
              />
            </motion.div>
          )}

          {gameState === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pt-8"
            >
              <QuizResults
                score={score}
                totalQuestions={questions.length}
                level={selectedLevel}
                onRestart={handleRestart}
                onHome={handleHome}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;

