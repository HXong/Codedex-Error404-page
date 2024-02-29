document.addEventListener('DOMContentLoaded', function(){
    let spinCount = 0;
    let coin = document.getElementById('coin');
    let background = document.getElementById('background');
    let errorMsg = document.querySelector('.error-msg');
    let yellowButton = document.getElementById('yellow-button');
    const avatar = document.getElementById('avatar');
    const msgEle = document.getElementById('message');

    showMsg("Sorry, the page you are looking for cannot be found.");

    // After 2 seconds, show the second message
    setTimeout(function() {
        showMsg("Check for any input errors in your URL or press the button to return to homepage");
    }, 4000);

    setTimeout(function() {
        showMsg("Feel free to spin the coin but don't spin it too much tho 😊");
    }, 8000);

    function spin() {
        spinCount++;
        coin.style.transform = `rotate(${spinCount * 360}deg)`;

        // Display messages based on spin count
        if (spinCount < 5) {
            showMsg("Nice");
        }
        else if(spinCount < 10){
            showMsg("I think u should stop soon...");
        }
        else if(spinCount < 13){
            showMsg("Wait, the coin is coming off already!");
        } else if (spinCount < 14) {
            showMsg("No! You spin it too much!");
        } else {
            coin.style.transition = 'transform 0.5s ease-in-out';
            coin.style.transform = `rotate(${spinCount * 360 + 90}deg)`;
            showMsg("");

            setTimeout(() => {
                coin.style.transition = 'transform 1s ease-in-out';
                coin.style.transform = 'translateY(550px)';
            }, 1000);

            setTimeout(() => {
                background.style.transform = 'translateY(83.33%) rotate(5deg)';

                errorMsg.style.transition = 'transform 1s ease-in-out';
                errorMsg.style.transform = 'translateY(500px)';

                yellowButton.style.transition = 'transform 1s ease-in-out';
                yellowButton.style.transform = 'translateY(500px)';
                showMsg("I already told you, don't spin it too much...");
            }, 2000);

            setTimeout(() => {
                showMsg("Now it's completely broken.");
            }, 5000);

            setTimeout(() => {
                showMsg("Just press the red button to go back...");
            }, 9000);
        }
    }

    function showMsg(message){
        msgEle.innerText = message;
    }

    function coinClickHandler() {
        console.log("coin clicked!");
        spin(); // Call the function to spin the coin

        // Disable the click event listener temporarily
        coin.removeEventListener('click', coinClickHandler);

        // Re-enable the click event listener after the spinning animation ends
        coin.addEventListener('transitionend', function transitionEndHandler() {
            coin.addEventListener('click', coinClickHandler); // Re-enable the click event listener
            coin.removeEventListener('transitionend', transitionEndHandler); // Remove the event listener to prevent multiple bindings
        });
    }

    coin.addEventListener('click', coinClickHandler);

document.getElementById('yellow-button').addEventListener('click', function(){
    //class to indicate button has been clicked
    this.classList.add('clicked');
    //redirect user back to website
    window.location.href = 'https://www.codedex.io/home'
});

//handle initial background fall
function initialBackgroundFall(){
     // Set up the exposed wires to appear
    document.getElementById('exposed-wires').style.display = 'block';
    //red button appears
    document.getElementById('red-button').style.opacity = '1';
    document.getElementById('red-button').addEventListener('click', function(){
        window.location.href = 'https://www.codedex.io/home';
    });
}

setTimeout(initialBackgroundFall, 3000);

});