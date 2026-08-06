import "./ExperienceCard.css";

export function ExperienceCard({ experience }) {
  
  return (
    <div className="experience-card">

      <img
        src={experience.img}
        alt={experience.title}
        width={56}
        height={56}
        loading="lazy"
        decoding="async"
      />
      
      <h2>{experience.title}</h2>

      <p className="year">{experience.year}</p>

      <p>{experience.desc}</p>

      <span className="type">{experience.type}</span>

    </div>
  );
}