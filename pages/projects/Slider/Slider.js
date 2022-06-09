import Head from "next/head";
import { useState } from "react";
import Gallery from "../../../components/ImageDetail";
import styles from "../../../styles/Home.module.css";

const LOCAL_URL = process.env.NEXT_PUBLIC_CMS_LOCALHOST
export default function Home({ project }) {
    const localIcon = LOCAL_URL + project.icon.url
    const localIconPreview = LOCAL_URL + project.iconPreview.url

  const [photos, setPhotos] = useState(stuff);
  return (
	<div className={styles.container}>
	  <Head>
		<title>Photo Gallery</title>
		<link rel="icon" href="/favicon.ico" />
	  </Head>
	  <main className={styles.main}>
		<div className={styles.fade}>
		  <div className={styles.gridContainer}>
			{photos &&
			  photos.map((detail) => (
				<Gallery
				  key={detail.id}
				  thumbnailUrl={detail.localIcon}
				  title={detail.name}
				  id={detail.id}
				/>
			  ))}
		  </div>
		 <h1></h1>
		</div>
	  </main>
	</div>
  );
}
export async function getStaticProps() {
  const results = await fetch("http://localhost:1337/photos");
  const stuff = await results.json();
  return {
	props: { project },
  };
}