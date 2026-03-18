import React, { useState, useEffect } from "react";
import AlarmForm from "./components/AlarmForm";
import AlarmList from "./components/AlarmList";
import "./App.css";

function App() {
  const [alarms, setAlarms] = useState([]);

  // Add Alarm
  const addAlarm = (time, message) => {
    setAlarms([...alarms, { time, message }]);
  };

  // Remove Alarm
  const removeAlarm = (index) => {
    const newAlarms = alarms.filter((_, i) => i !== index);
    setAlarms(newAlarms);
  };

  // Check alarms every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString("en-GB", {
        hour12: false,
      });

      alarms.forEach((alarm, index) => {
        if (alarm.time === now) {
          alert("🔔 " + alarm.message);
          removeAlarm(index);
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [alarms]);

  return (
      <div className="main-bg">
    <div className="glass-container">
      <h1>⏰ Alarm System</h1>
      <AlarmForm addAlarm={addAlarm} />
      <AlarmList alarms={alarms} removeAlarm={removeAlarm} />
    </div>
  </div>

  );
}

export default App;