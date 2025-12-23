function scrollSlider(dir){
  document.querySelector('.slider')
    .scrollBy({ left: dir * 350, behavior:'smooth' });
}

const places = {
  Delhi:{
    imgs:[
      "Images/delhi 1.jpg",
      "Images/delhi 2.jpg",
      "Images/delhi 3.jpg",
      "Images/delhi 4.avif",
      "Images/delhi 5.jpeg"
    ],
    info:"Delhi blends ancient history with modern life.",
    meta:["Best Time: Oct–Mar","Duration: 2–3 Days","Location: Delhi"]
  },
  Udaipur:{
    imgs:[
      "Images/udaipur 1.avif",
      "Images/udaipur 2.jpg",
      "Images/udaipur 3.avif",
      "Images/udaipur 4.avif",
      "Images/udaipur 5.avif"
    ],
    info:"Udaipur is famous for lakes and palaces.",
    meta:["Best Time: Sep–Mar","Duration: 2 Days","Location: Rajasthan"]
  },
  Varanasi:{
    imgs:[
      "Images/varanasi 1.jpg",
      "Images/varanasi 2.webp",
      "Images/varanasi 3.jpeg",
      "Images/varanasi 4.jpg"
    ],
    info:"One of the world's oldest cities.",
    meta:["Best Time: Nov–Feb","Duration: 2 Days","Location: UP"]
  },
  Bhubaneswar:{
    imgs:[
      "Images/bhubaneswar 1.jpg",
      "Images/bhubaneswar 2.jpg",
      "Images/bhubaneswar 3.jpg",
      "Images/bhubaneswar 4.jpg",
      "Images/bhubaneswar 5.jpg",
      "Images/bhubaneswar 6.jpg"
    ],
    info:"Temple city of India.",
    meta:["Best Time: Oct–Mar","Duration: 2 Days","Location: Odisha"]
  },
  Goa:{
    imgs:[
      "Images/goa 1.webp",
      "Images/goa 2.jpg",
      "Images/goa 3.jpg",
      "Images/goa 4.jpg",
      "Images/goa 5.jpg"
    ],
    info:"India's beach capital.",
    meta:["Best Time: Nov–Feb","Duration: 3 Days","Location: Goa"]
  },
  Mumbai:{
    imgs:[
      "Images/mumbai 1.jpg",
      "Images/mumbai 2.jpg",
      "Images/mumbai 3.jpg",
      "Images/mumbai 4.jpg",
      "Images/mumbai 5.jpg",
      "Images/mumbai 6.jpg"
    ],
    info:"The city that never sleeps.",
    meta:["Best Time: Oct–Feb","Duration: 2 Days","Location: Maharashtra"]
  },
  Gangtok:{
    imgs:[
      "Images/gangtok 1.jpg",
      "Images/gangtok 2.jpg",
      "Images/gangtok 3.jpg",
      "Images/gangtok 4.jpg",
      "Images/gangtok 5.jpg"
    ],
    info:"Gateway to Sikkim.",
    meta:["Best Time: Mar–Jun","Duration: 3 Days","Location: Sikkim"]
  },
  Darjeeling:{
    imgs:[
      "Images/darjeeling 1.webp",
      "Images/darjeeling 2.webp",
      "Images/darjeeling 3.webp",
      "Images/darjeeling 4.webp",
      "Images/darjeeling 5.webp"
    ],
    info:"Famous for tea gardens.",
    meta:["Best Time: Apr–Jun","Duration: 2 Days","Location: WB"]
  },
  Srinagar:{
    imgs:[
      "Images/srinagar 1.jpeg",
      "Images/srinagar 2.jpg",
      "Images/srinagar 3.jpg",
      "Images/srinagar 4.jpg",
      "Images/srinagar 5.jpg",
      "Images/srinagar 6.jpg"
    ],
    info:"Heaven on earth.",
    meta:["Best Time: Apr–Oct","Duration: 3 Days","Location: J&K"]
  }
};

let currentPlace, currentIndex = 0;

function openModal(place){
  currentPlace = place;
  currentIndex = 0;
  document.getElementById("placeTitle").innerText = place;
  document.getElementById("modal").style.display = "block";
  updateModal();
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

function updateModal(){
  document.getElementById("carouselImg").src =
    places[currentPlace].imgs[currentIndex];

  document.getElementById("placeInfo").innerText =
    places[currentPlace].info;

  const grid = document.getElementById("infoGrid");
  grid.innerHTML = "";
  places[currentPlace].meta.forEach(m =>
    grid.innerHTML += `<div class="info-item">${m}</div>`
  );
}

function nextImg(){
  currentIndex = (currentIndex + 1) % places[currentPlace].imgs.length;
  updateModal();
}

function prevImg(){
  currentIndex =
    (currentIndex - 1 + places[currentPlace].imgs.length) %
    places[currentPlace].imgs.length;
  updateModal();
}