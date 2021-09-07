import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import styles from '../styles/donate.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function Donate () {
    return (
        <Layout>
            <Head>{siteTitle}</Head>
            <section className={styles.hero}>
                <div>
                    <h1>Help us launch into space</h1>
                    <h2>we would love to have you on our team</h2>
                </div>
            </section>
            <section className={styles.donate}>
                <p>Making space travel accessible to everyone takes a village, and some support. We work with organizations across the country who believe in our mission and support our goals through financial support, material donations, and mentorship. <br /> <br />
                If you are interested in becoming a part of our vision, check out our donation package, go to our donation site or email us. Thank you for your support!</p>
                <div className={styles.buttons}>
                    <a href="http://www.trel.typical.systems/TREL%20Donation%20Package.pdf" target="_blank">See our Donation Packet</a>
                    <a href="https://utdirect.utexas.edu/apps/utgiving/online/nlogon/?menu1=ENTL&solicit=TRL&response=DJ0TRL" target="_blank">Donate to TREL</a>
                </div>
            </section>
            <section className={styles.tiers}>
                <div>
                <h1>Our Sponsors</h1>
                <h2>Halcyon</h2>
                <div className={styles.supporters}>
                    <img src={'./logos/cockrell.svg'} />
                    <img src={'./logos/firefly.svg'} />
                </div>
                <h2>Trailblazer</h2>
                <div className={styles.supporters}>
                    <img src={'./logos/ASE.svg'} />
                    <img src={'./logos/ni.svg'} />
                    <img src={'./logos/eos.svg'} />
                    <img src={'./logos/aws.svg'} />
                </div>
                <h2>Pioneer</h2>
                <div className={styles.supporters}>
                    <img className={styles.smallimage} src={'./logos/procurify.svg'} />
                    <img src={'./logos/emerson.svg'} />
                    <img className={styles.smallimage} src={'./logos/boeinglogo.svg'} />
                    <img className={styles.smallimage} src={'./logos/blueorigin.svg'} />
                </div>
                </div>
            </section>
        </Layout>
    )
}