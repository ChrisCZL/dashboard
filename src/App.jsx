import { useState } from 'react';
import Calendar from "./Calendar";
import Checklist from "./Checklist";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <div className={`app ${isDark ? "dark" : ""}`}>
        <button onClick={() => setIsDark(!isDark)}>{isDark ? 'Light Mode' : 'Dark Mode'}</button>
        <h2>Dashboard</h2>
        <Calendar />
        <Checklist />
      </div>
    </>
  );
}