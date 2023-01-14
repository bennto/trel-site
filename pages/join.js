import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head'
import { motion } from "framer-motion"
import Layout, {siteTitle} from '../components/layout'
import DateToDate from '../components/details/datetodate'
import styles from '../styles/join.module.scss'
import Spoiler from '../components/spoiler'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

export default function Join () {
    
    const [open, setOpen] = useState(0);
    const slideFade = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.2
            }
        }
    }

    const positions = [
        {
            id: 0,
            title: '',
            desc: '',
            bullets: []
        },
        {
            id: 1,
            title: 'Avionics Hardware',
            desc: 'Avionics Hardware is concerned with all the physical electronics onboard Halcyon. This includes the physical power and telemetry systems and the connections between all devices and their associated flight computers for data collection. Our team members gain vast knowledge in the workings of avionics systems in the rocket industry. This ranges from the process of designing and assembling wire harnesses to the design and manufacturing of batteries and their supportive components. The team also utilizes different software for CAD modeling, PCB design, and even testing. Members in the RF sub-team also gain a thorough understanding of radio communication and how to utilize it in different applications.',
            bullets: []
        },
        {
            id: 2,
            title: 'Avionics Software',
            desc: 'The AvSoftware team creates flight software that controls the vehicle in flight and Mission Control Software which monitors the vehicle from the ground. The team also develops the hardware-in-the-loop testing system used to validate the flight computer in simulated flight-like conditions. Our members gain experience with ground antennae and RF devices, and work primarily in Python and C++.',
            bullets: []
        },
        {
            id: 3,
            title: 'Fins',
            desc: 'The Fins team is tasked with designing, manufacturing, and testing the fins aboard Halcyon. To do so, we work extensively with CFD and CADs to create fin geometries and use various manufacturing processes to bring those digital models to life. We also conduct a variety of tests to ensure that the designed and manufactured fins meet our specified criteria.',
            bullets: []
        },
        {
            id: 4,
            title: 'Fluids',
            desc: 'The Fluids team is responsible for designing a system capable of delivering cryogenic liquid oxygen, volatile RP-1, and highly pressurized helium gas from the ground system through Halcyon\'s COPVs to the engine in a safe, timely, and highly precise manner. This system interacts with several parts of the rocket and is continuous throughout all stages of Halcyon\’s development. Our team members develop an understanding of how fluids behave and fluid dynamics which is applicable to wide variety of industries.  We also work with advanced hardware, instrumentation, and CAD and gain hands-on experience assembling fluids systems.',
            bullets: []
        },
        {
            id: 5,
            title: 'Guidance, Navigation, and Control',
            desc: 'The Guidance, Navigation, and Control team is primarily tasked with determining the ideal flight path for the vehicle, estimating the vehicle\'s state throughout the flight, and ensuring that the vehicle remains stable along its nominal trajectory. Members of the team use Simulink and C++ to create a computer model of Halcyon\'s flight dynamics and then use control theory to build algorithms that will actively control the rocket in flight. ​',
            bullets: []
        },
        {
            id: 6,
            title: 'Hotfire',
            desc: 'The Hotfire team creates the engine test stand and tests Halcyon’s engine. Their stand combines integrated fluids systems, electronic hardware, and software (LabVIEW and MATLAB). The team also integrates extensively with the propulsion team to create test plans and procedures. Our team gains hands-on experience with all aspects of systems design, manufacturing, and test operations in a team environment focused on communication.​',
            bullets: []
        },
        {
            id: 7,
            title: 'Launch Ops + Weather Balloon',
            desc: 'Launch Operations plans and scopes the details of our launch. This includes overviewing the launch site, test procedures, and the order of launch operations. The team’s responsibilities include interfacing with ground structure equipment, communications with ground software, and scheduling rocket fueling and fluid lines. Launch Ops also focuses on gathering atmospheric data by the Weather Balloon team. This team offers the opportunity to use CAD and structural analysis as we research and design a launch rail for Halcyon. Launch Ops will also interact with manufacturers and other teams to source materials and plan launch day logistics. The Weather Balloon team creates custom payloads using telemetry to receive atmospheric data and video, and launching/recovering payloads via weather balloon. Weather balloons will be used on launch day to get atmospheric data for GNC\'s 6DOF simulation and are currently being used to test Payload team sensors and procedures.',
            bullets: []
        },
        {
            id: 8,
            title: 'Payload',
            desc: 'The Payload will be housed in the nosecone of the rocket and supported by a lightweight chassis. At 100 km, the nosecone detaches from the rocket with the payload inside, from then on the Payload operates entirely autonomously. The Payload has two primary missions; Mesospheric UV Data Collection, and proving a rapid inflation neutral buoyancy meteorological balloon concept. The Payload is very compact and highly integrated, and our team comes from a very diverse suite of backgrounds. All Payload members get hands on experience with test engineering, design, and manufacturing.​',
            bullets: []
        },
        {
            id: 9,
            title: 'Production',
            desc: 'Production fabricates the designs. Production uses the ME machine shop and various machining equipment to transform our CADs into a reality. Members of the production team take 3D drawings and focus on precision and detail when machining parts.',
            bullets: []
        },
        {
            id: 10,
            title: 'Propulsion',
            desc: 'Propulsion is responsible for the design and analysis of TREL\'s engines and nozzles. Currently, the propulsion team\'s work is split between our two main engines; TXE-2 (manufactured by EOS and Elementum) and the flight-ready Havoc engine which will power the Halcyon rocket to the edge of space. When completed, Havoc\'s regeneratively cooled, pressure fed, additively manufactured design will be one the most advanced ever produced by a collegiate rocketry lab. Currently, the team has completed post-processing the TXE-2 engine and is beginning testing. Our members gain a holistic understanding of TREL’s engines and their testing procedures as well as experience in Python.',
            bullets: []
        },
        {
            id: 11,
            title: 'Recovery',
            desc: 'Recovery has several mission critical responsibilities including but not limited to the safe recovery of Halcyon. Our major projects include: 1) The design and fabrication of the nosecone and the rocket\'s only separation system. 2) The development of the 2-stage vehicle recovery system and nosecone recovery system. 3) The planning and execution of drop tests. Our members gain various experience - including the development and testing of relevant circuits and GPS tracking systems for our components.',
            bullets: []
        },
        {
            id: 12,
            title: 'Systems Integration Team',
            desc: 'The System Integrations Team (SIT) is a bridge between the admin team and design systems. SIT members act as a point of contact between systems and work on full rocket integration problems. With CAD and system engineering principles, SIT defines the integration of the virtual and physical vehicle assembly. SIT acts as a point of contact between subteams and works on full rocket integration problems. As a member, you\'ll work on projects that involve maintaining team-to-team communication and documentation or ones that involve multiple teams working together.​',
            bullets: []
        },
        {
            id: 13,
            title: 'Stage Test',
            desc: 'Stage Test works closely with Launch Ops to design, manufacture, and test the components necessary to load and launch the rocket. Systems include the Ground Structure and Ground Support Equipment (GSE) to aid in supporting the weight of the rocket as well as fluid loading. Stage also deals with integration of the different moving parts and ensures inter-team testing is successful. Our teams include engineers working in fluids, structures, and electronics who will learn to problem solve on a large-scale debugging project.',
            bullets: []
        },
        {
            id: 14,
            title: 'Structures',
            desc: 'The Structures team’s role in TREL is to design the fuel tanks, airframe, and integration mounts the rocket. The fuel tanks are 3 composite overwrapped pressure vessels (COPVs) and comprise most of the volume of the rocket. The airframe is a carbon fiber composite sandwich structure that connects the fuel tanks together. They also design secondary structures for mounting avionics, sensors, fluid lines, valves, etc. as well as an engine mount that transfers thrust from the engine to the rest of the rocket.​',
            bullets: []
        },
        {
            id: 15,
            title: 'TVC',
            desc: 'TVC, or Thrust Vector Control is the primary system that controls Halcyon’s trajectory. More specifically, it\'s a two degree of freedom gimbal that attaches to the engine to redirect its thrust around the center axis.  Currently, we are finalizing the design and running simulations to ensure both our system and test stand will be structurally sound while meeting all the actuation requirements. New members will experience mechanical design and prototyping, and hopefully manufacturing and testing integration as we transition out of our design cycle.',
            bullets: []
        },
        {
            id: 16,
            title: 'Communications',
            desc: 'The Communications team is responsible for creating and maintaining TREL’s brand through our website, newsletters, and social media content. We interact extensively with all the engineering teams to highlight their work on Halcyon and share TREL’s mission with the community. Our team members work with a variety of tools and gain experience in:',
            bullets: [
                'Website development using HTML, CSS, JavaScript',
                'Technical Writing and newsletter tools such as MailChimp', 
                'Social media advertising on Instagram and LinkedIn ',
                'Creative content brainstorming and creation in photography and videography',
                'Working in an interdisciplinary team'
            ]
        },
        {
            id: 17,
            title: 'Outreach',
            desc: 'The Outreach team is dedicated to increasing community interest in rockets and in rocketry. We travel around the Austin area visiting schools, orphanages, and doing UT events to educate students about the various fields involved in the rocket industry. Our goal is to develop a passion for space in students. Our members develop skills in:',
            bullets: [
                'Public speaking: Communicating with a wide variety of people with various levels of space knowledge, from students to professionals',
                'Professional communication: Writing emails reaching out to potential partners and schools',
                'Simplification: Break down complex ideas to educate students',
                'Creative planning: Producing mini experiments to educate students'
            ]
        },
        {
            id: 18,
            title: 'Diversity, Equity, and Inclusion',
            desc: 'The TREL Diversity Equity and Inclusion Team is an integral part of the Lab. TREL is committed to ensuring that our lab provides equal opportunity and inclusion. Members gain skills and work on projects that are like those in the aerospace industry. Our team members:',
            bullets: [
                'Organize DEI speaker events and trainings',
                'Analyze lab metrics and feedback forms, write grants, and improve the recruitment process',
                'Communicate and maintain relationships with all TREL teams and DEI sources in the Cockrell School of Engineering',
                'Communicate with team members, TREL teams, and DEI sources within the Cockrell School of Engineering on a regular basis'
            ]
        },
        {
            id: 19,
            title: 'Corporate Development',
            desc: 'The Corporate Development team actively develops and maintains partnerships and corporate support for TREL\'s projects. Our team members gain experience advocating for TREL\'s interests and working with professionals in various industries and across Cockrell. ',
            bullets: []
        },
        {
            id: 20,
            title: 'Finance and Strategy',
            desc: 'Finance and Strategy (F&S) manages TREL’s financial and operational positioning through finance and procurement. Together, F&S ensures that the lab properly allocates its $1M budget, secures critical partnerships, and assists the engineering teams in procuring parts/supplies so they can build the best rocket possible. Our team members actively:',
            bullets: [
                'Maintain the budgetary framework of funding for lab’s procurement, production, operations, & testing activities',
                'Apply performance reporting & forecast appropriate fund issuances to model TREL’s spending rates & burnout capacities',
                'Track operational & administrative expenditures to build in-depth quarterly reports that represent lab’s financial logistics'
            ]
        }
    ]
    const positionsEng = {
        start: 1,
        end: 16
    }
    const positionsBus = {
        start: 16,
        end: 21
    }

    function RoleList(props) {
        return(
            <div className={styles.posIndex}>
                {positions.slice(props.start,props.end).map((position) => (
                    <div>
                        <hr className={styles.border} />
                        <div onMouseEnter={() => {
                            setOpen(position.id)
                        }} 
                        // onMouseLeave={() => {
                        //     setOpen(0)
                        // }}
                        >
                            <Spoiler className={styles.collapsible} title={position.title} bullets={position.bullets}>{position.desc}</Spoiler>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <body className={styles.dadbod}>
                <div className={styles.hero}>
                    <h1 className={styles.head}>We Are Recruiting!</h1>
                    <h4 className={styles.sub}>check out our application process below</h4>
                </div>
                <div className={styles.infoSession}>
                    <div className={styles.one}>
                        <div className={styles.text}>
                            <div className={styles.head}>
                                <h1 className={styles.number}>1</h1>
                                <div className={styles.break} />
                                <h3>Attend an info session</h3>
                            </div>
                            <div className={styles.body}>
                                <h5 className={styles.info}>All applicants must attend at least one info session. Info sessions this semester will be held at the Engineering Education and Research Center (EER).</h5>
                                <div className={styles.sessionDate}>
                                    <h4 className={styles.sessionHead}>Address: </h4>
                                    <h4 className={styles.sessionTime}>EER Mulva, room 0.904</h4>
                                </div>
                                <div className={styles.sessionDate}>
                                    <h4 className={styles.sessionHead}>Session 1: </h4>
                                    <h4 className={styles.sessionTime}>January 17, 2023, 6:00 - 7:30pm</h4>
                                </div>
                                <div className={styles.sessionDate}>
                                    <h4 className={styles.sessionHead}>Session 2: </h4>
                                    <h4 className={styles.sessionTime}>January 18, 2023, 6:00 - 7:30pm</h4>
                                </div>
                               
                            </div>
                        </div>
                        <div className={styles.mapBorder}>
                            <iframe className={styles.mapImbed} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1722.610123488815!2d-97.73637627999825!3d30.287790980683898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59b2584cfb7%3A0xfc70be33186e5baa!2sEngineering%20Education%20and%20Research%20Center%20(EER)!5e0!3m2!1sen!2sus!4v1630706813293!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                    <div className={styles.two}>
                        <div className={styles.text}>
                            <div className={styles.head}>
                                <h1 className={styles.number}>2</h1>
                                <div className={styles.break} />
                                <h3>Browse our teams</h3>
                            </div>
                            <div className={styles.body}>
                                <h5 className={styles.info}>We're a BIG lab with lots of different teams doing uniquely cool things. Read through some of the team descriptions to discover what suits your fancy. </h5>
                                <h5 className={styles.info}>We recommend choosing and applying for several different teams (max 3), as different teams may be looking to onboard more or fewer new Trellians this semester.</h5>
                            </div>
                            <motion.div className={styles.descriptions}
                                        variants={slideFade}
                                        initial='hidden'
                                        animate={open != 0 ? 'show' : 'hidden'}>
                                {open != 0 && <hr className={styles.border} />}
                                <h3 className={styles.title}>{positions[open].title}</h3>
                                <h6 className={styles.information}>{positions[open].desc}</h6>
                                <ul>
                                    {positions[open].bullets.map((bullet) => (
                                            <li className={styles.information}>{bullet}</li>
                                        
                                        
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                        <div className={styles.rightSide}>
                            <div className={styles.eng}>
                                <h6 className={styles.roleTitle}>Engineering</h6>
                                <RoleList start={positionsEng.start} end={positionsEng.end} />
                            </div>
                            <div className={styles.bus}>
                                <h6 className={styles.roleTitle}>Business</h6>
                                <RoleList start={positionsBus.start} end={positionsBus.end} />
                            </div>
                        </div>
                        {/* <div className={styles.posIndex}>
                            {positions.slice(1,positionsEng.end).map((position) => (
                                <div>
                                    <hr className={styles.border} />
                                    <div onMouseEnter={() => {
                                        setOpen(position.id)
                                    }} 
                                    // onMouseLeave={() => {
                                    //     setOpen(0)
                                    // }}
                                    >
                                        <Spoiler className={styles.collapsible} title={position.title}>{position.desc}</Spoiler>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                    </div>
                    <div className={styles.three}>
                        <div className={styles.text}>
                            <div className={styles.head}>
                                <h1 className={styles.number}>3</h1>
                                <div className={styles.break} />
                                <h3>Fill out the application</h3>
                            </div>
                            <div className={styles.body}>
                                {/* <h5 className={styles.info}>Apply to be in <a className={styles.apply} href="https://forms.gle/PMrTbXnPGQy96gEz5" target="_blank">engineering</a>, <a className={styles.apply} href="http://tinyurl.com/TrelDEI" target="_blank">DEI</a>, or <a className={styles.apply} href="https://forms.gle/tZKWcyyUiNyQjJxr9" target="_blank">outreach</a>. We're looking mostly for your passion, thought process, and personality. Resumes are optional, but helpful.</h5> */}
                                <h5 className={styles.info}>Our recruitment cycle has finished and we are no longer seeking applicants. Please check this page again next semester for more details!</h5>
                                <div className={styles.sessionDate}>
                                    <h4 className={styles.sessionHead}>Apps Open:</h4>
                                    <h4 className={styles.sessionTime}>January 17, 2023</h4>
                                </div>
                                <div className={styles.sessionDate}>
                                    <h4 className={styles.sessionHead}>Apps Close: </h4>
                                    <h4 className={styles.sessionTime}>January 20, 2023</h4>
                                </div>
                            </div>
                        </div>
                        <div className={styles.text2}>
                            <div className={styles.head}>
                                <h1 className={styles.number}>4</h1>
                                <div className={styles.break} />
                                <h3>Interview with our teams</h3>
                            </div>
                            <div className={styles.body}>
                                <h5 className={styles.info}>Wow! We were really impressed by your application and want to talk more with you. We'll send you an email and schedule a time that works for you. Come as you are, we want to know the real you.</h5>
                                <div className={styles.sessionDate}>
                                    <h4 className={styles.sessionHead}>Interview Begin:</h4>
                                    <h4 className={styles.sessionTime}>January 26, 2023</h4>
                                </div>
                                <div className={styles.sessionDate}>
                                    <h4 className={styles.sessionHead}>Decisions: </h4>
                                    <h4 className={styles.sessionTime}>February 3, 2023</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bonus}>
                        <div className={styles.text}>
                            <div className={styles.head}>
                                <h1 className={styles.number}>bonus</h1>
                                <div className={styles.break} />
                                <h3>Several additional considerations</h3>
                            </div>
                            <div className={styles.body}>
                                <div className={styles.bonusCard}>
                                    <h1 className={styles.number}>1</h1>
                                    <h4 className={styles.head}>Licensing is available for international students</h4>
                                    <h5 className={styles.info}>Contact us <a style={{color: 'rgb(230, 139, 41)'}} onClick={() => {
                                                                                                    const email = "texasrocketengineeringlab@gmail.com";
                                                                                                    navigator.clipboard.writeText(email);
                                                                                                    alert("Email copied to clipboard!")
                                                                                                }}>via email</a> for more information.</h5>
                                </div>
                                <div className={styles.bonusCard}>
                                    <h1 className={styles.number}>2</h1>
                                    <h4 className={styles.head}>Passion trumps talent, mindset is key.</h4>
                                    <h5 className={styles.info}>A resume is optional and experience is not required.</h5>
                                </div>
                                <div className={styles.bonusCard}>
                                    <h1 className={styles.number}>3</h1>
                                    <h4 className={styles.head}>This opportunity is unpaid.</h4>
                                    <h5 className={styles.info}>If we could pay all couple hundred of the folks in this lab, we would.</h5>
                                    </div>
                                <div className={styles.bonusCard}>
                                    <h1 className={styles.number}>4</h1>
                                    <h4 className={styles.head}>You must be 18 or older to join the lab.</h4>
                                    <h5 className={styles.info}>We look forward to your application and hope to speak to you soon!</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </Layout>
    )
}