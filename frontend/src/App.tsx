import { useQuery } from "@apollo/client";
import { NewUserForm } from "./components/NewUserForm";
import { GET_USER } from "./services/queries";

type User = {
  id: number;
  name: string;
}

function App() {
  const { data, loading } = useQuery<{ users: User[] } >(GET_USER);

  if (loading) {
    return <div>Loading...</div>
  }


  return (
    <>
      <h3>User List</h3>
      <NewUserForm />
      <ul>
        {data?.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
