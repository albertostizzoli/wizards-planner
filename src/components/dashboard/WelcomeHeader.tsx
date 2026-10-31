import { ChevronDown } from "lucide-react";

function WelcomeHeader() {
  return (
    <header className="welcome-header">

      <div className="welcome-message">
        <h1>Welcome back, Wizard!</h1>

        <p>
          May your tasks be as easy as a Lumos spell...
        </p>
      </div>

      <button className="house-selector">
        🦁 Gryffindor
        <ChevronDown size={18} />
      </button>

    </header>
  );
}

export default WelcomeHeader;