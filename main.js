function generateFlyer() {
    const imageUpload = document.getElementById('imageUpload');
    const textInput = document.getElementById('textInput').value;

    if (imageUpload.files.length === 0 || textInput.trim() === '') {
        alert('Por favor, selecciona una imagen y escribe algo de texto.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const imageUrl = event.target.result;
        const flyerHtml = `
            <img src="${imageUrl}" alt="Flyer Image">
            <div>${textInput}</div>
        `;
        document.getElementById('flyerContainer').innerHTML = flyerHtml;
    };

    reader.readAsDataURL(imageUpload.files[0]);
}
