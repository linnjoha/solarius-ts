var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const backArrow = `<svg id="backArrow" xmlns="http://www.w3.org/2000/svg" height="26" width="24" viewBox="0 0 448 512"><path fill="#f4f5f5" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>`;
const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="20" viewBox="0 0 80 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.0797 4.71791C41.7869 4.71791 43.2866 5.58444 44.1959 6.88428V0.866553C42.9516 0.320944 41.5475 0 40.0797 0C34.5909 0 30.1396 4.31672 30.1396 9.64441C30.1396 14.9721 34.5909 19.2888 40.0797 19.2888C41.5475 19.2888 42.9356 18.9839 44.1959 18.4222V14.8944C45.2078 17.5529 48.0278 19.4652 51.3434 19.4652C54.9787 19.4652 58.0184 17.166 58.7319 14.105V18.9358H63.2312V11.6022C63.2312 10.511 64.1087 9.64447 65.1775 9.64447C66.2625 9.64447 67.1241 10.5271 67.1241 11.6022V18.9358H71.6234V11.6022C71.6234 11.0085 71.8947 10.4629 72.3097 10.1098C72.6447 9.82097 73.0753 9.64447 73.5541 9.64447C74.6391 9.64447 75.5006 10.5271 75.5006 11.6022V18.9198H80V10.6394C80 8.61744 78.6597 6.88434 76.825 6.32269C76.3941 6.19431 75.9316 6.11406 75.4528 6.11406C73.8253 6.11406 72.4053 6.98062 71.6075 8.26441C71.5916 8.2965 71.5756 8.32459 71.5597 8.35269C71.5437 8.38075 71.5278 8.40884 71.5119 8.44091C70.7778 7.41391 69.7091 6.64362 68.4644 6.32269C68.0338 6.21034 67.5869 6.14616 67.1241 6.14616C65.5925 6.14616 64.2044 6.78806 63.2312 7.83112V6.30662H58.7319V11.3229C58.0187 8.27331 54.9834 5.98553 51.3434 5.98553C47.1791 5.98553 43.7966 9.00244 43.7966 12.7254C43.7966 12.8448 43.8 12.9634 43.8069 13.0813C42.8953 14.1085 41.5594 14.7474 40.0797 14.7474C37.3194 14.7474 35.0856 12.5008 35.0856 9.72466C35.0856 6.94847 37.3194 4.71791 40.0797 4.71791ZM1.73912 0.433203H18.3963L8.87109 14.9078H17.3752V18.9036H0L9.60503 4.33269H1.70721L1.73912 0.433203ZM22.1453 2.51934C17.981 2.51934 14.5985 5.53622 14.5985 9.25919C14.5985 12.9822 17.981 15.999 22.1453 15.999C26.3097 15.999 29.6922 12.9822 29.6922 9.25919C29.6922 5.53622 26.3256 2.51934 22.1453 2.51934ZM22.1453 12.2279C20.5179 12.2279 19.1936 10.896 19.1936 9.25919C19.1936 7.62237 20.5179 6.3065 22.1453 6.3065C23.7728 6.3065 25.0971 7.63841 25.0971 9.27522C25.0971 10.9121 23.7728 12.2279 22.1453 12.2279ZM48.3916 12.7093C48.3916 14.3462 49.7159 15.6781 51.3434 15.6781C52.9706 15.6781 54.295 14.3462 54.295 12.7093C54.295 11.0725 52.9706 9.74059 51.3434 9.74059C49.7159 9.74059 48.3916 11.0725 48.3916 12.7093Z" fill="white"/>
</svg>`;
const planetsEl = document.querySelectorAll(".planets_planet");
let solarSystem = [];
const getApiKey = () => __awaiter(this, void 0, void 0, function* () {
    let respKey = yield fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys", {
        method: "POST",
    });
    let apiKey = yield respKey.json();
    fetchSolaris(apiKey.key);
});
getApiKey();
const fetchSolaris = (key) => __awaiter(this, void 0, void 0, function* () {
    let resp = yield fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies", {
        method: "GET",
        headers: { "x-zocom": key },
    });
    const respJson = yield resp.json();
    solarSystem = respJson["bodies"];
    console.log(solarSystem);
    console.log(planetsEl);
});
//creates the overlay
const createOverlay = (planet, i, event) => {
    const currentPlanet = solarSystem[i];
    const planetStyles = window.getComputedStyle(planet);
    const planetBgColor = planetStyles.backgroundColor;
    const borderColor1 = planetBgColor
        .replace("rgb", "rgba")
        .replace(")", ", 0.1)");
    const borderColor2 = planetBgColor
        .replace("rgb", "rgba")
        .replace(")", ", 0.06)");
    const overlay = `
  <div id="planetInfoOverlay" class="planetInfo">
    <header class="header_overlay">                      
      <h1 id="primaryNamePlanetOverlay">${currentPlanet.name.toUpperCase()}</h1>
      <h2 id="latinNamePlanetOverlay">${currentPlanet.latinName.toUpperCase()}</h2>
    </header>
     <div id="bigInfoPlanet" style="background-color: ${planetBgColor}; box-shadow: 0 0 0 2.5rem ${borderColor1},
       0 0 0 5rem  ${borderColor2};" class="planets_planet bigInfoPlanet">${backArrow}
     </div>
    <section id="planetInfoSection" class="planetInfoSection">
      <p id="desc" class="planetInfoSection_info">${currentPlanet.desc}</p>
      <section id="planetInfoSection" class="planetInfo-details">
        <div class="planetInfo-details_item">
         <h3>OMKRETS</h3>
         <p>${currentPlanet.circumference}</p>
        </div>
        <div class="planetInfo-details_item">
         <h3>KM FRÅN SOLEN</h3>
         <p>${currentPlanet.distance}</p>
        </div>
        <div class="planetInfo-details_item">
         <h3>MAX TEMPERATUR</h3>
         <p>${currentPlanet.temp.day}</p>
        </div>
        <div class="planetInfo-details_item">
         <h3>MIN TEMPERATUR</h3>
         <p>${currentPlanet.temp.night}</p>
        </div>
      </section>
      <div class="moons">
       <h3 class="moonsHeader">MÅNAR</h3>
       <p class="moonsInfo">${currentPlanet.moons.join(", ")}</p>
      </div>
    </section>
    <footer>${logo}</footer>
  </div>`;
    return overlay;
};
//changes the innerHTML of our body to our "overlay"
const setOverlay = (overlay) => {
    let bodyEl = document.querySelector("body");
    bodyEl.innerHTML = overlay;
    const bigInfoPlanetEl = document.getElementById("bigInfoPlanet");
    bigInfoPlanetEl.addEventListener("click", () => {
        location.reload();
    });
};
planetsEl.forEach((planet, i) => {
    planet.addEventListener("click", (event) => {
        const overlay = createOverlay(planet, i, event);
        setOverlay(overlay);
    });
});
