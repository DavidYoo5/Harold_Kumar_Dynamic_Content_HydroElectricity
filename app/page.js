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

          <div className={styles.educationSection}>



            <div className={styles.educationHeader}>

              <h2 id={styles.educationTitle}>EDUCATION</h2>

            </div>

<div className={styles.educationImagesAndText}>

            <div className={styles.educationVisuals}>

              <div className={styles.bcHydroLogo}>
                 <Image src="/images/bcHydroLogo.png" alt="BC Hydro Logo" width={318.5} height={68} className={styles.bcHydroLogoPicture} />
              </div>
                 
              <div className={styles.educationImages}>
                <div className={styles.educationImagesRow}>
                <Image src="/images/education-image-3.png" alt="Hydro Electricity Diagram" width={320.5} height={160.5} className={styles.educationImage3} />
                </div>
                
                <div className={styles.educationImagesRow}>
                <Image src="/images/education-image-1.png" alt="Hydro Electricity Diagram" width={180} height={116} className={styles.educationImage} />
                <Image src="/images/education-image-2.png" alt="Hydro Electricity Diagram" width={180} height={116} className={styles.educationImage} />
                </div>

              </div>


            </div>


            <div className={styles.educationContentText}>

              <div className={styles.funFactsTextBox}>

                <h2>Fun Facts</h2>
                <ul className={styles.funFactsList}>
                  <li>The energy from water wheels and the generator is converted into power which runs through distribution lines and above 73, 000 kilometres of transmission within a system that feeds energy back and forth.</li>
                  <li>Bc is able to provide energy to more than 1.6 million customers through this process that produces up to 43, 000 gigawatt of electricity a year.</li>
                  <li>Bc hydro delivers electricity to 95 % of the population in BC which is over 5 million people</li>
                  <li>98% of electricity if from renewable resources, like water power and there are over 30 hydro plants in B.C.</li>
                </ul>

              </div>

              <div className={styles.bcHydroTextBox}>

                <h2>BC Hydro</h2>
                 <ul className={styles.bcHydroList}>
                  <li>BC Hydro is a provincial Crown corporation</li>
                  <li>Bc hydro prioritizes providing “clean power generation and reduced carbon footprint” and highlights the importance of reducing negative impact on the environment</li>
                  <li>91% of power delivered to customers is from hydroelectricity</li>
                  <li>There are 30 hydro electric plants in mountains, valleys, and rivers across BC</li>
                  <li>98% of electricity is generated from renewable sources and BC hydro is one of the largest energy suppliers in Canada</li>
                  <li>Bc hydro offers hydroelectricity at a reliable and low cost way which also provides Environmental, Social, and governance at a low cost</li>
                  <li>Bc hydro has one of the most progressive climate action plans that aims to “reduce greenhouse gas emissions by 40% by 2030”</li>
                </ul>


              </div>

            </div>

</div>

          </div>

          {/* education section  */}

            {/* about us section */}

          <div className={styles.aboutUs}>

            <div className={styles.aboutUsHeader}>

                <h1 id={styles.aboutUsTitle}>ABOUT US</h1>

            </div>


            <div className={styles.aboutUsContentBox}>

<div className={styles.aboutUsContent}>

              <div className={styles.aboutUsBio}>

                <div className={styles.bioImages}>

                  <div className={styles.bioImageGurjot}>

                     <h2 className={styles.bioImageName}>Gurjot Hundal</h2>
                     <Image className={styles.bioImage} src="/images/Kumar.png" alt="David" width={200} height={200} />
                
                  </div>

                  <div className={styles.bioImageDavid}>

                      <h2 className={styles.bioImageName}>David Yoo</h2>
                      <Image className={styles.bioImage} src="/images/harold.png" alt="David" width={200} height={200} />
                 
                  </div>

                </div>


                <div className={styles.whoWeAreText}>

                  <div className={styles.whoWeAreHeader}>
                    <h2>Who We Are</h2>
                  </div>    

                     <div className={styles.whoWeAreContent}>

                          <div className={styles.gurjotBio}>

                               <p>Hello, my name is Gurjot Hundal, I am 23-years-old, and currently studying in the D3 (Digital Design and Development) program at BCIT. Through this program i have learned so much about the skill it takes to develop for digital platforms. Especially applications and websites such as this one, where we are finally taking our technical skills learned so far and applying it to real projects. One’s that we can add to our portfolio in the future and also use to build our careers. This project is just the beginning of what we are capable of and can’t wait to continue learning and working on bigger projects!     </p>
                  
                          </div>

                          <div className={styles.davidBio}>

                                <p>Hi, my name is David Yoo, and I am a 22-year-old student in the D3 (Digital Design and Development) program at BCIT, where I am learning to design and develop software and websites. For our Dynamic Content course, we were assigned to create a dynamic website about a sustainable cause.
        My partner Kumar and I chose to focus on hydroelectricity because Canada generates most of its electricity from renewable water sources. Through this project, we aim to educate others about how hydropower works and how renewable energy can help create a cleaner, more sustainable future.</p>

                         </div>

                    </div>

                </div>

              </div>





              <div className={styles.additionalInfo}>



                <div className={styles.purpose}>
                  <p></p>
                </div>



                <div className={styles.ambitions}>

                  <p></p>

                </div>


              </div>





            </div>

</div>

          </div>

          {/* about us section */}

    </div>
  );
}
