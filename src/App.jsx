import React, { useEffect, useState } from "react";
import config from "./config";
import "./App.css"; // Import the CSS file

const App = () => {
  const [uid, setUid] = useState("");
  const [prefilledLink, setPrefilledLink] = useState("");

  useEffect(() => {
    // Generate a random UID
    const randomUid = Math.random().toString(36).substring(2, 15);
    setUid(randomUid);

    // Create the prefilled Google Form link
    const { formId, entryId } = config;
    const link = `https://docs.google.com/forms/d/e/${formId}/viewform?usp=pp_url&${entryId}=${randomUid}`;
    setPrefilledLink(link);
  }, []);

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Welcome to the Quiz!</h1>
        <p className="subtitle">Your unique ID is:</p>
        <div className="uid-container">
          <p className="uid">{uid}</p>
        </div>
        <button
          className="start-button"
          onClick={() => window.open(prefilledLink, "_blank")}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default App;