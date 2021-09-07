import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/facilities.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

export default function Facilities () {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={styles.title}>
                <h1>Facilities</h1>
                <h2>Our spaces give us the flexibility to design, build, test, and gain valuable engineering experience.</h2>
            </section>
            <section className={styles.facility}>
                <ul>
                    <li>
                        <a className={styles.active}>Engineering and Education Research Center</a>
                    </li>
                    <li>
                        <a>J.J. Pickle Research Center</a>
                    </li>
                    <li>
                        <a>Briggs Test Site</a>
                    </li>
                </ul>
                <div className={styles.content}>
                    <img src={'../images/fac-1.jpg'} />
                    <img src={'../images/fac-2.jpg'} />
                    <div>
                        <h3>Our gathering place</h3>
                        <p>Our spaces give us the flexibility to design, build, test, re-test, and do real rocketry.</p>
                    </div>
                    <div>
                        <h3>A Design Hub</h3>
                        <p>Our spaces give us the flexibility to design, build, test, re-test, and do real rocketry.</p>
                    </div>
                    <div>
                        <h3>The Simulation Lab</h3>
                        <p>Our spaces give us the flexibility to design, build, test, re-test, and do real rocketry.</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}