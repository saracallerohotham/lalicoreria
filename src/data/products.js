// Importaciones de imágenes de cervezas
import cerveza1 from "../assets/cervezas/cerveza1.png";
import cerveza2 from "../assets/cervezas/cerveza2.png";
import cerveza3 from "../assets/cervezas/cerveza3.png";
import cerveza4 from "../assets/cervezas/cerveza4.png";

// Importaciones de imágenes de gaseosas
import gaseosa1 from "../assets/gaseosas/gaseo1.png";
import gaseosa2 from "../assets/gaseosas/gaseo2.png";
import gaseosa3 from "../assets/gaseosas/gaseo3.png";
import gaseosa4 from "../assets/gaseosas/gaseo4.png";
import gaseosa5 from "../assets/gaseosas/gaseo5.png";
import gaseosa6 from "../assets/gaseosas/gaseo6.png";
import gaseosa7 from "../assets/gaseosas/gaseo7.png";
import gaseosa8 from "../assets/gaseosas/gaseo8.png";
import gaseosa9 from "../assets/gaseosas/gaseo9.png";

// Importaciones de imágenes de sidras
import sidra1 from "../assets/sidra/sidra1.png";
import sidra2 from "../assets/sidra/sidra2.png";
import sidra3 from "../assets/sidra/sidra3.png";
import sidra4 from "../assets/sidra/sidra4.png";
import sidra5 from "../assets/sidra/sidra5.png";
import sidra6 from "../assets/sidra/sidra6.png";
import sidra7 from "../assets/sidra/sidra7.png";
import sidra8 from "../assets/sidra/sidra8.png";

// Importaciones de imágenes de vinos
import vino1 from "../assets/vino/vino1.png";
import vino2 from "../assets/vino/vino2.png";
import vino3 from "../assets/vino/vino3.png";
import vino4 from "../assets/vino/vino4.png";
import vino5 from "../assets/vino/vino5.png";
import vino6 from "../assets/vino/vino6.png";
import vino7 from "../assets/vino/vino7.png";
import vino8 from "../assets/vino/vino8.png";
import vino9 from "../assets/vino/vino9.png";

// Productos adaptados a la tarjeta
export const products = [
  // Cerveza
  {
    id: 1,
    name: "Cerveza 1",
    type: "Cerveza",
    price: 1200,
    image: cerveza1,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Cerveza 2",
    type: "Cerveza",
    price: 1300,
    image: cerveza2,
    rating: 4.0,
  },
  {
    id: 3,
    name: "Cerveza 3",
    type: "Cerveza",
    price: 1400,
    image: cerveza3,
    rating: 3.8,
  },
  {
    id: 4,
    name: "Cerveza 4",
    type: "Cerveza",
    price: 1500,
    image: cerveza4,
    rating: 4.2,
  },

  // Gaseosas
  {
    id: 5,
    name: "Gaseosa 1",
    type: "Gaseosa",
    price: 500,
    image: gaseosa1,
    rating: 4.1,
  },
  {
    id: 6,
    name: "Gaseosa 2",
    type: "Gaseosa",
    price: 550,
    image: gaseosa2,
    rating: 4.3,
  },
  {
    id: 7,
    name: "Gaseosa 3",
    type: "Gaseosa",
    price: 600,
    image: gaseosa3,
    rating: 4.0,
  },
  {
    id: 8,
    name: "Gaseosa 4",
    type: "Gaseosa",
    price: 650,
    image: gaseosa4,
    rating: 4.2,
  },
  {
    id: 9,
    name: "Gaseosa 5",
    type: "Gaseosa",
    price: 700,
    image: gaseosa5,
    rating: 4.5,
  },
  {
    id: 10,
    name: "Gaseosa 6",
    type: "Gaseosa",
    price: 750,
    image: gaseosa6,
    rating: 4.4,
  },
  {
    id: 11,
    name: "Gaseosa 7",
    type: "Gaseosa",
    price: 800,
    image: gaseosa7,
    rating: 4.6,
  },
  {
    id: 12,
    name: "Gaseosa 8",
    type: "Gaseosa",
    price: 850,
    image: gaseosa8,
    rating: 4.3,
  },
  {
    id: 13,
    name: "Gaseosa 9",
    type: "Gaseosa",
    price: 900,
    image: gaseosa9,
    rating: 4.2,
  },

  // Sidras
  {
    id: 14,
    name: "Sidra 1",
    type: "Sidra",
    price: 1000,
    image: sidra1,
    rating: 4.5,
  },
  {
    id: 15,
    name: "Sidra 2",
    type: "Sidra",
    price: 1100,
    image: sidra2,
    rating: 4.1,
  },
  {
    id: 16,
    name: "Sidra 3",
    type: "Sidra",
    price: 1200,
    image: sidra3,
    rating: 4.3,
  },
  {
    id: 17,
    name: "Sidra 4",
    type: "Sidra",
    price: 1300,
    image: sidra4,
    rating: 4.0,
  },
  {
    id: 18,
    name: "Sidra 5",
    type: "Sidra",
    price: 1400,
    image: sidra5,
    rating: 4.2,
  },
  {
    id: 19,
    name: "Sidra 6",
    type: "Sidra",
    price: 1500,
    image: sidra6,
    rating: 4.4,
  },
  {
    id: 20,
    name: "Sidra 7",
    type: "Sidra",
    price: 1600,
    image: sidra7,
    rating: 4.3,
  },
  {
    id: 21,
    name: "Sidra 8",
    type: "Sidra",
    price: 1700,
    image: sidra8,
    rating: 4.6,
  },

  // Vinos
  {
    id: 22,
    name: "Vino 1",
    type: "Vino",
    price: 2000,
    image: vino1,
    rating: 4.7,
  },
  {
    id: 23,
    name: "Vino 2",
    type: "Vino",
    price: 2100,
    image: vino2,
    rating: 4.6,
  },
  {
    id: 24,
    name: "Vino 3",
    type: "Vino",
    price: 2200,
    image: vino3,
    rating: 4.8,
  },
  {
    id: 25,
    name: "Vino 4",
    type: "Vino",
    price: 2300,
    image: vino4,
    rating: 4.5,
  },
  {
    id: 26,
    name: "Vino 5",
    type: "Vino",
    price: 2400,
    image: vino5,
    rating: 4.7,
  },
  {
    id: 27,
    name: "Vino 6",
    type: "Vino",
    price: 2500,
    image: vino6,
    rating: 4.6,
  },
  {
    id: 28,
    name: "Vino 7",
    type: "Vino",
    price: 2600,
    image: vino7,
    rating: 4.8,
  },
  {
    id: 29,
    name: "Vino 8",
    type: "Vino",
    price: 2700,
    image: vino8,
    rating: 4.9,
  },
  {
    id: 30,
    name: "Vino 9",
    type: "Vino",
    price: 2800,
    image: vino9,
    rating: 4.7,
  },
];
