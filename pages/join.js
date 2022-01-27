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
                        <h3>Click an Open Position</h3>
                        <ul className={styles.openpositions}>
                            <li>Avionics Guidance, Navigation, and Control</li>
                            <ul>
                                <li><Spoiler title="Navigation Engineer">This role will work closely with VectorNav IMU hardware and software, conducting tests to collect data and characterize the IMU's performance as well as researching and implementing data filtration algorithms to process data output from the IMU. This data filtration will later be integrated with the navigation algorithm in Simulink.
                                </Spoiler></li>
                                <li><Spoiler title="Trick Engineer">This role will work on the 6-Degree-of-Freedom (6DOF) flight model in NASA's Trick Simulation Environment. Possible tasks include: writing models in C++ code for use in the Trick sim, verifying the Trick sim against the Simulink 6DOF.
                                </Spoiler></li>
                                <li><Spoiler title="Simulink Controls Engineer">This role will work on developing control algorithms within the Simulink 6-Degree-of-Freedom (6DOF) flight model. Possible tasks include: creating mapping algorithms to actuate fins/TVC, creating models to estimate values like mass & inertia during flight sim.
                                </Spoiler></li>
                            </ul>
                            <li>Avionics Hardware</li>
                            <ul>
                                <li><Spoiler title="Wiring Harness and Integration Engineer">This person's job is to work on continually updating the wiring harness designs to be most up to date with any changes made by other subteams. Once harnesses are ordered they will proceed with testing and verifying the designs. 
                                </Spoiler></li>
                                <li><Spoiler title="Power Systems Engineer">This person's job is to work on converter PCB boards which will connect from the ground power supply to the onboard battery packs along with the rest of the rocket. Someone with PCB design experience is preferred. 
                                </Spoiler></li>
                            </ul>
                            <li>Avionics Software</li>
                            <ul>
                                <li><Spoiler title="HIL Simulation Engineer">This position involves writing software for the Hardware-In-the-Loop (HIL) system in order to create mission and vehicle simulations for testing the rocket's flight computer. It will involve working with Veristand, LabView, and C/C++ code. Potential projects: nominal/off-nominal mission modeling, engine modeling, HIL infrastructure, HIL test suite development 
                                </Spoiler></li>
                                <li><Spoiler title="HIL Fluids Simulation Engineer">This position involves writing software for the Hardware-In-the-Loop (HIL) system in order to create simulations of the vehicle's fluid systems (propellant feed, RCS, etc). It will involve working with Veristand, LabView, and C/C++ code.
                                </Spoiler></li>
                                <li><Spoiler title="Flight Software Engineer">This position involves writing software to enable the control of fluids devices on the vehicle. It will involve working with Python and C++ code. A majority of this project will be taking a formatted version of the fluids devices' intended operations and converting it into compatible C++ code.
                                </Spoiler></li>
                            </ul>
                            <li>COPV Test</li>
                            <ul>
                                <li><Spoiler title="Console Operations and Test Planning Engineer">This person will write test goals/requirements/sequences for our COPV tests. Involves research on prior test plans and COPV testing as a whole. Constant communication with the structures team is key. Softwares used will primarily be microsoft word and excel. Member will be expected to come to two workdays a week, collaborate with team members, and attend our burst test at Firefly's test site. Good writing, research, and communication skills are important. 
                                </Spoiler></li>
                                <li><Spoiler title="COPV Electronics Engineer">This person will research and procure sensors for our test stand. Sensors include but are not limited to potentiometers, pressure transducers, and strain gauges. You will be tasked with projects related to sensor assembly, calibration, and testing, as well as wiring and electronics risk assessment. Softwares used include NI MAX, Microsoft Word, and Excel.
                                </Spoiler></li>
                            </ul>
                            <li>Engine Test (Hotfire)</li>
                            <ul>
                                <li><Spoiler title="Hotfire Technician">This position will entail working on the various parts of the engine hotfire test stand: building fluid lines, electrical harness manufacturing, debugging sensors and valves as well as helping run various testing campaigns. Critical thinking, patience, and communication are all desirable skills. 90% of the work will take place at our Briggs test site. 
                                </Spoiler></li>
                                <li><Spoiler title="Hotfire Software Technician">This position will entail learning and developing Labview for the engine hotfire test stand. This will include writing and making changes to the code as changes are made to the stand as well as updating the UI. This position will also entail assisting in the testing campaign through data analysis and running the console. Prior programming experience is not required, only a strong desire to learn and take on a challenging project.
                                </Spoiler></li>
                            </ul>
                            <li>Fins</li>
                            <ul>
                                <li><Spoiler title="Fins Manufacturing Engineer">This person will assist the Manufacturing RE in conducting proper manufacturing campaigns. They will also help in the development of documentation and reviews to expedite the manufacturing process. 
                                </Spoiler></li>
                            </ul>
                            <li>Fluids</li>
                            <ul>
                                <li><Spoiler title="Fluids/Physical Integration Engineer">This position will be focused on assisting the fluids team in subsystem integration. Strong communication, research, and math skills are used in this position. An interest in learning CAD and Fluids simulation software is also needed.   
                                </Spoiler></li>
                            </ul>
                            <li>Fluids Component Test</li>
                            <ul>
                                <li><Spoiler title="Hold Down Engineer">This person will Develop and improve LabVIEW code for component testing. This would involve ensuring that the code is up to date with any changes to electronics and/or fluid components, as well as making sure the front panel (the user interface) remains readable and easy to use. Prior programming experience would be helpful but is most definitely NOT a requirement. Good analytical and organizational skills are important.
                                </Spoiler></li>
                            </ul>
                            <li>Operations and Project Management</li>
                            <ul>
                                <li><Spoiler title="Operations Engineer">This person will spend half of their time maintaining the integrated master schedule and half of their time on general operations and process improvements. This position offers the freedom for the member to make process improvements where they see areas for growth. This position is ideal for someone who is a self-starter, passionate for operational optimization, and has an intuition about how people will interact with an administrative system. This position builds skills for people who want to be CEOs, COOs, and project managers.
                                </Spoiler></li>
                            </ul>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h3>&nbsp;</h3>
                        <ul className={styles.openpositions}>
                            <li>Payload</li>
                            <ul>
                                <li><Spoiler title="Avionics (Flight Development Software) Engineer">In this position, you will be developing our flight computer’s software. This individual would develop the software from block coding to complete code and move to Hardware-in-the-Loop testing. The individual would work closely with Payload Avionics Hardware (PAvHw) to ensure proper implementation of code with our existing sensor suite. Additionally, communication and integration with Payload Structures is required to properly implement the Payload ejection mechanism with the flight computer. No hard background in software is required. 
                                </Spoiler></li>
                                <li><Spoiler title="Payload Recovery Prototyping General Engineer">This individual would be testing and prototyping for our recovery team. This role involves developing test plans and hands-on prototyping for our recovery system. They will be defining goals and requirements, designing test stands, creating test FMEAs and BOMs, and working hands-on with prototyping components. No background in test engineering is required. Interest in testing and hands-on work is desired.
                                </Spoiler></li>
                            </ul>
                            <li>Production</li>
                            <ul>
                                <li><Spoiler title="Production Manufacturing Engineer">This individual will work with multiple design and test teams to validate and manufacture various machine components. They will attend weekly build days to learn how to operate machine equipment such as mills, lathes, and band saws in order to help manufacture parts.
                                </Spoiler></li>
                            </ul>
                            <li>Propulsion</li>
                            <ul>
                                <li><Spoiler title="Propulsion Manufacturing Technical Engineer">This position will be utilized to aid in the manufacturing and assembly of TXE-2. These members will be taught the basics of machining and how to build an assembly stand. Members will be required to work with other members on the propulsion team and within the lab. Members will be required to attend propulsion weekly updates as well as participate in projects assigned by their RE.
                                </Spoiler></li>
                            </ul>
                            <li>Recovery</li>
                            <ul>
                                <li><Spoiler title="Nosecone Separation Engineer">These members would continue to design the separation system of the rocket. They would work on design reviews, requirements, constraints, and modeling of the system in order to finalize the design.  
                                </Spoiler></li>
                                <li><Spoiler title="Nosecone Ablative Engineer">This person would be working on designing and obtaining results from ablative tests. This person would also be involved in CFD simulations. These tasks go hand-in-hand and so work each week would depend on necessary next steps.   
                                </Spoiler></li>
                                <li><Spoiler title="Nosecone Manufacturing Engineer">This person would be designing and testing fiberglass layup methods on scaled nosecone mold prototypes. This person would design and be involved in the manufacturing process of these scaled nosecone mold prototypes. If time allows, this person would also be involved in designing structural tests for the nosecone. This person should be cooperating with the structures team throughout the semester.
                                </Spoiler></li>
                                <li><Spoiler title="Recovery Avionics Hardware Engineer">In this position, the person will be responsible for the design and testing of electronics for the entire recovery system. You will be in charge of the design and testing of enclosure boxes for the protection of said electronic. SOLIDWORKS will be also used in this role. Further, you will assist with the documentation of test plans and work towards preparing for those tests.  
                                </Spoiler></li>
                                <li><Spoiler title="Baseplate/Drop Text Engineer">This member will interface with airframe (structures), deployment (recovery), and Firefly test engineers to prepare for the baseplate static qualification and acceptance testing. They will use SOLIDWORKS to update CADs, drawings, and simulations, and relay those updates to vendors. Most importantly, they will set up and facilitate the physical test! Since the baseplate is near completion, after spending the first part of the semester working on baseplate, the second part will include a transition to focusing on the drop test, which will qualify that the recovery system’s sequence of events/deployments will occur properly. In this role, they will design a stand which can release the test article from the helicopter, communicate with pilots and locations to determine how to safely drop the test article, and collaborate with a variety of sub-teams to create a representative integrated recovery system. 
                                </Spoiler></li>
                            </ul>
                            <li>Structures</li>
                            <ul>
                                <li><Spoiler title="Structures Airframe Composite Manufacturing Engineer">This position will involve manufacturing the skirts and couplers used for the body of the rocket, using carbon fiber composite methods to do so. Additionally, this position will be responsible for assessing each finished skirt and identifying ways to improve the manufacturing process, and may be asked to assist with testing completed skirts for strength.
                                </Spoiler></li>
                                <li><Spoiler title="Ground Structure Manufacturing Engineer">This position will involve manufacturing, assembly, and testing the truss and adjustment mechanisms of the ground structure and helping to progress manufacturing of the system. Familiarity with Solidworks and the courses Statics and Solids will be beneficial. Additionally, this position will have full design ownership of the concrete baseplate for launch and stage test stands.
                                </Spoiler></li>
                                <li><Spoiler title="Structures Physical Integration Fluid Line Designer">This position will involve designing, prototyping, and manufacturing brackets that will hold the fluid lines between different parts of the rocket. Being familiar and comfortable with CAD modeling is critical for this position as much of the work will begin with limited information that the whole design will be oriented around. This position will likely include close work with the airframe subteam as the brackets are equipped to the skirts (and the methodology behind that) as well as other works within physical integration that will mostly revolve around transferring CAD models into real world objects.
                                </Spoiler></li>
                            </ul>
                            <li>Weather Balloon</li>
                            <ul>
                                <li><Spoiler title="Weather Balloon Test Engineer">You’ll be working on software development for line cutter integration to the weather balloon using a Raspberry Pi. Coding and/or circuitry experience preferred with an emphasis for Python experience in addition to strong reliability and communication skills. Weather balloon launches include a fair amount of outdoor activities, including hiking. Other responsibilities include participation in weather balloon launches, weekly meeting attendance, and individual research/development.
                                </Spoiler></li>
                            </ul>
                            {/* <li>Communications</li>
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
                            </ul> */}
                        </ul>
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
                            <h3>You must be a permanent U.S. resident or citizen</h3>
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
                            <p>or older by Feb 20th to join our team.</p>
                        </li>
                        <li></li>
                    </ul>
                </div>
            </section>
        </Layout>
    )
}