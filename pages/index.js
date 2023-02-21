import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/home.module.scss";
import Link from "next/link";
import fac2 from "../public/images/PRC/fac-2.jpg";

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.notVideo}>
            <h1 className={styles.heroTitle}>
              <span className={styles.hoverable}>Texas</span>{" "}
              <span className={styles.hoverable}>Rocket</span> <br />
              <span className={styles.hoverable}>Engineering</span>{" "}
              <span className={styles.hoverable}>Lab</span>
            </h1>
            <h5 className={styles.heroSub}>
              An <span className={styles.highlight}>interdisciplinary</span>{" "}
              research lab incubating <br />
              innovators and rocketeers
            </h5>
          </div>
          <div className={styles.backgroundFrame}>
            <video
              autoPlay
              muted
              loop
              className={styles.heroVid}
              src="videos/trel_loop.mp4"
              type="video/mp4"
            ></video>
          </div>
        </div>
        <div className={styles.section1}>
          <div className={styles.backgroundFrame}>
            <img
              className={styles.placeholder}
              src={"../images/Burst Stand Action Torque 1-21.JPG"}
            />
          </div>
          <div className={styles.contentT}>
            <h2 className={styles.title}>Our Mission</h2>
            <hr className={styles.break} />
            <p className={styles.body}>
              At TREL, we make people who make rockets. Our lab demystifies
              applied rocket science in an space focused on diversity, equity
              and inclusion, knowledge-sharing, and community engagement.
            </p>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.backgroundFrame}>
            <img
              className={styles.placeholder}
              src={"../images/Balloon Test.jpeg"}
            />
          </div>
          <div className={styles.contentL}>
            <h2 className={styles.title}>Support our Work</h2>
            {/* <hr className={styles.break} /> */}
            <p className={styles.body}>
              We aim to be the best collegiete-level rocketry lab and your
              support would be invaluable in making that happen. We're going to
              do great things together!
            </p>
            <Link href="/donate">
              <button className={styles.button} type="button">
                <h6>Learn More</h6>
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.section3}>
          <div className={styles.backgroundFrame}>
            <img
              className={styles.placeholder}
              src={"../images/TREL2022.jpg"}
            />
          </div>
          <div className={styles.contentM}>
            <h2 className={styles.title}>Calling All Students</h2>
            {/* <hr className={styles.break} /> */}
            <p className={styles.body}>
              Our lab thrives on the collective passion and expertise of
              students from a wide variety of disciplines. If you're a UT
              student passionate about aerospace, we'd love to have you!
            </p>
            <Link href="/join">
              <button className={styles.button} type="button">
                <h6>Join the Team</h6>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
