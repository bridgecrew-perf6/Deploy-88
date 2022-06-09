// domain.com/projects/projectSlug
import Head from 'next/head'
import InfoNavbar from '../../../components/projects/InfoNavbar'
import { projectsApi } from '../../../lib/api'
import Gallery from '../../../components/ImageDetail'
import { Button } from '@material-ui/core'
import Link from 'next/link';
import styles from "./index.module.css"

const LOCAL_URL = process.env.NEXT_PUBLIC_CMS_LOCALHOST
const projectDetails = ({ project }) => {

  const localIcon = LOCAL_URL + project.icon.url
  const localIconPreview = LOCAL_URL + project.iconPreview.url
  const CoverImg = LOCAL_URL + project.cover.url


   return (
    <>
      <Head>
        <title>{project.title}</title>
        <meta name="description" content={project.description} />
      </Head>
        {/* <InfoNavbar/> */}
        <Link href="/projects">
            <a className={styles.Projectsbutton}>Projects</a>
          </Link>
      <div className={styles.wrapper}>
          <div className={styles.main}>
            <Link href="/SecondaryPage/AboutUs">
              <a className={styles.Infobutton}>Info</a>
            </Link>
          </div>

          {/* Slider Code */}
          <div className={styles.gallery}>
            <Gallery 
              thumbnailUrl={localIconPreview} 
              name={project.title}
              coverImg = {CoverImg}
            />
          </div>
      </div>

    </>
  )
}

export default projectDetails

export async function getStaticPaths() {
  // get ids from database and map projectId for routes
  const projects = await projectsApi.getAll()
  const paths = projects.map(project => ({
    params: { slug: project.slug },
  }))

  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  // fetch data for a single project
  const { slug } = params
  const [project] = await projectsApi.getOne(slug)

  return {
    props: {
      project,
    },
  }
}
