import styles from './page.module.css'
import { GithubCount, GithubRepos, Repository, repodata } from '@/features/github'
import { ProfileHeader } from '@/features/profileheader'
import { ProfileFooter } from '@/features/profilefooter'


export default function Home() {
  const name = "Hector Alvarez"
  const bio = "Systems administrator that is learning devops"

  const counts = [{ label: "Followers", value: 100 }, { label: "public repos", value: 100 }]

  return (
    <div className={styles.container}>
      <ProfileHeader name={name} bio={bio} />
      <main className={styles.main}>
        <GithubCount counters={counts} />
        <GithubRepos repos={repodata as Repository[]} />
      </main>
      <ProfileFooter />
    </div>
  )
}
