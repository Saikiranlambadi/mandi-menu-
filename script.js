const items = [
  // Chicken Fry Mandi
  { name: "Chicken Fry Mandi", cat: "Chicken Mandi", portion: "1 Piece", price: "₹280", image: "images/chicken_fry_mandi.jpg", desc: "Crispy chicken fry served with aromatic mandi rice." },
  { name: "Chicken Fry Mandi", cat: "Chicken Mandi", portion: "2 Pieces", price: "₹510", image: "images/chicken_fry_mandi.jpg", desc: "Crispy chicken fry with aromatic mandi rice." },
  { name: "Chicken Fry Mandi", cat: "Chicken Mandi", portion: "3 Pieces", price: "₹690", image: "images/chicken_fry_mandi.jpg", desc: "Crispy chicken fry with aromatic mandi rice." },
  { name: "Chicken Fry Mandi", cat: "Chicken Mandi", portion: "4 Pieces", price: "₹920", image: "images/chicken_fry_mandi.jpg", desc: "Crispy chicken fry with aromatic mandi rice." },

  // Chicken Broasted Mandi
  { name: "Chicken Broasted Mandi", cat: "Chicken Mandi", portion: "1 Piece", price: "₹300", image: "images/chicken_broasted_mandi.jpg", desc: "Golden broasted chicken served with mandi rice." },
  { name: "Chicken Broasted Mandi", cat: "Chicken Mandi", portion: "2 Pieces", price: "₹550", image: "images/chicken_broasted_mandi.jpg", desc: "Golden broasted chicken served with mandi rice." },
  { name: "Chicken Broasted Mandi", cat: "Chicken Mandi", portion: "3 Pieces", price: "₹780", image: "images/chicken_broasted_mandi.jpg", desc: "Golden broasted chicken served with mandi rice." },
  { name: "Chicken Broasted Mandi", cat: "Chicken Mandi", portion: "4 Pieces", price: "₹1050", image: "images/chicken_broasted_mandi.jpg", desc: "Golden broasted chicken served with mandi rice." },

  // Mutton Juicy Mandi
  { name: "Mutton Juicy Mandi", cat: "Mutton Mandi", portion: "1 Piece", price: "₹320", image: "images/mutton_juicy_mandi.jpg", desc: "Tender juicy mutton paired with fragrant mandi rice." },
  { name: "Mutton Juicy Mandi", cat: "Mutton Mandi", portion: "2 Pieces", price: "₹600", image: "images/mutton_juicy_mandi.jpg", desc: "Tender juicy mutton paired with fragrant mandi rice." },
  { name: "Mutton Juicy Mandi", cat: "Mutton Mandi", portion: "3 Pieces", price: "₹870", image: "images/mutton_juicy_mandi.jpg", desc: "Tender juicy mutton paired with fragrant mandi rice." },
  { name: "Mutton Juicy Mandi", cat: "Mutton Mandi", portion: "4 Pieces", price: "₹1140", image: "images/mutton_juicy_mandi.jpg", desc: "Tender juicy mutton paired with fragrant mandi rice." },

  // Fish Fry Mandi
  { name: "Fish Fry Mandi", cat: "Fish Mandi", portion: "2 Persons", price: "₹500", image: "images/fish_fry_mandi.jpg", desc: "Crispy fish fry mandi made for sharing." },
  { name: "Fish Fry Mandi", cat: "Fish Mandi", portion: "3 Persons", price: "₹680", image: "images/fish_fry_mandi.jpg", desc: "Crispy fish fry mandi made for sharing." },
  { name: "Fish Fry Mandi", cat: "Fish Mandi", portion: "4 Persons", price: "₹900", image: "images/fish_fry_mandi.jpg", desc: "Crispy fish fry mandi made for sharing." },

  // Extras & Beverages
  { name: "Chicken Fry Extra Piece", cat: "Extras", portion: "1 Extra Piece", price: "₹160", image: "images/chicken_fry_mandi.jpg", desc: "Add an extra chicken fry piece." },
  { name: "Chicken Broasted Extra Piece", cat: "Extras", portion: "1 Extra Piece", price: "₹200", image: "images/chicken_broasted_mandi.jpg", desc: "Add an extra crispy broasted chicken piece." },
  { name: "Extra Mandi Rice", cat: "Extras", portion: "1 Serving", price: "₹140", image: "images/extra_mandi_rice.jpg", desc: "Extra serving of fragrant mandi rice." },
  { name: "Extra Mayonnaise", cat: "Extras", portion: "1 Dip", price: "₹40", image: "images/mayoness.png", desc: "Creamy mayonnaise dip." },
  { name: "Any Cool Drinks", cat: "Drinks", portion: "1 Bottle", price: "₹25", image: "images/thumsup.png", desc: "Chilled cool drinks." },
  { name: "Water Bottle", cat: "Drinks", portion: "1 Bottle", price: "₹20", image: "images/water_bottle.jpg", desc: "Packaged drinking water." },
  { name: "Chicken Shawarma SPL", cat: "Shawarma", portion: "Special", price: "₹140", image: "images/chicken_shawarma.jpg", desc: "Special chicken shawarma with extra goodness." }
];

const slider = document.getElementById("slider");
const dots = document.getElementById("dots");
const counter = document.getElementById("counter");

items.forEach((item, i) => {
  const slide = document.createElement("article");
  slide.className = "slide";

  const visualHTML = item.image
    ? `<img src="${item.image}" alt="${item.name} ${item.portion}">`
    : item.icon;

  slide.innerHTML = `
    <div class="dish-number">${String(i + 1).padStart(2, "0")}</div>
    <div class="dish-art">${visualHTML}</div>
    <div class="category">${item.cat}</div>
    <h1 class="name">${item.name}</h1>
    <p class="desc">${item.desc}</p>
    
    <div class="price-section">
      <div class="main-price-card">
        <span class="portion-label">${item.portion}</span>
        <span class="price-value">${item.price}</span>
      </div>
    </div>
  `;
  slider.appendChild(slide);

  const dot = document.createElement("span");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dots.appendChild(dot);
});

const dotEls = [...document.querySelectorAll(".dot")];
let active = 0;

function update() {
  active = Math.round(slider.scrollLeft / slider.clientWidth);
  if (active < 0) active = 0;
  if (active >= items.length) active = items.length - 1;
  dotEls.forEach((d, i) => d.classList.toggle("active", i === active));
  counter.textContent = `${String(active + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
}

slider.addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") slider.scrollBy({ left: slider.clientWidth, behavior: "smooth" });
  if (e.key === "ArrowLeft") slider.scrollBy({ left: -slider.clientWidth, behavior: "smooth" });
});


