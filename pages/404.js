import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])


  return (
    <div>
      <h1>Oooops...</h1>
      <p>...go <Link href='/'><a className="btnS">Home</a></Link></p>
    </div>
  )
}

export default NotFound
