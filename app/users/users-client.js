"use client";

import Link from "next/link";
import { useFetchAllUsers } from "../../hooks";

function UserBlock({ user }) {
  return (
    <Link key={user.id} href={`/user/${user.id}`}>
      <p>{user.orgName}</p>
      <p>{user.userName}</p>
      <p>{user.email}</p>
      <p>{user.phoneNumber}</p>
    </Link>
  );
}

export default function UsersClient({ initialData }) {
  const { isLoading, data: users, isError } = useFetchAllUsers(initialData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>There has been an error</div>;
  }
  return (
    <>
      {users.map((user) => (
        <UserBlock key={user.id} user={user} />
      ))}
    </>
  );
}
