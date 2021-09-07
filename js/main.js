var data = {
  developerWorks: [
    {
      title: "Invo Mak",
      scr: "./assets/invomak.webp",
      desc: "This React Project done for an advertising company to make and track invoices. User can track all invoice details and can make a new invoice with just adding only basic details After adding invoice details user can download the copy of invoice directly from the web. This so fast making invoices and tracking invoice data.Project have limited login access so only allowed user can login to this web app.",
      softwares: "React js [react-pdf-renderer] - Tailwind css - Firebase",
      refLink: "",
    },
    {
      title: "Teacher's Assist",
      scr: "./assets/teachers-assist.webp",
      desc: "This is a web application to assist teachers to add students details and examination results also teachers can use this for adding their daily attendence. This only access for pre added members (admin can add or delete teachers account) teachers only allowed to change the students marks and performance.",
      softwares: "Node js - Express - MongoDB - Handlebar",
      refLink: "",
    },
    {
      title: "Airbnb Clone",
      scr: "./assets/airbnb clone.webp",
      desc: "This is simple airbnb frontend clone with using some api to add random datas. project completely build using reactjs so this very fast and no reloading user can easily switch between tabs. also added a mapbox map to track hotel locations.",
      softwares: "Reacj js - Next js - Mapbox - Tailwind css - Versal",
      refLink: "",
    },
    {
      title: "easy bank",
      scr: "./assets/easybank.webp",
      desc: "This project done as part of frontend developer challange, so this only a simple website to showcase details. this projected styled using scss its very comfortable to use, this done for improve my frontend developing skills.",
      softwares: "Html5 - scss - js",
      refLink: "",
    },
  ],

  designWorks: [
    {
      title: "Campus News - Logo Design",
      scr: "./assets/nasracampus.webp",
      desc: "Logo and logo intro animation done for nasra campus news. this is minimal and simple logo.",
      softwares: "Adobe Illustrator",
      refLink: "",
    },
    {
      title: "Socio Sapiens - Logo Design",
      scr: "./assets/homosapiens.webp",
      desc: "this is the logo of socio sapiens the youtube channel. completely minimalastic and modern looking logo. socio sapien is a history related youtube channel so we added a map inside the logo and also included the two s from the name socio sapien.",
      softwares: "Adobe Illustrator",
      refLink: "",
    },
    {
      title: "Banner Design",
      scr: "./assets/ilahiya-banner-design.webp",
      desc: "This are the banners designed for ilahiya college admission related. simple vector files so that doesn't have any quality issues.",
      softwares: "Adobe Illustrator",
      refLink: "",
    },
    {
      title: "Barabian - Video Edit",
      scr: "./assets/barbaarian thumbnail.webp",
      desc: "This is a rap video. we done all the video parts include the thumbnail also its english and malayalam mix rap song. completely using created using the premiere pro.",
      softwares: "Adobe Premiere Pro",
      refLink: "",
    },
    {
      title: "Vibe - Short Film",
      scr: "./assets/VIBE-FINAL-2.webp",
      desc: "this is my first shortfilm. this is done for a college competiton (theme: drug usages) . my college friends helped me to complege these all the video and Editing done by me. and it have a lot of beginner issues.",
      softwares: "Adobe Premiere Pro",
      refLink: "",
    },
    {
      title: "Thanslees - Logo Design",
      scr: "./assets/thaslees.webp",
      desc: "this is the logo of Thaslees fish exoprts. completely minimalastic and modern looking logo and tail of fish and exporting thing in that logo and its easy to identify company purpouse from the logo.",
      softwares: "Adobe Illustrator",
      refLink: "",
    },
  ],
};

let white = "pattern-white";
let dark = "pattern-dark";
let pattern = document.querySelector(".pattern");
let loading = document.querySelector("#loading");

window.addEventListener("load", () => {
  loading.classList.add("loader-fade-out");
  loading.classList.remove("loader");
  loading.classList.add("loaded");
  displayProj(0);
});

window.addEventListener("scroll", () => {
  var scrollpos = window.scrollY;
  if (scrollpos > 350) {
    pattern.classList.remove(white);
    pattern.classList.add(dark);
  } else {
    pattern.classList.add(white);
    pattern.classList.remove(dark);
  }
});

AOS.init({
  delay: 250,
});

// new Glide(".glide").mount();
// new Glide(".glide2").mount();

// gliding make
let projectof = data.developerWorks;

function changeTo(item) {
  let activeEle = document.querySelector(".project__container-select-active");
  activeEle && activeEle.classList.remove("project__container-select-active");
  item.classList = "project__container-select-active";
  if (item.id === "dev") {
    projectof = data.developerWorks;
    displayProj(slide);
  } else {
    projectof = data.designWorks;
    displayProj(slide);
  }
}

let rightArrow = document.querySelector("#rightarrow");
let leftArrow = document.querySelector("#leftarrow");
let slide = 0;

let image = document.querySelector(".image-src");
let projHeading = document.querySelector(".proj-heading");
let projSoft = document.querySelector(".proj-soft");
let projDesc = document.querySelector(".proj-desc");
let projLink = document.querySelector(".proj-link");

rightArrow.addEventListener("click", () => {
  if (slide > projectof.length - 2) {
    slide = 0;
  } else {
    slide++;
  }
  displayProj(slide);
});

leftArrow.addEventListener("click", () => {
  if (slide < 1) {
    slide = projectof.length - 1;
  } else {
    slide--;
  }
  displayProj(slide);
});

function displayProj(order) {
  projSoft.innerHTML = projectof[order].softwares;
  image.src = projectof[order].scr;
  projHeading.innerHTML = projectof[order].title;
  projDesc.innerHTML = projectof[order].desc;
  projLink.href = projectof[order].refLink;
}
