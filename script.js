const getWeather= () =>{
  const city=  document.getElementById('level').value;
  apikey='e55ab38660aa557b106437cee5eeb691';
   const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
   fetch(apiurl)
   .then(res => res.json())
   .then(data => {
       const info= document.getElementById('info');
    console.log(data);
    const description =data.weather[0].description;
    const temperature = data.main.temp;
    const windSpeed =data.wind.speed;
    const humidity = data.main.humidity;
    info.innerHTML=`
    <p> Desciption :${description}</p>
    <h4>Temperature: ${temperature}&#8451</h4>
        <p> WindSpeed :${windSpeed} m/s</p>
              <p> Humidity :${humidity}%</p>

    `;

})
.catch(error =>{
    console.error('Opps!,sorry',error);
    document.getElementById('info').textContent='City Not Found!';
})
}