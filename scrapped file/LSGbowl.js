const request=require("request");
const cheerio=require("cheerio");
const jsonfile = require('jsonfile');
const url="https://stats.espncricinfo.com/ci/engine/records/bowling/most_wickets_career.html?id=14452;team=6903;type=tournament";
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
    jsonfile.writeFile('LSGbowl.json',"");
    for(let i=0;i<elements.length;i++){
    // console.log(element.text());
    let pName=$(elements[i]).find(".data1 .data-link");
    let tRuns=$(elements[i]).find(".data1 td b");
    let pTeam=$(note[i]);
    let tmatchs=$(elements[i]).find("td");
    let tmatch=$(tmatchs[1]);
    let economy=$(tmatchs[9]);
    let avg=$(tmatchs[8]);
    let comment={};
        comment.player=pName.text();
        comment.wickets=tRuns.text();
        // comment.team=pTeam.text();
        comment.economy=economy.text();
        comment.avg=avg.text();

        jsonfile.writeFile('LSGbowl.json',comment,{ flag: 'a'},function(err){
            if(err)
                console.log(err);
        } );

    console.log(pName.text()+" "+tRuns.text().trim()+" "+pTeam.text().trim()+" "+tmatch.text()+" "+economy.text()+" "+avg.text());
    console.log();
    }
    // console.log(htmldata);
}