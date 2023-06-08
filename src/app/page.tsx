import styles from './page.module.css'
import { ProfileHeader } from '@/features/profileheader'
import { GithubCount } from '@/features/githubcount'

export default function Home() {
  return (
    <main className={styles.main}>
      <ProfileHeader />
      <section className={styles.ghSection}>
        <GithubCount />
        <div>
          <h1>Repo List</h1>
          <p>repo</p>
          <p>repo</p>
          <p>repo</p>
          <p>repo</p>
          <p>repo</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

const Footer = () => (
  <footer className={styles.footer}>
    <p>© 2022 Hector Alvarez</p>
  </footer>
)
