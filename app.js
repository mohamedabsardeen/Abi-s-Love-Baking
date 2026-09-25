/**
 * ==========================================================================
 * ABI'S LOVE HOME BAKERY - WEB APPLICATION (REACT 18)
 * "Made With You, Made For You."
 * Single deployable folder, zero build step required.
 * ==========================================================================
 */

// Top-level CONFIG object - easily editable by Abi
const CONFIG = {
  SHEET_URL: "https://script.google.com/macros/s/AKfycbyp97ZqF9h6OM-l1qfUHyN74D3vjIc3wAQLR9CaGfmQl9cYr8-CkXz2EZZOfl9FZwlgTg/exec", // Paste your Google Apps Script Web App URL here (e.g., "https://script.google.com/macros/s/.../exec")
  WHATSAPP: "919500217855", // WhatsApp number with country code, no "+" or spaces
  WHATSAPP_DISPLAY: "+91 7604 989 498",
  EMAIL: "abislove88@gmail.com",
  INSTAGRAM: "@abislove2026",
  STORE_NAME: "Abi's Love",
  TAGLINE: "Made With You, Made For You."
};

// Menu data - 10 items with descriptions, categories, tags, and inline SVG illustrations
const ITEMS = [
  {
    id: "black-forest",
    name: "Black Forest",
    category: "cakes",
    tag: "Classic Favorite",
    description: "Rich chocolate sponge soaked in cherry syrup, layered with vanilla cream, juicy dark cherries, and Belgian chocolate flakes.",
    img: "images/black-forest.jpg",
    defaultPieces: 0,
    defaultKg: 1
  },
  {
    id: "white-forest",
    name: "White Forest",
    category: "cakes",
    tag: "Delight",
    description: "Elegantly moist vanilla sponge layered with luscious cream, tart cherries, and snow-white chocolate curls.",
    img: "images/white-forest.jpg",
    defaultPieces: 0,
    defaultKg: 1
  },
  {
    id: "red-velvet",
    name: "Red Velvet",
    category: "cakes",
    tag: "Signature",
    description: "Velvety crimson cocoa sponge paired with our signature silky cream cheese frosting for the ultimate luxurious bite.",
    img: "images/red-velvet.jpg",
    defaultPieces: 0,
    defaultKg: 1
  },
 {
    id: "classic-chocolate-brownie",
    name: "Classic Chocolate Brownie",
    category: "brownies",
    tag: "Classic",
    description: " A soft, moist chocolate brownie with a perfectly balanced cocoa flavour and a smooth, indulgent finish.",
    img: "images/Classic Chocolate Brownie.png",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "walnut-brownie",
    name: "Walnut Brownie",
    category: "brownies",
    tag: "Crunchy",
    description: "  A decadent chocolate brownie studded with crunchy, premium walnuts for a delightful contrast of textures.",
    img: "images/Walnut Brownie.png",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "almond-brownie ",
    name: "Almond Brownie ",
    category: "brownies",
    tag: "Nutty",
    description: "A rich, fudgy chocolate brownie crowned with golden-roasted almonds for a delicate crunch and nutty aroma.",
    img: "images/almond browine.png",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "Cashew Brownie",
    name: "cashew-brownie",
    category: "brownies",
    tag: "Luscious",
    description: "A luscious chocolate brownie generously filled with buttery cashew pieces for a rich, nutty indulgence.",
    img: "images/cashew brownie.png",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "salted-caramel-brownie",
    name: "Salted Caramel Brownie",
    category: "brownies",
    tag: "Caramel",
    description: "A rich, fudgy chocolate brownie swirled with velvety caramel and finished with a delicate touch of sea salt.",
    img: "images/salted caramel.png",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "lotus-biscoff-brownie",
    name: "Lotus Biscoff Brownie",
    category: "brownies",
    tag: "Caramalised",
    description: "A decadent chocolate brownie layered with creamy Lotus Biscoff spread and topped with golden, caramelised biscuit crumbs.",
    img: "images/lotus biscoff.png",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "nutella-brownie",
    name: "Nutella Brownie",
    category: "brownies",
    tag: "Hazelnut",
    description: "A melt-in-the-mouth chocolate brownie generously swirled with silky Nutella for an irresistible chocolate-hazelnut indulgence.",
    img: "images/nutella.png",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "ferrero-rocher-brownie",
    name: "Ferrero Rocher Brownie",
    category: "brownies",
    tag: "Luxurious",
    description: " A luxurious chocolate brownie loaded with roasted hazelnuts, smooth chocolate and crunchy Ferrero Rocher pieces.",
    img: "images/Ferrero rocher.png",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "kinder-chocolate-brownie",
    name: "Kinder Chocolate Brownie",
    category: "brownies",
    tag: "Creamy",
    description: "A rich, fudgy chocolate brownie crowned with velvety Kinder chocolate for a creamy, milky-sweet finish.",
    img: "images/kinderjoy.png",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "red-velvet-brownie",
    name: "Red Velvet Brownie",
    category: "brownies",
    tag: "Velvetty",
    description: "A velvety red velvet brownie crowned with luscious cream cheese frosting for a delicate balance of sweetness and tang.",
    img: "images/Red velvet.png",
    defaultPieces: 4,
    defaultKg: 0
  },
{
    id: "oreo-brownie",
    name: "Oreo Brownie",
    category: "brownies",
    tag: "Crunchy",
    description: " A rich, fudgy chocolate brownie studded with crunchy Oreo pieces and finished with creamy cookie-inspired indulgence.",
    img: "images/oreo.png",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "peanut-butter-brownie ",
    name: "Peanut Butter Brownie ",
    category: "brownies",
    tag: "Nutty",
    description: "A decadent chocolate brownie swirled with smooth, creamy peanut butter for a heavenly blend of rich cocoa and nutty goodness.",
    img: "images/peanut butter.png",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "triple-chocolate-brownie",
    name: "Triple Chocolate Brownie",
    category: "brownies",
    tag: "Decadent",
    description: "An intensely chocolatey brownie loaded with dark, milk and white chocolate for a truly indulgent triple-chocolate experience.",
    img: "images/triple chocolate.png",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "brownie-cheesecake",
    name: "Brownie Cheesecake",
    category: "brownies",
    tag: "Silky",
    description: " A luscious combination of a dense chocolate brownie base and a silky, creamy cheesecake layer, finished with rich chocolate swirls.",
    img: "images/brownie cheesecake.png",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "brownie-with-gulab-jamun",
    name: "Brownie with Gulab Jamun",
    category: "brownies",
    tag: "Fusion",
    description: "A decadent chocolate brownie crowned with soft, syrup-soaked gulab jamun, delicately garnished with pistachios for a luxurious Indian fusion delight.",
    img: "images/gulab jamun brownie.png",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "brownie-with-rasmalai",
    name: "Brownie with Rasmalai",
    category: "brownies",
    tag: "Fusion",
    description: "A rich, fudgy chocolate brownie topped with creamy, saffron-infused rasmalai and finished with pistachios for an indulgent Indian-inspired treat.",
    img: "images/brownie with rasmalai.png",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "coffee-brownie",
    name: "Coffee Brownie",
    category: "brownies",
    tag: "Aromatic",
    description: " A rich, fudgy chocolate brownie infused with aromatic coffee notes, creating a beautifully balanced blend of deep cocoa and roasted coffee flavours.",
    img: "images/coffee brownie.png",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "white-chocolate-brownie",
    name: "White Chocolate Brownie",
    category: "brownies",
    tag: "Buttery",
    description: "A rich, buttery blondie studded with creamy white chocolate chunks, crowned with silky white chocolate drizzle for a melt-in-the-mouth indulgence.",
    img: "images/white chocolate brownie.png",
    defaultPieces: 4,
    defaultKg: 0
  },

  {
    id: "blondie",
    name: "Blondie",
    category: "brownies",
    tag: "Golden Goodness",
    description: "Chewy, buttery vanilla-brown sugar bars packed with white chocolate chunks and toasted nuts, baked to golden perfection.",
    img: "images/blondie.jpg",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "rasmalai-cake",
    name: "Rasmalai Cake",
    category: "indian-sweets",
    tag: "Special",
    description: "Cardamom & saffron infused milk sponge layered with genuine juicy rasmalai, pistachio flakes and rose petals.",
    img: "images/rasamalai-cake.jpg",
    defaultPieces: 0,
    defaultKg: 1
  },
  {
    id: "gulab-jamun-cake",
    name: "Gulab Jamun Cake",
    category: "indian-sweets",
    tag: "Festive Star",
    description: "Cardamom-scented sponge soaked in fragrant rose syrup, crowned with melt-in-mouth golden mini gulab jamuns.",
    img: "images/gulab jamun.jpg",
    defaultPieces: 0,
    defaultKg: 1
  },
  {
    id: "butterscotch",
    name: "Butterscotch",
    category: "cakes",
    tag: "Crunchy",
    description: "Golden caramelized brown sugar sponge smothered with rich butterscotch cream and loaded with crunchy handmade praline.",
    img: "images/butterscotch.jpg",
    defaultPieces: 0,
    defaultKg: 1
  },
  {
    id: "badam-cake",
    name: "Batham (Badam / Almond) Cake",
    category: "indian-sweets",
    tag: "Royal Treat",
    description: "Traditional slow-roasted almond sponge infused with aromatic saffron milk and loaded with toasted slivered badam.",
    img: "images/badhaam-cake.jpg",
    defaultPieces: 0,
    defaultKg: 1
  },
   {
    id: "dum-root-cake",
    name: "Dum Root Cake",
    category: "indian-sweets",
    tag: "Golden Delight",
    description: "A rich, ghee-laced traditional Indian sweet cake with a soft, melt-in-the-mouth texture and delicate nutty sweetness.",
    img: "images/dumroot.png",
    defaultPieces: 4,
    defaultKg: 0
  },
    { 
    id: "chocolate-truffle", 
    name: "Chocolate Truffle Cake", 
    category: "cakes", 
    tag: "Crazy Delight", 
    description: "Dense dark chocolate sponge layered with silky ganache and finished with a glossy chocolate glaze.", 
    img: "images/chocolate-truffle.jpg", 
    defaultPieces: 0, 
    defaultKg: 1 
  },
  {
    id: "fresh-cream-cakes",
    name: "Fresh Cream Cakes (All Types)",
    category: "cakes",
    tag: "Fruity Flavour",
    description: "Light, airy sponge cake layered with pillowy whipped dairy cream and seasonal fruits or flavors of your choice.",
    img: "images/fresh-cream.jpg", // Optional photo path in /images, e.g. "images/fresh-cream.jpg"
    defaultPieces: 0,
    defaultKg: 1
  },
  {
    id: "vanilla-cupcake",
    name: "Vanilla Cupcake",
    category: "cupcake",
    tag: "Classic",
    description: "Soft, fluffy vanilla cupcake topped with smooth, creamy frosting.",
    img: "images/Vanilla Cupcake.jpg",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "chocolate-cupcake",
    name: "Chocolate Cupcake",
    category: "cupcake",
    tag: "Decadent",
    description: "Rich, moist chocolate cupcake bursting with deep cocoa flavour.",
    img: "images/Chocolate Cupcake.jpg",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "red-velvet-cupcake",
    name: "Red Velvet Cupcake",
    category: "cupcake",
    tag: "Velvetty",
    description: "Tender red velvet cupcake finished with luscious cream cheese frosting.",
    img: "images/red velvetcupcake.jpg",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "strawberry-cupcake",
    name: "Strawberry Cupcake",
    category: "cupcake",
    tag: "Fruity",
    description: "Light, fluffy cupcake filled with sweet strawberry goodness and creamy frosting.",
    img: "images/Strawberry Cupcake.jpg",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "caramel-cupcake",
    name: "Caramel Cupcake",
    category: "cupcake",
    tag: "Buttery",
    description: "Soft vanilla cupcake drizzled with silky caramel for a rich, indulgent bite.",
    img: "images/Caramel Cupcake.jpg",
    defaultPieces: 4,
    defaultKg: 0
  },
  {
    id: "chocolate-chip-cookie",
    name: "Chocolate Chip Cookie",
    category: "cookies",
    tag: "Every bite, a little more chocolate",
    description: "Soft, buttery and loaded with rich chocolate chips for a classic homemade treat.",
    img: "images/Chocolate-Chip-Cookie.jpg", // Optional photo path in /images, e.g. "images/fresh-cream.jpg"
    defaultPieces: 5,
    defaultKg: 0
  },
  {
    id: "butter-cookie",
    name: "Butter Cookie",
    category: "cookies",
    tag: "Buttery",
    description: "Delicately crisp, melt-in-your-mouth cookies made with rich, creamy butter.",
    img: "images/butter-cookie.jpg", // Optional photo path in /images, e.g. "images/fresh-cream.jpg"
    defaultPieces: 5,
    defaultKg: 0
  },
  {
    id: "cashew-cookie",
    name: "Cashew Cookie",
    category: "cookies",
    tag: "Nutty",
    description: "Golden, crunchy cookies packed with roasted cashews and a delicious nutty flavor.",
    img: "images/cashew-cookie.jpg", // Optional photo path in /images, e.g. "images/fresh-cream.jpg"
    defaultPieces: 5,
    defaultKg: 0
  },
  {
    id: "oatmeal-raisin-cookie",
    name: "Oatmeal Raisin Cookie",
    category: "cookies",
    tag: "Wholesome",
    description: "Wholesome oats and juicy raisins baked together for a soft and chewy bite.",
    img: "images/Oatmeal-Raisin-Cookie.jpg", // Optional photo path in /images, e.g. "images/fresh-cream.jpg"
    defaultPieces: 5,
    defaultKg: 0
  },
  {
    id: "coconut-cookie",
    name: "Coconut Cookie",
    category: "cookies",
    tag: "Tropical",
    description: "Lightly crisp and wonderfully aromatic cookies made with sweet, toasted coconut.",
    img: "images/Coconut Cookie.jpg", // Optional photo path in /images, e.g. "images/fresh-cream.jpg"
    defaultPieces: 5,
    defaultKg: 0
  },
  {
    id: "choco-truffle-with-bouquet",
    name: "Choco Truffle With Mini Bouquet",
    category: "combo",
    img: "images/WhatsApp Image 2026-09-24 at 11.37.17 PM.jpeg",
    defaultPieces:0,
     defaultKg: 0
  },
  {
    id: "bento-cake-combo",
    name: "Bento Cake and Mini bouquet",
    category: "combo",
    img: "images/WhatsApp Image 2026-09-24 at 11.37.16 PM.jpeg",
    defaultPieces: 0,
     defaultKg: 0
  },
 {
    id: "brownie-tubs-combo",
    name: "Brownie Tubs Combo",
    category: "combo",
    img: "images/WhatsApp Image 2026-09-24 at 11.37.17 PM (1).jpeg",
    defaultPieces: 0,
     defaultKg: 0
  }
];

// Helper: React.createElement shorthand
const h = React.createElement;

// Custom SVG Illustrations for every bakery item
function renderItemSvg(itemId) {
  switch (itemId) {
    case "fresh-cream-cakes":
      return h("svg", { viewBox: "0 0 120 120", className: "product-svg-illustration", "aria-label": "Fresh Cream Cake" },
        h("ellipse", { cx: 60, cy: 95, rx: 46, ry: 12, fill: "#faebd7" }),
        h("path", { d: "M20 72 Q60 84 100 72 L100 88 Q60 102 20 88 Z", fill: "#fdf8f5" }),
        h("path", { d: "M20 54 Q60 66 100 54 L100 72 Q60 84 20 72 Z", fill: "#fcefe3" }),
        h("path", { d: "M20 36 Q60 48 100 36 L100 54 Q60 66 20 54 Z", fill: "#fffdfa" }),
        h("ellipse", { cx: 60, cy: 36, rx: 40, ry: 14, fill: "#ffffff", stroke: "#f7b6c8", strokeWidth: "2" }),
        h("circle", { cx: 44, cy: 32, r: 8, fill: "#e25881" }),
        h("circle", { cx: 60, cy: 28, r: 9, fill: "#e25881" }),
        h("circle", { cx: 76, cy: 32, r: 8, fill: "#e25881" }),
        h("circle", { cx: 52, cy: 30, r: 4, fill: "#fffdfa" }),
        h("circle", { cx: 68, cy: 30, r: 4, fill: "#fffdfa" })
      );
    case "black-forest":
      return h("svg", { viewBox: "0 0 120 120", className: "product-svg-illustration", "aria-label": "Black Forest Cake" },
        h("ellipse", { cx: 60, cy: 95, rx: 46, ry: 12, fill: "#faebd7" }),
        h("path", { d: "M22 60 Q60 74 98 60 L98 88 Q60 102 22 88 Z", fill: "#382018" }),
        h("path", { d: "M22 40 Q60 52 98 40 L98 60 Q60 74 22 60 Z", fill: "#fff8f3" }),
        h("ellipse", { cx: 60, cy: 40, rx: 38, ry: 14, fill: "#4a2a20" }),
        h("circle", { cx: 42, cy: 32, r: 7, fill: "#990022" }),
        h("circle", { cx: 60, cy: 26, r: 7, fill: "#990022" }),
        h("circle", { cx: 78, cy: 32, r: 7, fill: "#990022" }),
        h("path", { d: "M42 25 Q46 15 50 20", stroke: "#2e7d32", strokeWidth: "2", fill: "none" }),
        h("path", { d: "M60 19 Q64 10 68 15", stroke: "#2e7d32", strokeWidth: "2", fill: "none" }),
        h("rect", { x: 50, y: 35, width: 8, height: 3, rx: 1.5, fill: "#24130c", transform: "rotate(25 54 36)" }),
        h("rect", { x: 66, y: 36, width: 9, height: 3, rx: 1.5, fill: "#24130c", transform: "rotate(-20 70 37)" })
      );
    case "white-forest":
      return h("svg", { viewBox: "0 0 120 120", className: "product-svg-illustration", "aria-label": "White Forest Cake" },
        h("ellipse", { cx: 60, cy: 95, rx: 46, ry: 12, fill: "#faebd7" }),
        h("path", { d: "M22 55 Q60 68 98 55 L98 88 Q60 102 22 88 Z", fill: "#fffdfa" }),
        h("path", { d: "M22 38 Q60 50 98 38 L98 55 Q60 68 22 55 Z", fill: "#fcefe3" }),
        h("ellipse", { cx: 60, cy: 38, rx: 38, ry: 14, fill: "#ffffff", stroke: "#ebd7c7", strokeWidth: "1.5" }),
        h("circle", { cx: 40, cy: 32, r: 7, fill: "#b81438" }),
        h("circle", { cx: 60, cy: 26, r: 7, fill: "#b81438" }),
        h("circle", { cx: 80, cy: 32, r: 7, fill: "#b81438" }),
        h("circle", { cx: 50, cy: 36, r: 4, fill: "#faeee4" }),
        h("circle", { cx: 70, cy: 36, r: 4, fill: "#faeee4" })
      );
    case "red-velvet":
      return h("svg", { viewBox: "0 0 120 120", className: "product-svg-illustration", "aria-label": "Red Velvet Cake" },
        h("ellipse", { cx: 60, cy: 95, rx: 46, ry: 12, fill: "#faebd7" }),
        h("path", { d: "M22 66 Q60 78 98 66 L98 88 Q60 102 22 88 Z", fill: "#991b34" }),
        h("path", { d: "M22 54 Q60 66 98 54 L98 66 Q60 78 22 66 Z", fill: "#ffffff" }),
        h("path", { d: "M22 40 Q60 52 98 40 L98 54 Q60 66 22 54 Z", fill: "#991b34" }),
        h("ellipse", { cx: 60, cy: 40, rx: 38, ry: 14, fill: "#ffffff" }),
        h("circle", { cx: 38, cy: 34, r: 6, fill: "#faeee4" }),
        h("circle", { cx: 60, cy: 30, r: 7, fill: "#faeee4" }),
        h("circle", { cx: 82, cy: 34, r: 6, fill: "#faeee4" }),
        h("path", { d: "M60 28 C57 23 51 25 51 29 C51 33 60 38 60 38 C60 38 69 33 69 29 C69 25 63 23 60 28 Z", fill: "#d3456f" })
      );
    case "rasmalai-cake":
      return h("svg", { viewBox: "0 0 120 120", className: "product-svg-illustration", "aria-label": "Rasmalai Cake" },
        h("ellipse", { cx: 60, cy: 95, rx: 46, ry: 12, fill: "#faebd7" }),
        h("path", { d: "M22 56 Q60 70 98 56 L98 88 Q60 102 22 88 Z", fill: "#fce9a4" }),
        h("path", { d: "M22 38 Q60 52 98 38 L98 56 Q60 70 22 56 Z", fill: "#fff6cf" }),
        h("ellipse", { cx: 60, cy: 38, rx: 38, ry: 14, fill: "#fffae0", stroke: "#e6c86e", strokeWidth: "1.5" }),
        h("ellipse", { cx: 45, cy: 33, rx: 12, ry: 7, fill: "#fff2b8", stroke: "#dfba45", strokeWidth: "1.5" }),
        h("ellipse", { cx: 72, cy: 34, rx: 13, ry: 7, fill: "#fff2b8", stroke: "#dfba45", strokeWidth: "1.5" }),
        h("ellipse", { cx: 58, cy: 26, rx: 4, ry: 2, fill: "#4caf50", transform: "rotate(30 58 26)" }),
        h("ellipse", { cx: 40, cy: 38, rx: 3, ry: 1.5, fill: "#4caf50" }),
        h("ellipse", { cx: 80, cy: 38, rx: 4, ry: 2, fill: "#4caf50", transform: "rotate(-25 80 38)" }),
        h("path", { d: "M60 36 C58 33 55 35 55 37 C55 39 60 42 60 42 C60 42 65 39 65 37 C65 35 62 33 60 36 Z", fill: "#d3456f" })
      );
    case "gulab-jamun-cake":
      return h("svg", { viewBox: "0 0 120 120", className: "product-svg-illustration", "aria-label": "Gulab Jamun Cake" },
        h("ellipse", { cx: 60, cy: 95, rx: 46, ry: 12, fill: "#faebd7" }),
        h("path", { d: "M22 56 Q60 68 98 56 L98 88 Q60 102 22 88 Z", fill: "#fce9a4" }),
        h("path", { d: "M22 40 Q60 52 98 40 L98 56 Q60 68 22 56 Z", fill: "#ffffff" }),
        h("ellipse", { cx: 60, cy: 40, rx: 38, ry: 14, fill: "#fef8ea" }),
        h("circle", { cx: 44, cy: 30, r: 10, fill: "#7a3717" }),
        h("circle", { cx: 60, cy: 25, r: 11, fill: "#8a3f1a" }),
        h("circle", { cx: 76, cy: 31, r: 10, fill: "#7a3717" }),
        h("circle", { cx: 42, cy: 28, r: 3, fill: "#df8a5a" }),
        h("circle", { cx: 58, cy: 23, r: 3.5, fill: "#df8a5a" }),
        h("circle", { cx: 74, cy: 29, r: 3, fill: "#df8a5a" }),
        h("ellipse", { cx: 52, cy: 36, rx: 3, ry: 1.5, fill: "#4caf50" }),
        h("ellipse", { cx: 68, cy: 36, rx: 3, ry: 1.5, fill: "#4caf50" })
      );
    case "butterscotch":
      return h("svg", { viewBox: "0 0 120 120", className: "product-svg-illustration", "aria-label": "Butterscotch Cake" },
        h("ellipse", { cx: 60, cy: 95, rx: 46, ry: 12, fill: "#faebd7" }),
        h("path", { d: "M22 56 Q60 70 98 56 L98 88 Q60 102 22 88 Z", fill: "#f0c667" }),
        h("path", { d: "M22 38 Q60 50 98 38 L98 56 Q60 70 22 56 Z", fill: "#fbf0d3" }),
        h("ellipse", { cx: 60, cy: 38, rx: 38, ry: 14, fill: "#f9e6b5" }),
        h("path", { d: "M30 45 Q35 60 40 45 Q46 64 52 45 Q62 68 70 45 Q78 60 84 45", stroke: "#b87019", strokeWidth: "3.5", fill: "none", strokeLinecap: "round" }),
        h("polygon", { points: "46,28 50,24 53,28 49,32", fill: "#a66014" }),
        h("polygon", { points: "62,24 67,20 70,25 65,28", fill: "#a66014" }),
        h("polygon", { points: "74,32 79,28 82,33 77,36", fill: "#a66014" })
      );
    case "badam-cake":
      return h("svg", { viewBox: "0 0 120 120", className: "product-svg-illustration", "aria-label": "Badam Almond Cake" },
        h("ellipse", { cx: 60, cy: 95, rx: 46, ry: 12, fill: "#faebd7" }),
        h("path", { d: "M22 56 Q60 68 98 56 L98 88 Q60 102 22 88 Z", fill: "#ecd5a7" }),
        h("path", { d: "M22 38 Q60 50 98 38 L98 56 Q60 68 22 56 Z", fill: "#fdf8ee" }),
        h("ellipse", { cx: 60, cy: 38, rx: 38, ry: 14, fill: "#fbf3e0", stroke: "#d4a359", strokeWidth: "1.5" }),
        h("path", { d: "M42 34 Q48 24 54 34 Q48 38 42 34 Z", fill: "#d49f6a", stroke: "#9e693b", strokeWidth: "1" }),
        h("path", { d: "M60 30 Q68 20 74 30 Q68 34 60 30 Z", fill: "#d49f6a", stroke: "#9e693b", strokeWidth: "1" }),
        h("path", { d: "M50 40 Q57 32 63 40 Q57 44 50 40 Z", fill: "#d49f6a", stroke: "#9e693b", strokeWidth: "1" }),
        h("path", { d: "M76 26 Q80 20 85 24", stroke: "#d9381e", strokeWidth: "1.5", fill: "none" }),
        h("path", { d: "M36 28 Q40 22 45 25", stroke: "#d9381e", strokeWidth: "1.5", fill: "none" })
      );
    case "brownies-all":
      return h("svg", { viewBox: "0 0 120 120", className: "product-svg-illustration", "aria-label": "Chocolate Brownie" },
        h("ellipse", { cx: 60, cy: 95, rx: 44, ry: 10, fill: "#faebd7" }),
        h("polygon", { points: "25,50 60,32 95,50 60,68", fill: "#4a2a20", stroke: "#382018", strokeWidth: "1" }),
        h("polygon", { points: "25,50 60,68 60,88 25,70", fill: "#301b14" }),
        h("polygon", { points: "60,68 95,50 95,70 60,88", fill: "#3b2017" }),
        h("path", { d: "M40 45 Q50 42 60 48 Q70 44 80 46", stroke: "#6b3b28", strokeWidth: "2", fill: "none" }),
        h("path", { d: "M35 55 Q55 58 75 52", stroke: "#24130c", strokeWidth: "2.5", fill: "none" }),
        h("polygon", { points: "50,40 54,37 57,41 53,44", fill: "#1a0d08" }),
        h("polygon", { points: "68,44 72,41 75,45 71,48", fill: "#1a0d08" })
      );
    case "blondie":
      return h("svg", { viewBox: "0 0 120 120", className: "product-svg-illustration", "aria-label": "Golden Blondie Bar" },
        h("ellipse", { cx: 60, cy: 95, rx: 44, ry: 10, fill: "#faebd7" }),
        h("polygon", { points: "25,50 60,32 95,50 60,68", fill: "#d4a359", stroke: "#b5843c", strokeWidth: "1" }),
        h("polygon", { points: "25,50 60,68 60,88 25,70", fill: "#a6742d" }),
        h("polygon", { points: "60,68 95,50 95,70 60,88", fill: "#bf8b3b" }),
        h("polygon", { points: "45,43 51,39 55,44 49,48", fill: "#fffdfa" }),
        h("polygon", { points: "66,45 72,41 76,46 70,50", fill: "#fffdfa" }),
        h("path", { d: "M36 50 Q56 46 78 54", stroke: "#7a4a37", strokeWidth: "2.5", fill: "none" })
      );
    default:
      return h("svg", { viewBox: "0 0 100 100", className: "product-svg-illustration" },
        h("circle", { cx: 50, cy: 50, r: 40, fill: "#fce9a4" }),
        h("text", { x: 50, y: 56, textAnchor: "middle", fontSize: 24 }, "🎂")
      );
  }
}

// Confetti Engine for Festive Bursts
const ConfettiBurst = {
  active: false,
  particles: [],
  canvas: null,
  ctx: null,

  init() {
    this.canvas = document.getElementById("confetti-canvas");
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.resize();
    window.addEventListener("resize", () => this.resize());
  },

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  },

  fire() {
    if (!this.canvas || !this.ctx) this.init();
    if (!this.canvas) return;

    const colors = ["#d3456f", "#ec7fa1", "#f7b6c8", "#d4a359", "#4a2a20", "#25D366", "#ffffff"];
    const emojis = ["💖", "💕", "🎂", "✨", "🧁", "🍓"];
    const count = 75;

    for (let i = 0; i < count; i++) {
      const isEmoji = Math.random() > 0.6;
      this.particles.push({
        x: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
        y: window.innerHeight * 0.45,
        vx: (Math.random() - 0.5) * 16,
        vy: -Math.random() * 14 - 6,
        gravity: 0.45,
        drag: 0.98,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: isEmoji ? 22 : Math.random() * 8 + 6,
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 14,
        isEmoji: isEmoji,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        opacity: 1
      });
    }

    if (!this.active) {
      this.active = true;
      this.loop();
    }
  },

  loop() {
    if (!this.active || !this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.drag;
      p.rotation += p.vRot;
      p.opacity -= 0.008;

      if (p.opacity <= 0 || p.y > window.innerHeight + 50) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = Math.max(0, p.opacity);

      if (p.isEmoji) {
        this.ctx.font = `${p.size}px sans-serif`;
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillText(p.emoji, 0, 0);
      } else {
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      }

      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.loop());
    } else {
      this.active = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
};

// Main React App Component
function App() {
  const { useState, useEffect, useMemo, useRef } = React;

  // Views: 1 = Lead capture, 2 = Menu & Story, 3 = Checkout, 4 = Thank you
  const [currentPage, setCurrentPage] = useState(1);

  // Visitor lead state
  const [visitor, setVisitor] = useState(() => {
    try {
      const saved = localStorage.getItem("abis_love_lead");
      return saved ? JSON.parse(saved) : { name: "", phone: "" };
    } catch {
      return { name: "", phone: "" };
    }
  });

  const [leadErrors, setLeadErrors] = useState({ name: "", phone: "" });
  const [leadSubmitting, setLeadSubmitting] = useState(false);

  // Cart state: { [itemId]: { pieces: number, kg: number } }
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("abis_love_cart");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [cartBadgeBump, setCartBadgeBump] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  // Delivery form state
  const [delivery, setDelivery] = useState({
    name: "",
    phone: "",
    address: "",
    dateNeeded: "",
    note: "",
    deliveryType: "delivery"
  });
  const [deliveryErrors, setDeliveryErrors] = useState({});
  const [toasts, setToasts] = useState([]);
  const cartDebounceRef = useRef(null);

  useEffect(() => {
    if (visitor.name && visitor.phone) {
      setDelivery(prev => ({ ...prev, name: visitor.name, phone: visitor.phone }));
    }
    ConfettiBurst.init();
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("abis_love_cart", JSON.stringify(cart));
    } catch (err) {}
  }, [cart]);

  // Abandoned cart sync to Google Sheet
  const triggerCartLeadUpdate = (currentCart, visitorData) => {
    const target = visitorData || visitor;
    if (!target.phone || !CONFIG.SHEET_URL) return;

    if (cartDebounceRef.current) clearTimeout(cartDebounceRef.current);

    cartDebounceRef.current = setTimeout(() => {
      const summary = Object.entries(currentCart)
        .filter(([_, q]) => (q.pieces > 0 || q.kg > 0))
        .map(([id, q]) => {
          const item = ITEMS.find(i => i.id === id);
          const name = item ? item.name : id;
          const parts = [];
          if (q.pieces > 0) parts.push(`${q.pieces} Pcs`);
          if (q.kg > 0) parts.push(`${q.kg} Kg`);
          return `${name} (${parts.join(", ")})`;
        })
        .join("; ");

      fetch(CONFIG.SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          type: "cart_update",
          name: target.name,
          phone: target.phone,
          cartItems: summary || "Empty Cart",
          lastActivity: new Date().toISOString()
        })
      }).catch(() => {});
    }, 1200);
  };

  const showToast = (message) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  };

  const triggerBadgeBump = () => {
    setCartBadgeBump(true);
    setTimeout(() => setCartBadgeBump(false), 300);
  };

  const sanitizeIndianPhone = (raw) => {
    if (!raw) return "";
    let cleaned = raw.replace(/\D/g, "");
    if (cleaned.startsWith("91") && cleaned.length === 12) cleaned = cleaned.slice(2);
    else if (cleaned.startsWith("0") && cleaned.length === 11) cleaned = cleaned.slice(1);
    return cleaned;
  };

  const validatePhone = (cleaned) => /^[6-9]\d{9}$/.test(cleaned);

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    const name = visitor.name.trim();
    const cleanedPhone = sanitizeIndianPhone(visitor.phone);

    let hasErr = false;
    const errors = { name: "", phone: "" };

    if (!name || name.length < 2) {
      errors.name = "Please enter your name (at least 2 letters).";
      hasErr = true;
    }

    if (!cleanedPhone || !validatePhone(cleanedPhone)) {
      errors.phone = "Please enter a valid 10-digit mobile number.";
      hasErr = true;
    }

    setLeadErrors(errors);
    if (hasErr) return;

    setLeadSubmitting(true);
    const updated = { name, phone: cleanedPhone };
    setVisitor(updated);
    setDelivery(prev => ({ ...prev, name, phone: cleanedPhone }));

    try {
      localStorage.setItem("abis_love_lead", JSON.stringify(updated));
    } catch {}

    if (CONFIG.SHEET_URL) {
      const ctrl = new AbortController();
      const tid = setTimeout(() => ctrl.abort(), 2000);

      fetch(CONFIG.SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          type: "lead",
          name: updated.name,
          phone: updated.phone,
          timestamp: new Date().toISOString()
        }),
        signal: ctrl.signal
      }).catch(() => {}).finally(() => clearTimeout(tid));
    }

    ConfettiBurst.fire();
    setTimeout(() => {
      setLeadSubmitting(false);
      setCurrentPage(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 400);
  };

  const animateFlyToCart = (startX, startY) => {
    const cartBtn = document.querySelector(".header-cart-btn");
    if (!cartBtn) return;
    const rect = cartBtn.getBoundingClientRect();
    const targetX = rect.left + rect.width / 2;
    const targetY = rect.top + rect.height / 2;

    const heart = document.createElement("div");
    heart.className = "fly-to-cart-particle";
    heart.textContent = "💖";
    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;
    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.left = `${targetX}px`;
      heart.style.top = `${targetY}px`;
      heart.style.transform = "translate(-50%, -50%) scale(0.4)";
      heart.style.opacity = "0.7";
    });

    setTimeout(() => {
      heart.remove();
      triggerBadgeBump();
    }, 750);
  };

  const toggleCartItem = (item, event) => {
    const isPresent = Boolean(cart[item.id]);

    if (!isPresent) {
      const newQty = {
        pieces: item.defaultPieces || 0,
        kg: item.defaultKg || (item.defaultPieces ? 0 : 1)
      };
      const updatedCart = { ...cart, [item.id]: newQty };
      setCart(updatedCart);
      showToast(`Added ${item.name} to basket! 💕`);

      if (event && event.clientX) animateFlyToCart(event.clientX, event.clientY);
      else triggerBadgeBump();

      triggerCartLeadUpdate(updatedCart);
    } else {
      const updatedCart = { ...cart };
      delete updatedCart[item.id];
      setCart(updatedCart);
      showToast(`Removed ${item.name} from basket`);
      triggerBadgeBump();
      triggerCartLeadUpdate(updatedCart);
    }
  };

  const updateCartQuantity = (itemId, field, val) => {
    const num = parseFloat(val);
    const safeNum = isNaN(num) || num < 0 ? 0 : num;
    const updatedCart = {
      ...cart,
      [itemId]: { ...cart[itemId], [field]: safeNum }
    };
    setCart(updatedCart);
    triggerCartLeadUpdate(updatedCart);
  };

  const cartItemCount = useMemo(() => Object.keys(cart).length, [cart]);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return ITEMS;
    return ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const handleWhatsAppCheckout = (e) => {
    e.preventDefault();
    const errors = {};
    const cartEntries = Object.entries(cart);

    if (cartEntries.length === 0) {
      showToast("Your cart is empty! Please select treats first.");
      return;
    }

    let hasQuantityError = false;
    for (const [_, q] of cartEntries) {
      if ((!q.pieces || q.pieces <= 0) && (!q.kg || q.kg <= 0)) {
        hasQuantityError = true;
        break;
      }
    }

    if (hasQuantityError) {
      showToast("Please specify either Pieces or Kg (> 0) for each item.");
      return;
    }

    if (!delivery.name || delivery.name.trim().length < 2) {
      errors.name = "Please enter your name.";
    }

    const cleanPhone = sanitizeIndianPhone(delivery.phone);
    if (!cleanPhone || !validatePhone(cleanPhone)) {
      errors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!delivery.address || delivery.address.trim().length < 6) {
      errors.address = "Please enter a complete delivery address / landmark.";
    }

    setDeliveryErrors(errors);
    if (Object.keys(errors).length > 0) {
      showToast("Please fill all required delivery details.");
      return;
    }

    // Build WhatsApp formatted message
    const lines = [
      "🎂 *NEW ORDER - ABI'S LOVE* 🎂",
      "━━━━━━━━━━━━━━━━━━",
      `👤 *Customer:* ${delivery.name.trim()}`,
      `📞 *Phone:* ${cleanPhone}`,
      `📍 *Address:* ${delivery.address.trim()}`,
      `🚚 *Order Mode:* ${delivery.deliveryType === "delivery" ? "Home Delivery" : "Self Pickup"}`
    ];
    if (delivery.dateNeeded) lines.push(`📅 *Date Needed:* ${delivery.dateNeeded}`);

    lines.push("");
    lines.push("🧁 *ORDER ITEMS:*");
    let idx = 1;
    for (const [id, q] of cartEntries) {
      const item = ITEMS.find(i => i.id === id);
      const itemName = item ? item.name : id;
      const qParts = [];
      if (q.pieces > 0) qParts.push(`${q.pieces} Pcs`);
      if (q.kg > 0) qParts.push(`${q.kg} Kg`);
      lines.push(`${idx}. *${itemName}* — ${qParts.join(", ")}`);
      idx++;
    }

    if (delivery.note && delivery.note.trim()) {
      lines.push("");
      lines.push(`📝 *Message / Notes:* "${delivery.note.trim()}"`);
    }

    lines.push("━━━━━━━━━━━━━━━━━━");
    lines.push("Please share the total price and delivery details. Thank you! 💕");

    const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`;

    // Async save to sheet
    if (CONFIG.SHEET_URL) {
      const summary = cartEntries.map(([id, q]) => {
        const item = ITEMS.find(i => i.id === id);
        const name = item ? item.name : id;
        const parts = [];
        if (q.pieces > 0) parts.push(`${q.pieces} Pcs`);
        if (q.kg > 0) parts.push(`${q.kg} Kg`);
        return `${name} (${parts.join(", ")})`;
      }).join("; ");

      fetch(CONFIG.SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        keepalive: true,
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          type: "order",
          name: delivery.name.trim(),
          phone: cleanPhone,
          address: delivery.address.trim(),
          items: summary,
          date: delivery.dateNeeded || "Immediate / ASAP",
          note: delivery.note ? delivery.note.trim() : "",
          deliveryType: delivery.deliveryType,
          timestamp: new Date().toISOString()
        })
      }).catch(() => {});
    }

    const win = window.open(whatsappUrl, "_blank");
    if (!win || win.closed || typeof win.closed === "undefined") {
      setTimeout(() => { window.location.href = whatsappUrl; }, 300);
    }

    ConfettiBurst.fire();
    setCart({});
    setCurrentPage(4);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCardMouseMove = (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(800px) rotateX(${-(y / (rect.height / 2)) * 6}deg) rotateY(${(x / (rect.width / 2)) * 6}deg) translateY(-4px)`;
  };

  const handleCardMouseLeave = (e) => {
    e.currentTarget.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  const renderAmbientBackground = () => {
    if (currentPage === 1) return null;
    return h(React.Fragment, null,
      h("div", { className: "ambient-hearts-container", "aria-hidden": "true" },
        [15, 35, 55, 75, 90].map((left, idx) =>
          h("div", {
            key: idx,
            className: "floating-heart-particle",
            style: {
              left: `${left}%`,
              animationDuration: `${14 + idx * 3}s`,
              animationDelay: `${idx * 2.5}s`,
              fontSize: `${18 + (idx % 3) * 6}px`
            }
          }, "💖")
        )
      ),
      h("div", { className: "creamy-waves-bottom", "aria-hidden": "true" },
        h("svg", { className: "creamy-wave creamy-wave-1", viewBox: "0 0 1200 120", preserveAspectRatio: "none" },
          h("path", { d: "M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z", fill: "#4a2a20" })
        ),
        h("svg", { className: "creamy-wave creamy-wave-2", viewBox: "0 0 1200 120", preserveAspectRatio: "none" },
          h("path", { d: "M0,20 C200,100 450,10 700,80 C950,150 1100,30 1200,60 L1200,120 L0,120 Z", fill: "#f7b6c8" })
        ),
        h("svg", { className: "creamy-wave creamy-wave-3", viewBox: "0 0 1200 120", preserveAspectRatio: "none" },
          h("path", { d: "M0,40 C300,110 600,20 900,90 C1050,120 1150,50 1200,70 L1200,120 L0,120 Z", fill: "#fff8f3" })
        )
      ),
      h("div", { className: "ambient-3d-heart-widget", "aria-hidden": "true" },
        h("div", { className: "heart-3d-scene" },
          h("div", { className: "heart-layer heart-layer-1" }, "♥"),
          h("div", { className: "heart-layer heart-layer-2" }, "♥"),
          h("div", { className: "heart-layer heart-layer-3" }, "♥"),
          h("div", { className: "heart-layer heart-layer-4" }, "♥"),
          h("div", { className: "heart-layer heart-layer-5" }, "♥")
        )
      )
    );
  };

  const renderHeader = () => {
    if (currentPage === 1) return null;
    return h("header", { className: "sticky-header" },
      h("div", { className: "header-inner" },
        h("a", {
          href: "#top",
          className: "header-brand",
          onClick: (e) => {
            e.preventDefault();
            setCurrentPage(2);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        },
          h("div", { className: "header-logo-thumbnail" },
            h("img", { src: "images/logo.jpg", alt: "Abi's Love Medallion Logo" })
          ),
          h("div", { className: "header-brand-text" },
            h("span", { className: "header-brand-name" }, CONFIG.STORE_NAME),
            h("span", { className: "header-brand-tag" }, CONFIG.TAGLINE)
          )
        ),
        h("div", { className: "header-actions" },
          h("button", {
            className: "header-cart-btn",
            "aria-label": `View shopping cart with ${cartItemCount} items`,
            onClick: () => {
              setCurrentPage(3);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          },
            h("svg", { className: "cart-icon-svg", viewBox: "0 0 24 24" },
              h("path", { d: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" })
            ),
            h("span", null, "Cart"),
            h("span", { className: `cart-count-badge ${cartBadgeBump ? "bump" : ""}` }, cartItemCount)
          )
        )
      ),
      h("div", { className: "cream-drip-edge", "aria-hidden": "true" },
        h("svg", { viewBox: "0 0 1200 20", preserveAspectRatio: "none" },
          h("path", { d: "M0,0 L1200,0 L1200,8 Q1150,22 1100,8 Q1050,2 1000,8 Q950,22 900,8 Q850,2 800,8 Q750,22 700,8 Q650,2 600,8 Q550,22 500,8 Q450,2 400,8 Q350,22 300,8 Q250,2 200,8 Q150,22 100,8 Q50,2 0,8 Z" })
        )
      )
    );
  };

  const renderPage1LeadCapture = () => {
    return h("main", { className: "page-lead-capture" },
      h("div", { className: "lead-capture-container" },
        h("div", { className: "circular-badge-card" },
          h("div", { className: "dashed-pink-ring", "aria-hidden": "true" }),
          h("svg", { className: "rotating-text-svg", viewBox: "0 0 500 500", "aria-hidden": "true" },
            h("defs", null,
              h("path", {
                id: "circlePath",
                d: "M 250, 250 m -215, 0 a 215,215 0 1,1 430,0 a 215,215 0 1,1 -430,0"
              })
            ),
            h("text", null,
              h("textPath", {
                href: "#circlePath",
                startOffset: "50%",
                textAnchor: "middle"
              }, "HOME BAKED WITH LOVE • CAKES • BROWNIES • SWEETS • FRESH TO ORDER •")
            )
          ),
          h("div", { className: "badge-center-content" },
            h("div", { className: "badge-logo-emblem" },
              h("img", { src: "images/logo.jpg", alt: "Abi's Love Medallion Logo", className: "badge-logo-img" })
            ),
            h("div", { className: "badge-spinning-heart", "aria-hidden": "true" }, "💖"),
            h("h1", { className: "badge-brand-title" }, CONFIG.STORE_NAME),
            h("p", { className: "badge-tagline" }, CONFIG.TAGLINE),
            h("form", { className: "lead-capture-form", onSubmit: handleLeadSubmit, noValidate: true },
              h("div", { className: "form-field-group" },
                h("label", { htmlFor: "lead-name", className: "form-label" }, "Your Name"),
                h("div", { className: "input-wrapper" },
                  h("span", { className: "input-icon", "aria-hidden": "true" }, "👤"),
                  h("input", {
                    id: "lead-name",
                    type: "text",
                    className: `form-input ${leadErrors.name ? "has-error" : ""}`,
                    placeholder: "e.g. Kareem Filzu",
                    value: visitor.name,
                    onChange: (e) => {
                      setVisitor({ ...visitor, name: e.target.value });
                      if (leadErrors.name) setLeadErrors({ ...leadErrors, name: "" });
                    },
                    required: true,
                    autoComplete: "name"
                  })
                ),
                leadErrors.name && h("span", { className: "inline-error-msg" }, leadErrors.name)
              ),
              h("div", { className: "form-field-group" },
                h("label", { htmlFor: "lead-phone", className: "form-label" }, "Phone Number (WhatsApp)"),
                h("div", { className: "input-wrapper" },
                  h("span", { className: "input-icon", "aria-hidden": "true" }, "📱"),
                  h("input", {
                    id: "lead-phone",
                    type: "tel",
                    className: `form-input ${leadErrors.phone ? "has-error" : ""}`,
                    placeholder: "10-digit mobile number",
                    value: visitor.phone,
                    onChange: (e) => {
                      setVisitor({ ...visitor, phone: e.target.value });
                      if (leadErrors.phone) setLeadErrors({ ...leadErrors, phone: "" });
                    },
                    required: true,
                    autoComplete: "tel"
                  })
                ),
                leadErrors.phone && h("span", { className: "inline-error-msg" }, leadErrors.phone)
              ),
              h("button", {
                type: "submit",
                className: "btn-3d-primary",
                disabled: leadSubmitting
              }, leadSubmitting ? "Opening Kitchen... 🧁" : "See The Menu ✨"),
              h("p", { className: "lead-privacy-note" },
                "🔒 We only use your number to send menu updates & confirm fresh orders."
              )
            )
          )
        )
      )
    );
  };

  const renderPage2Menu = () => {
    const firstName = visitor.name ? visitor.name.split(" ")[0] : "Friend";

    return h("main", { className: "page-menu-view" },
      h("div", { className: "content-wrapper" },
        h("section", { className: "menu-hero-panel" },
          h("h2", { className: "hero-greeting-title" },
            "Hi ",
            h("span", { className: "visitor-highlight" }, firstName),
            ", what are you craving today?"
          ),
          h("p", { className: "hero-subtext" },
            "Every cake, brownie, and Indian-sweet cake is baked fresh to order in our home kitchen with pure butter and lots of love."
          ),
          h("div", { className: "hero-user-meta" },
            visitor.phone && h("span", { className: "hero-user-badge" }, "📱 ", visitor.phone),
            h("button", {
              className: "change-details-btn",
              onClick: () => setCurrentPage(1)
            }, "Not you? Change details")
          ),
          h("div", { className: "trust-badges-grid" },
            [
              { icon: "🏡", title: "100% Homemade" },
              { icon: "❄️", title: "Fresh Never Frozen" },
              { icon: "🎨", title: "Custom Designs" },
              { icon: "🌱", title: "Eggless On Request" }
            ].map((b, idx) =>
              h("div", { key: idx, className: "trust-badge-item" },
                h("span", { className: "trust-badge-icon", "aria-hidden": "true" }, b.icon),
                h("span", { className: "trust-badge-text" }, b.title)
              )
            )
          )
        ),

        h("nav", { className: "filter-chips-bar", "aria-label": "Menu categories" },
          [
            { id: "all", label: "All Treats" },
            { id: "cakes", label: "Cakes" },
            { id: "indian-sweets", label: "Indian Sweet Cakes" },
            { id: "brownies", label: "Brownies & Blondies" },
            { id: "cookies", label: "Cookies" },
            { id: "cupcake", label: "Cupcake" },
            { id: "combo", label: "Combo" }   
          ].map(chip =>
            h("button", {
              key: chip.id,
              className: `filter-chip ${activeCategory === chip.id ? "active" : ""}`,
              onClick: () => setActiveCategory(chip.id)
            }, chip.label)
          )
        ),

        h("div", { className: "menu-items-grid" },
          filteredItems.map(item => {
            const isAdded = Boolean(cart[item.id]);

            return h("article", {
              key: item.id,
              className: "product-card",
              onMouseMove: handleCardMouseMove,
              onMouseLeave: handleCardMouseLeave
            },
              item.tag && h("span", {
                className: `product-tag-badge ${item.tag.toLowerCase().includes("special") ? "special" : ""}`
              }, item.tag),

              h("div", { className: "product-image-container" },
                item.img
                  ? h("img", { src: item.img, alt: item.name, className: "product-photo-img", loading: "lazy" })
                  : renderItemSvg(item.id)
              ),

              h("div", { className: "product-card-body" },
                h("h3", { className: "product-title" }, item.name),
                h("p", { className: "product-description" }, item.description),
                h("div", { className: "product-card-footer" },
                  h("button", {
                    className: `btn-add-cart ${isAdded ? "added" : ""}`,
                    onClick: (e) => toggleCartItem(item, e),
                    "aria-pressed": isAdded
                  }, isAdded ? "Added ✓" : "Add to cart +")
                )
              )
            );
          })
        ),

        h("section", { className: "lead-magnet-card" },
          h("h3", { className: "lead-magnet-title" }, "🎁 Get 10% Off Your First Order!"),
          h("p", { className: "lead-magnet-sub" },
            "Celebrating a birthday, anniversary, or festival? Join our festival early-bird list for Diwali & Christmas and lock in special seasonal hampers."
          ),
          h("div", { className: "referral-banner-pill" },
            "👥 Refer a friend — both of you get ₹100 off on your next baked delight!"
          )
        ),

        h("section", { className: "content-section" },
          h("div", { className: "section-header" },
            h("span", { className: "section-kicker" }, "Meet the Baker"),
            h("h3", { className: "section-title" }, "The Story Behind Abi's Love")
          ),
          h("div", { className: "about-abi-card" },
            h("div", { className: "about-abi-avatar" },
              h("img", { src: "images/logo.jpg", alt: "Abi's Love Medallion" })
            ),
            h("div", { className: "about-abi-text" },
              h("h4", null, "Hi, I'm Abi!"),
              h("p", null,
                "What started as baking for my family has grown into a little kitchen full of love. Every cake, cookie and cupcake is made fresh to order, with real butter, quality ingredients and a lot of care. Whether it's an authentic Rasmalai cake or fudgy brownies, we bake with you and for you."
              )
            )
          )
        ),

        h("section", { className: "content-section" },
          h("div", { className: "section-header" },
            h("span", { className: "section-kicker" }, "Baked with Integrity"),
            h("h3", { className: "section-title" }, "Why Choose Abi's Love?")
          ),
          h("div", { className: "why-choose-grid" },
            [
              { icon: "🌿", title: "Fresh, Never Frozen", text: "We start whisking only after your order is confirmed. No pre-made dry bases, ever." },
              { icon: "✨", title: "Custom Designs", text: "Send us your reference photo on WhatsApp. We handcraft themes, colors, and toppers." },
              { icon: "🍫", title: "Quality Ingredients", text: "100% real dairy butter, premium cocoa, genuine saffron, and farm-fresh cream." },
              { icon: "🥣", title: "Small Batch Love", text: "Baked in artisanal small batches to guarantee melt-in-the-mouth perfection." }
            ].map((col, idx) =>
              h("div", { key: idx, className: "why-card" },
                h("div", { className: "why-card-icon" }, col.icon),
                h("h4", null, col.title),
                h("p", null, col.text)
              )
            )
          )
        ),

        h("section", { className: "content-section" },
          h("div", { className: "section-header" },
            h("span", { className: "section-kicker" }, "Simple & Seamless"),
            h("h3", { className: "section-title" }, "How to Order in 3 Steps")
          ),
          h("div", { className: "order-steps-container" },
            [
              { step: "1", title: "1. Choose Your Treats", text: "Pick your cakes, brownies, or sweets and select pieces or weight in kg." },
              { step: "2", title: "2. Confirm on WhatsApp", text: "We verify your date and address, calculate your price, and accept a small advance via UPI." },
              { step: "3", title: "3. Fresh Delivery or Pickup", text: "Receive your freshly baked order at your doorstep or pick it up warm from our kitchen!" }
            ].map(st =>
              h("div", { key: st.step, className: "step-card" },
                h("div", { className: "step-number-bubble" }, st.step),
                h("h4", null, st.title),
                h("p", null, st.text)
              )
            )
          ),
          h("p", { className: "order-lead-time-notice" },
            "⏰ Please order at least 2 to 3 days in advance. Complex custom theme cakes may require extra notice."
          )
        ),

        h("section", { className: "content-section" },
          h("div", { className: "section-header" },
            h("span", { className: "section-kicker" }, "Real Smiles"),
            h("h3", { className: "section-title" }, "What Our Customers Say")
          ),
          h("div", { className: "testimonials-grid" },
            [
              { name: "Fathima Farhana", item: "Rasmalai Cake (1.5 Kg)", text: "The Rasmalai cake was the absolute star of my daughter's birthday! So soft, not overly sweet, and packed with real rasmalai pieces. Everyone asked for Abi's contact!" },
              { name: "Arun & Deepa", item: "Red Velvet & Brownies", text: "Unbelievably fudgy brownies! The crinkly top and gooey center are Michelin-level. Ordering on WhatsApp was super quick and effortless." },
              { name: "Kathir", item: "Gulab Jamun Cake (1 Kg)", text: "Being a vegetarian family, getting a 100% eggless fusion cake that tasted so divine was a blessing. Abi is our permanent family baker now!" }
            ].map((rev, idx) =>
              h("div", { key: idx, className: "testimonial-card" },
                h("div", { className: "star-rating" }, "★★★★★"),
                h("p", { className: "review-quote" }, `“${rev.text}”`),
                h("span", { className: "review-author" }, rev.name),
                h("span", { className: "review-cake-type" }, rev.item)
              )
            )
          ),
          h("p", { className: "photo-review-invite" },
            "📸 Loved your cake? Send a photo review on ",
            h("a", { href: `https://wa.me/${CONFIG.WHATSAPP}`, target: "_blank", rel: "noreferrer" }, "WhatsApp"),
            " to be featured on our page!"
          )
        ),

        h("section", { className: "content-section" },
          h("div", { className: "section-header" },
            h("span", { className: "section-kicker" }, "Got Questions?"),
            h("h3", { className: "section-title" }, "Frequently Asked Questions")
          ),
          h("div", { className: "faq-accordion-list" },
            [
              { q: "How early should I place an order?", a: "We recommend placing your order at least 2 to 3 days ahead. For tiered celebration cakes or custom sculpted fondant toppers, please order 5 to 7 days in advance." },
              { q: "Do you bake 100% eggless cakes?", a: "Yes, absolutely! All our cakes, brownies, and Indian-sweet cakes can be baked eggless upon request without compromising softness or taste." },
              { q: "What is your delivery area and delivery charges?", a: "We deliver across the city via trusted courier partners or doorstep hand-delivery. Charges depend on distance and are shared transparently on WhatsApp before confirmation. You can also self-pickup." },
              { q: "Can I customize the cake design with a reference photo?", a: "Yes! Once you submit your order, send your reference Pinterest or Instagram photo to Abi on WhatsApp. We will match the palette and decor closely." },
              { q: "How do payments work?", a: "We accept payments via Google Pay, PhonePe, Paytm, or UPI transfer. A small advance confirms your slot, and the remainder is paid upon completion or delivery." },
              { q: "Do you cater to nut or dairy allergies?", a: "Please inform us of any allergies in the order notes. While we sanitize thoroughly, our home kitchen regularly handles nuts, dairy, and wheat." }
            ].map((faq, idx) =>
              h("details", { key: idx, className: "faq-item" },
                h("summary", { className: "faq-summary" },
                  h("span", null, faq.q),
                  h("span", { className: "faq-chevron" }, "▾")
                ),
                h("div", { className: "faq-content" }, faq.a)
              )
            )
          )
        )
      )
    );
  };

  const renderPage3Checkout = () => {
    const cartEntries = Object.entries(cart);

    return h("main", { className: "page-checkout-view" },
      h("div", { className: "content-wrapper" },
        h("div", { className: "checkout-header-bar" },
          h("button", {
            className: "back-to-menu-btn",
            onClick: () => {
              setCurrentPage(2);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }, "← Back to Menu"),
          h("span", { style: { fontWeight: 700, color: "var(--brown-600)" } },
            `${cartItemCount} item${cartItemCount === 1 ? "" : "s"} selected`
          )
        ),

        cartEntries.length === 0
          ? h("div", { className: "empty-cart-state" },
              h("span", { className: "empty-cart-icon", "aria-hidden": "true" }, "🛒"),
              h("h3", { className: "empty-cart-title" }, "Your cart is empty!"),
              h("p", { className: "empty-cart-sub" }, "Explore our oven-fresh treats and pick your favorites."),
              h("button", {
                className: "btn-3d-primary",
                onClick: () => setCurrentPage(2)
              }, "Browse the Menu ✨")
            )
          : h("div", { className: "checkout-grid" },
              h("section", { className: "cart-column-card" },
                h("h3", { className: "cart-card-title" },
                  h("span", null, "Your Sweet Basket"),
                  h("span", { style: { fontSize: "0.85rem", color: "var(--rose-600)" } }, "Editable")
                ),
                h("div", { className: "cart-items-list" },
                  cartEntries.map(([id, q]) => {
                    const item = ITEMS.find(i => i.id === id) || { id, name: id };
                    const hasZeroQty = (!q.pieces || q.pieces <= 0) && (!q.kg || q.kg <= 0);

                    return h("div", { key: id, className: "cart-item-row" },
                      h("div", { className: "cart-item-thumbnail" },
                        item.img ? h("img", { src: item.img, alt: item.name }) : renderItemSvg(item.id)
                      ),
                      h("div", { className: "cart-item-details" },
                        h("h4", { className: "cart-item-name" }, item.name),
                        h("div", { className: "cart-dual-inputs" },
                          h("div", { className: "quantity-input-box" },
                            h("label", { htmlFor: `pieces-${id}`, className: "quantity-label" }, "Pieces:"),
                            h("input", {
                              id: `pieces-${id}`,
                              type: "number",
                              min: "0",
                              step: "1",
                              className: `quantity-field ${hasZeroQty ? "has-error" : ""}`,
                              value: q.pieces ?? "",
                              onChange: (e) => updateCartQuantity(id, "pieces", e.target.value)
                            })
                          ),
                          h("div", { className: "quantity-input-box" },
                            h("label", { htmlFor: `kg-${id}`, className: "quantity-label" }, "Kg:"),
                            h("input", {
                              id: `kg-${id}`,
                              type: "number",
                              min: "0",
                              step: "0.5",
                              className: `quantity-field ${hasZeroQty ? "has-error" : ""}`,
                              value: q.kg ?? "",
                              onChange: (e) => updateCartQuantity(id, "kg", e.target.value)
                            })
                          )
                        ),
                        hasZeroQty && h("span", { className: "inline-error-msg", style: { display: "block", marginTop: 4 } },
                          "Please enter pieces or kg (> 0)"
                        )
                      ),
                      h("button", {
                        className: "cart-item-remove-btn",
                        "aria-label": `Remove ${item.name}`,
                        title: "Remove item",
                        onClick: () => toggleCartItem(item)
                      }, "✕")
                    );
                  })
                )
              ),

              h("section", { className: "delivery-form-card" },
                h("h3", { className: "delivery-form-title" }, "Delivery & WhatsApp Confirmation"),
                h("form", { className: "delivery-form-fields", onSubmit: handleWhatsAppCheckout },
                  h("div", { className: "form-row-2col" },
                    h("div", { className: "form-field-group" },
                      h("label", { htmlFor: "deliv-name", className: "form-label" }, "Full Name *"),
                      h("input", {
                        id: "deliv-name",
                        type: "text",
                        className: `form-input ${deliveryErrors.name ? "has-error" : ""}`,
                        value: delivery.name,
                        onChange: (e) => {
                          setDelivery({ ...delivery, name: e.target.value });
                          if (deliveryErrors.name) setDeliveryErrors({ ...deliveryErrors, name: "" });
                        },
                        required: true
                      }),
                      deliveryErrors.name && h("span", { className: "inline-error-msg" }, deliveryErrors.name)
                    ),
                    h("div", { className: "form-field-group" },
                      h("label", { htmlFor: "deliv-phone", className: "form-label" }, "Phone / WhatsApp *"),
                      h("input", {
                        id: "deliv-phone",
                        type: "tel",
                        className: `form-input ${deliveryErrors.phone ? "has-error" : ""}`,
                        value: delivery.phone,
                        onChange: (e) => {
                          setDelivery({ ...delivery, phone: e.target.value });
                          if (deliveryErrors.phone) setDeliveryErrors({ ...deliveryErrors, phone: "" });
                        },
                        required: true
                      }),
                      deliveryErrors.phone && h("span", { className: "inline-error-msg" }, deliveryErrors.phone)
                    )
                  ),

                  h("div", { className: "form-field-group" },
                    h("label", { className: "form-label" }, "Fulfillment Preference"),
                    h("div", { className: "delivery-type-selector" },
                      h("label", { className: `delivery-type-label ${delivery.deliveryType === "delivery" ? "selected" : ""}` },
                        h("input", {
                          type: "radio",
                          name: "deliveryType",
                          value: "delivery",
                          checked: delivery.deliveryType === "delivery",
                          onChange: () => setDelivery({ ...delivery, deliveryType: "delivery" }),
                          style: { display: "none" }
                        }),
                        "🚚 Home Delivery"
                      ),
                      h("label", { className: `delivery-type-label ${delivery.deliveryType === "pickup" ? "selected" : ""}` },
                        h("input", {
                          type: "radio",
                          name: "deliveryType",
                          value: "pickup",
                          checked: delivery.deliveryType === "pickup",
                          onChange: () => setDelivery({ ...delivery, deliveryType: "pickup" }),
                          style: { display: "none" }
                        }),
                        "🏡 Self Pickup"
                      )
                    )
                  ),

                  h("div", { className: "form-field-group" },
                    h("label", { htmlFor: "deliv-address", className: "form-label" }, "Delivery Address / Landmark *"),
                    h("textarea", {
                      id: "deliv-address",
                      className: `form-textarea ${deliveryErrors.address ? "has-error" : ""}`,
                      placeholder: "Flat/House no., Street, Area, Landmark, City",
                      value: delivery.address,
                      onChange: (e) => {
                        setDelivery({ ...delivery, address: e.target.value });
                        if (deliveryErrors.address) setDeliveryErrors({ ...deliveryErrors, address: "" });
                      },
                      required: true
                    }),
                    deliveryErrors.address && h("span", { className: "inline-error-msg" }, deliveryErrors.address)
                  ),

                  h("div", { className: "form-field-group" },
                    h("label", { htmlFor: "deliv-date", className: "form-label" }, "Date Needed (Optional)"),
                    h("input", {
                      id: "deliv-date",
                      type: "date",
                      className: "form-input",
                      value: delivery.dateNeeded,
                      onChange: (e) => setDelivery({ ...delivery, dateNeeded: e.target.value })
                    })
                  ),

                  h("div", { className: "form-field-group" },
                    h("label", { htmlFor: "deliv-note", className: "form-label" }, "Message on Cake / Notes (Optional)"),
                    h("textarea", {
                      id: "deliv-note",
                      className: "form-textarea",
                      placeholder: "e.g. 'Happy Birthday Rohan!', Eggless please, Less sugar, reference theme...",
                      value: delivery.note,
                      onChange: (e) => setDelivery({ ...delivery, note: e.target.value })
                    })
                  ),

                  h("button", { type: "submit", className: "btn-whatsapp-submit" },
                    h("span", null, "📱"),
                    h("span", null, "Send Order on WhatsApp")
                  ),
                  h("p", { className: "whatsapp-submit-disclaimer" },
                    "Your order will be formatted and opened in WhatsApp directly with Abi for final pricing and timing confirmation!"
                  )
                )
              )
            )
      )
    );
  };

  const renderPage4ThankYou = () => {
    return h("main", { className: "content-wrapper", style: { padding: "40px 20px" } },
      h("div", { className: "thank-you-view" },
        h("div", { className: "thank-you-icon" }, "🎂"),
        h("h2", { className: "thank-you-title" }, "Order Sent to WhatsApp!"),
        h("p", { className: "thank-you-sub" },
          "Thank you for choosing Abi's Love! Your order summary was sent directly to Abi on WhatsApp. We will confirm the baking schedule and pricing right away."
        ),
        h("div", { className: "thank-you-actions" },
          h("a", {
            href: `https://wa.me/${CONFIG.WHATSAPP}`,
            target: "_blank",
            rel: "noreferrer",
            className: "btn-whatsapp-submit",
            style: { textDecoration: "none" }
          }, "💬 Open WhatsApp Chat Again"),
          h("button", {
            className: "btn-3d-primary",
            onClick: () => {
              setCurrentPage(2);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }, "Order More Treats ✨")
        )
      )
    );
  };

  const renderFloatingWhatsApp = () => {
    if (currentPage === 1) return null;
    const defaultGreeting = encodeURIComponent("Hi Abi! I'm visiting your website and have a question about your delicious bakes. 🧁");
    return h("a", {
      href: `https://wa.me/${CONFIG.WHATSAPP}?text=${defaultGreeting}`,
      target: "_blank",
      rel: "noreferrer",
      className: "floating-whatsapp-btn",
      "aria-label": "Chat with Abi on WhatsApp",
      title: "Chat with Abi on WhatsApp"
    },
      h("svg", { viewBox: "0 0 24 24" },
        h("path", { d: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" })
      )
    );
  };

  const renderToasts = () => {
    return h("div", { className: "toast-container" },
      toasts.map(t =>
        h("div", { key: t.id, className: "toast-item" },
          h("span", null, "🍰"),
          h("span", null, t.message)
        )
      )
    );
  };

  const renderFooter = () => {
    return h("footer", { className: "site-footer" },
      h("div", { className: "footer-inner" },
        h("div", { className: "footer-logo-wrap" },
          h("img", { src: "images/logo.jpg", alt: "Abi's Love Medallion", className: "footer-logo-img" }),
          h("h4", { className: "footer-brand-title" }, CONFIG.STORE_NAME),
          h("p", { className: "footer-tagline" }, CONFIG.TAGLINE)
        ),
        h("div", { className: "footer-links" },
          h("a", { href: `mailto:${CONFIG.EMAIL}`, className: "footer-link" }, "✉️ ", CONFIG.EMAIL),
          h("a", { href: `https://wa.me/${CONFIG.WHATSAPP}`, target: "_blank", rel: "noreferrer", className: "footer-link" },
            "📱 WhatsApp: ", CONFIG.WHATSAPP_DISPLAY
          ),
          h("a", { href: `https://instagram.com/${CONFIG.INSTAGRAM.replace("@", "")}`, target: "_blank", rel: "noreferrer", className: "footer-link" },
            "📸 Instagram: ", CONFIG.INSTAGRAM
          )
        ),
        h("p", { className: "footer-copy" },
          `© ${new Date().getFullYear()} ${CONFIG.STORE_NAME}. All rights reserved. Handcrafted with love & pure butter.`
        )
      )
    );
  };

  return h("div", { className: "app-root-container" },
    renderAmbientBackground(),
    renderHeader(),
    currentPage === 1 && renderPage1LeadCapture(),
    currentPage === 2 && renderPage2Menu(),
    currentPage === 3 && renderPage3Checkout(),
    currentPage === 4 && renderPage4ThankYou(),
    renderFloatingWhatsApp(),
    renderToasts(),
    currentPage !== 1 && renderFooter()
  );
}

window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  if (rootElement && window.ReactDOM) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(h(App));
  }
});
