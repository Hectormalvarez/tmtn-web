import { Counter } from '@/components/counter'
import styles from './githubcount.module.css'

export const GithubCount = () => (
  <section className={styles.section}>
    <h1>section title</h1>
    <Counter />
    <Counter />
  </section>
)
