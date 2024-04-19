const recipient = ["charlieCard", "samipCard", "aliCard"];
const cardType = "birthday";
const cardArray = []

function writeCards(recipient, cardType) { 
    for (let i = 0; i < recipient.length; i++) { 
        cardArray.push(`Thank you, ${recipient[i]}, for the wonderful ${cardType} gift!`)
    }
    return cardArray;
}


function countDown(x) {
    while (x > -1) { ;
    console.log(x--)
    }
}

