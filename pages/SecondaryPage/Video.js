import InfoNavbar from "../../components/projects/InfoNavbar";
import Navbar from "../../components/SecondaryPage/Navbar";
import styles from "./Video.module.css"
import Link from 'next/link'

export default function AboutUs(){
    return (
        <div className={styles.Video}>
            <div>
                {/* <InfoNavbar/> */}
                
            </div>
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
                                <h2 className={styles.headerName}>VIDEO</h2>
                            </a>
                        </div>
                    <div >                   
                            <div>
                            <div class="picture" >
                                <iframe width="800" height="400" src="https://www.youtube.com/embed/YLZRUxPVLyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div>
                                <h3>
                                    <a href="#" className={styles.title_about_link}>THE PLUS // BJARKE INGELS ABOUT THE ARCHITECTURE</a>
                                </h3>
                                <div >
                                    <p className={styles.description}>Together with Vestre, We unveil The Plus as the world’s most sustainable furniture factory tucked in the heart of the Norwegian forest.</p>
                                </div>
                            </div>
                        </div>         
                    </div>
                </div>
                <div className={styles.video__content}>
                    <div >                   
                            <div>
                            <div class="picture" >
                                <iframe width="800" height="400" src="https://www.youtube.com/embed/YLZRUxPVLyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div>
                                <h3>
                                    <a href="#" className={styles.title_about_link}>THE PLUS // BJARKE INGELS ABOUT THE ARCHITECTURE</a>
                                </h3>
                                <div >
                                    <p className={styles.description}>Together with Vestre, We unveil The Plus as the world’s most sustainable furniture factory tucked in the heart of the Norwegian forest.</p>
                                </div>
                            </div>
                        </div>         
                    </div>
                </div>
                 <div className={styles.video__content}>
                    <div >                   
                            <div>
                            <div class="picture" >
                                <iframe width="800" height="400" src="https://www.youtube.com/embed/YLZRUxPVLyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div>
                                <h3>
                                    <a href="#" className={styles.title_about_link}>THE PLUS // BJARKE INGELS ABOUT THE ARCHITECTURE</a>
                                </h3>
                                <div >
                                    <p className={styles.description}>Together with Vestre, We unveil The Plus as the world’s most sustainable furniture factory tucked in the heart of the Norwegian forest.</p>
                                </div>
                            </div>
                        </div>         
                    </div>
                </div>
            </div>
        </div>
    );
}