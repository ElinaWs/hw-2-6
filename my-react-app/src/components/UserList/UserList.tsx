import { User } from "../../types/user"
import { UserCard } from "../UserCard/UserCard"

interface UserListProps {
  users: User[];
  onUserSelect: (id: number) => void;
}

export const UserList = ({ users, onUserSelect }: UserListProps) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onClick={onUserSelect} />
      ))}
    </div>
  );
};