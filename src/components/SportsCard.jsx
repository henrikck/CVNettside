import "./SportsCard.css";

export function SportsCard({ sport }) {
    
  return (
    <div className="sports-card">
      <img src={sport.img} alt={sport.title} />

      <h2>{sport.title}</h2>
      <p className="year">{sport.year}</p>
      <p className="desc">{sport.desc}</p>
    </div>
  );

}
