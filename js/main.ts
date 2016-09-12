var condition: string = ""
var city: string = ""
var region: string = ""
var country: string = ""
var temp: string = ""

function getWeather() {
    var location = $('#city').val();
    $.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + location + '%22)%20and%20u%3D%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function (data) {
        /* Check that a place was found (we'll just grab the first) */
        if (data.query.results === null) {
            alert("Location not found: " + location + "!");

        } else {
            condition = data.query.results.channel.item.condition.text
            temp = data.query.results.channel.item.condition.temp
            city = data.query.results.channel.location.city
            region = data.query.results.channel.location.region
            country = data.query.results.channel.location.country
            chooseMeal(condition)
        }
    });
}

function chooseMeal(condition: string) {
    document.getElementById("weather").innerHTML = '<a href="https://www.yahoo.com/?ilc=401" target="_blank"><h2>' + city + ', ' + region  + '<br>' + country + '</h2>' + condition + ' at ' + temp + ' degrees celsius</a>';
    switch (condition) {
        case "Sunny":
            document.getElementById("recipe").innerHTML = "<h3>BBQ Chicken Burgers</h3><a href='http://www.bbcgoodfood.com/recipes/681635/bbq-chicken-burgers' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--356452_10.jpg?itok=_NFlQAYa' class=\"center-block img-rounded img-responsive\" /></a>";
            break;
        case "Showers":
           document.getElementById("recipe").innerHTML = "<h3>Pumpkin Soup</h3><a href='http://www.bbcgoodfood.com/recipes/7730/pumpkin-soup' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--879453_11.jpg?itok=unHBDg-O' width=60% class=\"center-block img-rounded img-responsive\" /></a>";
            break;
        case "Cloudy":
            document.getElementById("recipe").innerHTML = "<h3>Margherita Pizza</h3><a href='http://www.bbcgoodfood.com/recipes/4683/pizza-margherita-in-4-easy-steps' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--51643_11.jpg?itok=I_hF8vFL' width=60%  class=\"center-block img-rounded img-responsive\" /></a>";
            break;
        case "Windy":
            document.getElementById("recipe").innerHTML = "<h3>Chicken, Sweet Potato & Coconut Curry</h3><a href='http://www.bbcgoodfood.com/recipes/1555/chicken-sweet-potato-and-coconut-curry' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1035630_11.jpg?itok=VHXc71xK' width=60%  class=\"center-block img-rounded img-responsive\" /></a>";
            break;
        case "Clear":
            document.getElementById("recipe").innerHTML = "<h3>Chicken Caesar Salad</h3><a href='http://www.bbcgoodfood.com/recipes/6296/the-ultimate-makeover-chicken-caesar-salad' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1274491_8.jpg?itok=Uuew-cMJ' width=60% class=\"center-block img-rounded img-responsive\" /></a>";
            break;
        default:
            document.getElementById("recipe").innerHTML = "<h3>Pumpkin Soup</h3><a href='http://www.bbcgoodfood.com/recipes/7730/pumpkin-soup' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--879453_11.jpg?itok=unHBDg-O' width=60% class=\"center-block img-rounded img-responsive\" /></a>";
            break;
    }
    $('.container').show();
    
}