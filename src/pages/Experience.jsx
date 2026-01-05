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
      title: "Prosjektgruppe Student-VM",
      desc: "Meldem av prosjektgruppe som har ansvar for uttaket til Student-VM i Roing i Canada. ",
      img: nrImg,
      year: "2026",
      type: "Verv"
    },
    {
      title: "Medlem av Sponsorkomiteen NTNUI roing",
      desc: "Bidro til å bygge og opprettholde sponsorpartnerskap, der jeg hadde hovedavsar for hovedsponsoren Syncrolift.",
      img: ntnuiImg,
      year: "2025",
      type: "Verv"
    },
    {
      title: "Læringsassistent",
      desc: "Veiledning av studenter i emnet TTT4203 – Analog og digital elektronikk (ADE). Bistår med teoretisk forståelse og praktisk labarbeid innen kretsteori, analoge komponenter og digital logikk.",
      img: ntnuImg,
      year: "2025",
      type: "Jobb"
    },
    {
      title: "Læringsassistent",
      desc: "Læringsassistent i TDT4109 – Informasjonsteknologi, grunnkurs (ITGK). Ansvarlig for veiledning i Python-programmering, algoritmisk tenkning og støtte til ukentlige øvingsoppgaver.",
      img: ntnuImg,
      year: "2025",
      type: "Jobb"
    },
    {
      title: "Læringsassistent",
      desc: "Mentor og veileder under Teknostart for nye sivilingeniørstudenter. Ansvarlig for å fasilitere en god faglig og sosial studiestart gjennom prosjektveiledning og introduksjon til universitetslivet.",
      img: ntnuImg,
      year: "2025",
      type: "Jobb"
    },
    {
      title: "Medlem av Jubeleumskomiteen NTNUI roing",
      desc: "Hadde hovedansvar for booking av lokaler.",
      img: ntnuiImg,
      year: "2025",
      type: "Verv"
    },
    {
      title: "Lagerarbeider",
      desc: "Arbeidet med automatiserte systemer for presis varelagerhåndtering og effektiv logistikk. Arbeidet treskift (dag/kveld/natt) i frysemiljø på –24 °C.",
      img: askoImg,
      year: "2025",
      type: "Jobb"
    },
    {
      title: "Referansegruppemedlem i Matematikk 3",
      desc: "Bidro med tilbakemeldinger til emneansvarlige for faglig utvikling.",
      img: ntnuImg,
      year: "2025",
      type: "Verv"
    },
    {
      title: "Grensejeger",
      desc: "Førstegangstjeneste som patruljefører i Jarfjordkompaniet, Garnisonen i Sør-Varanger. Avsluttet med vurderingen «Over norm», den høyeste oppnåelige.",
      img: gsvImg,
      year: "2023",
      type: "Jobb"
    },
    {
      title: "Hovedtrener for brytelek/skole",
      desc: "Hovedansvar for brytepartier (4–9 år) med vekt på mestring og trygghet.",
      img: bryteImg,
      year: "2022",
      type: "Jobb"
    },
  ];

  const [filter, setFilter] = useState("Alle");
  const [sortOrder, setSortOrder] = useState("newest");

  const filteredExperiences = experiences
    .filter(exp => filter === "Alle" || exp.type === filter)
    .sort((a, b) => {
      return sortOrder === "newest"
        ? Number(b.year) - Number(a.year)
        : Number(a.year) - Number(b.year);
    });

  return (
    <div className="experience-section">
      <h1>Erfaring</h1>
      <p className="section-subtitle"> Nedenfor finner du en detaljert oversikt over mine tidligere jobber og verv. </p>

      <div className="filters">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="Alle">Alle</option>
          <option value="Jobb">Jobb</option>
          <option value="Verv">Verv</option>
        </select>

        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="newest">Nyest → Eldst</option>
          <option value="oldest">Eldst → Nyest</option>
        </select>
      </div>

      <div className="experience-grid">
        {filteredExperiences.map((exp, index) => (
          <div 
            key={index} 
            className="animate-in" 
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ExperienceCard experience={exp} />
          </div>
        ))}
      </div>
    </div>
  );
}