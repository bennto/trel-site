import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/halcyon.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";

export default function Halcyon() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.section1}>
          <div className={styles.backgroundFrame}>
            <img
              className={styles.background}
              src={"../images/Halcyon/HalcyonLaunchSunsetNoSun.png"}
            ></img>
          </div>
          <div className={styles.content}>
            <h1>Halcyon</h1>
            <h6>TREL's very own Big Rocket</h6>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.backgroundFrame}>
            <img
              className={styles.background}
              src={"../images/Halcyon/HalcyonExplodedView.png"}
            ></img>
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>A Big Rocket</h3>
            <hr className={styles.break} />
            <div className={styles.numbers}>
              <div className={styles.card}>
                <h3>3500 lbf</h3>
                <p>thrust</p>
              </div>
              <div className={styles.card}>
                <h3>RP-1 LOx</h3>
                <p>propellants</p>
              </div>
              <div className={styles.card}>
                <h3>mach 3.5</h3>
                <p>max speed</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section3}>
          <div className={styles.backgroundFrame}>
            <img
              className={styles.background}
              src={"../images/BenJ Test Stand Walkie 1-31.JPG"}
            ></img>
          </div>
          <div className={styles.content}>
            <h1>Halcyon</h1>
            <h6>TREL's very own Big Rocket</h6>
          </div>
        </div>
      </div>
    </Layout>
  );
}
