https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

    function countPositivesSumNegatives(input) {
        if(input ===  null) return [];
        let countPositive = 0;
        let sumNegative = 0;
        for(let i = 0; i < input.length; i++){
            if(input[i] > 0){
                countPositive++;
            } else if (input[i] < 0){
                sumNegative += input[i];
            }
        }
        return input.length === 0 ? [] : [countPositive, sumNegative];
    }