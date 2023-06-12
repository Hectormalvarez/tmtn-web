import styles from './page.module.css'
import { ProfileHeader } from '@/features/profileheader'
import { GithubCount } from '@/features/githubcount'
import { ProfileHeader } from '@/features/profileheader'
import { ProfileFooter } from '@/features/profilefooter'


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
      </main>
      <ProfileFooter />
    </div>
  )
}
