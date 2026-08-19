import { ExperienceCard } from "../components/ExperienceCard";
import { useState } from "react";

import ntnuImg from "../assets/experience/ntnu.webp";
import askoImg from "../assets/experience/asko.webp";
import gsvImg from "../assets/experience/gsv.webp";
import bryteImg from "../assets/experience/bryte.webp";
import ntnuiImg from "../assets/experience/ntnui.webp";
import nrImg from "../assets/experience/nr.webp";
import reluImg from "../assets/experience/ReLU_navy_blue.webp";
import konnektImg from "../assets/experience/KonnektL.webp";

export function Experience() {

  const experiences = [
    {
      title: "Nestleder ReLU NTNU",
      desc: "ReLU er en studentdrevet organisasjon ved NTNU som bygger anvendte maskinlærings- og AI-løsninger for bedrifter og forskningsmiljøer. Som nestleder er jeg involver t i hele driften, fra strategi og styrearbeid til partnerrelasjoner og faglig utvikling. ",
      img: reluImg,
      year: "2026",
      type: "Verv"
    },
    {
      title: "Teknisk verv/ Summer Intern, Konnekt ",
      desc: "Utviklet maskinlæringsløsninger for «Verdens mest avanserte modelljernbane». Bygget et computer vision-system for å gjenkjenne objekter på banen og et autonomt styringssystem basert på sanntids socket-programmering. ",
      img: konnektImg,
      year: "2026",
      type: "Jobb"
    },
    {
      title: "Prosjektgruppe Student-VM",
      desc: "Meldem av prosjektgruppe som har ansvar for uttaket til Student-VM i Roing i Canada. ",
      img: nrImg,
      year: "2026",
      type: "Verv"
    },
    {
      title: "Nestleder av Sponsorkomiteen NTNUI roing",
      desc: "Bygget og opprettholdt sponsorpartnerskap, med hovedansvar for hovedsponsoren Syncrolift og arrangementet Sweco-Sirkelen.",
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