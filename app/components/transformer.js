"use client";

import Image from "next/image";
import { useState } from "react";

export default function Transformer() {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log("Transformer clicked! Current state:", !isClicked);
  };


  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>

        <Image
          src="/images/Transformer Bar.svg"
          alt="Transformer Bar"
          width={200}
          height={60}
        />

        <button
          onClick={handleClick}
          style={{
            width: "200px",
            height: "67px",
            border: "none",
            borderRadius: "600px",
            padding: 0,
            backgroundColor: isClicked ? "#63ef00" : " #C3B1E1",
            cursor: "pointer",
             color: "white",
        fontSize: "17px",
        fontWeight: "700",
        zIndex: 1,
          }}
        >
{isClicked ? "Turn Transformer off" : "Turn Transformer on"}
        </button>

<div>
        <Image
          src="/images/WireSmall.svg"
          alt="Meter"
          width={70}
          height={70}
        />

<div>
        <Image
          src="/images/Energy Circle.svg"
          alt="Meter"
          width={20}
          height={20}
          style={{
            position: "absolute",
            marginTop: "-100px",
            marginLeft: "25px",
            opacity: isClicked ? 1 : 0,
            transform: isClicked ? "translateY(80px) scale(1)"
      : "translateY(0px) scale(0)",
            transition: "transform 0.5s ease"
            
          }}
/>
</div>

<Image src="/images/TransformerDescription.svg"
    alt="TransformerDescription"
    width={200}
    height={100}
    style={{
      position: "absolute", 
      right: "220px",
      top: "40px", 
      opacity: isClicked ? 1 : 0,
      transform: isClicked ? "translateY(0px) scale(1)" : "translateY(20px) scale(0)",
      transition: "transform 0.5s ease, opacity 0.5s ease",
      zIndex: 1,
    }}
     />

</div>
      </div>

    </div>
  );
}