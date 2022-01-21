import React from 'react'
import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import DateToDate from '../components/details/datetodate'
import styles from '../styles/join.module.scss'
import Spoiler from '../components/spoiler'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

export default function Join () {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={styles.hero}>
                <div>
                    <h1>We're Recruiting!</h1>
                    <h2>see how you join our team</h2>
                </div>
            </section>
            <section className={styles.application}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h3>Attend an info session</h3>
                        <p className={styles.desc}>Come see what we're all about! Applicants must attend at least one info session. Sessions will be held on Zoom this semester due to COVID-19</p>
                        <div className={styles.choices}>
                            <p><span className = {styles.font1}>session 1 : &emsp;&ensp;</span><span className = {styles.font2}>January 27 &emsp; 6 - 7:30 PM</span></p>
                            <p><span className = {styles.font1}>session 2 : &emsp;&ensp;</span><span className = {styles.font2}>January 28 &emsp; 6 - 7:30 PM</span></p>
                        </div>
                        <h2 className={styles.desc}> Located at:</h2>
                        <div className={styles.address}>
                            <p>Zoom Code: 981 247 9224</p>
                            <br />
                            <p>Password: 381575</p>
                            
                        </div>
                    </div>
                    <div className={styles.card}>
                        {/* <h3 style = {{visibility: "hidden"}}>blank</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1722.610123488815!2d-97.73637627999825!3d30.287790980683898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59b2584cfb7%3A0xfc70be33186e5baa!2sEngineering%20Education%20and%20Research%20Center%20(EER)!5e0!3m2!1sen!2sus!4v1630706813293!5m2!1sen!2sus" width="600" height="100%" allowfullscreen="" loading="lazy"></iframe> */}
                    </div>
                    <div className={styles.card}>
                        <h3>Positions coming soon!</h3>
                        
                        {/* <ul className={styles.openpositions}>
                            <li>Avionics GNC</li>
                            <ul>
                                <li><Spoiler title="Navigation Engineer">You will work on the Design and Testing of our Navigation System. You can expect to work on algorithm development, IMU testing, and Sensor processing. Through this work, you will ensure that Halcyon always knows its position, velocity, and attitude. Expect significant usage of MATLAB in this role.
                                    <br /><br />Desired Skills: <br/><mark>Attitude Kinematics</mark> <mark>Filtering</mark> <mark>Sensors</mark> <mark>Dynamics </mark> <mark>MATLAB/Simulink</mark> <mark>Basic Programming </mark>
                                </Spoiler></li>
                                <li><Spoiler title="Trick Simulation Engineer">As a Trick Simulation Engineer, you will help develop a comprehensive 6-degree-of-freedom (6DOF) flight simulation for the lab. You will develop models, simulate rocket dynamics, and perform flight trajectory analysis in this role. You will learn essential programming skills and C++.
                                    <br /><br />Desired Skills: <br/><mark>Attitude Dynamics</mark> <mark>Dynamics</mark> <mark>Modeling/Simulation</mark> <mark>Aerodynamics</mark> <mark>Control Theory</mark> <mark>C++</mark> <mark>Intermediate Programming</mark>
                                </Spoiler></li>
                            </ul>
                            <li>Avionics Software</li>
                            <ul>
                                <li><Spoiler title="Hardware-in-the-Loop Engineer">You will develop drivers in LabVIEW and VeriStand which emulate our rocket's more complex devices (e.g., IMUs, altimeter) in full flight simulations. This work is critical to ensuring the high fidelity and verifying power of our HIL simulation.
                                    <br /><br />Desired Skills: <br/><mark>C</mark> <mark>LabVIEW</mark> <mark>FPGA</mark> <mark>embedded systems</mark>
                                </Spoiler></li>
                                <li><Spoiler title="Flight Software Engineer">You will implement and test fault-tolerant avionics software that controls the rocket in flight.  
                                    <br /><br />Desired Skills: <br/><mark>C++</mark> <mark>Linux</mark> <mark>operating systems</mark> <mark>embedded systems</mark>
                                </Spoiler></li>
                                <li><Spoiler title="Flight Computer Test Engineer">You will design and perform tests of flight computer robustness in flight-like environmental conditions. You will periodically work evenings at Briggs Test Site.
                                    <br /><br />Desired Skills: <br/><mark>C++</mark> <mark>Linux</mark> <mark>operating systems</mark> <mark>embedded systems</mark>
                                </Spoiler></li>
                            </ul>
                            <li>Payload</li>
                            <ul>
                                <li><Spoiler title="Software Engineer">You will help write Payload's flight code including programming triggers, modify the code to test on ground and simulate code in flight conditions. Since payload is interdisciplinary, you can also jump into projects in other subteams if interested / needed. 
                                    <br /><br />Desired Skills: <br/><mark>Python</mark> <mark>flight code structure</mark> <mark>sensors knowledge</mark> <mark>Raspberry Pi</mark> <mark>simulations</mark> <mark>subteam flexibility</mark>
                                </Spoiler></li>
                                <li><Spoiler title="Fluids Engineer">You will help finalize a variety of fluids tasks to prep for PDR and CDR including FMEAs and fluid simulations. Will then work on testing fluids components at PRC. Since payload is interdisciplinary, you can also jump into projects in other subteams if interested/needed. 
                                    <br /><br />Desired Skills: <br/><mark>fluids knowledge</mark> <mark>hands-on work/testing</mark> <mark>PRC building</mark> <mark>subteam flexibility</mark>
                                </Spoiler></li>
                            </ul>
                            <li>Propulsion Testing</li>
                            <ul>
                                <li><Spoiler title="Flight Computer Test Engineer">You will for design, manufacture, iterate, and operate test infrastrcuture. Responsible for designing and running expiriments and tests to evaluate propulsion hardware such as engines, valves, injectors, igniters, etc.
                                    <br /><br />Desired Skills: <br/><mark>C++</mark> <mark>Linux</mark> <mark>operating systems</mark> <mark>embedded systems</mark>
                                </Spoiler></li>
                            </ul>
                            <li>Recovery</li>
                            <ul>
                                <li><Spoiler title="Deployment General Engineer">You will for design, manufacture, iterate, and operate test infrastrcuture. Responsible for designing and running expiriments and tests to evaluate propulsion hardware such as engines, valves, injectors, igniters, etc.
                                    <br /><br />Desired Skills: <br/><mark>C++</mark> <mark>Linux</mark> <mark>operating systems</mark> <mark>embedded systems</mark>
                                </Spoiler></li>
                            </ul>
                            <li>Structures + COPV</li>
                            <ul>
                                <li><Spoiler title="Hold Down Engineer">You will design and simulate launch conditions and integrate the hold down system into the overall launch platform.
                                    <br /><br />Desired Skills: <br/><mark>CAD</mark> <mark>Statics</mark> <mark>Solids</mark> <mark>Pneumatic Systems</mark>
                                </Spoiler></li>
                            </ul>
                        </ul> */}
                    </div>
                    <div className={styles.card}>
                        {/* <h3>&nbsp;</h3>
                        <ul className={styles.openpositions}>
                        <li>Communications</li>
                            <ul>
                                <li><Spoiler title="Web Designer">You will help code pages and components of the TREL website using the Next.js framework. You will learn front-end web development skills such as HTML, CSS, and Javascript.
                                    <br /><br />Desired Skills: <br/><mark>Figma</mark> <mark>Adobe XD</mark> <mark>web design</mark> <mark>UI/UX</mark>
                                </Spoiler></li>
                                <li><Spoiler title="Web Developer">You will help design webpages and features of the TREL website. As your position largely requires you to harness the power of vector illustration software such as Figma or Adobe Illustrator, you will also learn aspects of UI / UX design.  
                                    <br /><br />Desired Skills: <br/><mark>Javascript</mark> <mark>CSS</mark> <mark>HTML</mark> <mark>ReactJS</mark> <mark>Next.js</mark> <mark>Visual Studio Code</mark>
                                </Spoiler></li>
                            </ul>
                            <li>Corporate Development</li>
                            <ul>
                                <li><Spoiler title="Corporate Analyst">You will work directly with us on accounts, help with company and partnership sourcing, and help maintain general investor relations.
                                    <br /><br />Desired Skills: <br/><mark>social skills</mark> <mark>business</mark> <mark>effective writing</mark> <mark>web coding</mark> <mark>CRM experence </mark>
                                </Spoiler></li>
                                <li><Spoiler title="Social Media and Design">You will create powerpoints and graphic assets with companies. You will create sponsorship social media write ups, one pagers and pitch decks. 
                                    <br /><br />Desired Skills: <br/><mark>social skills</mark> <mark>business</mark> <mark>effective writing</mark> <mark>social media marketing</mark> <mark>graphic design ability</mark> <mark>Powerpoint</mark> <mark>Excel</mark>
                                </Spoiler></li>
                            </ul>
                        </ul> */}
                    </div>
                    <div className={styles.card}>
                        <h3>Fill out the application</h3>
                        <p className={styles.desc}>Apply for as many as three positions.</p>
                        <div className={styles.choices}>
                            <p className={styles.heading}>We want to see:</p>
                            <ul>
                                <li><p>Your passion</p></li>
                                <li><p>Your thinking</p></li>
                                <li><p>Who you are</p></li>
                                <li><p>A resume*</p></li>
                            </ul>
                        </div>
                        <DateToDate from={"Opened Friday Jan. 28th"} to={"Closed 11:59pm Wednesday Feb. 2nd"} />
                        <p className={styles.footnote}>We recommend submitting your apps ASAP.  </p>
                        <p className={styles.footnote}>* A resume is recommended, but optional. </p>
                    </div>
                    <div className={styles.card}>
                        <h3>Interview with our teams</h3>
                        <p className={styles.desc}>We will schedule a time that works for you. Come as you are, we want to know the real you.</p>
                        <DateToDate from={"Began Wed. Feb. 2nd"} to={"Decisions Thursday Feb. 17th"}/>
                        <p className={styles.footnote}>These interviews will be held on Zoom. You will have one interview for each team you applied for. Submitting an application does not guarantee you will get an interview.</p>
                    </div>
                    <div className={styles.card}></div>
                </div>
                <div className={styles.keepmind}>
                    <h1>Keep in Mind</h1>
                    <ul>
                        <li>
                            <h3>You must be a permanent U.S. resident</h3>
                            <p>We don't like it either, but it's the law. You can still come say hi!</p>
                        </li>
                        <li>
                            <h3>We are all learning here</h3>
                            <p>Your resume, or lack of one, will not decide your fate.</p>
                        </li>
                        <li>
                            <h3>Passion trumps talent</h3>
                            <p>Pursue what you want. Skills can be learned, but passion can't be.</p>
                        </li>
                        <li>
                            <h3>This opportunity is unpaid</h3>
                            <p>If we could pay all 256 members, we would.</p>
                        </li>
                        <li>
                            <h3>You must be at least 18</h3>
                            <p>or older by June 1st to join our team.</p>
                        </li>
                        <li></li>
                    </ul>
                </div>
            </section>
        </Layout>
    )
}