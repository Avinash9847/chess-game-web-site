let rotated = 0;

function rotateBoard() {
  let chessboard = document.querySelectorAll('.chessboard')[0];
  let boxes = document.querySelectorAll('.box');
  let letters = document.querySelectorAll('.a,.b,.c,.d,.e,.f,.g,.h');
  let numbers = document.querySelectorAll('.level1,.level2,.level3,.level4,.level5,.level6,.level7,.level8,.level0');
  let deg = rotated ? 0 : 180;
  
  rotated = rotated ? 0 : 1;

  chessboard.style.transform = `rotate(${deg}deg)`;
  boxes.forEach((box) => {
    box.style.transform = `rotate(${deg}deg)`;
  });
  numbers.forEach((index) => {
    index.style.transform = `rotate(${deg}deg)`;
  });
  letters.forEach((index) => {
    index.style.transform = `rotate(${deg}deg)`;
  });
}