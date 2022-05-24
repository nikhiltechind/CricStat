
const request=require("request");
const cheerio=require("cheerio");
const jsonfile = require('jsonfile');

const url="https://stats.espncricinfo.com/ci/engine/records/batting/most_runs_career.html?id=14452;type=tournament";
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
    let elements = $(".data2");
    let note=$(".note");


    jsonfile.writeFile('comment.json',"");

    for(let i=0;i<elements.length;i++){
    
        let pName=$(elements[i]).find(".data2 .data-link");
        let tRuns=$(elements[i]).find(".data2 td b");
        let tmatchs=$(elements[i]).find("td");

        let pTeam=$(note[i]);
        let tmatch=$(tmatchs[1]);
        let highscore=$(tmatchs[5]);
        let srate=$(tmatchs[8]);

        
        let comment={};
            comment.player=pName.text();
            comment.runs=tRuns.text();
            comment.team=pTeam.text();
            comment.matches=tmatch.text();
            comment.strikeRate=srate.text();

        jsonfile.writeFile('comment.json',comment,{ flag: 'a'},function(err){
            if(err)
                console.log(err);
        } );

        console.log(comment);
        console.log(pName.text()+" "+tRuns.text().trim()+" "+pTeam.text().trim()+" "+tmatch.text()+" "+highscore.text()+" "+srate.text());
        console.log();
    }
}