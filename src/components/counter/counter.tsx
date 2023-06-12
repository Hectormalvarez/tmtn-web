import styles from './counter.module.css'

export interface counterProps {
    label: string,
    value: number
}

export const Counter = ({label, value}: counterProps) => (
    <div className={styles.counterContainer}>
        <p>{label}</p>
        <p>{value}</p>
    </div>
)
