const apiKey = '33ec4efa1f4c07294f25b07778a232cb';

const cityInput = document.querySelector("#city-input")
const citySearchBtn = document.querySelector('#citySearchBtn')
const mainWeather = document.querySelector(".main-weather")
const fiveDayContainer = document.querySelector("#fiveDayContainer")

const getData = (cityName) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`
    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (currentWeather) {
            console.log(currentWeather);
            let fiveDayUrl = `https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=${currentWeather.coord.lat}&lon=${currentWeather.coord.lon}&exclude={part}&appid=${apiKey}`

            fetch(fiveDayUrl)
                .then(function (res) {
                    return res.json()
                })
                .then(function (fiveDayData) {
                    console.log(fiveDayData)
                    mainWeather.innerHTML = `
                <h2 class="city">${currentWeather.name}</h2>
                <h2 class="time">${moment(currentWeather.dt,"X").format("MM/DD/YYYY")}</h2>
                <ul class="weather-list">
                    <li class="imgs">
                        <img class="description" />
                    </li>
                    <li class="temp">Temp: <span class="temps">${currentWeather.main.temp} F</span></li>
                    <li class="wind">Wind: <span class="winds">${currentWeather.wind.speed} MPH</span></li>
                    <li class="humidity">
                        Humidity: <span class="humiditys">${currentWeather.main.humidity} %</span>
                    </li>
                </ul>`
                fiveDayContainer.innerHTML = `
                <div class="card co w-20 col-lg-2">
                <div class="card-body">
                    <h5 class="card-title day1">${moment(fiveDayData.daily[1].dt,"X").format("MM/DD/YYYY")}</h5>
                    <ul class="weather-list">
                        <li class="imgs">
                            <img class="description1" />
                        </li>
                        <li class="temp">Temp: <span class="temps1">${fiveDayData.daily[1].temp.day} F</span></li>
                        <li class="wind">Wind: <span class="winds1">${fiveDayData.daily[1].wind_speed} MPH</span></li>
                        <li class="humidity">
                            Humidity: <span class="humiditys1">${fiveDayData.daily[1].humidity} %</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card co w-20 col-lg-2">
                <div class="card-body">
                    <h5 class="card-title day2">${moment(fiveDayData.daily[2].dt,"X").format("MM/DD/YYYY")}</h5>
                    <ul class="weather-list">
                        <li class="imgs">
                            <img class="description2" />
                        </li>
                        <li class="temp">Temp: <span class="temps2">${fiveDayData.daily[2].temp.day} F</span></li>
                        <li class="wind">Wind: <span class="winds2">${fiveDayData.daily[2].wind_speed} MPH</span></li>
                        <li class="humidity">
                            Humidity: <span class="humiditys2">${fiveDayData.daily[2].humidity} %</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card co w-20 col-lg-2">
                <div class="card-body">
                    <h5 class="card-title day3">${moment(fiveDayData.daily[3].dt,"X").format("MM/DD/YYYY")}</h5>
                    <ul class="weather-list">
                        <li class="imgs">
                            <img class="description3" />
                        </li>
                        <li class="temp">Temp: <span class="temps3">${fiveDayData.daily[3].temp.day} F</span></li>
                        <li class="wind">Wind: <span class="winds3">${fiveDayData.daily[3].wind_speed} MPH</span></li>
                        <li class="humidity">
                            Humidity: <span class="humiditys3">${fiveDayData.daily[3].humidity} %</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card co w-20 col-lg-2">
                <div class="card-body">
                    <h5 class="card-title day4">${moment(fiveDayData.daily[4].dt,"X").format("MM/DD/YYYY")}</h5>
                    <ul class="weather-list">
                        <li class="imgs">
                            <img class="description4" />
                        </li>
                        <li class="temp">Temp: <span class="temps4">${fiveDayData.daily[4].temp.day} F</span></li>
                        <li class="wind">Wind: <span class="winds4">${fiveDayData.daily[4].wind_speed} MPH</span></li>
                        <li class="humidity">
                            Humidity: <span class="humiditys4">${fiveDayData.daily[4].humidity} %</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card co w-20 col-lg-2">
                <div class="card-body">
                    <h5 class="card-title day5">${moment(fiveDayData.daily[5].dt,"X").format("MM/DD/YYYY")}</h5>
                    <ul class="weather-list">
                        <li class="imgs">
                            <img class="description5" />
                        </li>
                        <li class="temp">Temp: <span class="temps5">${fiveDayData.daily[5].temp.day} F</span></li>
                        <li class="wind">Wind: <span class="winds5">${fiveDayData.daily[5].wind_speed} MPH</span></li>
                        <li class="humidity">
                            Humidity: <span class="humiditys5">${fiveDayData.daily[5].humidity} %</span>
                        </li>
                    </ul>
                </div>
            </div>`
                })
        })
}

citySearchBtn.addEventListener("click", function () {
    getData(cityInput.value)
})