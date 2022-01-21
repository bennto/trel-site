import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/about.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

export default function About () {
  return (
    <Layout>
      <Head>
          <title>{siteTitle}</title>
      </Head>
      <section className={styles.about}>
        <div className={styles.container}>
          <h1>We are an interdisciplinary research lab <br />
            incubating the next generation of innovators &amp; rocketeers.</h1>
          <div className={styles.down_arrow}></div>
        </div>
      </section>
      <section className={styles.building}>
        <h1>We do this by building things</h1>
        <div className={styles.image_carousel}>
          <div className={styles.carousel_item}>
            <img src={'./lab.jpg'} />
            <h5 className={styles.caption}>our team is huge - winter 2019</h5>
          </div>
          <div className={styles.carousel_item}>
            <img src={'./thegang.jpg'} />
            <h5 className={styles.caption}>we build machines to test our rockets</h5>
          </div>
          <div className={styles.carousel_item}>
            <h5 className={styles.funny}>we did not build her slushy</h5>
            <img src={'./images/girl_day.jpg'} />
            <h5 className={styles.caption}>we inspire young thinkers</h5>
          </div>
          <div className={styles.carousel_item}>
          <img src={'./rocket.jpg'} />
            <h5 className={styles.caption}>we build machines to test our rockets</h5>
          </div>
        </div>
        <div className={styles.building_desc}>
          <p>The best way to learn is by doing, so that is what we do. We put our classwork to work.</p>
          <p>Everything we make is designed, tested, and operated by college students.</p>
        </div>
      </section>
      <section className={styles.huge}>
        <div className={styles.title}>
          <h1>The things we build are huge</h1>
          <h2>Our machines are the go-to-space kind of big</h2>
        </div>
        <div className={styles.hugerocket}>
          <img className={styles.tics} src={"./svg/tics.svg"} />
          <img className={styles.bigtic} src={"./svg/longtic.svg"} />
          <img className={styles.smtic} src={"./svg/longtic.svg"} />
          <img className={styles.treltic} src={"./svg/longtic.svg"} />
          <img className={styles.trellian} src={"./images/trellian.png"} />
          <img className={styles.dumby} src={"./images/dumby.png"} />
          <img className={styles.halcyonrocket} src={"./images/Halcyon.png"} />
          <p className={styles.halcyonlabel}>Our Halcyon Rocket</p>
          <p className={styles.dumbylabel}>Typical Collegiate Rocket</p>
          <p className={styles.trellianlabel}>One of our Trellians</p>
          <p className={styles.trellianname}>Collin Ma <br /> Director of Test Operations</p>
        </div>
      </section>
      <section className={styles.sponsors}>
        <h1>We're working with the best</h1>
        <div className={styles.logos}>
          <img src={'./logos/cockrell.svg'} />
          <img src={'./logos/ASE.svg'} />
          <img src={'./logos/firefly.svg'} />
          <img src={'./logos/ni.svg'} />
          <img src={'./logos/eos.svg'} />
          <img src={'./logos/aws.svg'} />
          <img src={'./logos/procurify.svg'} />
          <img src={'./logos/emerson.svg'} />
          <img src={'./logos/boeinglogo.svg'} />
          <img src={'./logos/blueorigin.svg'} />
        </div>
        <div className={styles.centerlink}>
          <Link href={'/donate'}>
            <a className={utilStyles.textbutton}>become a partner</a>
          </Link>
        </div>
      </section>
      <section className={styles.place}>
        <h1>in the right place.</h1>
        <p>Austin, TX</p>
        <img className={styles.milky} src={'./images/milky-way.png'} />
        <div>
          {/* <Link href={'/facilities'}>
            <a className={utilStyles.textbutton}>see our facilities</a>
          </Link> */}
        </div>
      </section>
    </Layout>
  )
}