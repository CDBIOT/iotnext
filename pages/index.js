import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    
    <div >
  <h1 className={styles.title}> Home </h1>
  <Image src = "/nave.jpg" width ="300" height="400" />
    </div>
    
  )
}
