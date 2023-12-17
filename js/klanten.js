const klantenlist = document.querySelector('.klantenlist');

fetch('https://randomuser.me/api/?results=5')
.then(response => response.json())
.then(data => {
    let klanten = data.results;
    
    klanten.forEach(klant => {
        const klantItem = `
        <div class="klant">
            <img src="${klant.picture.large}" alt="Foto van ${klant.name.first} ${klant.name.last}">
            <div class="klantinfo">
                <h3>${klant.name.first} ${klant.name.last}</h3>
                <p>${klant.email}</p>
                <p>Woont in: ${klant.location.city}</p>
            </div>
            </div>
            `;
            klantenlist.innerHTML += klantItem;
    });
}).catch(() => {
    console.log('Iets ging mis bij het laden van de klanten');
});