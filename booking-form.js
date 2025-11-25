(function () {
  console.log('tl-custom.js LOADED INSIDE IFRAME');

  var style = document.createElement('style');
  style.textContent = `
    .tl-container {
      background-color: #f5f5dc !important; /* тут нужный цвет */
    }
  `;
  document.head.appendChild(style);
})();
