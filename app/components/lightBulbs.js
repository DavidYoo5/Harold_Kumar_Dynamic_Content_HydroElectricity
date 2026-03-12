"use client";

import Image from "next/image";
import { useState, useRef } from "react";


export default function Lightbulbs() {
    const [showBulbInfo, setShowBulbInfo] = useState(false);
    const [powerOn, setPowerOn] = useState(false);
    const [bulb1On, setBulb1On] = useState(false);
    const [bulb2On, setBulb2On] = useState(false);
    const [bulb3On, setBulb3On] = useState(false);

    const timeout1Ref = useRef(null);
    const timeout2Ref = useRef(null);


    const handleLightClick = () => {
        if (!powerOn) {
            setPowerOn(true);

            setBulb1On(true);

            setShowBulbInfo(true);

            timeout1Ref.current = setTimeout(() => {
                setBulb2On(true);
            }, 500);

            timeout2Ref.current = setTimeout(() => {
                setBulb3On(true);
            }, 1000);
        } else {
            setPowerOn(false);
            clearTimeout(timeout1Ref.current);
            clearTimeout(timeout2Ref.current);
            setBulb1On(false);
            setBulb2On(false);
            setBulb3On(false);
            setShowBulbInfo(false);
        }
    };

    return (
        <div style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            width: "500px",
            height: "350px",
        }}
        >
            {/* lighting button */}

            <button
                onClick={handleLightClick}
                style={{
                    position: "absolute",
                    top: "40px",
                    left: "10px",
                    width: "80px",
                    height: "90px",
                    backgroundColor: "transparent",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                 }}
                 >
                    <Image
                        src="/images/Lightning.svg"
                        alt="Lightning button"
                        fill
                        style={{ objectFit: "contain"}}
                    />

                 </button>

                 {/* light bulb info */}

                 <div style={{
                    position: "absolute",
                    top: "-20px",
                    left: "420px",
                    width: "350px",
                    height: "200px",
                    opacity: showBulbInfo ? 1 : 0,
                 }}
                 >
                    <Image
                        src="/images/BulbInfo.svg"
                        alt="Light Bulb Info"
                        fill
                        style={{ 
                            objectFit: "contain", 
                            opacity: showBulbInfo ? 1 : 0,
                            transform: showBulbInfo ? "translateY(0px) scale(1)" : "translateY(20px) scale(0)",
                            transition: "transform 0.5s ease, opacity 0.5s ease",
                            zIndex: 1,
                        }}
                    />

                 </div>

            

            

            {/* light bulbs */}

            {/* light bulb 1 */}

            <div 
            style={{
                position: "absolute",
                top: "-35px",
                left: "100px",
                width: "55px",
                height: "300px",  
            }}
            >

                <Image
                    src={bulb1On ? "/images/Light Bulb On.svg" : "/images/Light Bulb Off.svg"}
                    alt="Light Bulb 1"
                    fill
                    style={{ 
                        objectFit: "contain",
                        transform: bulb1On ? "scale(1.9)" : "scale(1)",
                        top: "10px",
                        transformOrigin: "center",
                    }}
                    
                />

            </div>

            {/* light bulb 2 */}

            <div 
            style={{
                position: "absolute",
                top: "-35px",
                left: "225px",
                width: "55px",
                height: "300px",  
            }}
            >
                <Image
                    src={bulb2On ? "/images/Light Bulb On.svg" : "/images/Light Bulb Off.svg"}
                    alt="Light Bulb 2"
                    fill
                    style={{ objectFit: "fill",
                        transform: bulb2On ? "scale(1.9)" : "scale(1)",
                        top: "10px",
                        transformOrigin: "center",
                    }}
                />
                </div>

            {/* light bulb 3 */}

            <div 
            style={{
                position: "absolute",
                top: "-35px",
                left: "350px",
                width: "55px",
                height: "300px",  
            }}
            >
                <Image
                    src={bulb3On ? "/images/Light Bulb On.svg" : "/images/Light Bulb Off.svg"}
                    alt="Light Bulb 3"
                    fill
                    style={{ objectFit: "fill",
                        transform: bulb3On ? "scale(1.9)" : "scale(1)",
                        top: "10px",
                        transformOrigin: "center",
                    }}
                />
                </div>
            </div>

    
    );
}