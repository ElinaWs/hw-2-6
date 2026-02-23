import { Post } from "../../types/post"

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="post-list">
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          {post.title}
        </div>
      ))}
    </div>
  );
};