import "./SportsCard.css";

export function SportsCard({ sport }) {
  return (
    <div className="sports-card">
      {/* loading="lazy" sørger for at bildene lastes kun når de trengs */}
      <img src={sport.img} alt={sport.title} loading="lazy" />

      <h2>{sport.title}</h2>
      <p className="year">{sport.year}</p>
      <p className="desc">{sport.desc}</p>
    </div>
  );
}