


const request=require("request");
const cheerio=require("cheerio");
const jsonfile = require('jsonfile');

const url="https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/match-results";

console.log("before");

request(url,cb);
function cb(err,response,html)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        extractHtml(html);
    }
}

function extractHtml(html){

    let $= cheerio.load(html);
    // let element=$(".ds-text-compact-xxs");
    let MatchVenue = $(".ds-text-compact-xxs .ds-text-tight-xs.ds-truncate.ds-text-ui-typo-mid");
    let teams=$(".ci-team-score.ds-flex.ds-justify-between.ds-items-center.ds-text-typo-title.ds-mt-1.ds-mb-1 .ds-text-tight-m.ds-font-bold.ds-capitalize");
    let scores=$(".ci-team-score.ds-flex.ds-justify-between.ds-items-center.ds-text-typo-title.ds-mt-1.ds-mb-1 .ds-text-compact-s.ds-text-typo-title");
    let results=$(".ds-text-tight-s.ds-font-regular.ds-truncate.ds-text-typo-title");

    jsonfile.writeFile('result.json',"");

    for(let i=0;i<MatchVenue.length;i++){

    let score1=$(scores[i*2]);
    let score2=$(scores[i*2+1]);
    let team1=$(teams[i*2]);
    let team2=$(teams[i*2+1]);
    let match=$(MatchVenue[i]);
    let result=$(results[i]);

    // console.log(match.text());
    // console.log();
    // console.log(team1.text()+" "+team2.text());
    // console.log();
    // console.log(score1.text()+" "+score2.text());
    // console.log();
    // console.log(result.text());

    let details={};
        details.team1Name=team1.text();
        details.team2Name=team2.text();
        details.team1sc=score1.text();
        details.team2sc=score2.text();
        details.resultf=result.text();
        details.venue=match.text();


    jsonfile.writeFile('result.json',details,{ flag: 'a'},function(err){
        if(err)
            console.log(err);
    } );

}
}
console.log("after");
   
