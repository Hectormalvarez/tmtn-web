import { Counter } from '@/components/counter'
import styles from './githubcount.module.css'

export const GithubCount = () => {
    return (
        <section className={styles.section}>
            <div className={styles.ghCounters}>
                <Counter label='Public Repos' count={14}/>
                <Counter label='followers' count={2}/>
            </div>
        </section>
    );
}
