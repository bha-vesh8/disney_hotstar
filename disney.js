let movies = [
  // {
  //   name: "Radha Krishna",
  //   des: "The series is based on the life of Hindu deities Radha and Krishna.",
  //   image: "images/baaghi.webp"
  // },
  {
    name: "Loki",
    des:
      "  Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers: Endgame.",
    image: "images/loki.webp"
  },
  {
    name: "Baaghi 2",
    des:
      " When Neha's three-year-old daughter, Rhea, is kidnapped, she calls Ronny, her former boyfriend who is now an Indian army soldier. He remembers the promise he made to her and agrees to save Rhea.",
    image: "images/baaghi.webp"
  },
  {
    name: "Loki",
    des:
      "  Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers: Endgame.",
    image: "images/loki.webp"
  },
  {
    name: "Baaghi 2",
    des:
      " When Neha's three-year-old daughter, Rhea, is kidnapped, she calls Ronny, her former boyfriend who is now an Indian army soldier. He remembers the promise he made to her and agrees to save Rhea.",
    image: "images/baaghi.webp"
  }
];
const caraousel = document.querySelector(".caraousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //create dom elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all the elemnts
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  caraousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elements classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginleft = `calc(-${100 * (sliders.length - 2)}% -${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 6; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//video card

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.pause();
  });
});
//card slider
