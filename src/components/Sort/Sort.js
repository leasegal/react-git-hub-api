import React, { useRef, useState } from "react";

const Sort = ({ users, setUsers }) => {
  const [selectSentence, setSelectSentence] = useState("choose a filter");
  const selectEl = useRef(null);

  const dateSort = () => {
     setUsers(users.sort((a, b) => {
        let da = new Date(a.created_at.split('T')[0]),
            db = new Date(b.created_at.split('T')[0]);
        return da - db;
    }));
    console.log("users after sort:", users);
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
    console.log("users after sort:", users);
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
  };
  return (
    <>
      <label htmlFor="filter">{selectSentence}</label>
      {/*if i want to put  for="filter"*/}
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
