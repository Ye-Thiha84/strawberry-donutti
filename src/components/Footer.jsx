import React from "react";

function Footer({ nextAnniversaryCountdown }) {
  return (
    <footer className="bg-black border-t border-cyan-500/30 text-cyan-400 text-center p-2 font-mono">
      <div className="flex flex-col items-center justify-center">
        <p className="text-xs md:text-sm">Countdown to Next Anniversary</p>
        <p className="text-base md:text-lg font-bold">
          {nextAnniversaryCountdown.days} days{" "}
          {String(nextAnniversaryCountdown.hours).padStart(2, "0")}h{" "}
          {String(nextAnniversaryCountdown.minutes).padStart(2, "0")}m{" "}
          {String(nextAnniversaryCountdown.seconds).padStart(2, "0")}s
        </p>
      </div>
    </footer>
  );
}

export default Footer;