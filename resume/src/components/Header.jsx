import React from "react";
import { resumeData } from "../resumeData";
import profileImg from "../assets/profile.png";

function Header() {
  const { name, title, contacts } = resumeData.header;

  return (
    <header className="header">
      <div className="profile-pic-container">
        <img src={profileImg} alt="profile" className="profile-pic" />
      </div>

      <div>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>
          <a href={`mailto:${contacts.email}`}>{contacts.email}</a> |{" "}
          <a href={contacts.linkedin}>LinkedIn</a> |{" "}
          <a href={contacts.github}>GitHub</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
