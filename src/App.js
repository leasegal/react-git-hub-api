import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search/Search";
import Button from "./components/Button/Button";
import User from "./components/User/User";
import Sort from "./components/Sort/Sort";

function App() {
  const [gitUser, setGitUser] = useState("");
  const [searchedUser, setSearchedUser] = useState("");
  const [users, setUsers] = useState([]);
  //const [user, setUser] = useState({}); // the current user what i got
  const [isClickSearch, setIsClickSearch] = useState(false);

  // console.log(user);
  useEffect(() => {
    try {
      async function fetchData() {
        const githubApiUrl = `https://api.github.com/users/${searchedUser}`;
        // npm i axios
        if (gitUser === "") return;
        const { data } = await axios.get(githubApiUrl);
        //איך ליצור שאם לא יכול לקבל את היוזר לתוך הדאטה אז הוא יחזיר אלרט שלא יכול?
        console.log(`data`, data);
        const { name, avatar_url, created_at, login, public_repos } = data;

        const CheckExistingUser = users.find((user) => user.login == login);
        if (CheckExistingUser === undefined) {
          setUsers([
            ...users,
            { name, avatar_url, created_at, login, public_repos },
          ]);
        } else {
          alert(`the user existing`);
        }

        console.log(`users`, users);
      }
      fetchData();
    } catch (e) {
      console.log(e.message);
      alert("user is undefined"); // why isn't it working
    }
  }, [searchedUser]);

  const handleSearch = () => {
    setSearchedUser(gitUser);
    setIsClickSearch(true);
  };

  return (
    <div className="App">
      <Search
        setGitUser={setGitUser}
        gitUser={gitUser}
        keyPress={handleSearch}
      />
      <Button
        searchedUser={searchedUser}
        users={users}
        isClickSearch={isClickSearch}
        text={"Search"}
        clickEvent={handleSearch}
      />
      <Button
        text={"Reset"}
        clickEvent={() => {
          console.log("Reset");
          setGitUser("");
          setSearchedUser("");
          setIsClickSearch(!isClickSearch);
          setUsers([]);
        }}
      />
      <br/>
      <Sort users={users} setUsers={setUsers}/>
      
      {users.map((el) => (
        <User user={el} users={users} setUsers={setUsers} />
      ))}
    </div>
  );
}

export default App;
