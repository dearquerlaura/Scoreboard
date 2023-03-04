
let homeJScore = document.getElementById("homeScore")
let guestJScore = document.getElementById("guestScore")
let homeScore = 0
let guestScore = 0
let homeContainer = document.getElementById("scoreHomeContainer")
let guestContainer = document.getElementById("scoreGuestContainer")


function newGame() {
    
    homeScore = 0
    homeJScore.innerText = homeScore
    guestScore = 0
    guestJScore.innerText = guestScore
    homeContainer.classList.remove("highlight");
    guestContainer.classList.remove("highlight");

}


function homePlus(num) {
    homeScore += num
    console.log(homeScore)
    homeJScore.innerText = homeScore
    weAreTheChampions()
}


function guestPlus(num) {
    guestScore += num
    console.log(guestScore)
    guestJScore.innerText = guestScore
    weAreTheChampions()
}



function weAreTheChampions() {

    if (homeScore > guestScore) {

        homeContainer.classList.add("highlight") ;
        guestContainer.classList.remove("highlight") ;

    } else if (homeScore < guestScore) {

        guestContainer.classList.add("highlight");
        homeContainer.classList.remove("highlight");

    } else if (homeScore === guestScore) {

        homeContainer.classList.remove("highlight");
        guestContainer.classList.remove("highlight");

    }

        // (homeScore < guestScore) ? homeContainer.classList.add("highlight") : guestContainer.classList.add("highlight") ;
        // (homeScore > guestScore) ? homeContainer.classList.remove("highlight") : guestContainer.classList.remove("highlight") ;
        // (homeScore === guestScore) ? homeContainer.classList.remove("highlight") : guestContainer.classList.remove("highlight") ;

}

