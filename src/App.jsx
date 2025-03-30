import { Routes, Route, Link } from "react-router-dom";
import FlashcardList from "./pages/FlashcardList.jsx";
import FlashcardForm from "./pages/FlashcardForm.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-6 whitespace-nowrap">Flashcard Learning App</h1>

      {/* Navigation Bar */}
      <nav className="mb-6 flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
        <Link to="/" className="mx-4 text-blue-400 hover:text-blue-600 ">📚 View Flashcards</Link>
        <Link to="/new" className="mx-4 text-green-400 hover:text-green-600">➕ Create Flashcard</Link>
      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<FlashcardList />} />
        <Route path="/new" element={<FlashcardForm />} />
      </Routes>
    </div>
  );
}

export default App;
