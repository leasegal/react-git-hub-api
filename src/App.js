import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search/Search";
import Button from "./components/Button/Button";

function App() {
  const [gitUser, setGitUser] = useState("");
  const [searchedUser, setSearchedUser] = useState("");
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
console.log(user);
  useEffect(() => {
    try {
      async function fetchData() {
        const githubApiUrl = `https://api.github.com/users/${searchedUser}`;
        // npm i axios
        if (gitUser === "") return;
        const { data } = await axios.get(githubApiUrl);
        const { avatar_url, created_at, login, public_repos } = data;
        setUser({ avatar_url, created_at, login, public_repos });

        console.log(avatar_url, created_at, login, public_repos);
      }
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, [searchedUser]);

  return (
    <div className="App">
      <Search setGitUser={setGitUser} gitUser={gitUser} />
      <Button
        text={"Search"}
        clickEvent={() => {
          console.log("search");
          setSearchedUser(gitUser);
        }}
      />
      <Button text={"Reset"} clickEvent={() => console.log("Reset")} />
    </div>
  );
}

export default App;
