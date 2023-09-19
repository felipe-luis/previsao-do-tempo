

const key = "73f16bfcc79683618bceb5687cd10174"


function changeValueScreen(data){
    console.log(data)
    document.querySelector('.tittle').innerHTML = `Tempo em ${data.name}`
    document.querySelector('.temp').innerHTML = `${data.main.temp.toFixed(1)}ºC`
    document.querySelector('.text-weather').innerHTML = data.weather[0].description
    document.querySelector('.img-weather').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector('.humidity').innerHTML = `Umidade: ${data.main.humidity}%`

}

async function searchCity(city){

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    changeValueScreen(data)
}

function clickBtn(){
    const cityName = document.querySelector('.input-text').value
    searchCity(cityName)
}