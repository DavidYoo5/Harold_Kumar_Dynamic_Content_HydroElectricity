"use client";

import Image from "next/image";

export default function WaterWheel({ isWaterOn }) {
  return (
    <div >
<div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "fit-content",
    width: "fit-content",}}>       
    
    <Image
      src="/images/Water Wheel Bar.svg"
      alt="Water Wheel Bar"
      width={100}
      height={100} 
      style={{
        marginBottom: "-30px",
      }}/> 

    <Image
      src="/images/Water Wheel.svg"
      alt="Water Wheel"
      width={300}
      height={300}
      style={{
        animation: isWaterOn ? "spin 2s linear infinite" : "none"
      }}
    />
</div>
    </div>
  );
}