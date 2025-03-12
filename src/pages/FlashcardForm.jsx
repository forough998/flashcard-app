import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FlashcardForm() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || !answer) return alert("Please fill out both fields!");

    const storedFlashcards = JSON.parse(localStorage.getItem("flashcards")) || [];
    const newFlashcard = { id: Date.now(), question, answer };
    localStorage.setItem("flashcards", JSON.stringify([...storedFlashcards, newFlashcard]));

    setQuestion("");
    setAnswer("");
    navigate("/"); // ✅ Redirects to Flashcard List after adding
  };

  return (
    <div className="bg-gray-800 p-5 rounded-lg w-80">
      <h2 className="text-lg font-bold mb-4">➕ Add a New Flashcard</h2>
      
      <input 
        type="text" 
        placeholder="Enter Question" 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)} 
        className="w-full p-2 mb-3 border rounded bg-gray-700 text-white"
      />
      
      <input 
        type="text" 
        placeholder="Enter Answer" 
        value={answer} 
        onChange={(e) => setAnswer(e.target.value)} 
        className="w-full p-2 mb-3 border rounded bg-gray-700 text-white"
      />

      <button 
        type="submit" 
        className="w-full bg-green-500 text-white py-2 rounded-md mt-3 hover:bg-green-600"
        onClick={handleSubmit}
      >
        Add Flashcard
      </button>
    </div>
  );
}

export default FlashcardForm;
