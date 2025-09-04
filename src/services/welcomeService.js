export function renderWelcomeMessage(h1){

    const contactApiChuck = async()=>{
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        console.log(data);
        document.querySelector(h1).innerText = data.value;
        const dataTransformed =  await response.json();
        console.log('dataTransformed');
        document.querySelector(h1).innerText = dataTransformed.value;
        

    }
    contactApiChuck();
}

export async function Chuck(){
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        return data.value;
      
}