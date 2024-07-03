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
postDadJoke(jokeObject);





























