import { useEffect, useState } from "react";
import Member from "./Member";
import Pagination from "./Pagination";
import MembersHeader from "./MembersHeadr";
import GetFilterdRows from "./GetFilterdRows";

export const MembersTable = function ({ members, searchText, setMembers }) {
  const [activePage, setActivePage] = useState(1);
  const [membersPerPage, setMembersPerPage] = useState(10);
  const [selectedMembers, setSelectedMembers] = useState([]);

  let rows = GetFilterdRows(
    members,
    setMembers,
    searchText,
    activePage,
    selectedMembers,
    setSelectedMembers
  );

  let startIndex = (activePage - 1) * membersPerPage,
    endIndex = activePage * membersPerPage;

  let totalPages = Math.ceil(rows.length / membersPerPage);

  if (activePage < 0 || activePage > totalPages) {
    setActivePage(1);
  }

  //Deleting sellected checkbox columns
  const deleteSelected = () => {
    const membersAfterDeleting = members.filter((member) => {
      return !selectedMembers.includes(member.id);
    });
    setMembers(membersAfterDeleting);
    // re-initializing sellected checkbox columns
    setSelectedMembers([]);

    //if last page all rows are deleted then moving active page one less
    if (
      activePage != 1 &&
      activePage - 1 == parseInt(membersAfterDeleting.length / membersPerPage)
    ) {
      setActivePage(activePage - 1);
    }
  };

  return (
    <>
      {searchText.length > 0 && (
        <div id="search-result">
          {rows.length > 0
            ? `Found   ${rows.length}   Result`
            : "No Result Found"}
        </div>
      )}

      <table id="members-table" border={1}>
        <MembersHeader
          startIndex={startIndex}
          endIndex={endIndex}
          members={rows}
          setSelectedMembers={setSelectedMembers}
          selectedMembers={selectedMembers}
          activePage={activePage}
        />
        <tbody>
          {rows.length > 0 ? (
            rows.slice(startIndex, endIndex)
          ) : (
            <tr>
              <td colSpan={5}>Empty</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination
        totalRecords={rows.length}
        activePage={activePage}
        membersPerPage={membersPerPage}
        selectedMembers={selectedMembers}
        setActivePage={setActivePage}
        deleteSelected={deleteSelected}
      />
    </>
  );
};
