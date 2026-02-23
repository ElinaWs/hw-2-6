import { User } from "../../types/user"
import { UserCard } from "../UserCard/UserCard"

interface UserListProps {
  users: User[];
  selectedUserId: number | null;
  onSelectUser: (id: number) => void;
}

export const UserList = ({
  users,
  selectedUserId,
  onSelectUser,
}: UserListProps) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          isActive={user.id === selectedUserId}
          onSelect={onSelectUser}
        />
      ))}
    </div>
  );
};