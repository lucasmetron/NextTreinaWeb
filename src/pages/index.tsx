import type { NextPage } from 'next'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {

  useEffect(()=>{
    console.log(window.navigator.onLine)
  },[])

  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <Link href="/contatos">Contatos</Link> 
      <br/>
      <Link href="/produtos/papelaria/caneta">papelaria  </Link>
    </div>
  )
}

export default Home
