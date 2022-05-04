//hash array size as 256
let ASCII_SIZE = 256;
function getTheHighestNumberOfOccurences(str)
    {

        //an array to keep the count of individual characters
        //array initialise as 0
        let count = new Array(ASCII_SIZE);
        for (let i = 0; i < ASCII_SIZE; i++)
        {
            count[i] = 0;
        }

        // array of characters constructed from the input string
        let length  = str.length;
        for (let i = 0; i < length; i++)
        {
            count[str[i].charCodeAt(0)] += 1;
        }
        let max = -1;   // Initialize max count
        let result = ' ';   // Initialize result

        // track the string and maintaint the count of each character
        for (let i = 0; i < length; i++)
        {
            if (max < count[str[i].charCodeAt(0)])
            {
                max = count[str[i].charCodeAt(0)];
                result = str[i];
            }
        }
        return result;
    }

    //check the occurrence
    let str = "impossible";
    console.log("Max occurring character is " , getTheHighestNumberOfOccurences(str));

