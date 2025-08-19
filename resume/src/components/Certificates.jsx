import React from "react";

const certifications = [
  {
    date: "01/12/2024",
    title: "Flutter & Dart - The Complete Guide [2024 Edition]",
    link: "https://ude.my/UC-0a4c65de-6b41-4eb6-9ee8-5d65e8535def",
  },
  {
    date: "13/06/2024",
    title: " Introduction to Cybersecurity",
  },
  {
    date: "18/08/2023",
    title: " 3D Modeling KPITB & KPYOUTH EMPLOYMENT PROGRAM",
    link: "https://verify.kpitb.gov.pk",
  },
  {
    date: "16/08/2023",
    title: " Getting started with Flutter Development",
    link: "https://coursera.org/share/fbc062ea6aa5586479ce86d75e61722a",
  },
  {
    date: "14/08/2023",
    title: " Developing AI Applications with Python and Flask",
    link: "https://coursera.org/share/e743dbf8b13ec11ee204963f0c8d5a3b",
  },
  {
    date: "14/08/2023",
    title: " Getting Started with Git and GitHub",
    link: "https://coursera.org/share/80addd4731e31e6499b20e756483e4c6",
  },
  {
    date: "09/08/2023",
    title: " Introduction to Web Development with HTML, CSS, JavaScript",
    link: "https://coursera.org/share/3d102b2f417483de1c232595bbfd856b",
  },
  {
    date: "03/08/2023",
    title: " Introduction to Python Programming ",
    link: "https://coursera.org/share/477c47842e89ec2a34ffbb14395d40fa",
  },
  {
    date: "01/08/2023",
    title: "Python WorkShop Presenter Microsoft Learn Student Ambassador",
  },
  {
    date: "26/07/2023",
    title: " Master Course in Google Cloud Digital Leader",
    link: "https://ude.my/UC-c140738c-9764-4498-a783-d88f79161976",
  },
  {
    date: "16/03/2022",
    title: " PCAP: Programming Essentials in Python",
    link: "https://www.netacad.com | https://www.pythoninstitute.org",
  },
  
];

function Certifications() {
  return (
    <section className="certifications">
      <h3>Certifications</h3>
      <ul>
        {certifications.map((cert, idx) => (
          <li key={idx} style={{ marginBottom: "10px", textAlign: "left" }}>
            <strong>{cert.date}</strong> – {cert.title}{" "}
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007acc", textDecoration: "none" }}
              >
                [View Certificate]
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;
