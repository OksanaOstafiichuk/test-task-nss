import { useState } from "react";

export const SearchForm = () => {
  const [searchValue, setSearchValue] = useState("");

  const handelChange = (evt) => {
    setSearchValue(evt.currentTarget.value);
  };

  const handelSubmit = (evt) => {
    evt.preventDefault();

    if (searchValue.trim() === "") {
      alert("oop");
      return;
    }

    console.log(searchValue);
    setSearchValue("");
  };

  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="Search articles"
        value={searchValue}
        onChange={handelChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
