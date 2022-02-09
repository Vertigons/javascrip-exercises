const repeatString = function(message, repeats) {
    
    if (repeats >= 0) {
        let resultMessage = "";

        for (let i = 0; i < repeats; i++) {
            resultMessage += message;
        }
        return resultMessage;
    }
    else return "ERROR";
    
};

// Do not edit below this line
module.exports = repeatString;
