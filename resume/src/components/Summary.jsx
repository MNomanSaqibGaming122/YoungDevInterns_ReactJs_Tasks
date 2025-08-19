import React from "react";
import { resumeData } from "../resumeData";

function Summary() {
  return (
    <section className="summary">
      <h3>Summary</h3>
      <p>{resumeData.summary}</p>
    </section>
  );
}

export default Summary;
