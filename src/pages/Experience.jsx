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
        desc: "Varehåndtering og logistikk med automatiserte systemer. Erfaring med treskiftarbeid i frysemiljø (–24 °C)",
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
        desc: "Ansvar for brytepartier (4–9 år) med fokus på mestring og trygghet.",
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
        title: "Referansegruppemedlem i Matematikk 3",
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
