import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/diversity.module.scss'
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, 
                    ArcElement, 
                    Tooltip, 
                    Legend, 
                    CategoryScale, 
                    LinearScale,
                    BarController,
                    BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarController, BarElement);

export default function Diversity() {
    const pronounData = {
        labels: ["He/him/his", "She/her/hers", "They/them/theirs", "Other"],
        datasets: [{
            label: "# of members",
            backgroundColor: [
                'rgba(99, 48, 139, 1)',
                'rgba(188, 71, 71, 1)',
                'rgba(232, 195, 100, 1)',
                'rgba(51, 184, 136, 1)',
            ],
            borderWidth: 0,
            data: [177, 53, 1, 1],
        }]
    }
    const pronounOptions = {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
    const raceData = {
        labels: ["White", "Asian", "Black", "Native Hawaiian", "Native American/Alaskan", "Other"],
        datasets: [{
            label: "# of members",
            backgroundColor: [
                'rgba(99, 48, 139, 1)',
                'rgba(188, 71, 71, 1)',
                'rgba(232, 195, 100, 1)',
                'rgba(51, 184, 136, 1)',
                'rgba(99, 48, 139, 1)',
                'rgba(188, 71, 71, 1)',
            ],
            borderWidth: 0,
            data: [135, 94, 5, 1, 2, 2],
        }]
    }
    const raceOptions = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            }
        },
    }

    return(
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <body className={styles.dadbod}>
                <div className={styles.hero}>
                    <h1 className={styles.heroTitle}>
                        <span className={styles.span1}>
                            Diversity
                        </span> // <span className={styles.span2}>
                            Inclusion
                        </span>
                    </h1>
                    <h4 className={styles.heroBody}>Our mission is to build people who make rockets. We believe a critical part of the future of STEM is leveraging the strengths of a diverse, equitable and inclusive culture.</h4>
                </div>
                <div className={styles.secTitle}>
                    <h2 className={styles.head}>Our Initiatives</h2>
                    <h4 className={styles.body}>STEM is a field that has historically underrepresented minorities, and we’ve come a long way in equalizing the playing field. Below are some of the initiatives we're taking to do just that.</h4>
                </div>
                <div className={styles.initEntry}>
                    <h3 className={styles.initTitle} style={{ color: 'rgb(99, 48, 139)'}}>Anonymous Conflict and Feedback Form</h3>
                    <div className={styles.initGroup}>
                        <h5 className={styles.initBody}>All our members can report a conflict or give feedback through our internal form anonymously if they choose. We want to make sure there are channels of communication available for those who feel unheard.</h5>
                        <a className={styles.initLink} href="https://forms.office.com/Pages/ResponsePage.aspx?id=peLXMdi9TkGel76pmOvf4U6Qvugwe3NEvb_PQznNKstUMzZRR1NBV1AwUzNIN0s3REIzUkZHQkJTWiQlQCN0PWcu" target="_blank"><h5>Fill out a form →</h5></a>
                    </div>
                </div>
                <div className={styles.initEntry}>
                    <h3 className={styles.initTitle} style={{ color: 'rgba(188, 71, 71, 1)'}}>Metrics Monitoring</h3>
                    <div className={styles.initGroup}>
                        <h5 className={styles.initBody}>Every semester, we collect and monitor key demographic metrics to keep ourselves accountable. We share these metrics internally and externally to be honest and transparent with our D&I progress.</h5>
                    </div>
                </div>
                <div className={styles.initEntry}>
                    <h3 className={styles.initTitle} style={{ color: 'rgba(232, 195, 100, 1)' }}>Member Check-ins and Analysis</h3>
                    <div className={styles.initGroup}>
                        <h5 className={styles.initBody}>Every year, TREL’s D&I team hosts check-ins with our new members and many of our old members to create a one-on-one environment where members feel comfortable giving feedback on leadership and social conflict.</h5>
                    </div>
                </div>
                <div className={styles.secTitle}>
                    <h2 className={styles.head}>Our Numbers</h2>
                    <h4 className={styles.body}>STEM is a field that has historically underrepresented minorities, and we’ve come a long way in equalizing the playing field. Below are our Fall 2021 metrics.</h4>
                </div>
                <div className={styles.graphFlex}>
                    <div className={styles.text}>
                        <h3>Pronouns</h3>
                        <div className={styles.legend}>
                            <div className={styles.colorIcon} style={{ backgroundColor: 'rgb(99, 48, 139)' }} />
                            <h5>76% He/him/his</h5>
                        </div>
                        <div className={styles.legend}>
                            <div className={styles.colorIcon} style={{ backgroundColor: 'rgba(188, 71, 71, 1)'}} />
                            <h5>23% She/her/hers</h5>
                        </div>
                        <div className={styles.legend}>
                            <div className={styles.colorIcon} style={{ backgroundColor: 'rgba(232, 195, 100, 1)' }} />
                            <h5>&lt;1% They/Them/Theirs</h5>
                        </div>
                        <div className={styles.legend}>
                            <div className={styles.colorIcon} style={{ backgroundColor: 'rgba(51, 184, 136, 1)' }} />
                            <h5>&lt;1% Other</h5>
                        </div>
                    </div>
                    <div className={styles.graph}>
                        <Doughnut className={styles.pronouns} data={pronounData} options={pronounOptions} />
                    </div>
                </div>
                <div className={styles.graphFlex}>
                    <div className={styles.text}>
                        <h3>Race</h3>
                        <div className={styles.legend}>
                            <div className={styles.colorIcon} style={{ backgroundColor: 'rgb(99, 48, 139)' }} />
                            <h5>58% White</h5>
                        </div>
                        <div className={styles.legend}>
                            <div className={styles.colorIcon} style={{ backgroundColor: 'rgba(188, 71, 71, 1)'}} />
                            <h5>41% Asian</h5>
                        </div>
                        <div className={styles.legend}>
                            <div className={styles.colorIcon} style={{ backgroundColor: 'rgba(232, 195, 100, 1)' }} />
                            <h5>2% Black</h5>
                        </div>
                        <div className={styles.legend}>
                            <div className={styles.colorIcon} style={{ backgroundColor: 'rgba(51, 184, 136, 1)' }} />
                            <h5>&lt;1% Native Hawaiian</h5>
                        </div>
                        <div className={styles.legend}>
                            <div className={styles.colorIcon} style={{ backgroundColor: 'rgb(99, 48, 139)' }} />
                            <h5>1% Native Hawaiian / Alaskan</h5>
                        </div>
                        <div className={styles.legend}>
                            <div className={styles.colorIcon} style={{ backgroundColor: 'rgba(188, 71, 71, 1)'}} />
                            <h5>1% Other</h5>
                        </div>
                    </div>
                    <div className={styles.graph}>
                        <Bar className={styles.pronouns} data={raceData} options={raceOptions} style={{ height: '500px' }} />
                    </div>
                </div>
                <div className={styles.secTitle}>
                    <h2 className={styles.head}>Member Testimonials</h2>
                    <h4 className={styles.body}>STEM is a field that has historically underrepresented minorities, and we’ve come a long way in equalizing the playing field. Below are our Fall 2021 metrics.</h4>
                </div>
                <div className={styles.storyTable}>
                    <div className={styles.storyMember}>
                        <div style={{ width: '200px', height: '200px', backgroundColor: 'grey' }} />
                        <h4 className={styles.storyTitle} style={{ color: 'rgba(99, 48, 139, 1)' }}>Azzurra Demarie</h4>
                    </div>
                    <div className={styles.storyMember}>
                        <div style={{ width: '200px', height: '200px', backgroundColor: 'grey' }} />
                        <h4 className={styles.storyTitle} style={{ color: 'rgba(188, 71, 71, 1)' }}>Collin Ma</h4>
                    </div>
                    <div className={styles.storyMember}>
                        <div style={{ width: '200px', height: '200px', backgroundColor: 'grey' }} />
                        <h4 className={styles.storyTitle} style={{ color: 'rgba(232, 195, 100, 1)' }}>Doug Pham</h4>
                    </div>
                </div>
                <div className={styles.secTitle}>
                    <h2 className={styles.head}>Join Us</h2>
                    <h4 className={styles.body}>Find out how you can help TREL equalize the playing field for marginalized groups and effect real change within STEM.</h4>
                </div>
                <div className={styles.joinate}>
                    <Link href={'/donate'}><a className={styles.donate}>Donate</a></Link>
                    <Link href={'/join'}><a className={styles.apply}>How to Apply</a></Link>
                </div>
            </body>
        </Layout>
    )
}
