//recal "GET" and "POST" methods of fetch's 2nd parameter

//"GET"

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

getDadJoke();


































