import { User } from "../../types/user"

interface UserCardProps {
  user: User;
  isActive: boolean;
  onSelect: (id: number) => void;
}

export const UserCard = ({ user, isActive, onSelect }: UserCardProps) => {
  return (
    <div
      className={`user-card ${isActive ? "active" : ""}`}
      onClick={() => onSelect(user.id)}
    >
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <span>{user.company.name}</span>
    </div>
  );
};