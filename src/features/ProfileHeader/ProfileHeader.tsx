import Image from 'next/image'

import styles from './ProfileHeader.module.css'

export const Header = () => (
    <header className={styles.header}>
        <div className={styles.avatar} >
            <Image
                src="https://avatars.githubusercontent.com/u/31625850?v=4"
                alt="avatar"
                fill={true}
            />
        </div>
        <div className={styles.title}>
            <h1 className={styles.name}>Hector Alvarez</h1>
            <p className={styles.bio}>Systems administrator  that is learning devops</p>
        </div>
    </header>
)