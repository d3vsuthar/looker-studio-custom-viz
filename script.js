(function() {
  const dscc = require('@google/dscc');
  const local = require('./localMessage.js');
  const isLocal = false;

  const drawViz = (data) => {
    const galleryContainer = document.getElementById('gallery-container');
    galleryContainer.innerHTML = '';

    data.tables.DEFAULT.forEach(row => {
      const imgSrc = row['product_images'];
      const div = document.createElement('div');
      div.className = 'gallery-item';
      const img = document.createElement('img');
      img.src = imgSrc;
      div.appendChild(img);
      galleryContainer.appendChild(div);
    });
  };

  dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
})();
