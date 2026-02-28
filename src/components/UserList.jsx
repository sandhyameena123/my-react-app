export default function UserList() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Mary" },
    { id: 3, name: "Alex" }
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}