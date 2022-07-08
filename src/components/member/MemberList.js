import React from "react";

function MemberList({ members }) {
  function renderMembers() {
    return members.map((member, i) => {
      return <li key={i}>{member.name}</li>;
    });
  }

  return (
    <div>
      <ul>{renderMembers()}</ul>
    </div>
  );
}

export default MemberList;