import "./style.css";

const icons = {
  github: `
            <svg viewBox="0 0 128 128">
            <g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
            </svg>
          `,
  sharing: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z"/></svg>`,
};
const projects = [
  {
    id: 1,
    name: "Medical Appointment App",
    description:
      "Aplicación para gestionar citas médicas con notificaciones, roles de usuario y control de disponibilidad de doctores.",
    color: "#4CAF50",
  },
  {
    id: 2,
    name: "Battleship Game",
    description:
      "Juego clásico de batalla naval desarrollado en JavaScript con lógica de tableros y detección de impactos.",
    color: "#2196F3",
  },
  {
    id: 3,
    name: "E-commerce Testing Suite",
    description:
      "Suite de pruebas automatizadas para un sitio e-commerce, incluyendo navegación, carrito y generación de reportes.",
    color: "#FF9800",
  },
  {
    id: 4,
    name: "Data Warehouse Project",
    description:
      "Modelo de data warehouse con tablas de hechos y dimensiones para análisis de ventas y rendimiento.",
    color: "#9C27B0",
  },
  {
    id: 5,
    name: "Android Multi-feature App",
    description:
      "Aplicación Android con navegación avanzada, manejo de imágenes, gestos y componentes interactivos.",
    color: "#F44336",
  },
  {
    id: 6,
    name: "Reusable JS Component Library",
    description:
      "Librería de componentes reutilizables en JavaScript puro, incluyendo modales, tarjetas dinámicas y sistema de íconos SVG.",
    color: "#00BCD4",
  },
];

const container = document.querySelector(".projects-container");

projects.forEach((project) => {
  container.appendChild(createProjectCard(project));
});

function createProjectCard(project) {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.style.background = `${project.color}`;

  const img = document.createElement("p");
  img.textContent = "Screeenshot of project";

  card.appendChild(img);

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("project-infoDiv");

  const topdiv = document.createElement("div");
  topdiv.classList.add("project-topDiv");

  const projectTitle = document.createElement("h3");
  projectTitle.classList.add("project-title");
  projectTitle.textContent = project.name;

  const iconsDiv = document.createElement("div");
  iconsDiv.classList.add("project-icons");
  iconsDiv.appendChild(createIcon(icons["github"]));
  iconsDiv.appendChild(createIcon(icons["sharing"]));

  topdiv.appendChild(projectTitle);
  topdiv.appendChild(iconsDiv);

  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("project-description");
  const description = document.createElement("p");
  description.textContent = project.description;

  descriptionDiv.appendChild(description);

  infoDiv.appendChild(topdiv);
  infoDiv.appendChild(descriptionDiv);
  card.appendChild(infoDiv);

  return card;
}

function createIcon(svgString) {
  const container = document.createElement("div");
  container.innerHTML = svgString;
  return container.firstElementChild;
}
