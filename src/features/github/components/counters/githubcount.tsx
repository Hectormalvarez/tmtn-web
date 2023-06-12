import { Counter } from '@/components/counter'
import styles from './githubcount.module.css'

import { counterProps } from '@/components/counter'

interface GithubCountProps {
    counters: counterProps[];
}

export const GithubCount = ({ counters }: GithubCountProps) => {
    return (
        <section className={styles.section}>
            <div className={styles.ghCounters}>
                {
                    counters.map((counter) => (
                        <Counter key={counter.label} {...counter} />
                    ))
                }
            </div>
        </section>
    );
}
