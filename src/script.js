// Assuming you have arrays of image URLs and descriptions
const imageUrls = [
  'portfolio/image1.jpg',
  'portfolio/image2.jpg',
  'portfolio/image3.jpg',
  'portfolio/image4.jpg',
  'portfolio/image5.jpg',
  'portfolio/image6.jpg',
  // ...more image URLs
];

const imageDescriptions = [
  'Elementary Graduate',
  'Junior HighSchool Diploma',
  'Senior HighSchool Diploma',
  'Handshake with PAPA',
  'Hug Mama',
  'Faculty:Christine Gonzales',
  // ...more descriptions
];

const portfolioSection = document.querySelector('.portfolio-gallery');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const imagesPerPage = 6;
let currentIndex = 0;

// ... Existing code

// Function to create image cards with descriptions
function createImageCard(imageUrl, description) {
  const card = document.createElement('div');
  card.classList.add('col-md-4', 'mb-4');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('portfolio-image');

  const image = document.createElement('img');
  image.src = imageUrl;
  image.alt = 'Portfolio Image';

  const hoverText = document.createElement('div');
  hoverText.classList.add('hover-text');
  hoverText.innerText = description;

  imageContainer.appendChild(image);
  imageContainer.appendChild(hoverText);

  card.appendChild(imageContainer);
  return card;
}

// Function to display images
function displayImages(startIndex, endIndex) {
  for (let i = startIndex; i < endIndex; i++) {
      if (i >= imageUrls.length) {
          loadMoreBtn.style.display = 'none';
          break;
      }
      const imageUrl = imageUrls[i];
      const description = imageDescriptions[i]; // Get the corresponding description
      const imageCard = createImageCard(imageUrl, description);
      portfolioSection.appendChild(imageCard);
  }
}

// Event listener for Load More button
loadMoreBtn.addEventListener('click', () => {
  const nextIndex = currentIndex + imagesPerPage;
  displayImages(currentIndex, nextIndex);
  currentIndex = nextIndex;

  if (currentIndex >= imageUrls.length) {
      loadMoreBtn.style.display = 'none';
  }
});

// Initial display of images
displayImages(0, imagesPerPage);
currentIndex = imagesPerPage;


var modeToggle = document.getElementById("mode");
var body = document.body;

modeToggle.onclick = function() {
    body.classList.toggle("dark-mode");
};


// typing text hero
const typed = new Typed(".typing-text", {
  strings: ["an I.T Student", "a Beginner in Programming"],
  loop: true,
  typeSpeed: 55,
  backSpeed: 25,
  backDelay: 500,
});
const sides = document.querySelectorAll(".side");
let currentSide = 0;

function rotateRectangle() {
    sides[currentSide].style.transform = "rotateY(90deg)";
    currentSide = (currentSide + 1) % sides.length;
    sides[currentSide].style.transform = "rotateY(0deg)";
}

setInterval(rotateRectangle, 2000);


// auto hide navbar click
$(".click-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});

// automatic transparent navbar
const navBar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 1) {
    navBar.classList.replace("bg-transparent", "navbar-color");
  } else if (this.window.scrollY <= 0) {
    navBar.classList.replace("navbar-color", "bg-transparent");
  }
});

// fetchData API
async function fetchData(type = "certification") {
  let response;
  type === "certification"
    ? (response = await fetch("certification/certification.json"))
    : (response = await fetch("project/project.json"));
  const data = await response.json();
  return data;
}

function showProject(project) {
  let projectContainer = document.querySelector(".project .content");
  let projectHTML = "";
  project.slice(0, 90).forEach((project) => {
    projectHTML += `
        <div class="cards" >
    <img draggable="false" src="${project.image}" alt=""/>
    <div class="desc-content d-flex flex-column text-justify">
        <div class="tag">
            <h3>${project.title}</h3>
            <h5>${project.tech}</h5>
        </div>
        <div class="desc">
            <p>
            ${project.desc}
            </p>
            <div class="btns">
                <a
                    href="${project.links.demo}"
                    class="btn"
                    target="_blank">
                    <i class="fas fa-eye"></i>
                    Demo
                </a>
                <a
                    href="${project.links.code}"
                    class="btn"
                    target="_blank">
                    <i class="fas fa-code"></i>
                    Code
                </a>
            </div>
        </div>
    </div>
</div>`;
  });
  projectContainer.innerHTML = projectHTML;
}
fetchData("project").then((data) => {
  showProject(data);
});


// animate on scroll (AOS)
AOS.init();


// Scrollspy botstrap
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: ".navbar",
});

// scroll reveal animation content
const srtop = ScrollReveal({
  origin: "top",
  distance: "90px",
  duration: 1000,
  reset: true,
});

srtop.reveal(".home .content .intro h3", { delay: 300 });
srtop.reveal(".home .content .intro p", { delay: 300 });
srtop.reveal(".home .content .intro a", { delay: 400 });

srtop.reveal(".home .image", { delay: 600 });
srtop.reveal(".home .linkedin", { interval: 600 });
srtop.reveal(".home .github", { interval: 600 });
srtop.reveal(".home .instagram", { interval: 600 });

srtop.reveal(".about .cv-btn", { delay: 200 });
