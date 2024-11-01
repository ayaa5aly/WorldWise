import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./User.module.css";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <img src={user?.avatar} alt={user?.name || "User"} />
      <span>Welcome, {user?.name || "User"}</span>

      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;