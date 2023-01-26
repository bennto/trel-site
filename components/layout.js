import Head from "next/head";
import Navbar from "./interface/navbar/navbar";
import Footer from "./interface/footer/footer";
import styles from "./layout.module.scss";

export const siteTitle = "Texas Rocket Engineering Lab";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar className={styles.navbar} />
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"
        />
        <meta
          name="description"
          content="We are an interdisciplinary research lab
                    incubating the next generation of innovators & rocketeers."
        />
        <meta property="og:image" content={`./night-sky-web.png`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="titter:card" content="summary_large_image" />
      </Head>
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
}
