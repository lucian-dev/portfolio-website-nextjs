import stylesProjects from './../styles/Projects.module.scss'
import Link from 'next/link'
import { IoLinkOutline } from 'react-icons/io5'

const ProjectCard = ({item}) => {
  return (
    <div className={stylesProjects.lpCard}>
      <div className={stylesProjects.lpWrapper}>
        <Link href={`/projects/${item.slug}`}>
          <a className={stylesProjects.lpLink}>
            <div className={stylesProjects.lpImgBig}>
              <img src={item._embedded['wp:featuredmedia'][0].source_url} alt={item.title.rendered} loading="lazy"/>
              <div className={stylesProjects.lpInfo}>
                <IoLinkOutline />
                <h3>{item.title.rendered}</h3>
              </div>
            </div>
            <div className={stylesProjects.lpImgSm}>
              <span className={stylesProjects.category}>{item._embedded['wp:term'][0][0].name}</span>
              <img src={item._embedded['wp:featuredmedia'][0].source_url} alt={item.title.rendered} loading="lazy"/>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard