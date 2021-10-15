import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/halcyon.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'


export default function Halcyon () {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={styles.hero}>
                <div className={styles.project_title}>
                    <h1>Launch Vehicle</h1>
                    <h2>Halcyon</h2>
                    <h3>Liquid Propelled—Student Built—100km Capable</h3>
                </div>
                <img className={styles.halcyon} src={'./images/Halcyon.png'} />
            </section>
            <section className={styles.overview}>
                <div>
                    <h1>Overview</h1>
                    <p>Halcyon is our student-designed liquid propellant rocket that will
    launch past the Karman Line.<br/><br/>
                    We’re using the most advanced technologies and
    pushing the boundaries of collegiate rocketry.</p>
                    <ul>
                        <li><p>thrust <br/>3,500 lbf</p></li>
                        <li><p>propellants <br/>RP-1 LOx</p></li>
                        <li><p>apogee <br/>100+ km</p></li>
                        <li><p>payload <br/>11 lbs</p></li>
                        <li><p>max speed <br/>mach 3.5</p></li>
                    </ul>
                </div>
                <img className={styles.halcyon} src={'./images/Halcyon.png'} />
            </section>
            <section className={styles.compete}>
                <div className={styles.container}>
                    <h1>Built to Compete</h1>
                    <p>Our Halcyon rocket is going head-to-head with
    other student rocket groups across America.</p>
                <div className={styles.flex}>
                    <img src={'./logos/baseeleven.svg'} />
                    <a className={utilStyles.textbutton} href="https://base11spacechallenge.org/" target="_blank">learn more</a>
                </div>
                </div>
                <img className={styles.vacuum} src={'./images/vacuum.png'} />
            </section>
            {/* <section className={styles.havoc}>
                <div>
                    <h1>Built to Compete</h1>
                    <p>Our Halcyon rocket is going head-to-head with
    other student rocket groups across America.</p>
                </div>
                <img className={styles.havocfire} src={'./images/havoc.png'} />
            </section> */}
        </Layout>
    )
}