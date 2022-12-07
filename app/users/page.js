import getAllUsers from "../../utils/getAllUsers";
import UsersClient from "./users-client";

export default async function UsersPage() {
  const allUsers = await getAllUsers();
  return (
    <div>
      <h1>All Users</h1>
      <UsersClient initialData={allUsers} />
    </div>
  );
}
