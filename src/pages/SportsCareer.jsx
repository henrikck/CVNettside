import { SportsCard } from "../components/SportsCard";
import { useState } from "react";

// Import av bilder
import bryteImg1 from "../assets/sports/brytebilde.jpeg";
import bryteImg2 from "../assets/sports/brytebilde2.JPG";
import bryteImg3 from "../assets/sports/brytebilde3.PNG";
import kolbotnImg from "../assets/sports/Kolbotn2019.JPG";
import lagkampImg from "../assets/sports/Lagkamp2020.JPG";
import malarImg from "../assets/sports/Malar2021.JPG";
import nm2015 from "../assets/sports/NM2015.JPG";
import nm2016 from "../assets/sports/NM2016.JPG";
import nm2018 from "../assets/sports/NM2018.JPG";
import nm2021Senior from "../assets/sports/NM2021Senior.JPEG";
import nm2021Ungdom from "../assets/sports/NM2021ungdom.JPG";
import nm2022Junior from "../assets/sports/NM2022Junior.jpeg";
import nm2023Junior from "../assets/sports/NM2023Junior.jpeg";
import nm2023Senior from "../assets/sports/NM2023senior.PNG";
import nm2025Sand from "../assets/sports/NM2025sand.jpeg";
import nmRoing from "../assets/sports/NMroing2025.jpeg";
import rosneyImg from "../assets/sports/Rosney2023.JPG";
import snm2025 from "../assets/sports/SNM2025.jpg";
import snm2025Innen from "../assets/sports/SNM2025innen.PNG";
import snm2025Lag from "../assets/sports/SNM2025lagbilde.PNG";
import sumoEm from "../assets/sports/SumoEM2024.jpeg";
import sumoNm from "../assets/sports/SumoNM2024.jpeg";

export function SportsCareer() {
  const sports = [
    { title: "Norgesmester i sandbryting", desc: "1. plass i 90-kilosklassen som senior.", img: nm2025Sand, year: "2025", type: "Sandbryting", big: "yes" },
    { title: "10. plass i ro-NM", desc: "I klassen 8+ (8 stk ror med 1 åre). Deltok også i klassen 2x (2 stk ror med 2 årer).", img: snm2025Lag, year: "2025", type: "Roing", big: "no" },
    { title: "7. plass i Student-NM", desc: "I klassen 8+ (8 stk ror med 1 åre). Dette var også min første regatta.", img: snm2025, year: "2025", type: "Roing", big: "no" },
    { title: "4. plass i innendørs Student-NM", desc: "4 * 500 meter stafett. Kun noen tiendeler fra 3. plassen.", img: snm2025Innen, year: "2025", type: "Roing", big: "no" },
    { title: "5. plass i U23-EM i sumo", desc: "I 85-kilosklassen. Gikk på et knepent tap i bronsefinalen.", img: sumoEm, year: "2024", type: "Sumobryting", big: "yes" },
    { title: "Norgesmester i sumobryting", desc: "1. plass i 85-kilosklassen i U20-klassen.", img: sumoNm, year: "2024", type: "Sumobryting", big: "yes" },
    { title: "5. plass i U20 Nordisk", desc: "I 87-kilosklassen som U20.", img: bryteImg1, year: "2023", type: "Bryting", big: "no" },
    { title: "3. plass i Rosny Cup", desc: "Deltok på vegne av landslaget i et internasjonalt stevne i Frankrike.", img: rosneyImg, year: "2023", type: "Bryting", big: "no" },
    { title: "Norgesmester i bryting", desc: "1. plass i 87-kilosklassen som U20.", img: nm2023Junior, year: "2023", type: "Bryting", big: "yes" },
    { title: "4. plass i Senior-NM", desc: "Knepent tap i semifinalen.", img: nm2023Senior, year: "2023", type: "Bryting", big: "no" },
    { title: "Norgesmester i bryting", desc: "1. plass i 87-kilosklassen som U20.", img: nm2022Junior, year: "2022", type: "Bryting", big: "yes" },
    { title: "5. plass i U20 Nordisk", desc: "I 77-kilosklassen som U20.", img: bryteImg3, year: "2022", type: "Bryting", big: "no" },
    { title: "5. plass i Senior-NM", desc: "Deltok i 77-kilosklassen som var den største vekta på stevnet.", img: nm2021Senior, year: "2021", type: "Bryting", big: "no" },
    { title: "3. plass i Mälarcupen", desc: "3. plass i 80-kilosklassen i Nord-Europas største brytestevne.", img: malarImg, year: "2021", type: "Bryting", big: "yes" },
    { title: "3. plass i Ungdoms-NM", desc: "3. plass i 80-kilosklassen som U18.", img: nm2021Ungdom, year: "2021", type: "Bryting", big: "no" },
    { title: "2. plass i lagkamp", desc: "Landslagsdebut i 80-kilosklassen, der Norge fikk 2. plass.", img: lagkampImg, year: "2020", type: "Bryting", big: "no" },
    { title: "1. plass i Kolbotn Cup", desc: "1. plass i 75-kilosklassen som G15.", img: kolbotnImg, year: "2019", type: "Bryting", big: "no" },
    { title: "2. plass i NM", desc: "2. plass i 57-kilosklassen som G15.", img: nm2018, year: "2018", type: "Bryting", big: "yes" },
    { title: "Norgesmester i bryting", desc: "1. plass i 50-kilosklassen som G12.", img: nm2016, year: "2016", type: "Bryting", big: "yes" },
    { title: "2. plass i NM", desc: "2. plass i 50-kilosklassen som G12.", img: nm2015, year: "2015", type: "Bryting", big: "yes" }
  ];

  const [filter, setFilter] = useState("Big");
  const [sortOrder, setSortOrder] = useState("newest");

  const filterSports = sports
      .filter(sport => {
        if (filter === "Big") return sport.big === "yes";
        return true; 
      })
      .sort((a, b) => {
        return sortOrder === "newest"
          ? Number(b.year) - Number(a.year)
          : Number(a.year) - Number(b.year);
      });

  return (
    <section className="sports-section">
      <div className="sports-container">
        <h1>Idrettskarriere</h1>
        
        <p className="section-subtitle">
          En omfattende oversikt over mine idrettslige prestasjoner innen bryting, roing, 
          sumobryting og sandbryting, med fokus på resultater fra nasjonale og internasjonale mesterskap.
        </p>

        <div className="filters">
          <button 
            className={filter === "Big" ? "active" : ""} 
            onClick={() => setFilter("Big")}
          >
            Høydepunkter
          </button>
          <button 
            className={filter === "All" ? "active" : ""} 
            onClick={() => setFilter("All")}
          >
            Alle resultater
          </button>

          <select 
            className="sort-select" 
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Nyest → Eldst</option>
            <option value="oldest">Eldst → Nyest</option>
          </select>
        </div>

        <div className="sports-grid">
          {filterSports.map((sport, index) => (
            <div 
              key={index} 
              className="animate-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SportsCard sport={sport} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}