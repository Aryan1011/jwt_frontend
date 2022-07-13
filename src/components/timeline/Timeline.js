import axios from "axios";
import React, { useEffect, useState } from "react";
import TimelineForm from "./TimelineForm";
import TimelineList from "./TimelineList";

function Timelines() {
  const [timelines, setTimelines] = useState([]);

  async function getTimelines() {
    const timelinesRes = await axios.get("https://mitrauiet.herokuapp.com/timeline/");
    setTimelines(timelinesRes.data);
  }

  useEffect(() => {
    getTimelines();
  }, []);

  return (
    <div>
      <TimelineForm getTimelines={getTimelines} />
      <TimelineList timelines={timelines} />
    </div>
  );
}

export default Timelines;