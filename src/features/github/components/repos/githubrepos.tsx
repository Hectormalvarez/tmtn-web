import React from 'react'

import styles from './githubrepos.module.css';
import { Repository } from '@/features/github';
import { formatTime, sortReposDateDecsending } from '@/utils';

interface GithubRepoProps {
    repos: Repository[];
}

export const GithubRepos = ({ repos }: GithubRepoProps) => {
    repos.sort(sortReposDateDecsending)

    return (
        <section className={styles.githubrepos}>
            <h1>Repositories</h1>
            {repos.map((repo) => (
                <GithubRepo key={repo.id} {...repo} />
            ))}
        </section>
    )
}

const GithubRepo: React.FC<Repository> = (repo) => {
    return (
        <a href={repo.html_url} target="_blank" rel="noreferrer">
            <article className={styles.repo} >
                <div>
                    <h2>{repo.name}</h2>
                    <p>{repo.description || 'No description'}</p>
                </div>
                <div>
                    <p>{repo.owner.login}</p>
                </div>
                <div>
                    <p>updated: {formatTime(repo.updated_at)}</p>
                    <p>created: {formatTime(repo.created_at)}</p>
                </div>

            </article>
        </a>
    )
}