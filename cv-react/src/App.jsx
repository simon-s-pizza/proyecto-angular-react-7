import CabeceraCV from "./components/cabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";

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
      cargo: "Auxiliar IT",
      empresa: "TecnoSoluciones",
      periodo: "2022 - 2023",
    },
  ];

  const estudios = [
    { titulo: "Tecnólogo en ADSI", institucion: "SENA", año: "2023" },
    { titulo: "Curso React", institucion: "Udemy", año: "2024" },
  ];

  return (
    <div>
      <CabeceraCV
        nombre={datosPersonales.nombre}
        cargo={datosPersonales.cargo}
        ciudad={datosPersonales.ciudad}
        contacto={datosPersonales.contacto}
      />

      <Perfil resumen={resumen} />

      <Experiencia experiencias={experiencias} />

      <Educacion estudios={estudios} />
    </div>
  );
}
