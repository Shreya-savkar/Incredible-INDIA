function scrollSlider(dir){
  document.querySelector('.slider')
    .scrollBy({ left: dir * 350, behavior:'smooth' });
}

const places = {
  Delhi:{
    imgs:[
      "images/delhi1.jpg",
      "images/delhi2.jpg",
      "images/delhi3.jpg",
      "images/delhi4.avif",
      "images/delhi5.jpeg"
    ],
    info:"Delhi blends ancient history with modern life.",
    meta:["Best Time: Oct–Mar","Duration: 2–3 Days","Location: Delhi"]
  },
  Udaipur:{
    imgs:[
      "images/udaipur1.avif",
      "images/udaipur2.jpg",
      "images/udaipur3.avif",
      "images/udaipur4.avif",
      "images/udaipur5.avif"
    ],
    info:"Udaipur is famous for lakes and palaces.",
    meta:["Best Time: Sep–Mar","Duration: 2 Days","Location: Rajasthan"]
  },
  Varanasi:{
    imgs:[
      "images/varanasi1.jpg",
      "images/varanasi2.webp",
      "images/varanasi3.jpeg",
      "images/varanasi4.jpg"
    ],
    info:"One of the world's oldest cities.",
    meta:["Best Time: Nov–Feb","Duration: 2 Days","Location: UP"]
  },
  Bhubaneswar:{
    imgs:[
      "images/bhubaneswar1.jpg",
      "images/bhubaneswar2.jpg",
      "images/bhubaneswar3.jpg",
      "images/bhubaneswar4.jpg",
      "images/bhubaneswar5.jpg",
      "images/bhubaneswar6.jpg"
    ],
    info:"Temple city of India.",
    meta:["Best Time: Oct–Mar","Duration: 2 Days","Location: Odisha"]
  },
  Goa:{
    imgs:[
      "images/goa1.webp",
      "images/goa2.jpg",
      "images/goa3.jpg",
      "images/goa4.jpg",
      "images/goa5.jpg"
    ],
    info:"India's beach capital.",
    meta:["Best Time: Nov–Feb","Duration: 3 Days","Location: Goa"]
  },
  Mumbai:{
    imgs:[
      "images/mumbai1.jpg",
      "images/mumbai2.jpg",
      "images/mumbai3.jpg",
      "images/mumbai4.jpg",
      "images/mumbai5.jpg",
      "images/mumbai6.jpg"
    ],
    info:"The city that never sleeps.",
    meta:["Best Time: Oct–Feb","Duration: 2 Days","Location: Maharashtra"]
  },
  Gangtok:{
    imgs:[
      "images/gangtok1.jpg",
      "images/gangtok2.jpg",
      "images/gangtok3.jpg",
      "images/gangtok4.jpg",
      "images/gangtok5.jpg"
    ],
    info:"Gateway to Sikkim.",
    meta:["Best Time: Mar–Jun","Duration: 3 Days","Location: Sikkim"]
  },
  Darjeeling:{
    imgs:[
      "images/darjeeling1.webp",
      "images/darjeeling2.webp",
      "images/darjeeling3.webp",
      "images/darjeeling4.webp",
      "images/darjeeling5.webp"
    ],
    info:"Famous for tea gardens.",
    meta:["Best Time: Apr–Jun","Duration: 2 Days","Location: WB"]
  },
  Srinagar:{
    imgs:[
      "images/srinagar1.jpeg",
      "images/srinagar2.jpg",
      "images/srinagar3.jpg",
      "images/srinagar4.jpg",
      "images/srinagar5.jpg",
      "images/srinagar6.jpg"
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