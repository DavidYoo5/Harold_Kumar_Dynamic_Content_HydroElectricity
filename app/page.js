import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>

          {/* header section fr nav bar, logo, website header, and BC flag */}


          <div className={styles.headerSection}>
            <div className={styles.headerContent}>



              <div className={styles.bcFlag}>
                <Image src="/images/bc flag.png" alt="BC Flag" width={74} height={42}/>
              </div>
          



              <div className={styles.hydroEdBanner}>

                <div className={styles.hydroEdLogo}>
                  <Image src="/images/hydro-ed-logo.png" alt="Hydro-Ed Logo" width={131} height={81}/>
                </div>

                <div className={styles.hydroEdTitle}> <h1>HYDRO-ED</h1></div>

              </div>



              <nav className={styles.navBar}>

                <a href="#game">GAME</a>
                <a href="#instructions">INSTRUCTION</a>
                <a href="#education">EDUCATION</a>
                <a href="#about-us">ABOUT US</a>

              </nav>

            </div>



          </div>

          {/* header section fr nav bar, logo, website header, and BC flag */}

          {/* welcome image below header */}

          <div className={styles.welcomeSection}>


            <div className={styles.damImage}>

              <Image src="/images/welcome-image.png" alt="Welcome" width={1728} height={300}/>
            </div>
          </div>








          {/* section for the interactive game  */}

          <div className={styles.gameSection}>

            <div className={styles.gameHeaderSection}>

              <div className={styles.gameHeader}> <h2>GAME</h2>
              
              </div>

            </div>




            <div className={styles.gameContentSection}>

              <div className={styles.waterWheel}> </div>



                <button className={styles.waterButton}>

                  TURN ON WATER

                </button>

            </div>

          </div>

          {/* section for the interactive game  */}









          {/* instructions section  */}

          <div className={styles.instructionsSection}>
            
            <div className={styles.instructionsHeader}>

              <div className={styles.instructionsTitle}>

                <h2>INSTRUCTIONS</h2>

              </div>

            </div>
            

            <div className={styles.instructionsContent}>

              <div className={styles.instructionsText}>

                <p>1. Press the green button to turn on the water.</p>

                <p>2. As water wheel begins to turn the generator to generate energy, Press the generator.</p>

                <p>3. As energy generates from the turning of the waterwheel, Press the transformer to convert the energy to volts.</p>

                <p>4. As volts reaches the meter, Press the meter to track and distribute the electricity to consumers from the power grid.</p>

              </div>


              <div className={styles.instructionsImage}>

                <img src="/images/dam-4k.png" alt="Dam" />

              </div>

            </div>



          </div>

          {/* instructions section  */}





          {/* education section  */}

          <div className="education-section">



            <div className="education-header">

              <h2>EDUCATION</h2>
            </div>



            <div className="education-visuals">

              <div className="bc-hydro-logo"></div>


              <div className="education-images">

                <img></img>
                <img></img>
                <img></img>

              </div>


            </div>


            <div className="education-content">

              <div className="fun-facts">

                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>


              </div>


            </div>



          </div>

          {/* education section  */}












            {/* about us section */}

          <div className="about-us">

            <div className="about-header">

              <div id="about-us-title"> 
                
                <h1>ABOUT US</h1>
              
              </div>


            </div>


            <div className="about-us-content">



              <div className="about-us-bio">

                <div className="bio-images">

                  <img id="gurjot"></img>

                  <img id="david"></img>

                </div>


                <div className="who-we-are">

                  <div id="gurjot-bio">

                    <p></p>
                  </div>

                  <div id="david-bio">

                    <p></p>

                  </div>


                </div>

              </div>





              <div className="additional-info">



                <div className="purpose">

                  <p></p>
                </div>



                <div className="ambitions">

                  <p></p>

                </div>


              </div>





            </div>



          </div>

          {/* about us section */}








     
    </div>
  );
}
