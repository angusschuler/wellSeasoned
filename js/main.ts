var condition: string = "";
var city: string = "";
var region: string = "";
var country: string = "";
var temp: string = "";

var cold: Array<string> = ["<h3>Beef & Vegetable Casserole</h3><a href='http://www.bbcgoodfood.com/recipes/1940689/beef-and-vegetable-casserole-' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--890477_11.jpg?itok=aYnDFCNC' class=\"center-block img-rounded img-responsive\" /></a>", "<h3>Italian-style Beef Stew</h3><a href='http://www.bbcgoodfood.com/recipes/2209/italianstyle-beef-stew' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1259467_8.jpg?itok=PV_cMfQ7' class=\"center-block img-rounded img-responsive\" /></a>", "<h3>Spicy Root & Lentil Casserole</h3><a href='http://www.bbcgoodfood.com/recipes/1364/spicy-root-and-lentil-casserole' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--488691_11.jpg?itok=ExaTspz1' class=\"center-block img-rounded img-responsive\" /></a>", "<h3>Sausage & Bean Casserole</h3><a href='http://www.bbcgoodfood.com/recipes/1940681/sausage-and-bean-casserole-' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--901576_11.jpg?itok=tApY0_p0' class=\"center-block img-rounded img-responsive\" /></a>"];

var clear: Array<string> = ["<h3>Chicken Caesar Salad</h3><a href='http://www.bbcgoodfood.com/recipes/6296/the-ultimate-makeover-chicken-caesar-salad' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1274491_8.jpg?itok=Uuew-cMJ' width=60% class=\"center-block img-rounded img-responsive\" /></a>", "<h3>Greek Salad</h3><a href='http://www.bbcgoodfood.com/recipes/12227/greek-salad' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1201727_11.jpg?itok=Eafj5KWQ' width=60% class=\"center-block img-rounded img-responsive\" /></a>", "<h3>South-Western-style Salad</h3><a href='http://www.bbcgoodfood.com/recipes/11632/southwesternstyle-salad-' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--47117_11.jpg?itok=D_5DU0oe' width=60% class=\"center-block img-rounded img-responsive\" /></a>"];

var hot: Array<string> = ["<h3>BBQ Chicken Burgers</h3><a href='http://www.bbcgoodfood.com/recipes/681635/bbq-chicken-burgers' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--356452_10.jpg?itok=_NFlQAYa' class=\"center-block img-rounded img-responsive\" /></a>", "<h3>Cheeseburger & Chips</h3><a href='http://www.bbcgoodfood.com/recipes/12230/cheeseburger-and-chips' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--424775_12.jpg?itok=DKChALXF' class=\"center-block img-rounded img-responsive\" /></a>", "<h3>Chickpea & Coriander Burgers</h3><a href='http://www.bbcgoodfood.com/recipes/1364634/chickpea-and-coriander-burgers' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--654456_10.jpg?itok=pr37heHE' class=\"center-block img-rounded img-responsive\" /></a>"];

var rain: Array<string> = ["<h3>Pumpkin Soup</h3><a href='http://www.bbcgoodfood.com/recipes/7730/pumpkin-soup' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--879453_11.jpg?itok=unHBDg-O' width=60% class=\"center-block img-rounded img-responsive\" /></a>", "<h3>Leek, bacon & Potato Soup</h3><a href='http://www.bbcgoodfood.com/recipes/3505/leek-bacon-and-potato-soup' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1202603_11.jpg?itok=xty-0iEt' width=60% class=\"center-block img-rounded img-responsive\" /></a>", "<h3>Spiced Carrot & Lentil Soup</h3><a href='http://www.bbcgoodfood.com/recipes/2089/spiced-carrot-and-lentil-soup' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1074500_11.jpg?itok=IwEifJO_' width=60% class=\"center-block img-rounded img-responsive\" /></a>"];

var cloudy: Array<string> = ["<h3>Margherita Pizza</h3><a href='http://www.bbcgoodfood.com/recipes/4683/pizza-margherita-in-4-easy-steps' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--51643_11.jpg?itok=I_hF8vFL' width=60%  class=\"center-block img-rounded img-responsive\" /></a>", "<h3>Cheesy Garlic Bread</h3><a href='http://www.bbcgoodfood.com/recipes/10130/cheesy-garlic-bread' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--424648_11.jpg?itok=aA2d3Yxr' width=60%  class=\"center-block img-rounded img-responsive\" /></a>"];

var windy: Array<string> = ["<h3>Chicken, Sweet Potato & Coconut Curry</h3><a href='http://www.bbcgoodfood.com/recipes/1555/chicken-sweet-potato-and-coconut-curry' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1035630_11.jpg?itok=VHXc71xK' width=60%  class=\"center-block img-rounded img-responsive\" /></a>", "<h3>Chicken Tikka Masala</h3><a href='http://www.bbcgoodfood.com/recipes/12798/chicken-tikka-masala' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--202451_12.jpg?itok=g4lcYF4v' width=60%  class=\"center-block img-rounded img-responsive\" /></a>", "<h3>Chicken Noodle Soup</h3><a href='http://www.bbcgoodfood.com/recipes/1869/chicken-noodle-soup' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--1035613_10.jpg?itok=KYNwhkXX' width=60% class=\"center-block img-rounded img-responsive\" /></a>"];

function ollie() {

}

function getWeather() {
    var location = (<HTMLInputElement>document.getElementById("city")).value;
    $.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + location + '%22)%20and%20u%3D%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function (data) {
        /* Check that a place was found (we'll just grab the first) */

        if (data.query.results === null) {
            alert("Location not found: " + location);
        } else if (location === "Ollie"){
            document.getElementById("recipe").innerHTML = "<h3>Hey there...</h3><img src='https://scontent.fwlg1-1.fna.fbcdn.net/v/t1.0-0/p206x206/11986465_10207896272872723_8728011847257622060_n.jpg?oh=724e59e4b987cbd490eba3cd3968df35&oe=583C821E' width=60% class=\"center-block img-rounded img-responsive\" />";
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
    document.getElementById("weather").innerHTML = '<a href="https://www.yahoo.com/?ilc=401" target="_blank"><h2>' + city + ', ' + region  + '<br>' + country + '</h2>' + condition + ' at ' + temp + ' degrees celsius</a><p>NB: Above link is to Yahoo.com</p>';
    switch (condition) {
        case "Sunny":
        case "Hot":
        case "Hail":
            var math: number = Math.floor(Math.random() * hot.length);

            document.getElementById("recipe").innerHTML = hot[math];
            break;

        case "Freezing Rain":
        case "Snow":
        case "Heavy Snow":
        case "Cold":
        case "Freezing Drizzle":
        case "Blowing Snow":
        case "Sleet":
            var math: number = Math.floor(Math.random() * cold.length) + 1;
            document.getElementById("recipe").innerHTML = cold[math];
            break;

        case "Rain":
        case "Showers":
        case "Drizzle":
            var math: number = Math.floor(Math.random() * rain.length);

            document.getElementById("recipe").innerHTML = rain[math];
            break;

        case "Mostly Cloudy":
        case "Partly Cloudy":
        case "Cloudy":
            var math: number = Math.floor(Math.random() * cloudy.length);

            document.getElementById("recipe").innerHTML = cloudy[math];
            break;

        case "Breezy":
        case "Windy":
            var math: number = Math.floor(Math.random() * windy.length);

            document.getElementById("recipe").innerHTML = windy[math];
            break;

        case "Mostly Clear":
        case "Fair":
        case "Clear":
            var math: number = Math.floor(Math.random() * clear.length);

            document.getElementById("recipe").innerHTML = clear[math];
            break;

        case "Tornado":
        case "Hurricane":
        case "Tropical Storm":
            document.getElementById("recipe").innerHTML = "<h3>Margherita</h3><a href='http://www.bbcgoodfood.com/recipes/margarita' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/margarita.jpg?itok=yGVbjGWg' width=60% class=\"center-block img-rounded img-responsive\" /></a>";
            break;

        default:
            document.getElementById("recipe").innerHTML = "<h3>Beef & Broccoli Noodles</h3><a href='http://www.bbcgoodfood.com/recipes/3452/quick-beef-and-broccoli-noodles' target='_blank'><img src='http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--5283_11.jpg?itok=XOD2Ktxc' width=60% class=\"center-block img-rounded img-responsive\" /></a>";
            break;
    }    
}