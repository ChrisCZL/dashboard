import { useState, useEffect } from 'react';
import Calendar from "./Calendar";
import Checklist from "./Checklist";
import { Stats } from "./Stats";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [streak, setStreak] = useState(0);
  const [completedDays, setCompletedDays] = useState([]);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
      <div className={`app ${isDark ? "dark" : ""}`}>
        <button onClick={() => setIsDark(!isDark)}>
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
  
        <h2>Dashboard</h2>
  
        <div className="layout">
          <Stats streak={streak} completedDays={completedDays} />
  
          <div className="main">
            <div className="card">
              <Calendar
                completedDays={completedDays}
                setCompletedDays={setCompletedDays}
              />
            </div>
  
            <div className="card">
              <Checklist />
            </div>
          </div>
        </div>
      </div>    
  );
};