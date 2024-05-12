function windChillFactorCelsius(tempCelsius, windSpeedKmh) {
    if (tempCelsius > 10.0 || windSpeedKmh <= 4.8) {
        return tempCelsius; // No wind chill effect
    } else {
        return 13.12 + 0.6215 * tempCelsius - 11.37 * Math.pow(windSpeedKmh, 0.16) + 0.3965 * tempCelsius * Math.pow(windSpeedKmh, 0.16);
    }
}