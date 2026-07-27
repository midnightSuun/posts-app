import styles from './App.module.css'
import { PostSummary } from './post/post-summary'
import { usePosts } from './post/api/get-posts'
import { CreatePostForm } from './post/create-post-form'

function App() {
  const { data: posts, isError } = usePosts()

  if (isError) {
    return <div>Error!</div>
  }

  if (!posts) {
    return <div>loading...</div>
  }

  return (
    <div className={styles.postsContainer}>
      <CreatePostForm />
      {posts.data.map((item) => (
        <PostSummary key={item.id} post={item} />
      ))}
    </div>
  )
}

export default App
