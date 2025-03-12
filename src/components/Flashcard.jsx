import { useState } from "react";
import { motion } from "framer-motion";

function Flashcard({ question, answer, onDelete, onEdit }) {
  const [flipped, setFlipped] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newQuestion, setNewQuestion] = useState(question);
  const [newAnswer, setNewAnswer] = useState(answer);

  const handleSave = () => {
    onEdit(newQuestion, newAnswer);
    setIsEditing(false);
  };

  return (
    <motion.div 
      className="relative w-64 h-40 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
    >
      {isEditing ? (
        <div className="w-full h-full bg-gray-700 p-5 rounded-lg shadow-lg flex flex-col justify-between">
          <input 
            type="text" 
            value={newQuestion} 
            onChange={(e) => setNewQuestion(e.target.value)} 
            className="w-full p-2 border rounded text-black"
          />
          <input 
            type="text" 
            value={newAnswer} 
            onChange={(e) => setNewAnswer(e.target.value)} 
            className="w-full p-2 border rounded text-black"
          />
          <button 
            className="w-full bg-green-500 text-white py-1 mt-2 rounded hover:bg-green-600"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      ) : (
        <motion.div 
          className={`w-full h-full flex items-center justify-center text-white font-bold text-lg 
                      rounded-lg shadow-lg p-5 absolute top-0 left-0
                      ${flipped ? "bg-blue-600" : "bg-gray-800"}`}
        >
          {flipped ? answer : question}
        </motion.div>
      )}

      {!isEditing && (
        <div className="absolute top-2 right-2 flex gap-2">
          <button 
            className="bg-yellow-500 text-white px-2 py-1 rounded"
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
            }}
          >
            ✏️
          </button>
          <button 
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            ✖
          </button>
        </div>
      )}
    </motion.div>
  );
}

export default Flashcard;
