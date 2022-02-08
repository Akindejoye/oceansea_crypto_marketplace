import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css'
import Header from './../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  )
}
