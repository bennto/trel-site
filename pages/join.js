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
                    <h1>We Are Recruiting!</h1>
                    <h2>see how you can join our team</h2>
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
                            <li>Avionics Hardware</li>
                            <ul>
                                <li><Spoiler type="disabled" title="Integration and Test Engineer">You will help design, prototype, and qualify all of the hardware systems onboard Halcyon. You'll help physically run the tests, debug all the necessary electronics (power systems, harnessing, sensors, etc.), and help produce all the necessary infrastructure to complete more tests. You'll also work with numerous other teams in TREL to push forward their test campaigns, either through PCB design and fabrication or electronics assistance. <br/><br/> Desired Skills: <br/>Hardware interest, Basic electronics knowledge, circuit analysis, PCB design a plus.</Spoiler></li>
                            </ul>
                            <li>Avionics GNC</li>
                            <ul>
                                <li><Spoiler type="disabled" title="Navigation Engineer">You will help test and simulate the Navigation System onboard Halcyon. You will be working in-person over the summer to conduct testing on our Inertial Measurement Units (IMUs). The work you do will be essential for the analysis and eventual qualification of our Navigation System. <br/><br/> Desired Skills: <br/>Interest in Guidance, Navigation, and Controls a must. Experience with Arduino Boards is a plus, and programming experience is useful.</Spoiler></li>
                            </ul>
                            <li>Avionics Software</li>
                            <ul>
                                <li><Spoiler type="disabled" title="Hardware-in-the-Loop Engineer">You will develop drivers in LabVIEW and VeriStand which emulate our rocket's more complex devices (e.g., IMUs, altimeter) in full flight simulations. This work is critical to ensuring the high fidelity and verifying power of our HIL simulation. <br/><br/> Desired Skills: <br/>LabVIEW, FPGA, device drivers, serial communications</Spoiler></li>
                            </ul>
                            <li>COPV Burst Test</li>
                            <ul>
                                <li><Spoiler type="disabled" title="Test Engineer">You will assist in testing efforts at Briggs and help build infrastructure for testing at PRC. This will involve calibrating sensors, troubleshooting the fluid system, as well as operating the VI.<br/><br/> Desired Skills: <br/>LabVIEW, interest in fluid system testing, interest in troubleshooting, problem solving, and writing quality test plans.</Spoiler></li>
                            </ul>
                            <li>Payload</li>
                            <ul>
                                <li><Spoiler type="disabled" title="Payload Avionics Engineer">This position will involve researching, designing, and testing the avionics system to accomplish the scientific goals of the payload. <br/><br/> Desired Skills: <br/>Interest in Avionics, Basic eletronics knowledge, coding experience, basic understanding of power distributions, good communication skills</Spoiler></li>
                                <li><Spoiler type="disabled" title="Payload Fluids Engineer">This position will involve researching, designing, and testing the fluids system that provides helium to the balloon.  <br/><br/> Desired Skills: <br/>Interest in Fluids Systems or Weather Balloons, desire to learn about the Fluids System, good communication skills</Spoiler></li>
                                <li><Spoiler type="disabled" title="Payload Structural Engineer">This position will involve performing structural and thermal analyses on various subsystems of the payload and redesigning as needed. <br/><br/> Desired Skills: <br/>Solidworks experience, basic design experience, willingness to learn, good communication skills</Spoiler></li>
                            </ul>
                            <li>Recovery</li>
                            <ul>
                                <li><Spoiler type="disabled" title="Recovery Avionics Engineer">You will be researching, designing, and testing avionics housing for protection of the electronics from thermal and vibrational loads during flight. This position can be either remote or in-person. <br/><br/> Desired Skills: <br/>Solidworks Experience as well as basic design experience</Spoiler></li>
                                <li><Spoiler type="disabled" title="Recovery Avionics Test Engineer">You will be developing test procedures, assembling test stands, and testing avionics hardware under different environmental conditions. This position can be initially remote, but must be in-person once assembly and testing begin (around mid-summer).  <br/><br/> Desired Skills: <br/>Writing skills to develop quality test plans and an interest in the creation and completion of hardware testing</Spoiler></li>
                                <li><Spoiler type="disabled" title="Nosecone Separation Engineer">You will be researching, designing, and testing a separation system that will eject the nosecone at apogee. Along with creating the separation system, you will also be involved with designing a test to verify the system. Your job will also involve helping with general research within the nosecone subteam. This position can be either remote or in-person. <br/><br/> Desired Skills: <br/>Solidworks Experience, Interest in Manufacturing (Fiberglass Layups)</Spoiler></li>
                            </ul>
                            <li>Structures</li>
                            <ul>
                                <li><Spoiler type="disabled" title="Physical Integration Engineer">You will work on the assemblies of each intertank, including fluid and electronics components. We will start make the assemblies based on the CAD we have been working so far. By the end of summer, we should have a completed assemblies instruction. You will also work on the production TXE-2 engine mount and raceway over the summer.  <br/><br/> Desired Skills: <br/>Experience with solidworks</Spoiler></li>
                                <li><Spoiler type="disabled" title="Hold Down Engineer">You will work on the design of the hold down mechanism and handle the integration with other systems. <br/><br/> Desired Skills: <br/>Experience with solidworks.</Spoiler></li>
                            </ul>
                            <li>Production</li>
                            <ul>
                                <li><Spoiler type="disabled" title="Production Engineer">You will collaborate with other production engineers, provide guidance to design teams about best manufacturing principles with solidworks drawings, and help machine custom parts.<br/><br/> Desired Skills: <br/>Prior machining skills and an interest in manufacturing.</Spoiler></li>
                            </ul>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h3>&nbsp;</h3>
                        <ul className={styles.openpositions}>
                            <li>Finance and Strategy</li>
                            <ul>
                                <li><Spoiler type="disabled" title="Budgeting Manager">You will collaborate to plan spending with the goal of keeping TREL within its margin of safety. As a financial analyst, you will support our Finance and Strategy team through thoughtful analysis of cost expenditures and project forecasts for TREL's $1M Halcyon rocket.<br/><br/> Desired Skills: <br/>Microsoft Excel and Powerpoint is a plus</Spoiler></li>
                                <li><Spoiler type="disabled" title="Corporate Development">You will be directly responsible for sourcing, developing, and maintaining our vendor relationships. To date, TREL has received over $400k of cash and donations in kinds from companies like Blue Origin, AWS, EOS, NI, and many others.<br/><br/> Desired Skills: <br/>Salesforce is a plus</Spoiler></li>
                                <li><Spoiler type="disabled" title="Procurement Liaison">You will bridge the gap between our engineering system leads and the finance team as you manage TREL's supply chain by interfacing with Corporate Development and Budget Management. Our rocket, Halcyon, has a complex global supply chain that requires meticulous management to ensure we maintain on schedule.<br/><br/> Desired Skills: <br/>Microsoft Suite, Salesforce, and Procurify is a plus</Spoiler></li>
                            </ul>
                            <li>Outreach</li>
                            <ul>
                                <li><Spoiler type="disabled" title="STEM Educator">You will help create educational and engaging content for students, inspiring young minds to explore rocketry and STEM. You will explore scientific concepts, applications, and fun activitiies, and inspire the our next generation of rocketeers.<br/><br/> Desired Skills: <br/>Friendly with people and children</Spoiler></li>
                                <li><Spoiler type="disabled" title="Outreach Coordinator">You will organize outreach projects and events, create demos that demonstrate rocketry and STEM, organize and plan events, and develop strong communication and project management skills. <br/><br/> Desired Skills: <br/>Friendly with people and children</Spoiler></li>
                            </ul>
                            <li>Communications</li>
                            <ul>
                                <li><Spoiler type="disabled" title="Public Relations Lead">You are the administrative force behind the face of TREL. You will manage the vision and integrity of TREL's public image. You make sure all team logistics are ironed out so the PR subteams can operate at full capacity.<br/><br/> Desired Skills: <br/>Strong organizational and communication skills.</Spoiler></li>
                                <li><Spoiler type="disabled" title="Content Sublead">You will be responsible for the short-term visions and goals of TREL’s Public Relations team. This subteam includes social media, copywriting, photography, videography, and graphic design.  To help the content team run smoothly, another of your responsibilities will include giving critiques and sending PR team members out in pairs (writer + visual) to create content.<br/><br/> Desired Skills: <br/>Strong organizational and communication skills</Spoiler></li>
                                <li><Spoiler type="disabled" title="Strategy Sublead">You will be responsible for the long-term visions and goals of TREL’s Public Relations team. This subteam includes website development and strategic planning, as well as any long-term branding objectives.<br/><br/> Desired Skills: <br/>Texas Media or audience research experience is a plus</Spoiler></li>
                                <li><Spoiler type="disabled" title="Social Media Coordinator">You will directly manage two or three social media platforms simultaneously potentially including Twitter, LinkedIn, Instagram, and Facebook. This role will be a fantastic opportunity for anyone to expand their social media experience while working for one of the largest interdisciplinary collegiate rocket labs in the nation.<br/><br/> Desired Skills: <br/>Great organizational and communication skills</Spoiler></li>
                                <li><Spoiler type="disabled" title="Copywriter">You will gain scientific communication experience by writing about our engineering milestones for a collegiate rocket lab that manages $1.5 Mil in capital and resources. There are many eyes on the work that we are creating, and we are seeking passionate writers who love to share knowledge with broader audiences.<br/><br/> Desired Skills: <br/>Good communication and people skills</Spoiler></li>
                                <li><Spoiler type="disabled" title="Graphic Designer">You will create compelling visual media that will be seen (and possibly worn) by industry leaders, our corporate partners, and your fellow UT students. You will practice giving and receiving creative feedback. <br/><br/> Desired Skills: <br/>Adobe Creative Suite—Illustrator Preferred. Portfolio is required to apply.</Spoiler></li>
                                <li><Spoiler type="disabled" title="Photographer">You will help shoot and edit photos of our different teams and how they contribute to our Halcyon rocket. We are focusing on those who build these big and sleek machines. You will help pioneer new ways to communicate scientific ideas to large audiences.<br/><br/> Every photoshoot will be a different creative endeavor where you will work closely with our teammates to bring aerospace to life.</Spoiler></li>
                                <li><Spoiler type="disabled" title="Videographer">You will produce a number of short, advertising-style creative films about TREL and its milestones. <br/> <br/>TREL’s ideal videographer candidates have a healthy knowledge of relevant video software, a love for learning new things, a passion for producing engaging, creative, fresh video content, the ability to work well with others, skills to operate relevant equipment, and an interest in STEM programs outside of the visual arts.</Spoiler></li>
                                <li><Spoiler type="disabled" title="Web Developer">You will work closely with teams across the lab to showcase TREL projects through interactive web experiences. Your role is crucial to our public image, as our primary information hub and content network will center around our website. You will learn to program in react.js through a library called next.js.<br/><br/> Desired Skills: <br/>Front- or Back-end web development experience. Basic understanding of HTML, CSS, js.</Spoiler></li>
                            </ul>
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