export default function App() {
  const datosPersonales = {
    nombre: "Simón Toro",
    cargo: "Desarrollador Web",
    ciudad: "Medellín - Colombia",
    contacto: "simon@mail.com",
  };

  const resumen =
    "Soy un desarrollador en formación con habilidades en React, JavaScript y construcción de interfaces dinámicas.";

  const experiencias = [
    { cargo: "Frontend Trainee", empresa: "Empresa X", periodo: "2023 - 2024" },
    {
      cargo: "Auxiliar TI",
      empresa: "TecnoSoluciones",
      periodo: "2022 - 2023",
    },
  ];

  const estudios = [
    { titulo: "Tecnólogo en ADSI", institucion: "SENA", año: "2023" },
    { titulo: "Curso React", institucion: "Udemy", año: "2024" },
  ];

  return <div>{/* Aquí se cargarán los componentes */}</div>;
}
