import Head from "next/head";
// 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './imageDetails.module.css'


export default function Gallery({ thumbnailUrl, title, id, name, coverImg }) {
  return (
    <div className={styles.container}>
          <Head>
              <title>{name}</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
      <main className={styles.main}>
        <div className={styles.fade}>
          <div className={styles.gridContainer}>
              {/* <Link as="#"> */}
               {/* <div className="photoid"> {name}</div>
                  <div className="photoid"> {id}</div> */}  

                {/* <div className="photoid">
                  <img width={250} height={200} src={thumbnailUrl} />
                </div>
                 
                <div>
                  <img width={250} height={200} src={coverImg} />
                </div> */}
               
               {/* Image Carousel */}

               <div className={styles.slider}>
                <Carousel width={1024} dynamicHeight={576}>
                    <div>
                        <img src={coverImg} alt="image1"/>
                        {/* <p className="legend">Image 1</p> */}
    
                    </div>
                    <div>
                        <img src={coverImg} alt="image2" />
                        {/* <p className="legend">Image 2</p> */}
    
                    </div>
                    <div>
                        <img src={coverImg} alt="image3"/>
                        {/* <p className="legend">Image 3</p> */}
    
                    </div>
                    <div>
                        <img src={coverImg} alt="image4"/>
                        {/* <p className="legend">Image 4</p> */}
    
                    </div>
                    <div>
                        <img src={coverImg} alt="image5"/>
                        {/* <p className="legend">Image 5</p> */}
    
                    </div>
              </Carousel>
            </div>
             
          </div>
        </div>
      </main>
    </div>
  );
}