
const express = require('express');
const mongoose=require('mongoose');
const path=require('path');

const app=express();

const ejs=require('ejs');

app.use(express.static(path.join(__dirname,'public')));
// app.use(express.static(path.join(__dirname,'views')));
app.use(express.static(path.join(__dirname,'HTML')));

app.set('view engine' , 'ejs');

app.get("/Home.html",function(req,res){
    res.sendFile(__dirname+"/HTML/Home.html");
})

app.get("/Stats.html", function(req,res){
    res.sendFile(__dirname+"/HTML/Stats.html");
    });

// app.get("/PointTable.html", function(req,res){
//     res.sendFile(__dirname+"/HTML/PointTable.html");
//     });

app.get("/PointTable.html", function(req,res){
    res.sendFile(__dirname+"/HTML/PointTable.html");
    });

app.get("/StatsByTeam.html", function(req,res){
    res.sendFile(__dirname+"/HTML/StatsByTeam.html");
    });

// app.get("/PastMatches.html", function(req,res){
//     res.sendFile(__dirname+"/HTML/PastMatches.html");
//     });

mongoose.connect('mongodb+srv://SiddhartJaiswal:Sid797112@cluster0.hw94y.mongodb.net/CRICSTAT-XI');


// const BatsmenSchema={

//     player : String,
//     runs : String,
//     team : String,
//     matches : String,
//     strikeRate: String
// }

const batsSchema={

    player : String,
    runs : String,
    highscore : String,
    matches : String,
    strikeRate : String,
}

// const bowlsSchema={
    
//     player : String,
//     wickets : String,
//     economy : String,
//     avg : String
// }

const cskbat= mongoose.model('cskbats',batsSchema);
// const bowler= mongoose.model('mostwickets',BowlersSchema);

app.get("/csk.ejs", function(req,res){

        cskbat.find({},function(err,Bats){
        res.render('csk',{
            batslist:Bats
        })

    });

});



// const cskbowlsSchema={

//     player : String,
//     wickets : String,
//     economy : String,
//     avg : String,
// }
// const cskbowl= mongoose.model('cskbowls',bowlsSchema);
// // const bowler= mongoose.model('mostwickets',BowlersSchema);

// app.get("/csk.ejs", function(req,res){

//         cskbowl.find({},function(err,Bowls){
//         res.render('csk',{
//             bowlslist:Bowls
//         })

//     });

// });



const dcbat= mongoose.model('dcbats',batsSchema);
// const bowler= mongoose.model('mostwickets',BowlersSchema);

app.get("/dc.ejs", function(req,res){

        dcbat.find({},function(err,Bats){
        res.render('dc',{
            batslist:Bats
        })

    });

});

const rrbat= mongoose.model('rrbats',batsSchema);
// const bowler= mongoose.model('mostwickets',BowlersSchema);

app.get("/rr.ejs", function(req,res){

        rrbat.find({},function(err,Bats){
        res.render('rr',{
            batslist:Bats
        })

    });

});

const srhbat= mongoose.model('srhbats',batsSchema);
// const bowler= mongoose.model('mostwickets',BowlersSchema);

app.get("/srh.ejs", function(req,res){

        srhbat.find({},function(err,Bats){
        res.render('srh',{
            batslist:Bats
        })

    });

});

const rcbbat= mongoose.model('rcbbats',batsSchema);
// const bowler= mongoose.model('mostwickets',BowlersSchema);

app.get("/rcb.ejs", function(req,res){

        rcbbat.find({},function(err,Bats){
        res.render('rcb',{
            batslist:Bats
        })

    });

});

const mibat= mongoose.model('mibats',batsSchema);
// const bowler= mongoose.model('mostwickets',BowlersSchema);

app.get("/mi.ejs", function(req,res){

        mibat.find({},function(err,Bats){
        res.render('mi',{
            batslist:Bats
        })

    });

});

const lsgbat= mongoose.model('lsgbats',batsSchema);
// const bowler= mongoose.model('mostwickets',BowlersSchema);

app.get("/lsg.ejs", function(req,res){

        lsgbat.find({},function(err,Bats){
        res.render('lsg',{
            batslist:Bats
        })

    });

});

const gtbat= mongoose.model('gtbats',batsSchema);
// const bowler= mongoose.model('mostwickets',BowlersSchema);

app.get("/gt.ejs", function(req,res){

        gtbat.find({},function(err,Bats){
        res.render('gt',{
            batslist:Bats
        })

    });

});

const pkbat= mongoose.model('pkbats',batsSchema);
// const bowler= mongoose.model('mostwickets',BowlersSchema);

app.get("/pk.ejs", function(req,res){

        pkbat.find({},function(err,Bats){
        res.render('pk',{
            batslist:Bats
        })

    });

});

const kkrbat= mongoose.model('kkrbats',batsSchema);
// const bowler= mongoose.model('mostwickets',BowlersSchema);

app.get("/kkr.ejs", function(req,res){

        kkrbat.find({},function(err,Bats){
        res.render('kkr',{
            batslist:Bats
        })

    });

});



// const dcbowlsSchema={

//     player : String,
//     wickets : String,
//     economy : String,
//     avg : String,
// }
// const dcbowl= mongoose.model('dcbowls',dcbowlsSchema);
// // const bowler= mongoose.model('mostwickets',BowlersSchema);

// app.get("/dc.ejs", function(req,res){

//         dcbowl.find({},function(err,Bowls){
//         res.render('dc',{
//             dcbowlslist:Bowls
//         })

//     });

// });


const PastSchema={
    team1Name : String,
    team2Name : String,
    team1sc : String,
    team2sc : String,
    resultf : String,
    venue : String
}

const result= mongoose.model('results',PastSchema);

app.get("/PastMatches.ejs", function(req,res){

        result.find({},function(err,data){
        res.render('PastMatches',{
            list:data
        })

    });

});


const BatsmenSchema={

    player : String,
    runs : String,
    team : String,
    matches : String,
    strikeRate: String
}

const batsmen= mongoose.model('mostruns',BatsmenSchema);

const BowlersSchema={

    player : String,
    wickets : String,
    team : String,
    economy : String,
    avg: String
}
const bowler= mongoose.model('mostwickets',BowlersSchema);

app.get("/MostWicket.ejs", function(req,res){

        bowler.find({},function(err,Bowls){
        res.render('MostWicket',{
            Bowlerlist:Bowls
        })

    });

});

app.get("/Mostrun.ejs", function(req,res){

        batsmen.find({},function(err,Bats){
        res.render('Mostrun',{
            BatsmenList:Bats
        })

    });

});



app.listen(3000,function(){
    console.log("started");
});