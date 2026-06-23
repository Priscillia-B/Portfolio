import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Router>
     <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-200">
        <Navbar />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
