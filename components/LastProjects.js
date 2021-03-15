import stylesProjects from './../styles/Projects.module.scss'

const LastProjects = ({item}) => {
  return (
    <div className={stylesProjects.lastProjects}>
      <h2>
        {item.title.rendered}
      </h2>
    </div>
  )
}

export default LastProjects