import React from "react";

function AlarmList({ alarms, removeAlarm }) {
  return (
    <div className="list-container">
  <h2>📋 Scheduled Alarms</h2>
  <ul>
    {alarms.map((alarm, index) => (
      <li className="glass-item" key={index}>
        {alarm.time} - {alarm.message}
        <button className="delete-btn" onClick={() => removeAlarm(index)}>
          ❌
        </button>
      </li>
    ))}
  </ul>
</div>
  );
}

export default AlarmList;