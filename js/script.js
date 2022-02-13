// Question 1


    const getRemainder = (a,b) => a % b;


// Question 2


const apiUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=ae76f27273574defac6b481158db432d"

const container = document.querySelector(".container");

async function forTheApi() {
    try {
        const response = await fetch(apiUrl);
        const results = await response.json();
        const resultsArray = results.results;
        console.log(resultsArray.length);

        container.innerHTML = ""

        for (i = 0; i < resultsArray.length; i++) {
            if (i === 8) {
                break;
            }
            console.log(resultsArray[i].name);

            console.log(resultsArray[i].tags.length)

            const tagAmount = resultsArray[i].tags.length

            container.innerHTML += `<div class="name"><h3>${resultsArray[i].name}</h3> 
                                    <p>Rating: ${resultsArray[i].rating}</p>
                                    <p>Number of tags: ${tagAmount}</p></div>`
        }
    }
    catch {
        container.innerHTML = "AHHHH"
    }

}

forTheApi();

