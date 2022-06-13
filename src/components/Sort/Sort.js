import React, { useRef, useState } from "react";

const Sort = ({ users, setUsers }) => {
  const [selectSentence, setSelectSentence] = useState("choose a filter");
  const selectEl = useRef(null);

  const dateSort = () => {
    // setUsers();
  };

  const nameSort = () => {
    setUsers(
      users.sort((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      })
    );
  };

  const repositoriesSort = () => {
    setUsers(
      users.sort((a, b) => {
        return a.public_repos - b.public_repos;
      })
    );
    console.log("users after sort:", users);
  };

  const handleChange = () => {
    const { value } = selectEl.current;

    setSelectSentence(
      value === "" ? "choose a filter" : `filtered by ${value}`
    );

    console.log(`you choosed ${value}`);

    if (value === "repositories") {
      repositoriesSort();
    } else if (value === "date") {
      dateSort();
    } else {
      nameSort();
    }
    console.log(`users after filtered by ${value} are: ${users}`);
  };

  return (
    <>
      <label for="filter">{selectSentence}</label>
      <select name="filter" ref={selectEl} onChange={handleChange}>
        <option></option>
        <option value="date">date</option>
        <option value="name">name</option>
        <option value="repositories">repositories</option>
      </select>
    </>
  );
};

export default Sort;
