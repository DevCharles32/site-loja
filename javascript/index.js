const banners = [
    "https://s2.static.brasilescola.uol.com.br/be/conteudo/images/planeta-terra.jpg",
     "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/8708/live/4f207470-df78-11ed-8df1-d74cbf1089d7.jpg.webp",
      "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/06/Terra.jpg?w=1200&h=675&crop=1"];
let currentBannerIndex = 0;

function showBanner(index) {
  const bannerElement = document.getElementById("banner");
  bannerElement.src = banners[index];
}

function nextBanner() {
  currentBannerIndex = (currentBannerIndex + 1) % banners.length;
  showBanner(currentBannerIndex);
}


function previousBanner() {
  currentBannerIndex = (currentBannerIndex - 1 + banners.length) % banners.length;
  showBanner(currentBannerIndex);
}


showBanner(currentBannerIndex);

setInterval(nextBanner, 3000);
