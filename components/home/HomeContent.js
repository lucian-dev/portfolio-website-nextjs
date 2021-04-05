import styles from '@components/home/Home.module.scss'
import Link from 'next/link'
import Features from '@components/home/Features'

const HomeContent = ({homeData}) => {
  return (
    <>
      {homeData.map(home => (
        <div className={styles.content} key={home.id}>
          <div className={styles.info}>
            <h1 dangerouslySetInnerHTML={{__html: home.acf.hero_brief.title}}></h1>
            <div dangerouslySetInnerHTML={{__html: home.acf.hero_brief.sub_title}}></div>
            <Link href="/about">
              <a className="btnS">...more about me</a>
            </Link>
          </div>
          <Features features={home}/>
        </div>
      ))}
    </>
  )
}

export default HomeContent
