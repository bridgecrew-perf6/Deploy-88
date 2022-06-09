import styles from "./Shop.module.css"
import Image from "next/image";
import InfoNavbar from "../../components/projects/InfoNavbar";
import Navbar from "../../components/SecondaryPage/Navbar";
import Link from 'next/link'


export default function Shop() {
  return (
    <div className={styles.shop}>
        {/* <div>
            <InfoNavbar className={styles.infoNavbar}/>
        </div> */}

        {/* Navbar Page */}

        <div className={styles.Shop__Page}> 
            <div>
                <Link href="/projects">
                    <a className={styles.Projectsbutton}>Projects</a>
                </Link>
                
                    <Navbar className={styles.navbar} />
                </div>

            {/* Shop Us Main */}
                 <div className={styles.container}>
                    <div className="title_about">
                        <a href="#" className="title_about_link">
                            <h2 className={styles.headerName}>Shop</h2>
                        </a>
                    </div>
                    {/* 1 */}
                    <div className={styles.content}>
                        <p className={styles.product}>Lamps</p>
                        <div className={styles.boxContainer}>
                            <div className={styles.details_image}>
                                <Image src="/images/2.jpg" width="200px" height="200px"/>
                            </div>
                            <div className={styles.details}>
                                <a href="#" >
                                    <h4 className={styles.title_about_link}>ALPHABET OF LIGHT</h4>
                                
                                </a>
                                <div className={styles.description}>
                                    <p>
                                    Alphabet of Light starts from an abacus of essential geometries and forms a new font that translates into light, like an alphabet used to write and express thoughts, or a tool to give shape to spaces. Either straight or curved base modules made with precise geometric proportions allow for the combination of elements to build countless light structures, both essential and complex. It is an elementary principle generating an open system.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.boxContainer}>
                            <div className={styles.details_image}>
                                <Image src="/images/3.jpg" width="200px" height="200px"/>
                            </div>
                            <div className={styles.details}>
                                <a href="#" >
                                    <h4 className={styles.title_about_link}>KEGLEN</h4>
                                
                                </a>
                                <div className={styles.description}>
                                    <p>
                                    The Keglen Collection is a systematic design language for a wide range of lighting typologies. This family of lamps have similar characteristics, yet are maximised for their intended use with varied sizes and unique personalities. The main feature of the lamp is the organic shaped glass that sits perfectly underneath, as if shaped by physics and cohesive forces found in nature.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                    {/* 2 */}
                    <div className={styles.content}>
                        <p className={styles.product}>FURNITURE</p>
                        <div className={styles.boxContainer}>
                            <div className={styles.details_image}>
                                <Image src="/images/4.jpg" width="200px" height="200px"/>
                            </div>
                            <div className={styles.details}>
                                <a href="#" >
                                    <h4 className={styles.title_about_link}>ALPHABET OF LIGHT</h4>
                                
                                </a>
                                <div className={styles.description}>
                                    <p>
                                    Alphabet of Light starts from an abacus of essential geometries and forms a new font that translates into light, like an alphabet used to write and express thoughts, or a tool to give shape to spaces. Either straight or curved base modules made with precise geometric proportions allow for the combination of elements to build countless light structures, both essential and complex. It is an elementary principle generating an open system.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.boxContainer}>
                            <div className={styles.details_image}>
                                <Image src="/images/5.jpg" width="200px" height="200px"/>
                            </div>
                            <div className={styles.details}>
                                <a href="#" >
                                    <h4 className={styles.title_about_link}>ALPHABET OF LIGHT</h4>
                                
                                </a>
                                <div className={styles.description}>
                                    <p>
                                    Alphabet of Light starts from an abacus of essential geometries and forms a new font that translates into light, like an alphabet used to write and express thoughts, or a tool to give shape to spaces. Either straight or curved base modules made with precise geometric proportions allow for the combination of elements to build countless light structures, both essential and complex. It is an elementary principle generating an open system.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* 3 */}
                    <div className={styles.content}>
                        <p className={styles.product}>accessories</p>
                        <div className={styles.boxContainer}>
                            <div className={styles.details_image}>
                                <Image src="/images/6.jpg" width="200px" height="200px"/>
                            </div>
                            <div className={styles.details}>
                                <a href="#" >
                                    <h4 className={styles.title_about_link}>ALPHABET OF LIGHT</h4>
                                
                                </a>
                                <div className={styles.description}>
                                    <p>
                                    Alphabet of Light starts from an abacus of essential geometries and forms a new font that translates into light, like an alphabet used to write and express thoughts, or a tool to give shape to spaces. Either straight or curved base modules made with precise geometric proportions allow for the combination of elements to build countless light structures, both essential and complex. It is an elementary principle generating an open system.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.boxContainer}>
                            <div className={styles.details_image}>
                                <Image src="/images/7.jpg" width="200px" height="200px"/>
                            </div>
                            <div className={styles.details}>
                                <a href="#" >
                                    <h4 className={styles.title_about_link}>ALPHABET OF LIGHT</h4>
                                
                                </a>
                                <div className={styles.description}>
                                    <p>
                                    Alphabet of Light starts from an abacus of essential geometries and forms a new font that translates into light, like an alphabet used to write and express thoughts, or a tool to give shape to spaces. Either straight or curved base modules made with precise geometric proportions allow for the combination of elements to build countless light structures, both essential and complex. It is an elementary principle generating an open system.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className={styles.content}>
                        <p className={styles.product}>BOOKS</p>
                        <div className={styles.boxContainer}>
                            <div className={styles.details_image}>
                                <Image src="/images/8.jpg" width="200px" height="200px"/>
                            </div>
                            <div className={styles.details}>
                                <a href="#" >
                                    <h4 className={styles.title_about_link}>ALPHABET OF LIGHT</h4>
                                
                                </a>
                                <div className={styles.description}>
                                    <p>
                                    Alphabet of Light starts from an abacus of essential geometries and forms a new font that translates into light, like an alphabet used to write and express thoughts, or a tool to give shape to spaces. Either straight or curved base modules made with precise geometric proportions allow for the combination of elements to build countless light structures, both essential and complex. It is an elementary principle generating an open system.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.boxContainer}>
                            <div className={styles.details_image}>
                                <Image src="/images/9.jpg" width="200px" height="200px"/>
                            </div>
                            <div className={styles.details}>
                                <a href="#" >
                                    <h4 className={styles.title_about_link}>ALPHABET OF LIGHT</h4>
                                
                                </a>
                                <div className={styles.description}>
                                    <p>
                                    Alphabet of Light starts from an abacus of essential geometries and forms a new font that translates into light, like an alphabet used to write and express thoughts, or a tool to give shape to spaces. Either straight or curved base modules made with precise geometric proportions allow for the combination of elements to build countless light structures, both essential and complex. It is an elementary principle generating an open system.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
              
                    
                  
                </div>
                </div>


            </div>
  )
}
