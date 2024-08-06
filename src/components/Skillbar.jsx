import React from "react";

export default function Skillbar(props) {
  const { name, percentage, color } = props.skill;

  // Function to convert hex color to rgba with the given opacity
  const hexToRgba = (hex, opacity) => {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  // Calculate opacity based on the percentage
  const opacity = percentage / 100;

  return (
    <div className="skillbar-container">
      <div className="skillbar-name">{name}</div>
      <div className="skillbar">
        <div
          className="skillbar-percentage"
          style={{ width: `${percentage}%`, backgroundColor: hexToRgba(color, opacity) }}
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
}
