const tempCelsius = 11
const windSpeedKmh = 8

function windChillFactorCelsius(tempCelsius, windSpeedKmh) {
    if (tempCelsius > 10.0 || windSpeedKmh <= 4.8) {
        return tempCelsius; // No wind chill effect
    } else {
        return 13.12 + 0.6215 * tempCelsius - 11.37 * Math.pow(windSpeedKmh, 0.16) + 0.3965 * tempCelsius * Math.pow(windSpeedKmh, 0.16);
    }
}
// Below is an example of windChillFactor
// const computeWindChill = function(windSpeed, temperature) {
//     // Fahrenheit Only
//     return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
//   };

const windChill = windChillFactorCelsius(tempCelsius, windSpeedKmh);
document.querySelector("#wind-chill-factor").textContent = windChill;

var windChillFactor = windChillFactorCelsius(10, 20);

console.log("Wind Chill Factor" + windChillFactor);