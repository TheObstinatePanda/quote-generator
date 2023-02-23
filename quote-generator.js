const quoteGenerator = {

    que: ['Can I tell you something?', 'I have an imporatnt question for you.', 'Wanna hear a joke?', 'I\'ve got a new one for you.'],
    resp: ['Sure, why not?', 'Not again', 'What is it this time?', 'Stop, just stop'],
    badPun: ['The news pandas to people\’s baser instincts.', 'Sometimes, it feels like you think I\'m ex-panda-ble.', 'You know your de-panda-nt on my humor.'],
    rea: ['my GOD thats terrible.', 'Sooo stupid', 'How do you come up with these, seriously?', 'Not going to lie, I just threw up a little'],

    generator() {
        const getQue = () => {
            let queQuote = '';
            let arrLoc = Math.floor(Math.random() * this.que.length)
            queQuote = this.que[arrLoc];

            console.log (queQuote/* + ' ' + arrLoc*/);
        };
        const getResp = () => {
            let respQuote = '';
            let arrLoc = Math.floor(Math.random() * this.resp.length)
            respQuote = this.resp[arrLoc];

            console.log(respQuote/* + ' ' + arrLoc*/);
        };
        const getBadPun = () => {
            let badPunQuote = '';
            let arrLoc = Math.floor(Math.random() * this.badPun.length)
            badPunQuote = this.badPun[arrLoc];
            
            console.log(badPunQuote/* + ' ' + arrLoc*/);
        };
        const getRea = () => {
            let reaQuote = '';
            let arrLoc = Math.floor(Math.random() * this.rea.length)
            reaQuote = this.rea[arrLoc];
            
            console.log(reaQuote/* + ' ' + arrLoc*/);
        };

        setTimeout(getQue, 500);
        setTimeout(getResp, 1500);
        setTimeout(getBadPun, 2500);
        setTimeout(getRea, 3500);                
    }
}

quoteGenerator.generator(); 
