import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/home.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'


export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.hero}>
        <p className={styles.lab_description}>We are an interdisciplinary research lab <br />
            incubating the next generation of innovators &amp; rocketeers.</p>
        <div className={styles.big_update}>
          <h1>lab update</h1>
          <h2>We tested</h2>
          <p>more info coming soon</p>
        </div>
      </section>
      <section className={styles.hiringbanner}>
        <Link href={'./join'}>
          <h1>Join our team</h1>
        </Link>
        <p>Summer recruitment decisions soon.</p>
        <Link href={'./join'}>
          <a className={utilStyles.textbutton}>see the process</a>
        </Link>
      </section>
      <section className={styles.projecthighlight}>
        <div>
          <h1>Launch Vehicle</h1>
          <h2>Halcyon</h2>
          <h3>RP-1 liquid propelled and ready for space</h3>
          <Link href={'/halcyon'}>
            <a className={utilStyles.textbutton}>view project</a>
          </Link>
        </div>
        <img className={styles.halcyon} src={'./images/Halcyon.png'} />
        <img className={styles.earth} src={'./images/croppedearth.png'} />
      </section>
      <img className={styles.hotfire} src={'./hotfire.png'} />
    </Layout>
  )
}