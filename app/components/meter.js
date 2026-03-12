"use client"

import Image from "next/image";
import { useState } from "react";

export default function Meter({isClicked, handleClick}) {
    
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>


 <div style={{zIndex: 2}}>              
        <button
          onClick={() => handleClick(!isClicked)}
          style={{
            width: "100px",
            height: "50px",
            border: "none",
            borderRadius: "600px",
            padding: 0,
            backgroundColor: isClicked ? "#63ef00" : "#FCC01E",
            cursor: "pointer",
            color: "white",
            fontSize: "9px",
            fontWeight: "700",
            zIndex: 1,
            marginTop: "-15px",
          }}
        >
{isClicked ? "Turn Meter off" : "Turn Meter on"}
        </button>
            </div>
</div>



<Image src="/images/MeterDescription.svg"
    alt="TransformerDescription"
    width={200}
    height={100}
    style={{
      marginBottom: "-70px",
      marginLeft: "800px",
      position: "absolute",
        right: "600px",
        bottom: "310px",
      opacity: isClicked ? 1 : 0,
      transform: isClicked ? "translateY(0px) scale(1)" : "translateY(20px) scale(0)",
      transition: "transform 0.5s ease, opacity 0.5s ease",
      zIndex: 2,
    }}
     />

        </div>
    );
}