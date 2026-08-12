import styles from './App.module.css'
import { usePosts } from './post/api/get-posts'
import { PostSummary } from './post/post-summary'

export function App() {
  const { data: posts, isError } = usePosts()

  if (isError) {
    return <div>Error!</div>
  }

  if (!posts) {
    return <div>loading...</div>
  }

  return (
    <div className={styles.postsContainer}>
      {posts.data.map((item) => (
        <PostSummary key={item.id} post={item} />
      ))}
    </div>
  )
}
