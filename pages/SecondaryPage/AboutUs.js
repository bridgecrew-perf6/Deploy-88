import Image from "next/image";
import InfoNavbar from "../../components/projects/InfoNavbar";
import Navbar from "../../components/SecondaryPage/Navbar";
import styles from './AboutUs.module.css'
import Link from 'next/link'


export default function AboutUs(){

    return ( 
        <div className={styles.main}>
            <div>
                {/* <InfoNavbar className={styles.infoNavbar}/> */}
                <Link href="/projects">
                    <a className={styles.Projectsbutton}>Projects</a>
                </Link>
            </div>

            {/* Navbar Page */}

            <div className={styles.AboutUs}> 
                <div>
                    <Navbar className={styles.navbar} />
                </div>

            {/* About Us Main */}
                 <div className={styles.container}>
                    <div className="title_about">
                        <a href="#" className="title_about_link">
                            <h2 className={styles.headerName}>About</h2>
                        </a>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.details_image}>
                            <Image src="/images/1.jpg" width="800px" height="450px"/>
                        </div>
                        <div className={styles.details}>
                            <a href="#" >
                                <h4 className={styles.title_about_link}>MAR 24TH, 2022 - BIG’s London-based Canada Water Masterplan Approved</h4>
                             
                            </a>
                            <div >
                                <p className={styles.description}>
                                        2021 with 66 offices competing for the project, expected to break ground in 2024. 
                                        “With our design for the Joint Research Centre in Sevilla,
                                        more than anything, we have attempted to allow the sustainable 
                                        performance of the building to drive an architectural aesthetic 
                                        that not only makes the building perform better but also makes it 
                                        more inhabitable and more beautiful – a new Andalusian environmental 
                                        vernacular,” said Bjarke Ingels.” Having started my studies as an 
                                        architect in Andalusia and later returning to ETSAB in Barcelona, 
                                        to now having a 50–person BIG office in Barcelona, this project 
                                        feels like coming full circle.” 
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.content}>
                        <div className={styles.details_image}>
                            <Image src="/images/1.jpg" width="800px" height="450px"/>
                        </div>
                        <div className={styles.details}>
                            <a href="#" >
                                <h4 className={styles.title_about_link}>MAR 24TH, 2022 - BIG’s London-based Canada Water Masterplan Approved</h4>
                             
                            </a>
                            <div >
                                <p className={styles.description}>
                                    
                                        2021 with 66 offices competing for the project, expected to break ground in 2024. 
                                        “With our design for the Joint Research Centre in Sevilla,
                                        more than anything, we have attempted to allow the sustainable 
                                        performance of the building to drive an architectural aesthetic 
                                        that not only makes the building perform better but also makes it 
                                        more inhabitable and more beautiful – a new Andalusian environmental 
                                        vernacular,” said Bjarke Ingels.” Having started my studies as an 
                                        architect in Andalusia and later returning to ETSAB in Barcelona, 
                                        to now having a 50–person BIG office in Barcelona, this project 
                                        feels like coming full circle.” 

                                    
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.content}>
                        <div className={styles.details_image}>
                            <Image src="/images/1.jpg" width="800px" height="450px"/>
                        </div>
                        <div className={styles.details}>
                            <a href="#" >
                                <h4 className={styles.title_about_link}>MAR 24TH, 2022 - BIG’s London-based Canada Water Masterplan Approved</h4>
                             
                            </a>
                            <div >
                                <p className={styles.description}>
                                   
                                        2021 with 66 offices competing for the project, expected to break ground in 2024. 
                                        “With our design for the Joint Research Centre in Sevilla,
                                        more than anything, we have attempted to allow the sustainable 
                                        performance of the building to drive an architectural aesthetic 
                                        that not only makes the building perform better but also makes it 
                                        more inhabitable and more beautiful – a new Andalusian environmental 
                                        vernacular,” said Bjarke Ingels.” Having started my studies as an 
                                        architect in Andalusia and later returning to ETSAB in Barcelona, 
                                        to now having a 50–person BIG office in Barcelona, this project 
                                        feels like coming full circle.” 

                                </p>
                            </div>
                        </div>
                    </div>
                    
                  
                </div>


            </div>
        </div>
     );
}


