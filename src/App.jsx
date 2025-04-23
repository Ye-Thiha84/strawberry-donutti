import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PTracker from "./pages/PTracker";
import Memories from "./pages/Memories";
import Home from "./pages/Home"; // <- New import

import "./css/border.css";
import "./css/margin.css";

function App() {
  const [time, setTime] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [nextAnniversaryCountdown, setNextAnniversaryCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const anniversary = new Date("2021-07-05T00:00:00");

    const updateTime = () => {
      const now = new Date();
      let years = now.getFullYear() - anniversary.getFullYear();
      let months = now.getMonth() - anniversary.getMonth();
      let days = now.getDate() - anniversary.getDate();

      if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }

      if (months < 0) {
        months += 12;
        years--;
      }

      const totalSeconds = Math.floor((now - anniversary) / 1000);
      const seconds = totalSeconds % 60;
      const totalMinutes = Math.floor(totalSeconds / 60);
      const minutes = totalMinutes % 60;
      const totalHours = Math.floor(totalMinutes / 60);
      const hours = totalHours % 24;

      setTime({ years, months, days, hours, minutes, seconds });

      let nextAnniversary = new Date(now.getFullYear(), 6, 5);
      if (now > nextAnniversary) {
        nextAnniversary = new Date(now.getFullYear() + 1, 6, 5);
      }

      const diff = nextAnniversary - now;
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setNextAnniversaryCountdown({ days: d, hours: h, minutes: m, seconds: s });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans pb-16">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home time={time} />} />
          <Route path="/p-tracker" element={<PTracker />} />
          <Route path="/memories" element={<Memories />} />
        </Routes>
        <Footer nextAnniversaryCountdown={nextAnniversaryCountdown} />
      </div>
    </Router>
  );
}

export default App;
