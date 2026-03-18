import React, { useState } from "react";

function AlarmForm({ addAlarm }) {
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!time || !message) {
      alert("Enter all fields");
      return;
    }
    addAlarm(time, message);
    setTime("");
    setMessage("");
  };

  return (
    <div className="form-container">
  <input
    className="glass-input"
    type="time"
    step="1"
    value={time}
    onChange={(e) => setTime(e.target.value)}
  />
  <br /><br />

  <input
    className="glass-input"
    type="text"
    placeholder="Enter message"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
  />
  <br /><br />

  <button className="glass-btn" onClick={handleSubmit}>
    Add Alarm
  </button>
</div>
  );
}

export default AlarmForm;