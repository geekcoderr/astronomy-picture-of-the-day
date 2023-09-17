const apiKey = '1igdtXa6axK7Iymht3bsCFsBo7eKeQOJxHIQrTmC';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        var img = document.querySelector('.image-display');
        img.setAttribute('src', data['hdurl']);
        var txtexp=document.querySelector('.text-title');
        txtexp.textContent=" Title is \""+data['title']+"\"";
    })
    .catch((error) => {
        console.error('NASA API is unable to process request at the moment!', error)
    });

