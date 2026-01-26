import { useState, useEffect } from 'react';
import Calendar from "./Calendar";
import Checklist from "./Checklist";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  
  return (
    <>
      <div className={`app ${isDark ? "dark" : ""}`}>
        <button onClick={() => setIsDark(!isDark)}>{isDark ? 'Light Mode' : 'Dark Mode'}</button>
        <h2>Dashboard</h2>
        
        <div className="card">
        <Calendar />
        </div>
        
        <div className="card">
        <Checklist />
        </div>
        
      </div>
    </>
  );
}