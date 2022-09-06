const API_key = `a5571f59ebdf58d2dd1dca308c9659b8`;



const loadTemperature = city =>{
    // console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = data =>{
//    const temperature = document.getElementById('temperature');
   
//    temperature.innerText = data.main.temp;
    setInnerTextbyId('temperature', data.main.temp );
    setInnerTextbyId('condition',data.weather[0].main)
     console.log(data.weather[0].main);
}
const setInnerTextbyId = (id, text) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}
document.getElementById('btn-search').addEventListener('click', function () {
    const searchField =document.getElementById('search-field');
    const city =searchField.value;

    document.getElementById('city').innerText =city;
    loadTemperature(city);
    // console.log(city);
})
loadTemperature('dhaka');