import styles from './page.module.css'
import { ProfileHeader } from '@/features/profileheader'
import { GithubCount } from '@/features/githubcount'

export default function Home() {
  return (
    <main className={styles.main}>
      <ProfileHeader />
      <GithubCount />
      <Footer />
    </main>
  )
}

const Footer = () => (
  <footer className={styles.footer}>
    <p>© 2022 Hector Alvarez</p>
  </footer>
)
