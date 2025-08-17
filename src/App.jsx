import React from 'react';
import { Slide, Fade } from "react-awesome-reveal";
import './App.css';


import bg1 from './assets/images/bg-1.png';
import bg2 from './assets/images/bg-2.png';
import bg3 from './assets/images/bg-3.png';


import appHero from './assets/images/app-hero.png';
import appManager from './assets/images/app-manager.png';
import appMap from './assets/images/app-map.png';
import appProfile from './assets/images/app-profile.png';
import lightLogo from './assets/images/Light@2x.png'; // Jasne logo
import darkLogo from './assets/images/Dark@2x.png'; // Ciemne logo
import mainLogoIcon from './assets/images/Artboard 29.png'; // Ikona logo
import cables1 from './assets/images/Artboard 1.png'; // Ikona kabla
const backgroundImages = [bg1, bg2, bg3];
import teamImage from './assets/images/team.jpg';


function App() {
    return (
        <div className="App">
            {/* Sekcja Główna (Hero Section) */}
            <div className="section hero-section" style={{ backgroundImage: `url(${backgroundImages[0]})` }}>
                <div className="text-container hero-content">
                    <Fade cascade triggerOnce damping={0.1}>

                        <h1>PLAY AND GROW TOGETHER!</h1>
                        <p >The app that connects musicians
                            and uses AI to grow their skills
                            and collaboration.
                        </p>
                    </Fade>
                </div>
                <div className="hero-image-container">
                    <Slide direction="right" triggerOnce>
                        <img src={darkLogo} alt="Duet App Logo"  />
                    </Slide>

                </div>
            </div>



            {/* Sekcja "Kluczowe Funkcje" */}
            <Fade cascade triggerOnce damping={0.1}>
            <div className="section features-section" style={{ backgroundImage: `url(${backgroundImages[2]})` }}>
                <div className="text-container">

                    <div className="features-grid">
                        <Slide direction="left" triggerOnce delay={300}>
                            <div className="feature-item">

                                <h3>Swipe & Jam</h3>
                                <p>Find your perfect musical match instantly</p>
                            </div>
                        </Slide>
                        <Slide direction="down" triggerOnce delay={200}>
                            <div className="feature-item">

                                <h3>AI Mentor</h3>
                                <p>Get smart, personalized tips to grow together</p>
                            </div>
                        </Slide>
                        <Slide direction="up" triggerOnce delay={400}>
                            <div className="feature-item">

                                <h3>Create & Share</h3>
                                <p>Record, collaborate, and track progress as a duo.
                                </p>
                            </div>
                        </Slide>

                        <Slide direction="right" triggerOnce delay={200}>
                            <div className="feature-item">

                                <h3>Play Anywhere</h3>
                                <p>Book rehearsal spots and join local music events
                                </p>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
</Fade>

            {/* Sekcja "O aplikacji" - teraz "CAREER MANAGER" z trzema kolumnami */}
            <Slide direction="up" triggerOnce>
                <div className="section career-manager-section" style={{ backgroundImage: `url(${backgroundImages[1]})` }}>
                    <div className="text-container"> {/* Pozostawiłem text-container, ale dodamy customowe style */}
                        <h2>CAREER MANAGER</h2>
                        <div className="career-manager-content">
                            <Slide direction="left" triggerOnce>
                                <div className="text-block">
                                    <h3>Artistic Growth with Guidance</h3>
                                    <p>Every "Match" connects you with a Career Manager – a virtual mentor dedicated to fostering your artistic development. You get to pick your vibe: from a chill jazz cat, to a laid-back reggae drummer, a totally wired techno synth head, or a pop producer with serious classical chops.</p>
                                    </div>
                            </Slide>
                            <Slide direction="up" triggerOnce>
                                <img src={appManager} alt="Duet App Career Manager" className="app-manager-image" />
                            </Slide>
                            <Slide direction="right" triggerOnce>
                                <div className="text-block">
                                    <h3>Personalized Mentor Support</h3>
                                    <p>Your mentor provides personalized guidance – tailored exercises, track recommendations, and jam structures. They'll help with networking, analyze your recordings for improvement, pinpoint weaknesses, and offer solutions. They'll also track progress, schedule rehearsals, and motivate you – in your unique style!</p>
                                    </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </Slide>

            <div className="section team-section" style={{ backgroundImage: `url(${backgroundImages[0]})` }}> {/* Możesz wybrać inne tło, np. bg1 */}
                <div className="text-container">
                    <Fade direction="down" triggerOnce>
                        <h2>MEET THE TEAM</h2> {/* Nagłówek dla sekcji zespołu */}
                    </Fade>
                    <Slide direction="up" triggerOnce delay={200}>
                        <img src={teamImage} alt="Duet Team" className="team-image" />
                    </Slide>
                </div>
            </div>


        </div>
    );
}

export default App;