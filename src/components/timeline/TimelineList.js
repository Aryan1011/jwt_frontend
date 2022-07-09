import React from "react";

function TimelineList({ timelines }) {
  function renderTimelines() {
    return timelines.map((timeline, i) => {
      return <li key={i}>{timeline.name}</li>;
    });
  }

  return (
    <div>
      <ul>{renderTimelines()}</ul>
    </div>
  );
}

export default TimelineList;