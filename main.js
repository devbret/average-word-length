function main() {
    //Main program variables.
    const userInput = document.querySelector(`#userInput`);
    const submit = document.querySelector(`#submit`);
    const output = document.querySelector(`#output`);
    //Where the main action takes place, once the Submit button has been pressed.
    submit.addEventListener(`click`, function(){
        //Making sure the user has added text to the input field, before attempting to process any data.
        if (userInput.value.length > 0) {
            //Capture and transform the user's input into an array of strings.
            const data = userInput.value.split(` `);
            //Counting the number of letters there are in the user's input.
            const totalCharacters = data.reduce(function(t,d){
                t += d.length;
                return t;
            }, 0);
            //Displaying the results, which is the total number of characters divided by the total number of words submitted.
            output.innerHTML = `The average word is ${(totalCharacters / data.length).toFixed(2)} characters long.`;
        }
    });
}
main();