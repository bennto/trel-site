import React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Layout, { siteTitle } from "../components/layout";
import DateToDate from "../components/details/datetodate";
import styles from "../styles/join.module.scss";
import Spoiler from "../components/spoiler";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";

export default function Join() {
  const [open, setOpen] = useState(0);
  const slideFade = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  function RoleList(props) {
    return (
      <div className={styles.posIndex}>
        {positions.slice(props.start, props.end).map((position) => (
          <div>
            <hr className={styles.border} />
            <div
              onMouseEnter={() => {
                setOpen(position.id);
              }}
              // onMouseLeave={() => {
              //     setOpen(0)
              // }}
            >
              <Spoiler
                className={styles.collapsible}
                title={position.title}
                bullets={position.bullets}
              >
                {position.desc}
              </Spoiler>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <body className={styles.container}>
        <div className={styles.section1}>
          <div className={styles.backgroundFrame}>
            <img className={styles.background} src={"../images/Circuits.JPG"} />
          </div>
          <div className={styles.content}>
            <h1 className={styles.head}>Recruiting Closed</h1>
            <h5 className={styles.sub}>
              check out our application process below
            </h5>
          </div>
        </div>
        <div style={{ height: "24px" }} />
        <div className={styles.section2}>
          <div className={styles.content}>
            <div className={styles.intro}>
              <h3>1. Attend info session</h3>
              <p>
                All applicants must attend at least one info session. Info
                sessions this semester will be held at the Engineering Education
                and Research Center (EER).
              </p>
            </div>
            <div className={styles.info}>
              <div className={styles.pill}>
                <p>Address</p>
                <hr />
                <p>EER Mulva, room 0.904</p>
              </div>
              <div className={styles.pill}>
                <p>Session 1</p>
                <hr />
                <p>Jan. 17, 6-7pm</p>
              </div>
              <div className={styles.pill}>
                <p>Session 2</p>
                <hr />
                <p>Jan. 18, 6-7pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section3}>
          <div className={styles.content}>
            <h3>2. Explore our Teams</h3>
            <p>
              We're a BIG lab with lots of different teams doing uniquely cool
              things. Read through some of the team descriptions to discover
              what suits your fancy.
            </p>
            <p>
              We recommend choosing and applying for several different teams
              (max 2), as different teams may be looking to onboard more or
              fewer new Trellians this semester.
            </p>
          </div>
        </div>
        <div className={styles.section4}>
          <div className={styles.content}>
            <div className={styles.intro}>
              <h3>3. Apply to Teams</h3>
              <p>
                Applications open right after the info sessions. We're looking
                mostly for your passion, thought process, and personality.
                Resumes are optional, but helpful.
              </p>
            </div>
            <div className={styles.info}>
              <div className={styles.pill}>
                <p>Apps Open</p>
                <hr />
                <p>January 17</p>
              </div>
              <div className={styles.pill}>
                <p>Apps Close</p>
                <hr />
                <p>January 20</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section5}>
          <div className={styles.content}>
            <div className={styles.intro}>
              <h3>4. Interview with Teams</h3>
              <p>
                Wow! We were really impressed by your application and want to
                talk more with you. We'll send you an email and schedule a time
                that works for you. Come as you are, we want to know the real
                you.
              </p>
            </div>
            <div className={styles.info}>
              <div className={styles.pill}>
                <p>Start</p>
                <hr />
                <p>January 20</p>
              </div>
              <div className={styles.pill}>
                <p>Decisions</p>
                <hr />
                <p>February 3</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section6}>
          {/* <h3 className={styles.title}>Additional Considerations</h3> */}
          <div className={styles.flex}>
            <div className={styles.card}>
              <h5>Licensing is available for international students</h5>
              <p>Contact us via email for more information.</p>
            </div>
            <div className={styles.card}>
              <h5>This opportunity is unpaid.</h5>
              <p>
                If we could pay all couple hundred of our lab members, we would.
              </p>
            </div>
            <div className={styles.card}>
              <h5>Passion trumps talent, mindset is key.</h5>
              <p>A resume is optional and experience is not required.</p>
            </div>
            <div className={styles.card}>
              <h5>You must be 18 or older to join the lab.</h5>
              <p>
                We look forward to your application and hope to speak to you
                soon!
              </p>
            </div>
          </div>
        </div>
      </body>
    </Layout>
  );
}
