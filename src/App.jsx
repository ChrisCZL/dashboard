import Calendar from "./Calendar";
import Checklist from "./Checklist";

export default function App() {
  return (
    <>
      <div className='app'>
      <h2>Dashboard</h2>
      <Calendar />
      <Checklist />
      </div>
    </>
  );
}
