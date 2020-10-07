/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)




/***** Deliverable 2 *****/

header.style.color = "red"


/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)


function putPlayers(array) {

    const playerDiv = document.querySelector('.player-container')

    array.forEach(element => {
        const div = document.createElement('div')
            div.classList.add('player')
            div.setAttribute('data-number', element.number)
        const head = document.createElement('h3')
            head.innerHTML = `${element.name} (<em>${element.name}</em>)`
        const playerImg = document.createElement('img')
            playerImg.setAttribute('src', element.photo)
            playerImg.setAttribute('alt', element.name) 
        
        div.appendChild(head) 
        div.appendChild(playerImg) 
    
        playerDiv.append(div)
});
}

putPlayers(PLAYERS)


/***** Deliverable 4 *****/

const findRaheem = document.querySelector(`[data-number='7']`)
findRaheem.remove();