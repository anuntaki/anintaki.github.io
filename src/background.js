const bgImgSrc = ["01.jpg", "02.jpg", "03.jpg"];
const bgImg = document.createElement("img"); //create element, img

const setImg = bgImgSrc[Math.floor(Math.random() * bgImgSrc.length)];
bgImg.src = `src/${setImg}`; // 파일의 path를 담는다.
// bgImg는 상대위치, bgImg.src는 http로 만든다.

// document.body.appendChild(bgImg); // 부분 이미지로
document.body.style.backgroundImage = `url(${bgImg.src})`; //전체 배경 이미지로.
