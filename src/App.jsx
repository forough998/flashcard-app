import { useState, useEffect } from "react";
import Flashcard from "./components/Flashcard";
import FlashcardForm from "./components/FlashcardForm";

function App() {
  const [flashcards, setFlashcards] = useState(() => {
    const storedFlashcards = localStorage.getItem("flashcards");
    return storedFlashcards ? JSON.parse(storedFlashcards) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
  }, [flashcards]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const addFlashcard = (question, answer) => {
    const newFlashcard = { id: Date.now(), question, answer };
    setFlashcards((prev) => [...prev, newFlashcard]);
  };

  const deleteFlashcard = (id) => {
    setFlashcards((prev) => prev.filter((card) => card.id !== id));
  };

  const editFlashcard = (id, newQuestion, newAnswer) => {
    setFlashcards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, question: newQuestion, answer: newAnswer } : card
      )
    );
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} flex flex-col items-center p-10`}>
      <h1 className="text-3xl font-bold mb-6">Flashcard Learning App</h1>

      {/* Dark Mode Toggle */}
      <button 
        className="mb-4 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Flashcard Form */}
      <FlashcardForm addFlashcard={addFlashcard} />

      {/* Flashcard List */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        {flashcards.map((card) => (
          <Flashcard 
            key={card.id} 
            question={card.question} 
            answer={card.answer} 
            onDelete={() => deleteFlashcard(card.id)} 
            onEdit={(newQ, newA) => editFlashcard(card.id, newQ, newA)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
