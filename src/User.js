import { UserProvider } from "./UserContext";

function User() {
  return (
    <UserProvider>
      <div>There is a User</div>
    </UserProvider>
  );
}

export default User;
