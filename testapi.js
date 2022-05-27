// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://unofficial-cricbuzz.p.rapidapi.com/teams/get-schedules',
//   params: {teamId: '3'},
//   headers: {
//     'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com',
//     'X-RapidAPI-Key': 'c6b2545514mshff7bd320e6e0561p17836ejsnbb4c7d2cd7e4'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
//     console.log(JSON.stringify(response.data));
// }).catch(function (error) {
// 	console.error(error);
// });
// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://unofficial-cricbuzz.p.rapidapi.com/matches/list',
//   params: {matchState: 'recent'},
//   headers: {
//     'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com',
//     'X-RapidAPI-Key': 'c6b2545514mshff7bd320e6e0561p17836ejsnbb4c7d2cd7e4'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
//     console.log(JSON.stringify(response.data));
// }).catch(function (error) {
// 	console.error(error);
// });
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://unofficial-cricbuzz.p.rapidapi.com/series/get-stats-filters',
  params: {seriesId: '3718'},
  headers: {
    'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com',
    'X-RapidAPI-Key': 'c6b2545514mshff7bd320e6e0561p17836ejsnbb4c7d2cd7e4'
  }
};

axios.request(options).then(function (response) {
	console.log(JSON.stringify(response.data));
}).catch(function (error) {
	console.error(error);
});