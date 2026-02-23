import { useEffect, useState } from "react"
import { User } from "./types/user"
import { Post } from "./types/post"
import { UserList } from "./components/UserList/UserList"
import { PostList } from "./components/PostList/PostList"
import "./index.css"

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data: User[] = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const fetchPosts = async (userId: number) => {
    setLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const data: Post[] = await response.json();
    setPosts(data);
    setSelectedUserId(userId);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Users & Posts</h1>

      <UserList users={users} onUserSelect={fetchPosts} />

      {loading && <p>Loading posts...</p>}

      {selectedUserId && !loading && <PostList posts={posts} />}
    </div>
  );
}

export default App;