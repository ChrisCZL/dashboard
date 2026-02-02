export const Stats = ({ streak, completedDays }) => {
  const totalCompletedDays = completedDays.length;
    return (
      <div className="card stats">
        <h4>Stats:</h4>
        <h4>streak: {streak} </h4>
        <h4>completed days: {totalCompletedDays}</h4>
      </div>
    );
};

