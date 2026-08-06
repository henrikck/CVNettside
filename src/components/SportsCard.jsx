import "./SportsCard.css";

export function SportsCard({ sport }) {
  return (
    <div className="sports-card">
      {}
      <img
        src={sport.img}
        alt={sport.title}
        width={190}
        height={190}
        loading="lazy"
        decoding="async"
      />

      <h2>{sport.title}</h2>
      <p className="year">{sport.year}</p>
      <p className="desc">{sport.desc}</p>
    </div>
  );
}