import Member from "./Member";

const GetFilterdRows = function (
  members,
  setMembers,
  searchText,
  activePage,
  selectedMembers,
  setSelectedMembers
) {
  let rows = [];

  //TO delete all Selected members
  const addDeleteSelectedmember = (memberId) => {
    let index = selectedMembers.indexOf(memberId);

    if (index == -1) {
      setSelectedMembers(selectedMembers.concat(memberId));
    } else {
      setSelectedMembers(
        selectedMembers.filter((member) => member != memberId)
      );
    }
  };

  //Delete a member from delete icon
  const deleteMember = (memberId) => {
    let newMembers = members.filter((member) => {
      return member.id != memberId;
    });
    setMembers(newMembers);
  };

  //saving changes on update
  const saveChanges = (memberId, memberName, memberEmail, memberRole) => {
    let newMembers = members.map((member) => {
      if (member.id == memberId) {
        return {
          id: memberId,
          name: memberName,
          email: memberEmail,
          role: memberRole,
        };
      } else {
        return member;
      }
    });
    setMembers(newMembers);
  };

  // if user want to discard then setting initial state
  const discardChanges = () => {
    setMembers(members);
  };

  members.forEach(function (member) {
    if (
      !(
        member.name.toLowerCase().indexOf(searchText.toLowerCase()) == -1 &&
        member.email.toLowerCase().indexOf(searchText.toLowerCase()) == -1 &&
        member.role.toLowerCase().indexOf(searchText.toLowerCase()) == -1
      )
    ) {
      return rows.push(
        <Member
          key={member.id}
          member={member}
          searchText={searchText}
          deleteMember={deleteMember}
          saveChanges={saveChanges}
          discardChanges={discardChanges}
          selectedMembers={selectedMembers}
          addDeleteSelectedmember={addDeleteSelectedmember}
          activePage={activePage}
        />
      );
    }
  });
  return rows;
};

export default GetFilterdRows;
