const mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(mymap);

var marker = L.marker([51.5, -0.09])
    .addTo(mymap)
    .bindPopup('A pretty CSS3 popup')
    .openPopup();
