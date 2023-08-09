import { useEffect, useState } from "react";
import Member from "./Member";
import { MembersTable } from "./MembersTable";
import SearchBar from "./SearchBar";
import Loading from "./Loading";
import { GEEK_TRUST_URL } from "../Constant";

const Members = function () {
  const [members, setMembers] = useState([]); // Members State Array
  const [searchText, setSearchText] = useState(""); // Search Text State Array
  const [dataFetched, setDataFetched] = useState(false); // In this state im setting whether data fetched from api or not

  useEffect(function () {
    fetchMembers();
  }, []);

  //to fetch all members
  async function fetchMembers() {
    let data = await fetch(GEEK_TRUST_URL);
    data = await data.json();
    setMembers(data);
    setDataFetched(true);
  }

  return !dataFetched ? (
    <Loading />
  ) : (
    <>
      <h1>Admin Ui</h1>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <MembersTable
        members={members}
        searchText={searchText}
        setMembers={setMembers}
      />
    </>
  );
};

export default Members;
