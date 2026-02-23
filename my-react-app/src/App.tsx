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
  const [loadingPosts, setLoadingPosts] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json: User[]) => {
        setUsers(json);
      });
  }, []);

  const handleSelectUser = (userId: number) => {
    setLoadingPosts(true);

    fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    )
      .then((response) => response.json())
      .then((json: Post[]) => {
        setPosts(json);
        setSelectedUserId(userId);
      })
      .finally(() => {
        setLoadingPosts(false);
      });
  };

  return (
    <div className="container">
      <h1>Users & Posts</h1>

      <UserList
        users={users}
        selectedUserId={selectedUserId}
        onSelectUser={handleSelectUser}
      />

      {loadingPosts && <p className="loading">Loading posts...</p>}

      {selectedUserId && !loadingPosts && <PostList posts={posts} />}
    </div>
  );
}

export default App;