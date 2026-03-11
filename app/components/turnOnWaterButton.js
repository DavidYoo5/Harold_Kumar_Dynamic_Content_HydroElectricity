"use client";

export default function TurnOnWaterButton({ isWaterOn, setIsWaterOn }) {
  return (
    <button
      onClick={() => setIsWaterOn(!isWaterOn)}
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
        cursor: "pointer",
      }}
    >
      {isWaterOn ? "Turn off water" : "Turn on water"}
    </button>
  );
}