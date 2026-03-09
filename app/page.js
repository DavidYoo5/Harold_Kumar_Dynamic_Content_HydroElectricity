import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>

          {/* header section fr nav bar, logo, website header, and BC flag */}


          <div class="header-section">
            <div class="header-content">




              <div class="bcFlag"></div>



              <div class="hydro-ed-banner">

                <div class="hydro-ed-logo"></div>

                <div class="hydro-ed-title"> <h1>HYDRO-ED</h1></div>

              </div>



              <nav class="nav-bar">

                <a href="#game">Game</a>
                <a href="#instructions"></a>
                <a href="#education"></a>
                <a href="#about-us">About Us</a>

              </nav>

            </div>



          </div>

          {/* header section fr nav bar, logo, website header, and BC flag */}








          {/* section for the interactive game  */}

          <div class="Game">

            <div class="Game-header-section">

              <div id="game-header"> <h2>GAME</h2>
              
              </div>

            </div>




            <div class="Game-interactive-section">

              <div class="Game-content">

                <button class="turn-on-water">

                  <h2>TURN ON WATER</h2>

                </button>

              </div>


            </div>

          </div>

          {/* section for the interactive game  */}









          {/* instructions section  */}

          <div class="instructions-section">
            
            <div class="instructions-header">

              <div id="instructions-title">

                <h2>INSTRUCTIONS</h2>

              </div>

            </div>
            

            <div class="instructions-content">

              <div class="instructions-text">

                <p>Press the green button to turn on the water.</p>

                <p>As water wheel begins to turn the generator to generate energy, Press the generator.</p>

                <p>As energy generates from the turning of the waterwheel, Press the transformer to convert the energy to volts.</p>

                <p>As volts reaches the meter, Press the meter to track and distribute the electricity to consumers from the power grid.</p>

              </div>


              <div class="instructions-image">

                <img></img>

              </div>

            </div>



          </div>
          
          {/* instructions section  */}





          {/* education section  */}

          <div class="education-section">



            <div class="education-header">

              <h2>EDUCATION</h2>
            </div>



            <div class="education-visuals">

              <div class="bc-hydro-logo"></div>


              <div class="education-images">

                <img></img>
                <img></img>
                <img></img>

              </div>


            </div>


            <div class="education-content">

              <div class="fun-facts">

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

          <div class="about-us">

            <div class="about-header">

              <div id="about-us-title"> 
                
                <h1>ABOUT US</h1>
              
              </div>


            </div>


            <div class="about-us-content">



              <div class="about-us-bio">

                <div class="bio-images">

                  <img id="gurjot"></img>

                  <img id="david"></img>

                </div>


                <div class="who-we-are">

                  <div id="gurjot-bio">

                    <p></p>
                  </div>

                  <div id="david-bio">

                    <p></p>

                  </div>


                </div>

              </div>





              <div class="additional-info">



                <div class="purpose">

                  <p></p>
                </div>



                <div class="ambitions">

                  <p></p>

                </div>


              </div>





            </div>



          </div>

          {/* about us section */}








     
    </div>
  );
}
