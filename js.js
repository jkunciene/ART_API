// pasizymiu vieta, i kuria idesiu img
const place = document.getElementById('root');


// arrow funkcijos sukurimas
const getArtInfo = async () => {
    try {
        const res = await fetch("https://api.artic.edu/api/v1/artworks");
        const data = await res.json();
        console.log(data.data);
        data.data.map(item => {
            console.log(item.artist_title)
            console.log(item.title)
            console.log(`https://www.artic.edu/iiif/2/${item.image_id}/full/843\,/0/default.jpg`);

            const card = document.createElement('div')
            const artistTitle = document.createElement('h2');
            artistTitle.textContent = item.artist_title;
            card.appendChild(artistTitle);
            const artTitle = document.createElement('p');
            artTitle.textContent = item.title;
            card.appendChild(artTitle);
            const artImg = document.createElement('img');
            artImg.src = `https://www.artic.edu/iiif/2/${item.image_id}/full/843\,/0/default.jpg`;
            card.appendChild(artImg);
            place.appendChild(card);
        })

    }
    catch (error) {
        console.log(error);
    }
};
// funkcijos iskvietimas
getArtInfo();