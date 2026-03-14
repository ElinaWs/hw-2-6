import { useEffect, useState } from "react"
import type { User } from "./types/user"
import type { Post } from "./types/post"
import { UserList } from "./components/UserList/UserList"
import { PostList } from "./components/PostList/PostList"
import { axiosApi } from './axiosApi';
import "./index.css"

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await axiosApi.get<User[]>('/users');
        setUsers(response.data);
      } catch (err) {
        console.error('Loading error', err);
        setError('User error');
      }
    };

    loadUsers();
  }, []);
        
  const handleSelectUser = async (userId: number) => {
    if (userId === selectedUserId) return;
    setError(null);

    try {
      const response = await axiosApi.get<Post[]>('/posts', {
        params: { userId },
      });
      setPosts(response.data);
      setSelectedUserId(userId);
    } catch (err) {
      setError('Post error'); 
    }
  };

  return (
    <div className="container">
      <h1>Users & Posts</h1>

      {error && <p className="error">{error}</p>}

      <UserList
        users={users}
        selectedUserId={selectedUserId}
        onSelectUser={handleSelectUser}
      />

      {selectedUserId !== null && <PostList posts={posts} />}
    </div>
  );
}

export default App;