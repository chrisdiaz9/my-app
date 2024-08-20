import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Home />
      </div>
    </div>
  );
}

export default App;
