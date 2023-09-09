var axios = require("axios").default;
const { response } = require("express");
var index=require('./playerIndex');

var searchByPlayerName=function(searchTerm){
    return new Promise((resolve,rejects)=>{
        playerId=index.filter((player)=>{
            return player.playerName.toLowerCase().includes(searchTerm.toLowerCase());
        })[0].playerId;

        getPlayerData(playerId,false).then((res)=>{
            return resolve(res)
        })
    })
}

var searchByPlayerName_Bat = function (searchTerm) {
    return new Promise((resolve, rejects) => {
        playerId = index.filter((player) => {
            return player.playerName.toLowerCase().includes(searchTerm.toLowerCase());
        })[0].playerId;

        getPlayerBatData(playerId, false).then((res) => {
            return resolve(res)
        })
    })
}

var searchByPlayerName_Bowl = function (searchTerm) {
    return new Promise((resolve, rejects) => {
        playerId = index.filter((player) => {
            return player.playerName.toLowerCase().includes(searchTerm.toLowerCase());
        })[0].playerId;

        getPlayerBowlData(playerId, false).then((res) => {
            return resolve(res)
        })
    })
}

var getPlayerData=function(playerId,summary){
    return new Promise((resolve,rejects)=>{
        var options = {
            method: 'GET',
            url: 'https://unofficial-cricbuzz.p.rapidapi.com/players/get-info',
            params: { playerId: playerId },
            headers: {
                'x-rapidapi-host': 'unofficial-cricbuzz.p.rapidapi.com',
                'x-rapidapi-key': '78494a9babmsh57702aad9b65b7dp1158e8jsndd90ba7c1a79'
            }
        };

    
        axios.request(options).then(function (response) {
            // console.log(response.data);
            var playerData=response.data;
            return resolve(playerData);
        }).catch(function (error) {
            console.error(error);
        });
       
    })
}


var getPlayerBatData = function (playerId, summary) {
    return new Promise((resolve, rejects) => {
        var axios = require("axios").default;

        var options = {
            method: 'GET',
            url: 'https://unofficial-cricbuzz.p.rapidapi.com/players/get-batting',
            params: { playerId: playerId },
            headers: {
                'x-rapidapi-host': 'unofficial-cricbuzz.p.rapidapi.com',
                'x-rapidapi-key': '78494a9babmsh57702aad9b65b7dp1158e8jsndd90ba7c1a79'
            }
        };

        axios.request(options).then(function (response) {
            // console.log(response.data);
            var playerData = response.data;
            return resolve(playerData);
        }).catch(function (error) {
            console.error(error);
        });

    })
}


var getPlayerBowlData = function (playerId, summary) {
    return new Promise((resolve, rejects) => {
        var axios = require("axios").default;

        var axios = require("axios").default;

        var options = {
            method: 'GET',
            url: 'https://unofficial-cricbuzz.p.rapidapi.com/players/get-bowling',
            params: { playerId: playerId },
            headers: {
                'x-rapidapi-host': 'unofficial-cricbuzz.p.rapidapi.com',
                'x-rapidapi-key': '78494a9babmsh57702aad9b65b7dp1158e8jsndd90ba7c1a79'
            }
        };
        axios.request(options).then(function (response) {
            // console.log(response.data);
            var playerData = response.data;
            return resolve(playerData);
        }).catch(function (error) {
            console.error(error);
        });

    })
}


var PlayerSearchAPI = {
    getPlayerInfoByName: searchByPlayerName,
    getPlayerBatInfoByName: searchByPlayerName_Bat,
    getPlayerBowlInfoByName: searchByPlayerName_Bowl,
}
module.exports = PlayerSearchAPI;
