import { useEffect, useState } from "react";

const MembersHeader = function ({
  startIndex,
  endIndex,
  members,
  selectedMembers,
  setSelectedMembers,
  activePage,
}) {
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    checkForAllBoxInCurrPage();
  }, [members, selectedMembers, activePage]);

  const addAllInCheckbox = (checked) => {
    if (checked) {
      setSelectedMembers(
        members.slice(startIndex, endIndex).filter((member) => {
          return selectedMembers.includes(member.id);
        })
      );
    } else {
      let selectCheckboxTemp = [...selectedMembers];
      members.slice(startIndex, endIndex).forEach((member) => {
        if (!selectedMembers.includes(member.id)) {
          selectCheckboxTemp.push(member.id);
        }
      });
      setSelectedMembers(selectCheckboxTemp);
    }
  };

  const checkForAllBoxInCurrPage = () => {
    let flag = true;
    members.slice(startIndex, endIndex).forEach((member) => {
      if (!selectedMembers.includes(member.id)) {
        flag = false;
        return;
      }
    });
    setAllChecked(flag);
  };
  return (
    <thead>
      <tr>
        <th>
          <input
            type="checkbox"
            onChange={(e) => addAllInCheckbox(allChecked)}
            checked={allChecked}
          />
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};

export default MembersHeader;
