import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DashboardComponent from '@/components/DashboardComponent'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {

  const { replace } = useRouter();

  useEffect(() => {
    replace('/dashboard');
  },[])

  return (
    <div className={styles.wholeCont}>
      <Head>
        <title>Patient Tracking System</title>
        <link rel="logo icon" href="/logoImg.jpg" />
        <meta charset="UTF-8" />
        <meta name="description" content="Patient medical records tracking system"/>
        <meta name="keywords" content="patient, tracking, system, medical, blockchain, records, doctor, decentralized medical records"/>
        <meta name="author" content="Shiva Kale, Vikrant Khedkar, Hritik Raj Aarya"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <DashboardComponent />
    </div>
  )
}
