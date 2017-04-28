var axios = require("axios");
const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/weather?&appid=e9633b16f0b50d2fa4395de723febbaa';

module.exports = {
    getTemp:function (location) {
        var encodedLocation = encodeURIComponent(location);
        var url = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}}`;
        return axios.get(url).then(function (res) {
            if (res.data.code && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }
        },function (res) {
            throw new Error(res.data.message);
        });
    }
};