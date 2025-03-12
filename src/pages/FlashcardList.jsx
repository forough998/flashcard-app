import { useState, useEffect } from "react";
import Flashcard from "../components/Flashcard";

function FlashcardList() {
  const [flashcards, setFlashcards] = useState(() => {
    const storedFlashcards = localStorage.getItem("flashcards");
    return storedFlashcards ? JSON.parse(storedFlashcards) : [];
  });

  useEffect(() => {
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
  }, [flashcards]);

  const deleteFlashcard = (id) => {
    setFlashcards(flashcards.filter((card) => card.id !== id));
  };

  const editFlashcard = (id, newQuestion, newAnswer) => {
    const updatedFlashcards = flashcards.map((card) =>
      card.id === id ? { ...card, question: newQuestion, answer: newAnswer } : card
    );
    setFlashcards(updatedFlashcards);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📚 Your Flashcards</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {flashcards.length === 0 ? (
          <p className="text-gray-400">No flashcards yet. Create one!</p>
        ) : (
          flashcards.map((card) => (
            <Flashcard 
              key={card.id} 
              id={card.id} // ✅ Pass the ID
              question={card.question} 
              answer={card.answer} 
              onDelete={() => deleteFlashcard(card.id)}
              onEdit={editFlashcard} // ✅ Pass edit function
            />
          ))
        )}
      </div>
    </div>
  );
}

export default FlashcardList;
