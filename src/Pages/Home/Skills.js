import { FaAws, FaDocker, FaPython } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { DiMysql, DiPostgresql } from "react-icons/di";
import { useState, useEffect } from "react";
import { SiMongodb,SiReact, SiAngular, SiDotnet, SiApachekafka, SiLooker, SiGithub, SiJira, SiPostman } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { DiMsqlServer } from "react-icons/di";

const Technologies = [
  { icon: <SiDotnet />, name: ".NET Core" },
  // { icon: <SiCsharp />, name: "C#" },
  { icon: <SiReact />, name: "React.js" },
  { icon: <SiAngular />, name: "Angular" },
  { icon: <DiMsqlServer />, name: "SQL Server" },
  { icon: <DiMysql />, name: "MySQL" },
  { icon: <DiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <VscAzure />, name: "Azure" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <SiApachekafka />, name: "Kafka" },
  { icon: <SiLooker />, name: "Looker" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiJira />, name: "Jira" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <PiFileSql />, name: "SQL" },
  { icon: <FaPython />, name: "Python" },
  { icon: <SiPostman />, name: "REST APIs" }
];

export default function Skills() {
  const [columns, setColumns] = useState(5);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 480) {
        setColumns(2);
      } else if (window.innerWidth < 768) {
        setColumns(3);
      } else if (window.innerWidth < 1024) {
        setColumns(4);
      } else {
        setColumns(5);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <section className="testimonial--section" id="testimonial" style={{ background: "none" }}>
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading">Technologies</h2>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "10px",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {Technologies.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--author--detail">
              {item.icon}
              <div>
                <p className="text-md testimonial--author--name">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
