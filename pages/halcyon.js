import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/halcyon.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function Halcyon() {
  // const { ref, inView } = useInView({
  //   threshold: [0.1, 1],
  //   triggerOnce: false,
  // });

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
            <h6>The Premier Collegiate Rocket</h6>
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
            <h3 className={styles.title}>About Halcyon</h3>
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
          <div className={styles.stickyContainer}>
            <div className={styles.details}>
              <h3 className={styles.partName}>Engine</h3>
              <p className={styles.partBody}>
                Pokem ipsum dolor sit amet Shiftry Combee Aipom Gastrodon
                Professor Oak Manectric. Kanto Cerulean City Haxorus Electric
                Abomasnow Porygon2 Cubchoo. Leaf Green Donphan Baltoy Unown
                Water Gun Staryu Dugtrio.
              </p>
              <h4 className={styles.partSub}>Details</h4>
              <hr className={styles.partDivide} />
              <ol className={styles.partBullets}>
                <li>Kerolox engine</li>
                <li>Regeneratively cooled</li>
                <li>Additively manufactured / 3D printed</li>
                <li>Nominally 3500 lb of thrust</li>
                <li>~ 60s burn duration</li>
                <li>Pressure fed engine cycle</li>
              </ol>
            </div>
            <div className={styles.imgContainer}>
              <img
                className={styles.image}
                src={"../images/Halcyon/HalcyonLaunchSunsetNoSun.png"}
              />
            </div>
          </div>
          <div className="h-screen" />
          <div className="h-screen" />
          <div className="h-screen" />
        </div>
        <div className="h-screen" />
        <div className={styles.section3}>
          <div className={styles.stickyContainer}>
            <div className={styles.details}>
              <h3 className={styles.partName}>TVC</h3>
              <p className={styles.partBody}>
                Thrust Vector Control (TVC), is a system in Halcyon allows us to
                adjust the rocket's trajectory during its upward ascent. With
                this system, we can account for any changes in the rockets
                trajectory with speed and accuracy, ensuring our rocket stays on
                its path to the Karman Line. TVC is comprised of a system of
                rings that are attached to our engine to rotate it around. Each
                ring is connected to a linear actuator that pushes and pulls on
                the ring.
              </p>
              {/* <h4 className={styles.partSub}>Details</h4>
              <hr className={styles.partDivide} />
              <ol className={styles.partBullets}>
                <li>Kerolox engine</li>
                <li>Regeneratively cooled</li>
                <li>Additively manufactured / 3D printed</li>
                <li>Nominally 3500 lb of thrust</li>
                <li>~ 60s burn duration</li>
                <li>Pressure fed engine cycle</li>
              </ol> */}
            </div>
            <div className={styles.imgContainer}>
              <img
                className={styles.image}
                src={"../images/Burst Stand Action Torque 1-21.JPG"}
              />
            </div>
          </div>
          <div className="h-screen" />
          <div className="h-screen" />
        </div>
        <div className="h-screen" />
        {/* <div className={styles.section3}>
          <div className={styles.stickyContainer}>
            <div className={styles.details}>
              <h3 className={styles.partName}>Engine</h3>
              <p className={styles.partBody}>
                Pokem ipsum dolor sit amet Shiftry Combee Aipom Gastrodon
                Professor Oak Manectric. Kanto Cerulean City Haxorus Electric
                Abomasnow Porygon2 Cubchoo. Leaf Green Donphan Baltoy Unown
                Water Gun Staryu Dugtrio.
              </p>
              <h4 className={styles.partSub}>Details</h4>
              <hr className={styles.partDivide} />
              <ol className={styles.partBullets}>
                <li>Kerolox engine</li>
                <li>Regeneratively cooled</li>
                <li>Additively manufactured / 3D printed</li>
                <li>Nominally 3500 lb of thrust</li>
                <li>~ 60s burn duration</li>
                <li>Pressure fed engine cycle</li>
              </ol>
            </div>
            <div className={styles.imgContainer}>
              <img
                className={styles.image}
                src={"../images/Halcyon/HalcyonLaunchSunsetNoSun.png"}
              />
            </div>
          </div>
          <div className="h-screen" />
        </div>
        <div className="h-screen" />
        <div className={styles.section3}>
          <div className={styles.stickyContainer}>
            <div className={styles.details}>
              <h3 className={styles.partName}>Engine</h3>
              <p className={styles.partBody}>
                Pokem ipsum dolor sit amet Shiftry Combee Aipom Gastrodon
                Professor Oak Manectric. Kanto Cerulean City Haxorus Electric
                Abomasnow Porygon2 Cubchoo. Leaf Green Donphan Baltoy Unown
                Water Gun Staryu Dugtrio.
              </p>
              <h4 className={styles.partSub}>Details</h4>
              <hr className={styles.partDivide} />
              <ol className={styles.partBullets}>
                <li>Kerolox engine</li>
                <li>Regeneratively cooled</li>
                <li>Additively manufactured / 3D printed</li>
                <li>Nominally 3500 lb of thrust</li>
                <li>~ 60s burn duration</li>
                <li>Pressure fed engine cycle</li>
              </ol>
            </div>
            <div className={styles.imgContainer}>
              <img
                className={styles.image}
                src={"../images/Burst Stand Action Torque 1-21.JPG"}
              />
            </div>
          </div>
        </div>
        <div className="h-screen" /> */}
      </div>
    </Layout>
  );
}
