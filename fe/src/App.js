import Login from "./components/Login";
import Wrapper from "./components/Wrapper";
import Logout from "./components/Logout";
import User from "./components/User";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isLoading } = useAuth0(); // send to db
  console.log(user);
  return (
    <div className="App">
      <Wrapper>
        <User />
        <Login />
        <Logout />
      </Wrapper>
    </div>
  );
}

export default App;
