import { useState, useEffect } from "react";

export default function ToogleBackground() {
  const [theme, setTheme] = useState("light");

  // Load last theme
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.body.className = saved;
  }, []);

  // Apply theme 
  const toggleTheme = () => {
    const savedTheme = theme === "light" ? "dark" : "light";
    setTheme(savedTheme);
    document.body.className = savedTheme;
    localStorage.setItem("theme", savedTheme);
  };

  return (
    <button 
      className="btn btn-danger ms-3"
      onClick={toggleTheme}
    >
      {theme === "light" ? "Go Dark" : "Illumniate"}
    </button>
  );
}
