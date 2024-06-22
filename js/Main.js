var citySearch = document.querySelector(`.citySearch`)

var weather = [];

async function getWeather(city){
  var response = await fetch( `https://api.weatherapi.com/v1/search.json?key=7ab72d718d9c4c17b59121553242206&q=${city}`   )
  var finalData = await response.json();
  weather = finalData
  display();
  
  
}


citySearch.addEventListener( `input` , function(){
    getWeather(citySearch.value);


}  )

function display(){
  
    var cartona = ``
    for( var i=0 ; i<weather.length ; i++ ){

        cartona += `<div class="col-md-4 p-3 today">

              <div class="date d-flex  flex-row">
                <h6 class="day m-3">Today</h6>
              </div>
              <div class="temp">
                <h5 class="town m-2">${weather[i].region}</h5>
                <h1 class="weather m-2">${weather[i].lat} </h1>
              </div>

            </div>
`

    }
    document.getElementById(`data`).innerHTML= cartona;


}