document.addEventListener("DOMContentLoaded", () => {

    const dynamicContent = document.getElementById("dynamic-text")
    // console.log(dynamicContent)

    const phrases = ["Student...", "Explorer...", "Human Being..."]

    let phraseIndex = 0;
    let letterIndex = 0;
    const typingSpeed = 100;
    const erasingSpeed = 100;

    function printLetters(phrase) {
        if (letterIndex == phrase.length) {
            //clear letter which have been type
            clearLetters();
        } else if (letterIndex < phrase.length) {
            dynamicContent.textContent += phrase.charAt(letterIndex);
            letterIndex += 1;
            //function ref,100ms(1000ms=1s)
            setTimeout(function () {
                printLetters(phrase)
            }, typingSpeed)
        }
    }


    function clearLetters() {
        if (letterIndex == -1) {
            phraseIndex = (phraseIndex + 1) % phrases.length;
            letterIndex = 0;
            printLetters(phrases[phraseIndex])
        } else if (letterIndex > -1) {
            let updatedPhrase = "";
            for (let index = 0; index < letterIndex; index++) {
                updatedPhrase += phrases[phraseIndex].charAt(index);
            }
            console.log(updatedPhrase);
            dynamicContent.textContent = updatedPhrase;
            letterIndex -= 1;
            setTimeout(clearLetters, erasingSpeed);
        }
    }

    printLetters(phrases[phraseIndex])
})
