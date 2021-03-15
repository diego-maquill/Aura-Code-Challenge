// Globals
import React, { useState, useEffect } from "react";

// Components
import { mockFetch } from "../../util/mockFetch";
import Records from "./Records";
import RecordContext from "./RecordContext";

// Component
function GlobalRecords() {
  //setup Global useState Hook
  const [data, setData] = useState([]);
  //declare async function for fetching thru the mockFetch method
  const fetchSaveData = async () => {
    const recordData = await mockFetch();
    setData(recordData);
  }
  // useEffect hook for fetching SavaData
  useEffect(() => {
    fetchSaveData();
  }, [])

  return (
    <div className="aura-page aura-global_records">
      <h1>Top Records of 2020</h1>
      {/* I chose to use React Context for stage management*/}
      <RecordContext.Provider value={data}>
        <Records />
      </RecordContext.Provider>
    </div>
  );
}

export { GlobalRecords };
