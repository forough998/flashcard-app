import { useState } from "react";

function FlashcardForm({ addFlashcard }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || !answer) return alert("Please fill out both fields!");

    addFlashcard(question, answer);
    setQuestion("");
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-600 p-5 rounded-lg w-80">
      <h2 className="text-lg font-bold mb-4">Add a New Flashcard</h2>
      
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

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md mt-3 hover:bg-blue-600">
        Add Flashcard
      </button>
    </form>
  );
}

export default FlashcardForm;
