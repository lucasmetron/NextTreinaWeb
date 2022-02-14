import type { NextPage } from 'next'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  useEffect(()=>{
    console.log(window.navigator.onLine)
  },[])

  return (
    <div className={styles.container}>

    </div>
  )
}

export default Home
