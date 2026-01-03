import { ExperienceCard } from "../components/ExperienceCard";
import { useState } from "react";

export function Experience() {

    const experiences = [
      {
        title: "Læringsassistent",
        desc: "TDT4109 – ITGK: Veiledning i Python-programmering og problemløsning.",
        img: "/src/assets/experience/ntnu.png",
        year: "2025",
        type: "Work"
      },
      {
        title: "Læringsassistent",
        desc: "TTT4203 – ADE: Veiledning i krets teori, analoge komponenter og digital logikk.",
        img: "/src/assets/experience/ntnu.png",
        year: "2025",
        type: "Work"
      },
      {
        title: "Læringsassistent",
        desc: "Teknostart: Veileder for nye studenter.",
        img: "/src/assets/experience/ntnu.png",
        year: "2025",
        type: "Work"
      },
      {
        title: "Lagerarbeider",
        desc: "Samarbeidet med automatiserte systemer for presis varelagerhåndtering og effektiv logistikk. Arbeidet treskift (dag/kveld/natt) i frysemiljø på –24 °C.",
        img: "/src/assets/experience/asko.png",
        year: "2025",
        type: "Work"
      },
      {
        title: "Grensejeger",
        desc: "Førstegangstjeneste som patruljefører i Jarfjordkompaniet, Garnisonen i Sør-Varanger. Avsluttet med vurderingen «Over norm».",
        img: "/src/assets/experience/gsv.png",
        year: "2023",
        type: "Work"
      },
      {
        title: "Hovedtrener for brytelek/skole",
        desc: "Ansvar for brytepartier (4–9 år) med vekt på mestring og trygghet.",
        img: "/src/assets/experience/bryte.png",
        year: "2022",
        type: "Work"
      },
      {
        title: "Medlem av Sponsorkomiteen NTNUI roing",
        desc: "Bidro til å bygge og opprettholde sponsorpartnerskap.",
        img: "/src/assets/experience/ntnui.png",
        year: "2025",
        type: "Volunteer"
      },
      {
        title: "Referansegruppemedlem, Matematikk 3",
        desc: "Bidro med tilbakemeldinger til emneansvarlige for faglig utvikling.",
        img: "/src/assets/experience/ntnu.png",
        year: "2025",
        type: "Volunteer"
      },
      {
        title: "Referansegruppemedlem, Matematikk 3",
        desc: "Bidro med tilbakemeldinger til emneansvarlige for faglig utvikling.",
        img: "/src/assets/experience/nr.png",
        year: "2025",
        type: "Volunteer"
      }
    ];
    
    const [filter, setFilter] = useState("All");

    const filteredExperiences = experiences.filter(exp =>
        filter === "All" ? true : exp.type === filter
    );


  return (
    <div className="experience-section">
      <h1>Erfaring</h1>

      <div className="filters">
        {["All", "Work", "Volunteer"].map(type => (
          <button
            key={type}
            className={filter === type ? "active" : ""}
            onClick={() => setFilter(type)}>
            {type}
          </button>
        ))}
      </div>

      <div className="experience-grid">
        {filteredExperiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}
