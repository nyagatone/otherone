const data = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "株式会社アザーワン",
    "alternateName": "OTHERONE",
    "url": "http://www.otherone.co.jp/",
    "logo": "",
    "sameAs": "https://www.instagram.com/otherone_inc/"
};
const jsonld = document.createElement("script");
jsonld.type = "application/ld+json";
jsonld.text = JSON.stringify(myData);
document.querySelector("head").appendChild(jsonld);

//# sourceMappingURL=index.8df19a18.js.map
