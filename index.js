document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  let canvas = document.querySelector('#canvas');
  let firstGrid = canvas.children[0];
  for (var i = 1; i < 64 * 32; i++) {
    canvas.appendChild(firstGrid.cloneNode());
  }

  let gridItems = document.querySelectorAll(".grid-item")
  let currentColor = 'grid-item-white';
  let selectedColorBox = document.querySelector("#current-color");
  let palette = document.querySelector('#palette');
  let colors = ['black', 'silver', 'gray', 'white', 'fuchsia', 'purple', 'maroon', 'red', 'brown', 'orange', 'yellow', 'olive', 'lime', 'green', 'teal', 'aqua', 'blue', 'navy' ]

  for (let color of colors) {
    let newPaletteItem = document.createElement('div')
    let newClass = `grid-item-${color}`
    newPaletteItem.classList.add('palette-item')
    newPaletteItem.classList.add(newClass);
    palette.appendChild(newPaletteItem);
  }
  let paletteColors = document.querySelectorAll(".palette-item");
  for (let paletteColor of paletteColors) {
    paletteColor.addEventListener('click', function(event) {
      for (let color of paletteColors) {
        if (color.classList.length === 3) {
          color.classList.remove(color.classList[2]);
        }
      }
      currentColor = event.target.classList[1];
      selectedColorBox.classList.remove(selectedColorBox.classList[1]);
      selectedColorBox.classList.add(currentColor);
      event.target.classList.add('selected-palette');
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