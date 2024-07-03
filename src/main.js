//recal "GET" and "POST" methods of fetch's 2nd parameter

//"GET"
/*
const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
            Accept: "application/json",
        }
    });
    const jsonResponse  = await response.json();
    console.log(jsonResponse);
}

getDadJoke(); */

//"POST"
/*
const jokeObject = {
    id: '8U8EdpWnOuc', 
    joke: "Recent survey revealed 6 out of 7 dwarf's aren't happy."
}

const postDadJoke = async (jokeObj) => {
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(jokeObj)
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse.headers);
    
}
postDadJoke(jokeObject); */

// url 
/*
const requestJoke = async (firstName, lastName) =>  {
    const response = await fetch(`https://icanhazdadjoke.com/jokes/random?firstName${firstName}&lastName${lastName}`);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
}

requestJoke("Bruce", "Lee"); */

// this API is harmful they got their security license expired 536 days ago so I won't use this api ("http://api.icndb.com");

//limitTo=[nerdy] ==>> to get only nerdy joke ==>> to select nerdy category;
/*
const requestJoke = async (firstName, lastName) =>  {
    const response = await fetch(`https://icanhazdadjoke.com/jokes/random?firstName${firstName}&lastName${lastName}&limitTo=[nerdy]`);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
}

requestJoke("Bruce", "Lee"); */

const getDataFromForm = () => {
    const requestObj = {
        firstName: "Brue",
        lastName: "Lee",
        categories: ["nerdy"]
    };
    return requestObj;
}























