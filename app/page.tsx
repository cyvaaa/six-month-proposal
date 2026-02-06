"use client";

import { useState } from "react";

export default function Home() {
  const [noCount, setNoCount] = useState(0);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        background: "linear-gradient(135deg, #fbcfe8, #fecaca)",
      }}
    >
      <img
  src="/IMG_2987.jpg"
  alt="Celina 💕"
  style={{
    width: 250,
    borderRadius: 20,
    marginBottom: 20
  }}
/>
      <h1 style={{ fontSize: "2rem" }}>
        Dear Celina Ha, Will you go on a six months anniversary date with me? 💕
      </h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* YES BUTTON */}
        <button
          style={{
            fontSize: "1.2rem",
            padding: "16px 32px",
            borderRadius: "12px",
            border: "none",
            backgroundColor: "#ef4444",
            color: "white",
            cursor: "pointer",
            transform: `scale(${1 + noCount * 0.2})`,
            transition: "transform 0.2s ease",
          }}
          onClick={() => alert("YAY 💖 HAPPY SIX MONTHS 💖")}
        >
          Yes ❤️
        </button>

        {/* NO BUTTON */}
        <button
          style={{
            fontSize: "1rem",
            padding: "14px 28px",
            borderRadius: "12px",
            border: "2px solid #ef4444",
            backgroundColor: "white",
            cursor: "pointer",
          }}
          onClick={() => setNoCount(noCount + 1)}
        >
          No 😭
        </button>
      </div>

  
    </main>
  );
}
