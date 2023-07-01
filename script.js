//your JS code here. If required.
const sizeInfoDiv = document.getElementById('sizeInfo');
    const h1Element = sizeInfoDiv.querySelector('h1');

    function updateSizeInfo() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      h1Element.textContent = `Width: ${width} Height: ${height}`;
    }

    updateSizeInfo(); // initialize the size info on page load
    window.addEventListener('resize', updateSizeInfo);
