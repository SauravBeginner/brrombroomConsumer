import React from "react";

const Loader = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div
        className="loader"
        style={{
          width: "40px",
          height: "40px",
          color: "#f03355",
          background: `
            conic-gradient(from -45deg at top 20px left 50%, #0000, currentColor 1deg 90deg, #0000 91deg),
            conic-gradient(from 45deg at right 20px top 50%, #0000, currentColor 1deg 90deg, #0000 91deg),
            conic-gradient(from 135deg at bottom 20px left 50%, #0000, currentColor 1deg 90deg, #0000 91deg),
            conic-gradient(from -135deg at left 20px top 50%, #0000, currentColor 1deg 90deg, #0000 91deg)
          `,
          animation: "l4 1.5s infinite cubic-bezier(0.3, 1, 0, 1)",
        }}
      />
      <style>
        {`
          @keyframes l4 {
            50%  { width: 60px; height: 60px; transform: rotate(180deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
