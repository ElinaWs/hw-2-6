import { User } from "../../types/user"

interface Props {
  user: User
  onClick: (id: number) => void;
}

export const UserCard = ({ user, onClick }: Props) => {
  return (
    <div className="user-card" onClick={() => onClick(user.id)}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <span>{user.company.name}</span>
    </div>
  );
};