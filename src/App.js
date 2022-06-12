import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search/Search";
import Button from "./components/Button/Button";
import Avatar from "./components/User/User";

function App() {
  const [gitUser, setGitUser] = useState("");
  const [searchedUser, setSearchedUser] = useState("");
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({}); // the current user what i got
  const [isClickSearch, setIsClickSearch] = useState(false);

  console.log(user);
  useEffect(() => {
    try {
      async function fetchData() {
        const githubApiUrl = `https://api.github.com/users/${searchedUser}`;
        // npm i axios
        if (gitUser === "") return;
        const { data } = await axios.get(githubApiUrl);
        console.log(`data`, data);
        const { name, avatar_url, created_at, login, public_repos } = data;
        setUser({ name, avatar_url, created_at, login, public_repos });
        //i tryed to set users and than with map to run it but i couldnt?????
        console.log(`user`, user);
      }
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, [searchedUser]);

  return (
    <div className="App">
      <Search setGitUser={setGitUser} gitUser={gitUser} user={user} />
      <Button
        searchedUser={searchedUser}
        user={user}
        isClickSearch={isClickSearch}
        text={"Search"}
        clickEvent={() => {
          console.log("search");
          setSearchedUser(gitUser);
          setIsClickSearch(true);
        }}
      />
      <Button
        text={"Reset"}
        clickEvent={() => {
          console.log("Reset");
          setGitUser("");
          setSearchedUser("");
          setUser({})
          setIsClickSearch(!isClickSearch);

          console.log(user);
        }}
        user={user}
      />
      
    </div>
  );
}

export default App;
