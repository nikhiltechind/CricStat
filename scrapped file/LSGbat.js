const request=require("request");
const cheerio=require("cheerio");
const jsonfile = require('jsonfile');
const url="https://stats.espncricinfo.com/ci/engine/records/batting/most_runs_career.html?id=14452;team=6903;type=tournament";
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
    // let element = $(".left .data-link");
    // let text=$(element[0]).text();
    // let htmldata=$(element[0]).html();
    // console.log(text);
    let elements = $(".data1");
    // console.log(elements.text());
    let note=$(".note");
    jsonfile.writeFile('LSGbat.json',"");
    for(let i=0;i<elements.length;i++){
    // console.log(element.text());
    let pName=$(elements[i]).find(".data1 .data-link");
    let tRuns=$(elements[i]).find(".data1 td b");
    let pTeam=$(note[i]);
    let tmatchs=$(elements[i]).find("td");
    let tmatch=$(tmatchs[1]);
    let highscore=$(tmatchs[5]);
    let srate=$(tmatchs[8]);
    let comment={};
            comment.player=pName.text();
            comment.runs=tRuns.text();
            // comment.team=pTeam.text();
            comment.highscore=highscore.text();
            comment.matches=tmatch.text();
            comment.strikeRate=srate.text();

        jsonfile.writeFile('LSGbat.json',comment,{ flag: 'a'},function(err){
            if(err)
                console.log(err);
        } );

    console.log(pName.text()+" "+tRuns.text().trim()+" "+pTeam.text().trim()+" "+tmatch.text()+" "+highscore.text()+" "+srate.text());
    console.log();
    }
    // console.log(htmldata);
}