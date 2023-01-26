import styles from "./navbar.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRefState } from "../../yTrack.js";

export default function Navbar() {
  //   const [timer, setTimer] = useState([]);

  //   useEffect(() => {
  //     setInterval(() => {
  //       // Get today's date and time
  //       var now = new Date().getTime();
  //       var destination = new Date("May 15, 2024 00:00:00").getTime();

  //       // Find the distance between now and the count down date
  //       var distance = destination - now;

  //       // Time calculations for days, hours, minutes and seconds
  //       var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //       var hours = Math.floor(
  //         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //       );
  //       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //       var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //       // If the count down is over, write some text
  //       if (distance < 0) {
  //         clearInterval(x);
  //         return "Liftoff!!!";
  //       }

  //       // Update hook via setTimer() and format numbers
  //       setTimer(() => {
  //         let newTimer = [days, hours, minutes, seconds];
  //         for (let i = 0; i < newTimer.length; i++) {
  //           newTimer[i] = newTimer[i].toLocaleString("en-US", {
  //             minimumIntegerDigits: 2,
  //             useGrouping: false,
  //           });
  //         }
  //         return newTimer;
  //       });
  //     }, 1000);
  //   });

  // useEffect(()=>{
  //     setDrop(false)
  // }, [])

  const [yRef, setYRef] = useRefState();
  const [visibility, setVis] = useState(false);
  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = window.innerWidth <= 832 ? true : false;
  }

  const variants = {
    visible: { opacity: 1, display: "inline" },
    hidden: { opacity: 0, display: "none" },
    here: { top: 0 },
    gone: { top: -80 },
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.navbar}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.item}>
          <a>
            <Link href={"/"}>
              <svg
                width="75"
                height="19"
                viewBox="0 0 75 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0V4.05334H6.53984V18.75H10.7985V4.05334H17.3384V0H0Z"
                  fill="white"
                />
                <path
                  d="M33.8702 10.9449C34.5092 10.71 35.0981 10.3517 35.6049 9.88946C36.1808 9.3618 36.6305 8.7059 36.9192 7.97236C37.2079 7.23882 37.328 6.44725 37.2702 5.65873C37.2987 4.87975 37.1534 4.10434 36.8453 3.3913C36.5373 2.67826 36.0745 2.0463 35.4921 1.54331C34.0826 0.43766 32.33 -0.11037 30.5569 2.61953e-05H19.7236V4.02675H30.5655C30.8024 4.01254 31.0399 4.01254 31.2768 4.02675C31.6107 4.05409 31.9315 4.17208 32.2059 4.36854C32.4804 4.56499 32.6986 4.8328 32.838 5.1443C32.9398 5.38721 32.9873 5.65031 32.9769 5.91439C32.9666 6.17846 32.8986 6.43683 32.7781 6.67061C32.6576 6.90439 32.4875 7.10767 32.2802 7.26559C32.073 7.42352 31.8339 7.5321 31.5803 7.5834C31.2449 7.63901 30.9054 7.66571 30.5655 7.66323H22.3257C21.6356 7.66323 20.9737 7.94356 20.4858 8.44256C19.9978 8.94157 19.7236 9.61836 19.7236 10.3241V18.7146H24.2859V12.4172C24.2859 12.182 24.3773 11.9564 24.54 11.7901C24.7026 11.6237 24.9232 11.5303 25.1533 11.5303H28.9523C29.1191 11.5307 29.2823 11.5802 29.4223 11.673C29.5623 11.7658 29.6732 11.898 29.7416 12.0536L32.6559 18.6968H37.513L33.8702 10.9449Z"
                  fill="white"
                />
                <path
                  d="M45.753 14.7144C45.5229 14.7144 45.3023 14.621 45.1397 14.4546C44.977 14.2883 44.8856 14.0627 44.8856 13.8275V10.8296H54.4872V6.9359H44.8856V4.94028C44.8856 4.70505 44.977 4.47945 45.1397 4.31312C45.3023 4.14678 45.5229 4.05334 45.753 4.05334H56.5949V0H42.353C41.7779 0 41.2263 0.233614 40.8197 0.64945C40.413 1.06529 40.1846 1.62928 40.1846 2.21736V16.5326C40.1846 16.8238 40.2407 17.1122 40.3496 17.3812C40.4586 17.6502 40.6183 17.8946 40.8197 18.1006C41.021 18.3065 41.2601 18.4698 41.5231 18.5812C41.7862 18.6926 42.0682 18.75 42.353 18.75H56.9852V14.7144H45.753Z"
                  fill="white"
                />
                <path
                  d="M65.4678 14.7144C65.2378 14.7144 65.0172 14.621 64.8545 14.4546C64.6918 14.2883 64.6005 14.0627 64.6005 13.8275V0H59.8994V16.5326C59.8994 16.8238 59.9555 17.1122 60.0645 17.3812C60.1734 17.6502 60.3332 17.8946 60.5345 18.1006C60.7359 18.3065 60.9749 18.4698 61.238 18.5812C61.5011 18.6926 61.783 18.75 62.0678 18.75H75V14.7144H65.4678Z"
                  fill="white"
                />
              </svg>
            </Link>
          </a>
          {/* <motion.h3 className={styles.counting} data-text="lololol"
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ duration: 0.5, delay: 1 }}>
                        {timer[0]}:{timer[1]}:{timer[2]}:{timer[3]}
                    </motion.h3> */}
        </div>

        <div className={styles.item}>
          {isMobile ? (
            <svg
              className={styles.burger}
              onClick={() => {
                setVis(visibility ? false : true);
              }}
            >
              <rect className={styles.rect1} y="0"></rect>
              <rect className={styles.rect2} y="9"></rect>
              <rect className={styles.rect3} y="18"></rect>
            </svg>
          ) : (
            <div className={styles.deskItems}>
              <Link href={"/halcyon"}>
                <button className={styles.button} type="button">
                  <h6>halcyon</h6>
                </button>
              </Link>
              <Link href={"/blog"}>
                <button className={styles.button} type="button">
                  <h6>blog</h6>
                </button>
              </Link>
              <Link href={"/join"}>
                <button className={styles.button} type="button">
                  <h6>join</h6>
                </button>
              </Link>
              <Link href={"/donate"}>
                <button className={styles.button} type="button">
                  <h6>donate</h6>
                </button>
              </Link>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        className={styles.placeholder}
        animate={yRef.current >= 100 ? "here" : "gone"}
        variants={variants}
        transition={{ duration: 0.2 }}
      ></motion.div>

      <motion.div
        className={styles.burgerMenu}
        variants={variants}
        initial={{ opacity: 0 }}
        animate={visibility ? "visible" : "hidden"}
        style={{ top: yRef.current }}
      >
        <ul>
          <li>
            <Link href={"/halcyon"}>
              <a>halcyon</a>
            </Link>
          </li>
          <li>
            <Link href={"/blog"}>
              <a>blog</a>
            </Link>
          </li>
          <li>
            <Link href={"/join"}>
              <a>join us</a>
            </Link>
          </li>
          <li>
            <Link href={"/donate"}>
              <a>donate</a>
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
