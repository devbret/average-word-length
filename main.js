function main() {
    //Primary program variables.
    const userInput = document.querySelector(`#userInput`);
    const submit = document.querySelector(`#submit`);
    const output = document.querySelector(`#output`);
    //Where the main action takes place, once the Submit button has been pressed.
    submit.addEventListener(`click`, function(){
        //Making sure the user has added text to the input field, before attempting to process any data.
        if (userInput.value.length > 0) {
            //Capture and transform the user's input into an array of strings.
            const predata = userInput.value.split(` `);
            //Creating the data array variable to hold all qualified words.
            const data = [];
            //Filtering all of the words to make sure they're strings with English characters in them.
            for (let i = 0; i < predata.length; i++) {
                //If the word is an empty string, ignore it.
                if (predata[i] !== ``) {
                    //Preparing each word that makes it through the first filter, by splitting it into an array of characters.
                    const inner = predata[i].split(``);
                    let holder = [];
                    //Looping through and filtering out all non-english letters, including numbers and any punctuation.
                    for (let z = 0; z < inner.length; z++) {
                        const innerLetter = inner[z].toLowerCase();
                        if (innerLetter.charCodeAt(0) >= 97 && innerLetter.charCodeAt(0) <= 122) {
                            holder.push(innerLetter);
                        }
                    }
                    //Joining the final result for each word; then pushing it to the data array as a qualified word for measurement.
                    const finalAnswer = holder.join(``);
                    data.push(finalAnswer);
                }
            }
            //Counting the number of letters there are in the user's input.
            const totalCharacters = data.reduce(function(t,d){
                t += d.length;
                return t;
            }, 0);
            //Displaying the results, which is the total number of characters divided by the total number of words submitted.
            output.innerHTML = `The average word in your submitted text is <b>${(totalCharacters / data.length).toFixed(2)}</b> characters long. With a total of <b>${totalCharacters}</b> characters  and <b>${data.length}</b> words in the whole body.`;
        }
    });
}
main();
