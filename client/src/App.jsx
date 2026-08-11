import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";

function App() {
  return (
    <main className="app-shell">
      <header className="hero-copy">
        <p className="eyebrow">DevOps Playground</p>
        <h1>Simple frontend starter</h1>
        <p className="hero-text">
          A lightweight React setup for basic pages without router complexity.
        </p>
      </header>

      <div className="page-stack">
        <Home />
        <Users />
        <About />
      </div>
    </main>
  );
}

export default App;