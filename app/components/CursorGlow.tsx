// CursorGlow.tsx

'use client'

import React, { useState, useEffect } from "react";

const CursorGlow: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: cursorPos.x,
          top: cursorPos.y,
          width: "0",
          height: "0",
          borderRadius: "50%",
          boxShadow: "0 0 100px 100px rgba(255, 255, 255, 0.01)",
          pointerEvents: "none" as React.CSSProperties['pointerEvents'], 
          zIndex: 9999,
        }}
      />
      <div
        style={{
          position: "fixed",
          right: 0,
          bottom: 0,
          width: "0",
          height: "0",
          borderRadius: "50%",
          boxShadow: "0 0 250px 250px rgba(255, 255, 255, 0.05)",
          pointerEvents: "none" as React.CSSProperties['pointerEvents'], 
          zIndex: 9999,
        }}
      />
      <div
        style={{
          position: "fixed",
          left: "50%",
          top: 0,
          transform: "translateX(-50%)",
          width: "0",
          height: "0",
          borderRadius: "50%",
          boxShadow: "0 0 250px 250px rgba(255, 255, 255, 0.05)",
          pointerEvents: "none" as React.CSSProperties['pointerEvents'],
          zIndex: 9999,
        }}
      />
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          transform: "translateX(-50%)",
          width: "0",
          height: "0",
          borderRadius: "50%",
          boxShadow: "0 0 250px 250px rgba(255, 255, 255, 0.05)",
          pointerEvents: "none" as React.CSSProperties['pointerEvents'], 
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default CursorGlow;
