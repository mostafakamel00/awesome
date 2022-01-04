let en = document.getElementById("en");
let ar = document.getElementById("ar");
let landing_h2 = document.getElementById("title");
let landing_p = document.getElementById("par");
let articles_h2 = document.getElementById("article");
let gallery_h2 = document.querySelector(".gallery-lang");
let features_h2 = document.querySelector(".features-lang");
let time = document.getElementById("time");
let passion = document.getElementById("passion");
let quality = document.getElementById("quality");
let testimonial_h2 = document.querySelector(".testimonial-lang");
let team_h2 = document.querySelector(".team-lang");
let service_h2 = document.querySelector(".service-lang");
let skills_h2 = document.querySelector(".skill-lang");
let work_h2 = document.querySelector(".work-lang");
let event_h2 = document.querySelector(".event-lang");
let price_h2 = document.querySelector(".price-lang");
let video_h2 = document.querySelector(".video-lang");
let stat_h2 = document.querySelector(".stat-lang");
let discount_h2 = document.querySelector(".discount-lang");
let discount_form = document.getElementById("discount-form");

ar.onclick = () => {
  setLang("ar");
};
en.onclick = () => {
  setLang("en");
};

function setLang(getLang) {
  if (getLang == "ar") {
    landing_h2.textContent = "مرحبا بكم";
    landing_p.textContent = "موقع بيسط وسهل الانشاء , اتمني ان ينال الاعجاب";
    articles_h2.textContent = "المقالات";
    gallery_h2.textContent = "المعرض";
    features_h2.textContent = "المميزات";
    time.textContent = "الوقت";
    passion.textContent = "الشغف";
    quality.textContent = "الجوده";
    testimonial_h2.textContent = "اراء العملاء";
    team_h2.textContent = "اعضاء الفريق";
    service_h2.textContent = "الخدمات";
    skills_h2.textContent = "المهارات";
    work_h2.textContent = "الاعمال";
    event_h2.textContent = "الحدث الاخير";
    price_h2.textContent = "خطط الاسعار";
    video_h2.textContent = "اهم مقاطع الفيديو";
    stat_h2.textContent = "احصائياتنا";
    discount_h2.textContent = "لدينا خصومات";
    discount_form.textContent = "طلب خصم";
  } else if (getLang == "en") {
    landing_h2.textContent = "Welcome, To landing page";
    landing_p.textContent =
      "Here Iam gonna share everything about my life. Books Iam reading,Games Iam Playing, Stories and Events";
    articles_h2.textContent = "Articles";
    gallery_h2.textContent = "Gallery";
    features_h2.textContent = "Features";
    time.textContent = "time";
    passion.textContent = "passion";
    quality.textContent = "quality";
    testimonial_h2.textContent = "Testimonials";
    team_h2.textContent = "Team member";
    service_h2.textContent = "Services";
    skills_h2.textContent = "Our Skills";
    work_h2.textContent = "Our Work";
    event_h2.textContent = "Latest Event";
    price_h2.textContent = "PRICING PLANS";
    video_h2.textContent = "TOP VIDEOS";
    stat_h2.textContent = "Our Stats";
    discount_h2.textContent = "We Have A Discounts";
    discount_form.textContent = "Request A Discount";
  }
}
