import { Link } from '@tanstack/react-router'
import type { Post } from '../types'

type Props = {
    post: Post
}

export function PostSummary({ post }: Props) {
    return (
        <Link to="/$postId" params={{ postId: String(post.id) }}>
            {post.title}
        </Link>
    )
}
