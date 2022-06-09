import InfoNavbar from "../../components/projects/InfoNavbar";
import Navbar from "../../components/SecondaryPage/Navbar";
import styles from "./Jobs.module.css"
import Image from "next/image";
import Link from 'next/link'


export default function Jobs() {
  return (
    <div className={styles.jobs}>
        {/* <div>
            <InfoNavbar/>
        </div> */}
        <div>
            <Link href="/projects">
                <a className={styles.Projectsbutton}>Projects</a>
            </Link>
            <Navbar/>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.video__content}>
                    <div className="title_about">
                        <a href="#" className="title_about_link">
                            <h2 className={styles.headerName}>JOBS</h2>
                        </a>
                    </div>
                    <div className={styles.content}>
                        <p className={styles.description}>Our journey started in Copenhagen in 2005, followed by an office in NYC in 2010, London in 2016 and Barcelona in 2019. We have completed about 35 buildings in 10+ countries and never limit ourselves to a specific region – we go where the projects are – even if its Mars!</p>
                        <div className={styles.details_image}>
                            <Image src="/images/10.jpg" width={800} height={400}/>
                        </div>
                    
                        <div>
                            <p className={styles.description}>
                            Over the last two decades, we have grown organically to a 500+ person family worldwide. Working on new projects, typologies and challenges – we are joined by new BIGsters with the skills, experience and expertise our projects need! This is how we continue to grow and get better at what we do.
                            If you are interested in joining BIG, view our current opportunities here or sign up for updates here. We look forward to hearing from you!
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
