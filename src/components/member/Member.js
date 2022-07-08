import axios from "axios";
import React, { useEffect, useState } from "react";
import MemberForm from "./MemberForm";
import MemberList from "./MemberList";

function Members() {
  const [members, setMembers] = useState([]);

  async function getMembers() {
    const membersRes = await axios.get("http://localhost:5000/member/");
    setMembers(membersRes.data);
  }

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <div>
      <MemberForm getMembers={getMembers} />
      <MemberList members={members} />
    </div>
  );
}

export default Members;