import { useState, useEffect } from "react";

export default function Calendar() { // stores all dates where a tast is completed, format "YYYY-MM-DD"
  const [completedDays, setCompletedDays] = useState([]);
  
  const streak = getStreakCount(completedDays);

  // current date info for building the Calendar
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-based (jan = 0)

  // number of days in the current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // marks today as completed and adds it to state if not already present
  const markTodayComplete = () => {
    const dateStr = today.toISOString().split("T")[0]; // Convert today's date into a stable string for comparison/storage
    if (!completedDays.includes(dateStr)) { // Prevent duplicate entries
      setCompletedDays([...completedDays, dateStr]);
    }
  }
    
// Persisting streaks
useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("completedDays"));
  if (saved) setCompletedDays(saved);
}, []);

useEffect(() => {
  localStorage.setItem("completedDays", JSON.stringify(completedDays));
}, [completedDays]);

// streak component
const getStreakCount = (days) => {
  let streak = 0;
  let current = new date();
  
  while (true) {
    const dateStr = current.toISOString().split("T")[0];
    
    if (days.includes(dateStr)) {
      streak++;
      current.setDate(current.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
};




  

  return (
    <>
      <h4 className="streak"> {streak} day streak</h4>
      <button onClick={markTodayComplete}>mark today complete</button>
      <div className="calendar">
      {[...Array(daysInMonth)].map((_, i) => {
        const date = new Date(year, month, i + 1);
        const dateStr = date.toISOString().split("T")[0];
        
        const completed = completedDays.includes(dateStr);
        
        return (
          <div
            key={i}
            className={`day ${completed ? "green" : ""}`}
          >
            {i + 1}
          </div>
        );
      })}
    </div>
  </>
);
};


// check if the streak is alive
function isStreakAlive(completedDays) {
  const today = new Date(); // current date used for streak tracking and calendar rendering
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  
  const t = today.toISOString().split("T")[0];
    const y = yesterday.toISOString().split("T")[0];
    
  return completedDays.includes(t) || completedDays.includes(y);
}

