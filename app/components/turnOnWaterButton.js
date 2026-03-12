"use client";

import Image from "next/image";

export default function TurnOnWaterButton({ isWaterOn, setIsWaterOn }) {
  return (
    <div>
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

<Image src="/images/WaterWheelDescription.svg"
    alt="WaterWheelDescription"
    width={200}
    height={100}
    style={{
      marginBottom: "-70px",
      marginLeft: "800px",
      position: "absolute", 
      right: "180px", 
      bottom: "90px",
      opacity: isWaterOn ? 1 : 0,
      transform: isWaterOn ? "translateY(0px) scale(1)" : "translateY(20px) scale(0)",
      transition: "transform 0.5s ease, opacity 0.5s ease",
      zIndex: 1,
    }}
     />
    </div>
  );
}
