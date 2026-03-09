import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>

          {/* header section fr nav bar, logo, website header, and BC flag */}


          <div className="header-section">
            <div className="header-content">




              <div className="bcFlag"></div>



              <div className="hydro-ed-banner">

                <div className="hydro-ed-logo"></div>

                <div className="hydro-ed-title"> <h1>HYDRO-ED</h1></div>

              </div>



              <nav className="nav-bar">

                <a href="#game">Game</a>
                <a href="#instructions"></a>
                <a href="#education"></a>
                <a href="#about-us">About Us</a>

              </nav>

            </div>



          </div>

          {/* header section fr nav bar, logo, website header, and BC flag */}

          welcome image below header

          <div className="welcome">


            <div className="dam-image">

              <img src="Harold_Kumar_Dynamic_Content_HydroElectricity/public/images/welcome-image.png" alt="welcome-image"></img>
            </div>
          </div>








          {/* section for the interactive game  */}

          <div className="Game">

            <div className="Game-header-section">

              <div id="game-header"> <h2>GAME</h2>
              
              </div>

            </div>




            <div className="Game-interactive-section">

              <div className="Game-content">

                <button className="turn-on-water">

                  <h2>TURN ON WATER</h2>

                </button>

              </div>


            </div>

          </div>

          {/* section for the interactive game  */}









          {/* instructions section  */}

          <div className="instructions-section">
            
            <div className="instructions-header">

              <div id="instructions-title">

                <h2>INSTRUCTIONS</h2>

              </div>

            </div>
            

            <div className="instructions-content">

              <div className="instructions-text">

                <p>Press the green button to turn on the water.</p>

                <p>As water wheel begins to turn the generator to generate energy, Press the generator.</p>

                <p>As energy generates from the turning of the waterwheel, Press the transformer to convert the energy to volts.</p>

                <p>As volts reaches the meter, Press the meter to track and distribute the electricity to consumers from the power grid.</p>

              </div>


              <div className="instructions-image">

                <img></img>

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
