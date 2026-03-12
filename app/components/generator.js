"use client";

import Image from "next/image";
import { useEffect, useState } from "react";


export default function Generator({ }) {
    const [showInfo, setShowInfo] = useState(false);


    const handleGeneratorClick = () => {
        setShowInfo((prev) => !prev);
    };




    useEffect(() => {
        console.log("Generator info visible:", showInfo);
      }, [showInfo]);

    return (

        <div style={{
            position: "relative",
            width: "230px",
            height: "155px",
        }}
        >

            {/* top bar */}

        

                <Image
                src="/images/Generator Bar.svg"
                alt="Generator Bar"
                width={230}
                height={60}
                style={{ objectFit: "contain" }}
                />


        {/* generator box */}

        <button
        onClick={handleGeneratorClick}
        style={{
            position: "absolute",
            top: "50px",
            left: "0px",
            width: "230px",
            height: "105px",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            color: "white",
            fontSize: "22px",
            fontWeight: "700",
             backgroundColor: showInfo ? "#63ef00" : "gray",
        }}
        >
            {showInfo ? "Turn off Generator" : "Turn on Generator"}
                </button>

                {/* generator info */}

               
                    <div style={{
                        position: "absolute",
                        top: "20px",
                        right: "265px",
                        width: "300px",
                        height: "140px",
                        border: "none",
                        padding: 0,
                        backgroundColor: "transparent",
                    }}
                    >

                        <Image
                            src="/images/GenInfo.svg"
                            alt="Generator Info"
                            fill
                            style={{ 
                            objectFit: "contain",
                            position: "absolute",
                            opacity: showInfo ? 1 : 0,
                            transform: showInfo ? "translateY(0px) scale(1)" : "translateY(20px) scale(0)",
                            transition: "transform 0.5s ease, opacity 0.5s ease",
                            zIndex: 1,
                            }}
                            />
                            </div>
                         

                            </div>

    );
}



