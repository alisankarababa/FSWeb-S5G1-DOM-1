const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

// header

let navAnchors = document.querySelectorAll("header nav a");

const navContentsToBeWritten = Object.values(siteContent.nav);

for (let i = 0; i < navAnchors.length; i++) {
  navAnchors[i].textContent = navContentsToBeWritten[i] || "error";
  navAnchors[i].classList.add("italic");
}

document
  .querySelector("header img")
  .setAttribute("src", siteContent.images["logo-img"]);

// section cta
const ctaText = document.querySelector(".cta-text");

ctaText.querySelector("h1").textContent = siteContent.cta.h1;
ctaText.querySelector("button").textContent = siteContent.cta.button;
document
  .querySelector("#cta-img")
  .setAttribute("src", siteContent.images["cta-img"]);

// section main-content

document
  .querySelector("#middle-img")
  .setAttribute("src", siteContent.images["accent-img"]);

const arrTextContent = Object.values(
  document.querySelectorAll(".text-content")
);

const arrSiteMainContent = Object.values(siteContent["ana-içerik"]);

arrTextContent.forEach((element, i) => {
  element.querySelector("h4").textContent = arrSiteMainContent[`${2 * i}`];

  element.querySelector("p").textContent = arrSiteMainContent[`${2 * i + 1}`];
});

// section contact

const secContact = document.querySelector(".contact");

secContact.querySelector("h4").textContent =
  siteContent.iletisim["iletişim-h4"];

const secContactParagraphs = secContact.querySelectorAll("p");

const arrSiteContactVals = Object.values(siteContent.iletisim);
secContactParagraphs.forEach((element, i) => {
  element.textContent = arrSiteContactVals[`${i + 1}`];
});

// footer
const footerAnchor = document.querySelector("footer a");

footerAnchor.textContent = siteContent.footer.copyright;
footerAnchor.classList.add("bold");
