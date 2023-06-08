import styles from './counter.module.css'

interface counterProps {
    label: string,
    count: number
}

export const Counter = ({label, count}: counterProps) => (
    <div className={styles.counterContainer}>
        <h2>{label}</h2>
        <p>{count}</p>
    </div>
)
