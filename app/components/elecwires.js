"use client";

import Image from "next/image";
import { useState } from "react";

export default function Wires({isMeterOn}) {


    return (
        <div className="wires">
            <Image src="/images/Energy Wire.svg" 
            alt="Wires" 
            width={400} 
            height={400} 
            style={{
                position: "absolute",
                zIndex: 0,
                right: "415px",
                top: "-10px",
            }}/>


        <Image
        src="/images/Energy Circle.svg"
        alt="Electricity"
        width={20}
        height={20}
        style={{
          position: "absolute",
          top: "340px",
          right: "540px",
          zIndex: 2,
          opacity: isMeterOn ? 1 : 0,
          animation: isMeterOn ? "circleFlow 2s linear infinite" : "none",
        }}
      />

      <style jsx>{`
        @keyframes circleFlow {
          0% {
          
            transform: translate(0px, 0px);
            scale: 0;
          }
          33% {
            transform: translate(0px, 40px); 
          }
          66% {
            transform: translate(-130px, 40px); 
          }
          100% {
            transform: translate(-130px, -380px);
            scale: 1;
          }
        }
      `}</style>
    </div>
  );
}
