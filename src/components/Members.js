import { useEffect, useState } from "react";
import Member from "./Member";
import { MembersTable } from "./MembersTable";
import SearchBar from "./SearchBar";
import Loading from "./Loading";
import { GEEK_TRUST_URL } from "../Constant";

const Members = function () {
  const [members, setMembers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(function () {
    fetchMembers();
  }, []);

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
