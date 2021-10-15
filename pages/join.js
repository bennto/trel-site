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
            <Head>{siteTitle}</Head>
            <section className={styles.hero}>
                <div>
                    <h1>Recruiting is Closed!</h1>
                    <h2>see how you can't join our team</h2>
                </div>
            </section>
            <section className={styles.application}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h3>Attend an info session</h3>
                        <p className={styles.desc}>Come see what we're all about! Applicants must attend at least one info session.</p>
                        <div className={styles.choices}>
                            <p><span className = {styles.font1}>session 1 : &emsp;&ensp;</span><span className = {styles.font2}>September 9 &emsp; 5 - 7 PM</span></p>
                            <p><span className = {styles.font1}>session 2 : &emsp;&ensp;</span><span className = {styles.font2}>September 10 &emsp; 5 - 7 PM</span></p>
                        </div>
                        <h2 className={styles.desc}> Located at:</h2>
                        <div className={styles.address}>
                            <p>Engineering Education and Research Center</p>
                            <br />
                            <p>Room 0.904</p>
                            <br />
                            <p>2501 Speedway, Austin, TX 78712</p> 
                        </div>
                    </div>
                    <div className={styles.card}>
                        <h3 style = {{visibility: "hidden"}}>blank</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1722.610123488815!2d-97.73637627999825!3d30.287790980683898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59b2584cfb7%3A0xfc70be33186e5baa!2sEngineering%20Education%20and%20Research%20Center%20(EER)!5e0!3m2!1sen!2sus!4v1630706813293!5m2!1sen!2sus" width="600" height="100%" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div className={styles.card}>
                        <h3>Click a position you like</h3>
                        <ul className={styles.openpositions}>
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
                            {/* <li>Fluids</li>
                            <ul>
                                <li><Spoiler title="Ground Support Equipment Engineer">You will finalize designs, begin hardware testing campaign, and write test plans. You will communicate heavily with other teams.
                                    <br /><br />Desired Skills: <br/><mark>communication</mark> <mark>CAD</mark> <mark>interest in Fluid Systems</mark>
                                </Spoiler></li>
                                <li><Spoiler title="FW Engineer">You will finalize designs, begin hardware testing campaign, and write test plans. You will communicate heavily with other teams.
                                    <br /><br />Desired Skills: <br/><mark>communication</mark> <mark>CAD</mark> <mark>interest in Fluid Systems</mark>
                                </Spoiler></li>
                                <li><Spoiler title="QD Engineer">You will finalize designs, begin hardware testing campaign, and write test plans. You will communicate heavily with other teams.
                                    <br /><br />Desired Skills: <br/><mark>communication</mark> <mark>CAD</mark> <mark>interest in Fluid Systems</mark>
                                </Spoiler></li>
                            </ul> */}
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
                            <li>Structures</li>
                            <ul>
                                <li><Spoiler title="Hold Down Engineer">You will design and simulate launch conditions and integrate the hold down system into the overall launch platform.
                                    <br /><br />Desired Skills: <br/><mark>CAD</mark> <mark>Statics</mark> <mark>Solids</mark> <mark>Pneumatic Systems</mark>
                                </Spoiler></li>
                                {/* <li><Spoiler title="COPV Design Engineer">unfinished
                                    <br /><br />Desired Skills: <br/><mark>CAD</mark> <mark>Statics</mark> <mark>Solids</mark> <mark>Pneumatic Systems</mark>
                                </Spoiler></li> */}
                            </ul>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h3>&nbsp;</h3>
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
                            {/* <li>Finance and Strategy</li>
                            <ul>
                                <li><Spoiler title="Budgeting Manager">You will collaborate to plan spending with the goal of keeping TREL within its margin of safety. As a financial analyst, you will support our Finance and Strategy team through thoughtful analysis of cost expenditures and project forecasts for TREL's $1M Halcyon rocket.<br/><br/> <br /><br />Desired Skills: <br/>Microsoft Excel and Powerpoint is a plus</Spoiler></li>
                                <li><Spoiler title="Corporate Development">You will be directly responsible for sourcing, developing, and maintaining our vendor relationships. To date, TREL has received over $400k of cash and donations in kinds from companies like Blue Origin, AWS, EOS, NI, and many others.<br/><br/> <br /><br />Desired Skills: <br/>Salesforce is a plus</Spoiler></li>
                                <li><Spoiler title="Procurement Liaison">You will bridge the gap between our engineering system leads and the finance team as you manage TREL's supply chain by interfacing with Corporate Development and Budget Management. Our rocket, Halcyon, has a complex global supply chain that requires meticulous management to ensure we maintain on schedule.<br/><br/> <br /><br />Desired Skills: <br/>Microsoft Suite, Salesforce, and Procurify is a plus</Spoiler></li>
                            </ul>
                            <li>Outreach</li>
                            <ul>
                                <li><Spoiler title="STEM Educator">You will help create educational and engaging content for students, inspiring young minds to explore rocketry and STEM. You will explore scientific concepts, applications, and fun activitiies, and inspire the our next generation of rocketeers.<br/><br/> <br /><br />Desired Skills: <br/>Friendly with people and children</Spoiler></li>
                                <li><Spoiler title="Outreach Coordinator">You will organize outreach projects and events, create demos that demonstrate rocketry and STEM, organize and plan events, and develop strong communication and project management skills. <br/><br/> <br /><br />Desired Skills: <br/>Friendly with people and children</Spoiler></li>
                            </ul>
                            <li>Communications</li>
                            <ul>
                                <li><Spoiler title="Public Relations Lead">You are the administrative force behind the face of TREL. You will manage the vision and integrity of TREL's public image. You make sure all team logistics are ironed out so the PR subteams can operate at full capacity.<br/><br/> <br /><br />Desired Skills: <br/>Strong organizational and communication skills.</Spoiler></li>
                                <li><Spoiler title="Content Sublead">You will be responsible for the short-term visions and goals of TREL’s Public Relations team. This subteam includes social media, copywriting, photography, videography, and graphic design.  To help the content team run smoothly, another of your responsibilities will include giving critiques and sending PR team members out in pairs (writer + visual) to create content.<br/><br/> <br /><br />Desired Skills: <br/>Strong organizational and communication skills</Spoiler></li>
                                <li><Spoiler title="Strategy Sublead">You will be responsible for the long-term visions and goals of TREL’s Public Relations team. This subteam includes website development and strategic planning, as well as any long-term branding objectives.<br/><br/> <br /><br />Desired Skills: <br/>Texas Media or audience research experience is a plus</Spoiler></li>
                                <li><Spoiler title="Social Media Coordinator">You will directly manage two or three social media platforms simultaneously potentially including Twitter, LinkedIn, Instagram, and Facebook. This role will be a fantastic opportunity for anyone to expand their social media experience while working for one of the largest interdisciplinary collegiate rocket labs in the nation.<br/><br/> <br /><br />Desired Skills: <br/>Great organizational and communication skills</Spoiler></li>
                                <li><Spoiler title="Copywriter">You will gain scientific communication experience by writing about our engineering milestones for a collegiate rocket lab that manages $1.5 Mil in capital and resources. There are many eyes on the work that we are creating, and we are seeking passionate writers who love to share knowledge with broader audiences.<br/><br/> <br /><br />Desired Skills: <br/>Good communication and people skills</Spoiler></li>
                                <li><Spoiler title="Graphic Designer">You will create compelling visual media that will be seen (and possibly worn) by industry leaders, our corporate partners, and your fellow UT students. You will practice giving and receiving creative feedback. <br/><br/> <br /><br />Desired Skills: <br/>Adobe Creative Suite—Illustrator Preferred. Portfolio is required to apply.</Spoiler></li>
                                <li><Spoiler title="Photographer">You will help shoot and edit photos of our different teams and how they contribute to our Halcyon rocket. We are focusing on those who build these big and sleek machines. You will help pioneer new ways to communicate scientific ideas to large audiences.<br/><br/> Every photoshoot will be a different creative endeavor where you will work closely with our teammates to bring aerospace to life.</Spoiler></li>
                                <li><Spoiler title="Videographer">You will produce a number of short, advertising-style creative films about TREL and its milestones. <br/> <br/>TREL’s ideal videographer candidates have a healthy knowledge of relevant video software, a love for learning new things, a passion for producing engaging, creative, fresh video content, the ability to work well with others, skills to operate relevant equipment, and an interest in STEM programs outside of the visual arts.</Spoiler></li>
                                <li><Spoiler title="Web Developer">You will work closely with teams across the lab to showcase TREL projects through interactive web experiences. Your role is crucial to our public image, as our primary information hub and content network will center around our website. You will learn to program in react.js through a library called next.js.<br/><br/> <br /><br />Desired Skills: <br/>Front- or Back-end web development experience. Basic understanding of HTML, CSS, js.</Spoiler></li>
                            </ul> */}
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h3>Fill out the application</h3>
                        <p className={styles.desc}>Apply for as many as three positions.</p>
                        <div className={styles.choices}>
                            <p className={styles.heading}>We want to see:</p>
                            <ul>
                                <li><p>Your thinking</p></li>
                                <li><p>Who you are</p></li>
                                <li><p>A resume</p></li>
                                <li><p>#1 Poptart flavor</p></li>
                            </ul>
                        </div>
                        <DateToDate from={"Opened Friday Sep. 10th"} to={"Closed 11:59pm Friday Sep. 17th"} />
                        <p className={styles.footnote}>Submitting your resume is not required for our application process.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Interview with our teams</h3>
                        <p className={styles.desc}>We will schedule a time that works for you. Come as you are, we want to know the real you.</p>
                        <DateToDate from={"Began Friday Sep. 17th"} to={"Decisions Friday Sep. 24th"}/>
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