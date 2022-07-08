import axios from "axios";
import React, { useState } from "react";

function MemberForm({ getMembers }) {
  const [memberName, setMemberName] = useState("");

  async function saveMember(e) {
    e.preventDefault();

    try {
      const memberData = {
        name: memberName,
      };
       await axios.post("http://localhost:5000/member/", memberData);
      getMembers();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
    adjas
      <form onSubmit={saveMember}>
        <input
          type="text"
          placeholder="Member name"
          onChange={(e) => {
            setMemberName(e.target.value);
          }}
          value={memberName}
        />
        <button type="submit">Save new member</button>
      </form>
    </div>
  );
}

export default MemberForm;