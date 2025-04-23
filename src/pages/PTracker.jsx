import React, { useState, useEffect } from "react";
import "../css/PTracker.css";
import { db } from "../firebase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const cycleLength = 28;

const PTracker = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  useEffect(() => {
    if (history.length > 0) {
      const last = new Date(history[0].startDate);
      const now = new Date();
      const days = Math.floor((now - last) / (1000 * 60 * 60 * 24));
      if (days >= 26 && days <= 28) {
        alert("Reminder: Your next period is likely to start soon.");
      }
      if (days >= 10 && days <= 17) {
        alert("Fertile window is active 🌸");
      }
    }
  }, [history]);

  const fetchHistory = async () => {
    const q = query(collection(db, "periods"), orderBy("startDate", "desc"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setHistory(data);
  };

  const savePeriod = async () => {
    if (!startDate || !endDate) return;
    await addDoc(collection(db, "periods"), {
      startDate,
      endDate,
      savedAt: new Date().toISOString(),
    });
    setStartDate("");
    setEndDate("");
    fetchHistory();
  };

  const getStatus = (startStr, endStr) => {
    const start = new Date(startStr);
    const end = new Date(endStr);
    const today = new Date();
    const daysSince = Math.floor((today - start) / (1000 * 60 * 60 * 24));
    const daysUntilNext = cycleLength - daysSince;

    let status = "Normal cycle day";
    if (daysSince >= 10 && daysSince <= 17) status = "Fertile Window 🌸";
    if (daysSince === 0) status = "Period started 🩸";
    if (daysSince > cycleLength) status = "Cycle might have restarted";

    const nextCycle = new Date(start);
    nextCycle.setDate(start.getDate() + cycleLength);

    const duration = Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;

    return {
      daysSince,
      daysUntilNext,
      status,
      nextCycle: nextCycle.toDateString(),
      duration,
    };
  };

  const currentInfo =
    startDate && endDate ? getStatus(startDate, endDate) : null;

  return (
    <div className="tracker-container">
      <h2 className="tracker-title">Period Tracker</h2>

      <div className="tracker-dates">
        <div className="calendar-input">
  <label>Period Start Date:</label>
  <DatePicker
    selected={startDate ? new Date(startDate) : null}
    onChange={(date) => setStartDate(date.toISOString().split("T")[0])}
    dateFormat="yyyy-MM-dd"
    placeholderText="Select start date"
    className="tracker-datepicker"
    calendarClassName="dark-calendar"
  />
</div>

<div className="calendar-input">
  <label>Period End Date:</label>
  <DatePicker
    selected={endDate ? new Date(endDate) : null}
    onChange={(date) => setEndDate(date.toISOString().split("T")[0])}
    dateFormat="yyyy-MM-dd"
    placeholderText="Select end date"
    className="tracker-datepicker"
    calendarClassName="dark-calendar"
  />
</div>

      </div>

      <button onClick={savePeriod} className="tracker-button">
        Save Period
      </button>

      {currentInfo && (
        <div className="tracker-summary">
          <div className="box">
            <span>{currentInfo.daysSince} days</span>
            <small>Since Last Period</small>
          </div>
          <div className="box">
            <span>{currentInfo.daysUntilNext}</span>
            <small>Days Until Next</small>
          </div>
          <div className="box full">
            <span>{currentInfo.status}</span>
            <small>Next: {currentInfo.nextCycle}</small>
          </div>
        </div>
      )}

      <h3 className="tracker-subtitle">Cycle History</h3>
      <ul className="tracker-history fancy-history">
        {history.map((entry) => {
          const info = getStatus(entry.startDate, entry.endDate);
          return (
            <li key={entry.id}>
              <div className="history-card">
                <div className="history-dates">
                  {new Date(entry.startDate).toDateString()} →{" "}
                  {new Date(entry.endDate).toDateString()}
                </div>
                <div className="history-details">
                  <span>{info.status}</span>
                  <span>{info.duration} days</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <h3 className="tracker-subtitle">Cycle Length Chart</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={history
            .map((entry, i, arr) => {
              const current = new Date(entry.startDate);
              const prev = arr[i + 1]
                ? new Date(arr[i + 1].startDate)
                : null;
              return {
                date: current.toDateString(),
                cycleLength: prev
                  ? Math.floor((current - prev) / (1000 * 60 * 60 * 24))
                  : null,
              };
            })
            .filter((d) => d.cycleLength !== null)}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="cycleLength"
            stroke="#ffffff"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PTracker;
