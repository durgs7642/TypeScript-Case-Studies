let city:string = "Jaipur";

let temperature :number = 37;

let isRaining = false;

    function weatherReport(city: string, temperature: number, isRaining: boolean): void{
        console.log(`In ${city}, it is ${temperature}°C. Is it raining? ${isRaining}`);
    }

    weatherReport(city, temperature, isRaining);