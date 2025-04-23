import React, { useState } from "react";

const photoList = [
  "memo/photo1.jpg",
  "memo/photo2.jpg",
  "memo/photo3.jpg",
  "memo/photo4.jpg",
]; // Add paths for all your photos in /public/memo

const timeline = [
  { date: "2024-01-14", event: "First Date 💑" },
  { date: "2024-02-28", event: "Valentine's Celebration ❤️" },
  { date: "2024-04-23", event: "Built Our Memory Page 🖥️" },
];

const journalEntries = [
  {
    title: "A Day in the Park",
    date: "2024-03-10",
    text: "We laughed, played and just sat under the sky. A perfect Sunday.",
  },
  {
    title: "Movie Night",
    date: "2024-03-30",
    text: "We rewatched our favorite film, sharing popcorn and heartbeats.",
  },
];

const quotes = [
  "“We didn't realize we were making memories, we just knew we were having fun.”",
  "“Together is a beautiful place to be.”",
  "“Every love story is beautiful, but ours is my favorite.”",
];

const Memories = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const nextQuote = () =>
    setQuoteIndex((prev) => (prev + 1) % quotes.length);

  return (
    <div className="text-center p-6 text-white font-sans">
      <h1 className="text-3xl font-semibold mb-6">A Moment To Remember, Forever Ours 💾</h1>

      {/* Gallery */}
      <section className="mb-10">
        <h2 className="text-2xl mb-4">📷 Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photoList.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`memory-${i}`}
              className="rounded-xl shadow-lg object-cover h-48 w-full"
            />
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-10">
        <h2 className="text-2xl mb-4">🕰️ Our Memory Timeline</h2>
        <ul className="text-left max-w-md mx-auto space-y-3">
          {timeline.map((item, i) => (
            <li key={i} className="border-l-4 border-white pl-4">
              <span className="font-semibold">{item.date}</span>: {item.event}
            </li>
          ))}
        </ul>
      </section>

      {/* Journal */}
      <section className="mb-10">
        <h2 className="text-2xl mb-4">📖 Journal Entries</h2>
        <div className="space-y-4 max-w-xl mx-auto">
          {journalEntries.map((entry, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold">{entry.title}</h3>
              <p className="text-sm text-gray-400">{entry.date}</p>
              <p className="mt-2">{entry.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote + Memory Counter */}
      <section className="mb-10">
        <h2 className="text-2xl mb-4">💖 Memory Quote</h2>
        <p className="italic max-w-lg mx-auto text-lg">“{quotes[quoteIndex]}”</p>
        <button
          onClick={nextQuote}
          className="mt-4 px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          Show Another
        </button>
        <p className="mt-6 text-sm text-gray-400">
          You have saved <strong>{photoList.length}</strong> memories so far.
        </p>
      </section>
    </div>
  );
};

export default Memories;
