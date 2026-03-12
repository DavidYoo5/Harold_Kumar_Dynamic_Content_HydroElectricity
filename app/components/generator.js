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
            width: "520px",
            height: "220px",
        }}
        >

            {/* top bar */}

            <div style={{
                position: "absolute",
                top: "0px",
                left: "110px",
                width: "18px",
                height: "70px",

            }}
            >

                <Image
                src="/images/Generator Bar.svg"
                alt="Generator Bar"
                fill
                style={{ objectFit: "contain" }}
                />
        </div>


        {/* generator box */}

        <button
        onClick={handleGeneratorClick}
        style={{
            position: "absolute",
            top: "60px",
            left: "0px",
            width: "230px",
            height: "105px",
            border: "none",
            padding: 0,
            backgroundColor: "transparent",
            cursor: "pointer",
        }}
        >
            <Image
                src="/images/Generator.svg"
                alt="Generator"
                fill
                style={{ objectFit: "contain" }}
                />
                </button>

                {/* generator info */}

               
                    <div style={{
                        position: "absolute",
                        top: "25px",
                        left: "255px",
                        width: "250px",
                        height: "140px",
                        border: "none",
                        padding: 0,
                        backgroundColor: "transparent",
                        cursor: "pointer",
                    }}
                    >

                        <Image
                            src="/images/GenInfo.svg"
                            alt="Generator Info"
                            fill
                            style={{ 
                            objectFit: "contain",
                            // marginBottom: "-70px",
                            // marginLeft: "800px",
                            position: "absolute",
                            // right: "600px",
                            // bottom: "310px",
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



