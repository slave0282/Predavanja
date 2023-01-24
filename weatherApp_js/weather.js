const apiParameters = {
    // globalCity: `Skopje`,
    apiKey: `74e59f6374abe0d9b758877616ae444c`,
    apiFirstUrl: `https://api.openweathermap.org/data/2.5/onecall`,
    apiSecondUrl: `https://api.openweathermap.org/data/2.5/forecast`,
    imgUrl: ` http://openweathermap.org/img/wn/`,
}

    const getLocation =  () => {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition( (position) =>{
                    return resolve(position);
                },  (err)=> {
                    return reject(err);
                });
            } else {
                return reject("Geolocation is not supported by this browser.");
            }
        })
    };

     getLocation()
        .then(position=>{
        // const {latitude, longitude} = position.coords;
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(`${apiParameters.apiFirstUrl}?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiParameters.apiKey}&exclude=minutely`)
       .then(data => data.json())
       .then(data => {
        console.log(data)
        for(let element of data.hourly){
            const cardHtml = cardTemplate(element);
            console.log(cardHtml);
            cardContainer.innerHTML += cardHtml;
        }
       })
        
    })

   let cardTemplate = (element)=>{
        console.log(element);
        const time = new Date(element.dt * 1000)
        console.log(time);
        
        
        return `
        <div>
            <h1>Temperature ${element.temp}</h1>
            <h1>Time ${time.getHours()}:00</h1>
            <h1>Humidity: ${element.humidity}</h1>
            <h1>Feels like: ${element.feels_like}</h1>
            <h1>Pressure: ${element.pressure}</h1>
        </div>
        `
    }
    const cardContainer = document.getElementById("cardContainer")
    
    
    