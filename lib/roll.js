// roll function 
export function roll(sides, dice, rolls){
    var resultArray = []

    for(let i = 0; i < rolls; i++){
        let current = 0;
        for(let j = 0; j < dice; j++){
            current += Math.floor(Math.random() * sides) + 1;
        }
        resultArray.push(k);
    }

    const answer = {
        "sides": sides, 
        "dice": dice, 
        "rolls": rolls, 
        "results": resultArray};

    return answer;
}