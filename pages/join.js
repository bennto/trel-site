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
    var positions = [
        {
            id: 0,
            title: '',
            desc: '',
        },
        {
            id: 1,
            title: 'Avionics Hardware',
            desc: 'Avionics Hardware is concerned with all of the physical electronics onboard Halcyon. This includes the physical power system (which makes sure the rest of the rocket can actually function), the physical telemetry systems (which allows for communication with the ground for data collection and flight termination sequences), and the physical connections between all devices and their associated flight computers for data collection.',
        },
        {
            id: 2,
            title: 'Avionics Software',
            desc: 'Create the flight software which controls the vehicle in flight, the mission control software which monitors the vehicle from the ground, and the hardware-in-the-loop testing system used to validate the flight computer in simulated flight-like conditions.​',
        },
        {
            id: 3,
            title: 'Fins',
            desc: 'The role of the Fins team is to maintain the heading of the rocket throughout the flight to ensure that the rocket will reach apogee. The Actuated Fins will mainly be used in the beginning of the flight when the atmosphere is denser and will also allow for the rocket to rapidly correct of the initial 3 degree offset off the rail. The system will consist of 4 actuating fin systems all running control loops that will autonomously correct the heading the heading of the rocket throughout flight. ',
        },
        {
            id: 4,
            title: 'Fluids',
            desc: 'The fluids sub-team is responsible for designing a system capable of delivering cryogenic liquid oxygen, volatile RP-1 and highly pressurized helium gas from the ground system to Halcyon\'s COPV\'s, and from there to the Halcyon\'s engine, all of which must be done in a safe, timely, and highly precise manner The fluids system is in three different parts of the rocket, so it requires meticulous configuration in the overall rocket to fit everything. Likewise, the sensors in the fluids system directly affect the power needed for the rocket. In the timeline of TREL, the fluids system is continuous throughout all stages of development.​',
        },
        {
            id: 5,
            title: 'Guidance, Navigation, and Control',
            desc: 'The GNC team is primarily tasked with determining the ideal flight path for the vehicle, estimating the vehicle\'s state throughout the flight, and ensuring that the vehicle remains stable along its nominal trajectory.​',
        },
        {
            id: 6,
            title: 'Hotfire',
            desc: 'This stand involves integrated fluids systems, electronics hardware, and software (LabVIEW and MATLAB). This project also involves working with the propulsion team and creating test plans and procedures. Working on this projects, you will gain hands-on experience with all aspects of systems design and manufacturing as well as test operations and be a part of a focused team environment with a lot of communication.​',
        },
        {
            id: 7,
            title: 'Launch Ops + Weather Balloon',
            desc: 'Launch Operations plans and scopes the details of our launch. Launch Operations covers overviewing launch site, test procedures, and concept of operations in order to successfully launch. Responsibilities include interfacing with ground structure equipment, communications with ground software, and scheduling rocket fueling and fluid lines. Launch Ops also focuses on gathering atmospheric data, done by the Weather Balloon team. Weather Balloon involves creating custom payloads, using telemetry to receive atmospheric data and video, and launching/recovering payloads via weather balloon. Weather balloons will be used on launch day to get atmospheric data for GNC\'s 6DOF simulation and are currently being used to test Payload team sensors and procedures.​',
        },
        {
            id: 8,
            title: 'Payload',
            desc: 'The Payload will be housed in the nosecone of the rocket and supported by a lightweight chassis. At 100 km, the nosecone detaches from the rocket with the payload inside. Once clear of the rocket, the Payload will eject from the nosecone using a spring and rail system. The Payload is an isolated system from Halcyon, because it must be able to communicate information about temperature, pressure, orientation, and location to the ground after it ejects from the nosecone. The design will utilize a zero-pressure balloon deployed using an onboard Helium tank. This balloon will deploy, along with a drogue parachute, at around 30-40 km altitude after free fall. Once neutral buoyancy is achieved, the balloon deflates and the main chute delivers the Payload to the ground safely.​',
        },
        {
            id: 9,
            title: 'Production',
            desc: 'Production fabricates the designs. Production uses the ME machine shop and various machining equipment to transform our CADs into a reality. Members of the production team take 3D drawings and focus on precision and detail when machining parts.',
        },
        {
            id: 10,
            title: 'Propulsion',
            desc: 'Propulsion is responsible for the design and analysis of all of TREL\'s engines and nozzles. Currently, the propulsion team\'s work is split between our two main engines; a 200 lb heat sink test engine which is nearing its first hotfire test, and the flight-ready Havoc engine which will power the Halcyon rocket to the edge of space. When completed, Havoc\'s regeneratively cooled, pressure fed, additively manufactured design will be one the most advanced ever produced by a collegiate rocketry lab.',
        },
        {
            id: 11,
            title: 'Recovery',
            desc: 'Recovery has several mission critical responsibilities including but not limited to the safe recovery of Halcyon. Our major projects include:\n1) The design and fabrication of the nosecone and the rocket\'s only separation system.\n2) The development of the 2-stage vehicle recovery system and nosecone recovery system.\n3) The planning and execution of drop tests.\n4) The development, and testing of relevant circuits and GPS tracking systems for our components.',
        },
        {
            id: 12,
            title: 'Systems Integration Team',
            desc: 'SIT is responsible for test plans that involve multiple sub systems of the rocket, like the integrated stage test, collapse factor test, and control systems and navigation tests. SIT determine the vehicle requirements that shall be tested, the test article configuration, and what sensor data must be collected to determine test success.​',
        },
        {
            id: 13,
            title: 'Stage Test',
            desc: 'Stage Test works closely with Launch Ops to design, manufacture, and test the components necessary to load and launch the rocket. Systems include the Ground Structure and Ground Support Equipment (GSE) to aid in supporting the weight of the rocket as well as fluid loading. Stage also deals with integration of the different moving parts, and ensures interteam testing is successful.',
        },
        {
            id: 14,
            title: 'Structures',
            desc: 'The Structures team’s role in TREL is to design the fuel tanks, airframe, and integration mounts the rocket. The fuel tanks are 3 composite overwrapped pressure vessels (COPVs) and comprise most of the volume of the rocket. The airframe is a carbon fiber composite sandwich structure that connects the fuel tanks together. They also design secondary structures for mounting avionics, sensors, fluid lines, valves, etc. as well as an engine mount that transfers thrust from the engine to the rest of the rocket.​',
        },
        {
            id: 15,
            title: 'TVC',
            desc: 'TVC, or Thrust Vector Control is a form of Active control to control the trajectory of the rocket with the engine itself. More specifically, it\'s a two degree of freedom gimbal that attaches to the engine to redirect its thrust around the center axis. Our TVC team is currently in development, with a completed design and model. Going forward, the TVC team is preparing for design reviews, manufacturing, and testing.',
        },
    ]

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <body className={styles.dadbod}>
                <div className={styles.hero}>
                    <h1 className={styles.head}>We're Recruiting!</h1>
                    <h4 className={styles.sub}>check out our process below</h4>
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
                                    <h4 className={styles.sessionTime}>August 29, 2022, 6:30 - 8:00pm</h4>
                                </div>
                                <div className={styles.sessionDate}>
                                    <h4 className={styles.sessionHead}>Session 2: </h4>
                                    <h4 className={styles.sessionTime}>August 30, 2022, 6:30 - 8:00pm</h4>
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
                            </motion.div>
                        </div>
                        <div className={styles.posIndex}>
                            {positions.slice(1,positions.length).map((position) => (
                                <div>
                                    <hr className={styles.border} />
                                    <div onMouseEnter={() => {
                                        setOpen(position.id)
                                    }} onMouseLeave={() => {
                                        setOpen(0)
                                    }}>
                                        <Spoiler className={styles.collapsible} title={position.title}>{position.desc}</Spoiler>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.three}>
                        <div className={styles.text}>
                            <div className={styles.head}>
                                <h1 className={styles.number}>3</h1>
                                <div className={styles.break} />
                                <h3>Fill out the application</h3>
                            </div>
                            <div className={styles.body}>
                                <h5 className={styles.info}><a className={styles.apply} href="https://forms.gle/PMrTbXnPGQy96gEz5" target="_blank">Fill out our application form</a> to apply to the teams you're interested in. We're looking mostly for your passion, thought process, and personality. Resumes are optional, but helpful.</h5>
                                <div className={styles.sessionDate}>
                                    <h4 className={styles.sessionHead}>Apps Open:</h4>
                                    <h4 className={styles.sessionTime}>August 30, 2022</h4>
                                </div>
                                <div className={styles.sessionDate}>
                                    <h4 className={styles.sessionHead}>Apps Close: </h4>
                                    <h4 className={styles.sessionTime}>September 3, 2022</h4>
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
                                    <h4 className={styles.sessionTime}>September 1, 2022</h4>
                                </div>
                                <div className={styles.sessionDate}>
                                    <h4 className={styles.sessionHead}>Decisions: </h4>
                                    <h4 className={styles.sessionTime}>September 15, 2022</h4>
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
                                    <h4 className={styles.head}>You must be a permenant US resident or citizen.</h4>
                                    <h5 className={styles.info}>We don't like it either, but the law is the law.</h5>
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