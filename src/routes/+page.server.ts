// export a load funciton - what a load funciton does?

// for the page that it is attached to or we can also say that for the route that it is attached to, it returns a data from the server . 
// So basically we fetch the data from the server and return it to the +page.svelte in this case . That is the job of the load function.

export const load  = async ()=>{
    const request = await fetch('https://shikimori.one/api/animes?page=1&limit=8&order=popularity') // the data is basically stored in this endpoint, so we can say that the data about pokemon is cuurently stored in this endpoint.  so we fetch the data from the endpoint and store it inside the variable called as request.
    // what await does is that it tells the browser javascript to wait for the data to be recieved from the endpoint and then assign it to the varible called as request.

    let animes; // we are declaring a variable called as animes 

    // The try and catch block is like if else block which says if the api data has been recieved then  we do the desired action or else throw an error
    try {
        let response = await request.json() // this statement says that just wait until the data from the api is recieved and assigned  to the request variable . Then a response variable is declared and the data from the request is assigned to the response variable.
        animes = response // then the response object is assigned to the animes basically the animes store the response data
    }
    catch(error){
        console.log(error)
    }
    // finally outside of the try catch data we return the animes. So basically if the data is not yet loaded it will return an empty value. 
    return {
        animes
    };
}

// A load function must always return an object