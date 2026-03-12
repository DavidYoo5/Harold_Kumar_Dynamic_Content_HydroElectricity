"use client";

import Image from "next/image";

export default function WaterFall({ isWaterOn }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "250px",     
        right: "80px",
        width: "220px",
        height: "420px",   
        pointerEvents: "none",
      }}
    >

        {/* spout formatting */}
      <div
        style={{
          position: "absolute",
          top: "-154px",
          right: "-95px",
          width: "160px",
          height: "50px",
          zIndex: 2,
        }}
      >
        <Image
          src="/images/Spout.svg"
          alt="Spout"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
 
      {/* waterfall formatting  */}

      <div
        style={{
          position: "absolute",
          top: "-121px",     
          right: "50px",    
          width: "90px",
          height: "422px",  
          opacity: isWaterOn ? 1 : 0,
          transform: isWaterOn ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "top",
          transition: "transform 0.8s ease, opacity 0.2s ease",
          zIndex: 1,
        }}
      >
        <Image
          src="/images/Water.svg"
          alt="Waterfall"
          fill
          style={{ objectFit: "fill" }}
        />
      </div>
    </div>
  );
}