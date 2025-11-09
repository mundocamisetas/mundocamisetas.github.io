// --- LÓGICA PARA MOSTRAR Y OCULTAR LIGAS ---
function toggleLiga(id) {
  const liga = document.getElementById(id);
  liga.classList.toggle("oculto");
}

// --- DATOS GLOBALES DE CAMISETAS ---
const todasLasCamisetas = [
  { nombre: "Real Madrid 2011/12", equipo: "Real Madrid", imagen: "camisetas/realmadrid.jpg" },
  { nombre: "Real Madrid 1950/51", equipo: "Real Madrid", imagen: "camisetas/realmadrid1950.jpg" },
  { nombre: "Real Madrid 2001/02", equipo: "Real Madrid", imagen: "camisetas/realmadrid2001.jpeg" },
  { nombre: "Real Madrid 2013/14", equipo: "Real Madrid", imagen: "camisetas/realmadrid2013.webp" },

  { nombre: "Barcelona 2010/11", equipo: "barcelona", imagen: "camisetas/barcelona2011.jpg" },
  { nombre: "Barcelona 2015/16", equipo: "barcelona", imagen: "camisetas/barcelona2015.jpg" },
  { nombre: "Barcelona 2008/09", equipo: "barcelona", imagen: "camisetas/barcelona2008-2009.jpeg" },
  { nombre: "Barcelona 1999/2000", equipo: "barcelona", imagen: "camisetas/barcelona1999.webp" },

  { nombre: "Liverpool 2019/20", equipo: "liverpool", imagen: "camisetas/liverpool2019.jpg" },
  { nombre: "Liverpool 2004/05", equipo: "liverpool", imagen: "camisetas/liverpool2004.png" },
  { nombre: "Liverpool 2006/07", equipo: "liverpool", imagen: "camisetas/liverpool2006.jpg" },
  { nombre: "Liverpool 1983/84", equipo: "liverpool", imagen: "camisetas/liverpool1983.jpg" },
  
  { nombre: "Manchester United 2008", equipo: "Manchester United", imagen: "camisetas/manchesterutd2008.jpg" },
  { nombre: "Manchester United 1992", equipo: "Manchester United", imagen: "camisetas/manchesterutd1992.webp" },
  { nombre: "Manchester United 1998", equipo: "Manchester United", imagen: "camisetas/manchesterutd1998.avif" },
  { nombre: "Manchester United 1999", equipo: "Manchester United", imagen: "camisetas/manchesterutd1999.png" },
];

// --- REFERENCIAS DEL DOM ---
const info = document.getElementById("info");
const titulo = document.getElementById("titulo");
const btnVolver = document.getElementById("btnVolver");

// Guardar camisetas destacadas iniciales
const camisetasDestacadasHTML = info.innerHTML;

// --- MOSTRAR EQUIPO ---
function mostrarEquipo(equipo) {
  titulo.textContent = equipo.charAt(0).toUpperCase() + equipo.slice(1);

  const camisetas = todasLasCamisetas.filter(c => c.equipo.toLowerCase() === equipo.toLowerCase());

  info.innerHTML = camisetas.map(c => `
    <div class="camiseta">
      <img src="${c.imagen}" alt="${c.nombre}">
      <p>${c.nombre}</p>
    </div>
  `).join("");

  // Mostrar el botón de volver
  btnVolver.classList.remove("oculto");

  // Limpiar buscador al seleccionar equipo
  document.getElementById("buscador").value = "";
}

// --- VOLVER A CAMISETAS DESTACADAS ---
function mostrarDestacadas() {
  info.innerHTML = camisetasDestacadasHTML;
  titulo.textContent = "Camisetas destacadas";

  // Ocultar el botón de volver
  btnVolver.classList.add("oculto");
}

// --- BUSCADOR GLOBAL ---
document.addEventListener("DOMContentLoaded", () => {
  const buscador = document.getElementById("buscador");

  buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase().trim();

    if (texto === "") {
      mostrarDestacadas();
      return;
    }

    const resultados = todasLasCamisetas.filter(c =>
      c.nombre.toLowerCase().includes(texto)
    );

    if (resultados.length === 0) {
      info.innerHTML = `<p style="text-align:center;">No se encontraron resultados.</p>`;
      return;
    }

    titulo.textContent = "Resultados de búsqueda";

    info.innerHTML = resultados.map(c => `
      <div class="camiseta">
        <img src="${c.imagen}" alt="${c.nombre}">
        <p>${c.nombre}</p>
      </div>
    `).join("");

    // Ocultar botón de volver mientras se buscan resultados
    btnVolver.classList.add("oculto");
  });
});
