fetch('https://tarkov-tools.com/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({query: `{
    itemsByType(type: ammo) {
        id
        name
        shortName
        gridImageLink
        basePrice
        lastLowPrice
    }
}`})
})
    .then(r => r.json())
    .then(data =>
        data.data.itemsByType.forEach(function (ammo){
            // console.log("Name: " + ammo.name)
            // console.log("Grid Image: " + ammo.gridImageLink)
            // console.log(ammo);

            $("#ammo-cards").append('<article class="card col-2 bg-light m-3">' + '<div>' +
                '<div class="card-header">' + ammo.name + '</div>' +
                '<div class="card-body">' +
                '<p class="card-text">' + '<img src="' + ammo.gridImageLink + '"/>' + '</p>' +
                '<p class="card-text">' + "Base Price: " + ammo.basePrice + " Roubles" + '</p>' +
                '<p class="card-text">' + "Last Low Price: " + ammo.lastLowPrice + " Roubles" + '</p>' +
                '</div>' +
                '</div>' + '</article>');
        })
    );

fetch('https://tarkov-tools.com/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({query: `{
    itemsByName(name: "BP gzh") {
        id
        name
        shortName
        recoilModifier
        accuracyModifier
        ergonomicsModifier
        link
    }
}`})
})
    .then(r => r.json())
    .then(data => console.log(data))