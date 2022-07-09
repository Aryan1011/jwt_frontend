import axios from "axios";
import React, { useState } from "react";

function TimelineForm({ getTimelines }) {
  const [timelineName, setTimelineName] = useState("");

  async function saveTimeline(e) {
    e.preventDefault();

    try {
      const timelineData = {
        name: timelineName,
      };
       await axios.post("http://localhost:5000/timeline/", timelineData);
      getTimelines();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
    adjas
      <form onSubmit={saveTimeline}>
        <input
          type="text"
          placeholder="Timeline name"
          onChange={(e) => {
            setTimelineName(e.target.value);
          }}
          value={timelineName}
        />
        <button type="submit">Save new Timeline</button>
      </form>
    </div>
  );
}

export default TimelineForm;