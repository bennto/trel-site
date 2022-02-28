import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/home.module.scss'
import Link from 'next/link'

export default function Home () {

  return (
    <Layout>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.hero}>
          
          <div className={styles.notVideo}>
            <h1 className={styles.heroTitle}>We are an interdisciplinary research lab</h1>
            <h2 className={styles.heroSub}>incubating innovators and rocketeers</h2>
            <svg className={styles.heroArrow} width="119" height="119" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M56.8328 88.3691C58.0044 89.5407 59.9039 89.5407 61.0755 88.3691L80.1674 69.2772C81.3389 68.1057 81.3389 66.2062 80.1674 65.0346C78.9958 63.863 77.0963 63.863 75.9247 65.0346L58.9542 82.0052L41.9836 65.0346C40.812 63.863 38.9125 63.863 37.741 65.0346C36.5694 66.2062 36.5694 68.1057 37.741 69.2772L56.8328 88.3691ZM55.9542 31.6606L55.9542 86.2478L61.9542 86.2478L61.9542 31.6606L55.9542 31.6606Z" />
              <circle cx="59.5" cy="59.5" r="56.5" strokeWidth="6"/>
            </svg>
          </div>
          <video autoPlay muted loop className={styles.heroVid} src="videos/trel_loop.mp4" type="video/mp4"></video>
        </div>
        {/* <div className={styles.section}>
          <div className={styles.thumb}>
            <Link href={'/join'}><a>
              <img className={styles.rocketeers} src="images/Posts/AllLinersHorizontal.jpeg" />
            </a></Link>
          </div>
          <div className={styles.break}></div>
          <div className={styles.text}>
            <h2>latest news</h2>
            <br />
            <a href="https://www.texasrocketlab.com/join">
              <h1>We're Recruiting!</h1><br />
              <p>Learn more about us and how you can become part of the TREL family!</p>
            </a>
            <br />
          </div>
        </div> */}
        <div className={styles.section}> {/* we are TREL */}
          <div className={styles.text}>
            <h3>We are the Texas Rocket Engineering Lab (TREL)</h3>
          </div>
          <div className={styles.break}></div>
          <div className={styles.thumb}>
            <p>We make people who make rockets. Through long-term rocket projects, TREL demystifies applied rocket science in an environment focused on diversity, equity and inclusion, knowledge-sharing, and community engagement to teach the interdisciplinary collaboration required by aerospace organizations.</p>
          </div>
        </div>
        <div className={styles.section}> {/* Project Halcyon */}
          <div className={styles.thumb}>
            <Link href={'/halcyon'}>
              <img className={styles.halcyonthumb} src="images/havoc.png" />
            </Link>
          </div>
          <div className={styles.break}></div>
          <div className={styles.text}>
            <h2>current project</h2>
            <br />
            <a href='/halcyon'>
              <h1 className={styles.halcyon}>Halcyon</h1>
            </a>
            <br />
            <p>
              Halcyon is our student-designed liquid propellant rocket that will launch past the Karman Line. 
            </p>
            <br />
            <div className={styles.linkbox}>
              <Link href={'/halcyon'}>
                <p>Learn More</p>
              </Link>
            </div>
          </div>
        </div>
        <div id={styles.sponsors} className={styles.section}> {/* sponsors */}
          <div className={styles.text}>
            <h2>our sponsors</h2>
            <br />
            <h1>Help Us Do What We Do</h1>
            <br />
            <div className={styles.linkbox}>
              <Link href={'/donate'}>
                <p>Become a Sponsor</p>
              </Link>
            </div>
          </div>
          <div className={styles.break}></div>
          <div className={styles.thumb}>
            <div className={styles.slideshow}>
              <div className={styles.slider1}>
                <div className={styles.slide}>
                  <img className={styles.sponsor} src={'./logos/cockrell.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.sponsor} src={'./logos/firefly.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.sponsor} src={'./logos/cockrell.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.sponsor} src={'./logos/firefly.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.sponsor} src={'./logos/cockrell.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.sponsor} src={'./logos/firefly.svg'} />
                </div>
              </div>
              <div className={styles.slider2}>
                <div className={styles.slide}>
                  <img src={'./logos/ASE.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.small} src={'./logos/ni.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.small} src={'./logos/eos.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.small} src={'./logos/aws.svg'} />
                </div>
                <div className={styles.slide}>
                  <img src={'./logos/ASE.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.small} src={'./logos/ni.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.small} src={'./logos/eos.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.small} src={'./logos/aws.svg'} />
                </div>
                <div className={styles.slide}>
                  <img src={'./logos/ASE.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.small} src={'./logos/ni.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.small} src={'./logos/eos.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.small} src={'./logos/aws.svg'} />
                </div>
              </div>
              <div className={styles.slider3}>
                <div className={styles.slide}>
                  <img className={styles.sponsor} src={'./logos/procurify.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.sponsor} src={'./logos/emerson.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.sponsor} src={'./logos/boeinglogo.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.sponsor} src={'./logos/blueorigin.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.sponsor} src={'./logos/procurify.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.sponsor} src={'./logos/emerson.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.sponsor} src={'./logos/boeinglogo.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.sponsor} src={'./logos/blueorigin.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.sponsor} src={'./logos/procurify.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.sponsor} src={'./logos/emerson.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.sponsor} src={'./logos/boeinglogo.svg'} />
                </div>
                <div className={styles.slide}>
                  <img className={styles.sponsor} src={'./logos/blueorigin.svg'} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div id={styles.blog} className={styles.section}>
          <div className={styles.thumb}>
            {posts.map((post) => (
              <Link
              as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/posts/[slug]`}>
                  <div className={styles.artbox}>
                      <div className={styles.imgbox}>
                          <img src={`${post.data.picture}`}></img>
                      </div>
                      <div className={styles.infobox}>
                          <h5>{post.data.date}</h5>
                          <h6>by {post.data.author}</h6>
                      </div>
                      <a>{post.data.title}</a>
                  </div>
              </Link>
            ))}
          </div>
          <div className={styles.text}>
            <h2>our blog</h2>
            <Link href={'/donate'}>
              <h1>See What We're Working On</h1>
            </Link>
          </div>
        </div> */}
        <div className={styles.conclude}>
          <h1 className={styles.blastoff}>Blast Off With Us</h1>
          <div className={styles.linebreak} />
          <div className={styles.identity}>
            <Link href={'/donate'}>
              <div className={styles.sponsor}>
                <svg viewBox="0 0 625 625">
                  <ellipse cx="312.5" cy="199.006" rx="59.722" ry="69.695" />
                  <circle cx="312.501" cy="312.501" r="293.75" />
                  <path d="M117.386 532.046c22.949-98.113 62.148-175.263 110.202-218.005l56.122 192.046 18.533-150.909c-7.807-8.879-15.444-24.463-23.052-41.137h66.624c-7.056 16.201-14.276 31.719-23.07 41.034l18.546 151.018 56.127-192.052c48.048 42.742 87.253 119.892 110.196 218.005v-.027c-51.899 46.17-120.255 74.232-195.113 74.232-74.845 0-143.189-28.052-195.084-74.205" />
                </svg>
                <h1 className={styles.role}>Sponsor</h1>
              </div>
            </Link>
            <div className={styles.break}></div>
            <Link href={'/about'}>
              <div className={styles.educator}>
                <svg viewBox="0 0 600 600">
                  <ellipse cx="300.001" cy="186.506" rx="59.722" ry="69.695" />
                  <path d="m437.129 375.711-137.124 30.284-136.912-30.284c76.914-111.692 197.195-111.928 274.036 0Z" />
                  <circle cx="300.003" cy="300.001" r="293.75" />
                  <path d="M98.359 513.536v-131.14l201.646 42.397 201.64-42.397v131.14" />
                  <path d="M281.939 447.966v145.222M318.279 593.188V447.966" />
                </svg>
                <h1 className={styles.role}>Educator</h1>
              </div>
            </Link>
            <div className={styles.break}></div>
            <Link href={'/join'}>
              <div className={styles.applicant}>
              <svg viewBox="0 0 600 600">
                <path d="M240.403 190.979h119.198c-1.978 36.385-27.924 65.222-59.599 65.222-31.675 0-57.62-28.837-59.599-65.222Z" />
                <path d="M108.019 522.265s83.916-230.409 191.986-230.409c108.069 0 191.979 230.409 191.979 230.409" />
                <circle cx="300.002" cy="300.001" r="293.75" />
                <path d="M324.229 98.906c23.488 9.703 41.446 33.094 46.806 61.942a8.68 8.68 0 0 1 1.648-.152c5.015 0 9.085 4.07 9.085 9.085 0 5.015-4.07 9.085-9.085 9.085H227.261c-4.985-.03-9.024-4.088-9.024-9.085 0-5.015 4.07-9.085 9.085-9.085.563 0 1.114.049 1.647.152 5.36-28.848 23.318-52.239 46.806-61.942v-10.89h48.454v10.89ZM283.649 487.995s.285-35.105-8.443-40.95l-.212-.127-.097-.066c-13.337-8.371-22.204-23.204-22.204-40.09 0-26.11 21.199-47.309 47.309-47.309 26.111 0 47.309 21.199 47.309 47.309 0 16.886-8.867 31.719-22.204 40.09l-.097.066-.212.127c-8.727 5.845-8.443 40.95-8.443 40.95h-32.706ZM284.86 499.872h30.284M284.86 511.75h30.284" />
                <path d="M290.917 523.627h18.17" />
              </svg>
                <h1 className={styles.role}>Applicant</h1>
              </div>
            </Link>
          </div>
        </div>
        {/* <div className={styles.projecthighlight}>
          <div>
            <h1>Launch Vehicle</h1>
            <h2>Halcyon</h2>
            <h3>RP-1 liquid propelled and ready for space</h3>
            <Link href={'/halcyon'}>
              <a className={utilStyles.textbutton}>view project</a>
            </Link>
          </div>
        </div> */}
      </div>
      <br />
    </Layout>
  )
}