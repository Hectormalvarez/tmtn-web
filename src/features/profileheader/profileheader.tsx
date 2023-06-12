import Image from 'next/image'

import styles from './profileheader.module.css'

interface ProfileHeaderProps {
  name: string
  bio: string
}

export const ProfileHeader = ({name, bio}: ProfileHeaderProps) => (
  <header id="header" className={styles.header}>
    <div className={styles.avatar}>
      <Image
        src="https://avatars.githubusercontent.com/u/31625850?v=4"
        alt="avatar"
        fill={true}
      />
    </div>
    <div className={styles.title}>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.bio}>
        {bio}
      </p>
    </div>
  </header>
)
