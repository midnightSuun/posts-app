import { getRouteApi } from "@tanstack/react-router";
import styles from "./post.module.css"
import { usePost } from "./api/get-post";

const route = getRouteApi("/$postId")

export function PostView() {
    const {postId} = route.useParams()

    const {data: post, isError} = usePost(postId)

    if (isError) {
        return <div>Error!</div>
    }

    if (!post) {
        return <div>loading...</div>
    }

    return (
        <article className={styles.container}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </article>
    )
}