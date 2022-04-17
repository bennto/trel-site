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
            {/* <div className={styles.hornraiser}>
                <a href="https://hornraiser.utexas.edu/project/28076" target="_blank">
                    <img className={styles.rocketeers} src="./images/Posts/HornRaiserLogo.jpeg" />
                    <div className={styles.break} />
                    <div className={styles.text}>
                        <h1>Check out our Hornraiser!</h1>
                        <p>We can't continue to do what we do without you!</p>
                    </div>
                </a>
            </div> */}
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
                    <a onClick={() => {alert("New donation packet coming soon!")}} >See our Donation Packet</a>
                    <a href="https://utdirect.utexas.edu/apps/utgiving/online/nlogon/?menu1=ENTL&solicit=TRL&response=DJ0TRL" target="_blank">Donate to TREL</a>
                </div>
            </section>
            <section className={styles.tiers}>
                <div>
                <h1>Our Sponsors</h1>
                <h2>Halcyon</h2>
                <div className={styles.supporters}>
                    <a href="https://cockrell.utexas.edu/" target="_blank">
                        <img src={'./logos/cockrell.svg'} />
                    </a>
                    <a href="https://firefly.com/" target="_blank">
                        <img src={'./logos/firefly.svg'} />
                    </a>
                </div>
                <h2>Trailblazer</h2>
                <div className={styles.supporters}>
                    <a href="https://www.ae.utexas.edu/" target="_blank">
                        <img src={'./logos/ASE.svg'} />
                    </a>
                    <a href="https://www.siemens.com/" target="_blank">
                        <img className={styles.smallimg} src={'./logos/siemens.svg'} />
                    </a>
                    <a href="https://www.eos.info/en" target="_blank">
                        <img src={'./logos/eos.svg'} />
                    </a>
                </div>
                <div className={styles.supporters}>
                    <a href="https://aws.amazon.com/" target="_blank">
                        <img src={'./logos/aws.svg'} />
                    </a>
                    <a href="https://www.epsilon3.io/" target="_blank">
                        <img className={styles.smallimg} src={'./logos/epsilon3.svg'} />
                    </a>
                    <a href="https://www.ni.com/en-us.html" target="_blank">
                        <img src={'./logos/ni.svg'} />
                    </a>
                </div>
                <h2>Pioneer</h2>
                <div className={styles.supporters}>
                    <a href="https://www.boeing.com/" target="_blank">
                        <img src={'./logos/boeinglogo.svg'} />
                    </a>
                    <a href="https://www.procurify.com/" target="_blank">
                        <img src={'./logos/procurify.svg'} />
                    </a>
                </div>
                <div className={styles.supporters}>
                    <a href="https://www.avcovalve.com/" target="_blank">
                        <img src={'./logos/avco.svg'} />
                    </a>
                    <a href="https://www.blueorigin.com/" target="_blank">
                        <img className={styles.smallimg} src={'./logos/blueorigin.svg'} />
                    </a>
                    <a href="https://www.emerson.com/en-us/global" target="_blank">
                        <img src={'./logos/emerson.svg'} />
                    </a>
                </div>
                </div>
            </section>
        </Layout>
    )
}