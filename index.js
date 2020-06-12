document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  let canvas = document.querySelector('#canvas');
  let firstGrid = canvas.children[0];
  for (var i = 1; i < 64 * 32; i++) {
    canvas.appendChild(firstGrid.cloneNode());
  }

  let gridItems = document.querySelectorAll(".grid-item")
  let paletteColors = document.querySelectorAll(".palette-item");
  let currentColor = 'grid-item-white'

  


  for (let paletteColor of paletteColors) {
    paletteColor.addEventListener('click', function(event) {
      currentColor = event.target.classList[1];
    })
  }
  for (let gridItem of gridItems) {
    gridItem.addEventListener('click', function (event) {
      console.log(event.target.classList);
      if (event.target.classList.length > 1) {
        event.target.classList.remove(event.target.classList[1]);
      }
      event.target.classList.add(currentColor);
    })
  };
});