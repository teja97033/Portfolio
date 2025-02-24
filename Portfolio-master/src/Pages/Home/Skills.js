import {  FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {  DiMysql,DiPostgresql  } from "react-icons/di";
import { useState, useEffect } from "react";
import { SiApachecassandra } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbSnowflake } from "react-icons/tb";
import { SiAmazonredshift } from "react-icons/si";
import { SiApachespark } from "react-icons/si";
import { SiApachehadoop } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { SiApacheflink } from "react-icons/si";
import { SiTableau } from "react-icons/si";
import { SiLooker } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { DiScala } from "react-icons/di";
import { PiFileSql } from "react-icons/pi";
const Technologies = [
   
  // shekar
  {icon:<DiMysql />,name:"MySQL"},
  {icon:<DiPostgresql  />,name:"PostgreSQL"},
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiApachecassandra />, name: "Cassandra" },
  { icon: <TbSnowflake />, name: "Snowflake" },
  { icon: <SiAmazonredshift />, name: "RedShift" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <VscAzure />, name: "Azure" },
  { icon: <SiApachespark />, name: "Apachespark " },
  { icon: <SiApachehadoop />, name: "Hadoop" },
  { icon: <SiApacheflink />, name: "Flink" },
  { icon: <SiApachekafka />, name: "Kafka" },
  { icon: <SiLooker />, name: "Looker" },
  { icon: <SiTableau />, name: "Tableau" },
  { icon: <FaPython />, name: "Python" }, 
   {    icon: <DiScala />, name: "Scala"    },
   {    icon: <PiFileSql />, name: "SQL"    },


];

export default function Skills() {
  const [columns, setColumns] = useState(5);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 480) {
        setColumns(2); // 2 columns for very small screens
      } else if (window.innerWidth < 768) {
        setColumns(3); // 3 columns for small screens
      } else if (window.innerWidth < 1024) {
        setColumns(4); // 4 columns for medium screens
      } else {
        setColumns(5); // 5 columns for larger screens
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
        {Technologies?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--author--detail">
              {item.icon}
              <div>
                <p className="text-md testimonial--author--name">
                  {item.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
