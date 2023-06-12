import styles from './page.module.css'
import { GithubCount } from '@/features/githubcount'
import { ProfileHeader } from '@/features/profileheader'
import { ProfileFooter } from '@/features/profilefooter'


export default function Home() {
  const name = "Hector Alvarez"
  const bio = "Systems administrator that is learning devops"

  const counts = [{label: "Followers", value: 100}, {label: "Repos", value: 100}]

  return (
    <div className={styles.container}>
      <ProfileHeader name={name} bio={bio} />
      <main className={styles.main}>
        <GithubCount counters={counts} />
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
