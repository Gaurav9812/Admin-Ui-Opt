import { useState } from "react";
import DeleteFile from "../assets/img/delete.png";
import UpdateFile from "../assets/img/writing.png";

const Member = function ({
  member,
  deleteMember,
  saveChanges,
  discardChanges,
  addDeleteSelectedmember,
  selectedMembers,
  activePage,
}) {
  const [updateMember, setUpdateMember] = useState(0);
  const [updateMemberName, setUpdateMemberName] = useState("");
  const [updateMemberEmail, setUpdateMemberEmail] = useState("");
  const [updateMemberRole, setUpdateMemberRole] = useState("");

  const checkboxSelected = selectedMembers.includes(member.id);
  return (
    <tr className={checkboxSelected ? "selected-row" : ""}>
      <td>
        <input
          type="checkbox"
          value={member.id}
          onChange={(e) => addDeleteSelectedmember(e.target.value)}
          checked={checkboxSelected}
        />
      </td>
      {updateMember == member.id ? (
        <>
          <td>
            {
              <input
                className="form-field"
                type="text"
                value={updateMemberName}
                onChange={(e) => setUpdateMemberName(e.target.value)}
              />
            }
          </td>
          <td>
            {
              <input
                className="form-field"
                type="email"
                value={updateMemberEmail}
                onChange={(e) => setUpdateMemberEmail(e.target.value)}
              />
            }
          </td>
          <td>
            {
              <select
                className="form-field"
                onChange={(e) => setUpdateMemberRole(e.target.value)}
              >
                <option
                  value="member"
                  selected={updateMemberRole == "member" && true}
                >
                  Member
                </option>
                <option
                  value="admin"
                  selected={updateMemberRole == "admin" && true}
                >
                  admin
                </option>
              </select>
            }
          </td>
          <td>
            <button
              id="save-btn"
              onClick={() => {
                saveChanges(
                  member.id,
                  updateMemberName,
                  updateMemberEmail,
                  updateMemberRole
                );
                setUpdateMember(0);
              }}
            >
              Save Changes
            </button>
            <button
              id="discard-btn"
              onClick={() => {
                setUpdateMember(0);
                discardChanges();
              }}
            >
              Discard Changes
            </button>
          </td>
        </>
      ) : (
        <>
          <td>{member.name}</td>
          <td>{member.email}</td>
          <td>{member.role}</td>
          <td>
            <img
              src={DeleteFile}
              className="image"
              onClick={(e) => deleteMember(member.id)}
            />
            <img
              src={UpdateFile}
              className="image"
              onClick={(e) => {
                setUpdateMember(member.id);
                setUpdateMemberName(member.name);
                setUpdateMemberEmail(member.email);
                setUpdateMemberRole(member.role);
              }}
            />
          </td>
        </>
      )}
    </tr>
  );
};

export default Member;
