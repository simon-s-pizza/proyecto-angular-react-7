export default function Educacion({ estudios }) {
  return (
    <section>
      <h3>Educación</h3>
      {estudios.map((est, index) => (
        <div key={index}>
          <strong>{est.titulo}</strong> — {est.institucion} ({est.año})
        </div>
      ))}
    </section>
  );
}
