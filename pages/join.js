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
                    {/* <div className={styles.card}>
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
                        <h3 style = {{visibility: "hidden"}}>blank</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1722.610123488815!2d-97.73637627999825!3d30.287790980683898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59b2584cfb7%3A0xfc70be33186e5baa!2sEngineering%20Education%20and%20Research%20Center%20(EER)!5e0!3m2!1sen!2sus!4v1630706813293!5m2!1sen!2sus" width="600" height="100%" allowfullscreen="" loading="lazy"></iframe>
                    </div> */}
                    <div className={styles.card}>
                        <h3>Click an Open Position</h3>
                        <ul className={styles.openpositions}>
                            <li>Finance and Strategy</li>
                            <ul>
                                <li><Spoiler title="Procurement Manager">The procurement manager is responsible for tracking orders and ensuring the procurement chain is being followed. You will act as the contact between business and engineering teams regarding procurement and ensure our procurement platform is up to date and working properly so orders can be placed. You will also act as the point of contact between vendors and the lab as necessary.
                                </Spoiler></li>
                                <li><Spoiler title="FP&A Analyst">In this position you will be focusing on planning and budgeting, performance reporting, and forecasting and modeling spending rates and burnout. You will be responsible for tracking expenses to ensure no overspending and building in-depth quarterly reports to be presented on our financial activity.
                                </Spoiler></li>
                                <li><Spoiler title="Grant Writer">The grant writer completes outlines and rough drafts of proposals (and transmittals) which will include executive summaries, organization credentials, and conclusions. You will meet deadline(s) by setting target dates for collecting information, finalizing rough drafts for proposals and transmittals (cover letters), beginning/ending reviews, and transitioning to the approval process
                                </Spoiler></li>
                            </ul>
                            <li>Corporate Development</li>
                            <ul>
                                <li><Spoiler title="Corporate Relations Specialist">The corporate relations specialist looks at sourcing companies, organizations, and institutions for prospective partnerships, sponsorship, and grants. You will be responsible for sourcing, managing, and closing partnership deals for the lab as well as working with the communications team to ensure all external business operations and relations are in order.
                                </Spoiler></li>
                                <li><Spoiler title="Business Development Analyst">This position is responsible for building and maintaining a CRM database for all corporate relations and business activities. You will be collecting, sorting, and analyzing data to come up with business strategies to improve business operations.
                                </Spoiler></li>
                            </ul>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h3>&nbsp;</h3>
                        <ul className={styles.openpositions}>
                        <li>Communications</li>
                            <ul>
                                <li><Spoiler title="Technical Writer">The technical writer will be writing regular internal newsletters to update the lab on progress. You will also be writing external newsletters to update our sponsors and the public on lab progress. You will be responsible for gathering information from all teams constantly throughout the semester and regularly compile and sort this data. 
                                </Spoiler></li>
                                <li><Spoiler title="Public Affairs Specialist">This position is responsible for writing and publishing press releases for partners, as well as sourcing and writing for news outlets and publications. The public affairs specialist will work with the technical writers to ensure all public affairs are in order. 
                                </Spoiler></li>
                                <li><Spoiler title="Social Media Specialist">You will be responsible for updating our social media pages regularly with content from the lab. You will be required to come up with ideas to increase publicity and engagement with TREL online. You will also attend workdays with engineers or when necessary to get visual content. 
                                </Spoiler></li>
                                <li><Spoiler title="Web Designer">You will help code pages and components of the TREL website using the Next.js framework. You will learn front-end web development skills such as HTML, CSS, and Javascript.
                                    <br /><br />Desired Skills: <br/><mark>Figma</mark> <mark>Adobe XD</mark> <mark>web design</mark> <mark>UI/UX</mark>
                                </Spoiler></li>
                                <li><Spoiler title="Web Developer">You will help design webpages and features of the TREL website. As your position largely requires you to harness the power of vector illustration software such as Figma or Adobe Illustrator, you will also learn aspects of UI / UX design.  
                                    <br /><br />Desired Skills: <br/><mark>Javascript</mark> <mark>CSS</mark> <mark>HTML</mark> <mark>ReactJS</mark> <mark>Next.js</mark> <mark>Visual Studio Code</mark>
                                </Spoiler></li>
                            </ul>
                            <li>Diversity and Inclusion</li>
                            <ul>
                                <li><Spoiler title="Diversity and Inclusion Associate">As one of the most important members in the lab you will conduct interviews with members to understand thoughts and opinions in the lab. You will be responsible for promoting diversity through outreach initiatives and act as a representative for members to come to with concerns relating to D&I. You will build and give presentations to increase member understanding of the importance of D&I in TREL and life.
                                </Spoiler></li>
                            </ul>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h3>Fill out the application</h3>
                        <p className={styles.desc}>Click <a style={{ color: "red" }} href="https://docs.google.com/forms/d/e/1FAIpQLScHv1a3RnDwjKsOldkD9GakO-5dSSqNM5nqAXbgVJSgmiCHDQ/viewform?usp=sf_link" target="_blank">here</a> to apply!</p>
                        <div className={styles.choices}>
                            <p className={styles.heading}>We want to see:</p>
                            <ul>
                                <li><p>Your passion</p></li>
                                <li><p>Your thinking</p></li>
                                <li><p>Who you are</p></li>
                                <li><p>A resume*</p></li>
                            </ul>
                        </div>
                        <DateToDate from={"Opened Friday Feb. 11th"} to={"Closed 11:59pm Sunday Feb. 20th"} />
                        <p className={styles.footnote}>We recommend submitting your apps ASAP.  </p>
                        <p className={styles.footnote}>* A resume is recommended, but optional. </p>
                    </div>
                    <div className={styles.card}>
                        <h3>Interview with our teams</h3>
                        <p className={styles.desc}>We will schedule a time that works for you. Come as you are, we want to know the real you.</p>
                        <DateToDate from={"Began Monday Feb. 21st"} to={"Decisions Sunday Feb. 27th"}/>
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