import { ExperienceCard } from "../components/ExperienceCard";
import { useState } from "react";

import ntnuImg from "../assets/experience/ntnu.png";
import askoImg from "../assets/experience/asko.png";
import gsvImg from "../assets/experience/gsv.png";
import bryteImg from "../assets/experience/bryte.png";
import ntnuiImg from "../assets/experience/ntnui.png";
import nrImg from "../assets/experience/nr.png";


export function Experience() {

  const experiences = [
    {
      title: "Læringsassistent",
      desc: "TDT4109 – ITGK: Veiledning i Python-programmering og problemløsning.",
      img: ntnuImg,
      year: "2025",
      type: "Work"
    },
    {
      title: "Læringsassistent",
      desc: "TTT4203 – ADE: Veiledning i krets teori, analoge komponenter og digital logikk.",
      img: ntnuImg,
      year: "2025",
      type: "Work"
    },
    {
      title: "Læringsassistent",
      desc: "Teknostart: Veileder for nye studenter.",
      img: ntnuImg,
      year: "2025",
      type: "Work"
    },
    {
      title: "Lagerarbeider",
      desc: "Varehåndtering og logistikk med automatiserte systemer.",
      img: askoImg,
      year: "2025",
      type: "Work"
    },
    {
      title: "Grensejeger",
      desc: "Førstegangstjeneste som patruljefører i Jarfjordkompaniet.",
      img: gsvImg,
      year: "2023",
      type: "Work"
    },
    {
      title: "Hovedtrener for brytelek/skole",
      desc: "Ansvar for brytepartier (4–9 år).",
      img: bryteImg,
      year: "2022",
      type: "Work"
    },
    {
      title: "Medlem av Sponsorkomiteen NTNUI roing",
      desc: "Bidro til å bygge sponsorpartnerskap.",
      img: ntnuiImg,
      year: "2025",
      type: "Volunteer"
    },
    {
      title: "Referansegruppemedlem i Matematikk 3",
      desc: "Bidro med faglige tilbakemeldinger.",
      img: ntnuImg,
      year: "2025",
      type: "Volunteer"
    },
    {
      title: "Referansegruppemedlem, Matematikk 3",
      desc: "Bidro med faglige tilbakemeldinger.",
      img: nrImg,
      year: "2025",
      type: "Volunteer"
    }
  ];


    const [filter, setFilter] = useState("All");
    const [sortOrder, setSortOrder] = useState("newest");

    const filteredExperiences = experiences
      .filter(exp => filter === "All" || exp.type === filter)
      .sort((a, b) => {
        return sortOrder === "newest"
          ? Number(b.year) - Number(a.year)
          : Number(a.year) - Number(b.year);
      });

  return (
    <div className="experience-section">
      <h1>Erfaring</h1>

      <div className="filters">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">Alle</option>
          <option value="Work">Work</option>
          <option value="Volunteer">Verv</option>
        </select>

        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="newest">Nyest → Eldst</option>
          <option value="oldest">Eldst → Nyest</option>
        </select>
      </div>

      <div className="experience-grid">
        {filteredExperiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}
