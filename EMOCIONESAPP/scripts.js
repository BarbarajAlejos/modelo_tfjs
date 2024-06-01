function loadImage() {
    const url = document.getElementById('imageURL').value;
    const imageContainer = document.getElementById('imageContainer');

    // Clear previous image
    imageContainer.innerHTML = '';

    // Create new image element
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Cargado desde URL';

    // Append the image to the container
    imageContainer.appendChild(img);
}
