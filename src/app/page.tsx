import Image from 'next/image'

import styles from './page.module.css'
import { Header } from '@/features/ProfileHeader'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <GithubCount />
      <Footer />
    </main>
  )
}



const GithubCount = () => (
  <section className={styles.section}>
    <h1>section title</h1>
  </section>
)

const Footer = () => (
  <footer className={styles.footer}>
    <p>© 2022 Hector Alvarez</p>
  </footer>
)
