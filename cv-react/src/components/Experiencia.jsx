export default function Experiencia({ experiencias }) {
  return (
    <section>
      <h3>Experiencia Laboral</h3>
      {experiencias.map((exp, index) => (
        <div key={index}>
          <h4>{exp.cargo}</h4>
          <p>{exp.empresa}</p>
          <p>{exp.periodo}</p>
        </div>
      ))}
    </section>
  );
}
