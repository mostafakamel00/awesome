const btnToggle = document.querySelector(" .icon"),
  navBar = document.querySelector(".nav-links"),
  navli = document.querySelectorAll(".nav-links li");

btnToggle.addEventListener("click", function () {
  navBar.classList.toggle("nav-active");
  //animations for navlinks
  navli.forEach((link, i) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navfade .3s ease-in-out forwards ${i / 5 + 0.4}s`;
    }
  });
  //animations for navlinks
});
///////articles
const articles = [
  {
    img: "../images/Articles/cat-01.jpg",
    caption: "test title",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Soluta, magnam?",
    link: "Read More",
  },
  {
    img: "../images/Articles/cat-02.jpg",
    caption: "test title",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Soluta, magnam?",
    link: "Read More",
  },
  {
    img: "../images/Articles/cat-03.jpg",
    caption: "test title",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Soluta, magnam?",
    link: "Read More",
  },
  {
    img: "../images/Articles/cat-04.jpg",
    caption: "test title",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Soluta, magnam?",
    link: "Read More",
  },
  {
    img: "../images/Articles/cat-05.jpg",
    caption: "test title",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Soluta, magnam?",
    link: "Read More",
  },
  {
    img: "../images/Articles/cat-06.jpg",
    caption: "test title",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Soluta, magnam?",
    link: "Read More",
  },
  {
    img: "../images/Articles/cat-07.jpg",
    caption: "test title",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Soluta, magnam?",
    link: "Read More",
  },
  {
    img: "../images/Articles/cat-08.jpg",
    caption: "test title",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Soluta, magnam?",
    link: "Read More",
  },
];
const parentBoxs = document.querySelector(".parent-boxs");
window.addEventListener("DOMContentLoaded", () => {
  let displayMenu = articles.map((item) => {
    return `<div class="box">
    <img src="${item.img}" alt="" />
    <div class="content">
      <h3>${item.caption}</h3>
      <p>
        ${item.desc}
      </p>
    </div>
    <hr />
    <div class="info">
      <a href="">${item.link}</a>
      <i class="fas fa-long-arrow-alt-right"></i>
    </div>
  </div>`;
  });
  // console.log(displayMenu);
  displayMenu = displayMenu.join("");
  parentBoxs.innerHTML = displayMenu;
});

/////Start Scroll to top
let show = document.querySelector(".to-up");
window.addEventListener("scroll", function () {
  const scrollHei = window.pageYOffset;
  if (scrollHei > 2000) {
    show.classList.add("show");
  } else {
    show.classList.remove("show");
  }
});
show.onclick = () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
/////End Scroll to top

///Start Counter By JS

const countDown = () => {
  const countDate = new Date("jan 25, 2022 13:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  //my Time
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  ///my Text
  const textDay = Math.floor(gap / day),
    textHour = Math.floor((gap % day) / hour),
    textMinute = Math.floor((gap % hour) / minute),
    textSecond = Math.floor((gap % minute) / second);
  document.querySelector(".unite .day").innerHTML = textDay;
  document.querySelector(".unite .hours").innerHTML = textHour;
  document.querySelector(".unite .minutes").innerHTML = textMinute;
  document.querySelector(".unite .seconds").innerHTML = textSecond;
};
setInterval(countDown, 1000);

///////Start Counter

const number = document.querySelectorAll(".stat .parent-stat .number");
const section = document.querySelector(".stat");
let started = false;

window.onscroll = function () {
  // console.log(scrollY);
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      number.forEach((num) => {
        startCount(num);
      });
    }
    started = true;
  }
};

function startCount(el) {
  let count = el.dataset.count;
  let interval = setInterval(() => {
    el.textContent++;
    if (el.textContent == count) {
      clearInterval(interval);
    }
  }, 2000 / count);
}
const date = document.getElementById("date");
date.textContent = new Date().getFullYear();
///////////////////////////fixed navbar
const nav = document.getElementById("nav");
const navLink = document.querySelectorAll("#nav .content-nav .nav-links li a");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 400) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
});
