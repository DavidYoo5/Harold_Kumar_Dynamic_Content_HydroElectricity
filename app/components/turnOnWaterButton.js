"use client";

export default function TurnOnWaterButton({ isWaterOn, setIsWaterOn }) {
  return (
    <button
      style={{
        position: "absolute",
        left: "30px",
        bottom: "18px",
        width: "200px",
        padding: "14px 18px",
        border: "none",
        borderRadius: "26px",
        backgroundColor: "#63ef00",
        color: "white",
        fontSize: "17px",
        fontWeight: "700",
        letterSpacing: "0.4px",
        cursor: "pointer",
      }}
      onClick={() => setIsWaterOn(!isWaterOn)}
    >
      {isWaterOn ? "Turn off water" : "Turn on water"}
    </button>
  );
}