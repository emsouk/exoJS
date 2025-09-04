const apiDiv = document.querySelector('.apiContacter');

const contactApi =   () => {
    //Data va récup Toutes les données de l'api
    const response =  fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
    console.log(response);
    console.log(response.ok);
    console.log(response.status);
    //Plutôt que de Travailler sur la réponse, on va la transformé en objet JS 
    const dataTransformed =  response.json();
    console.log('dataTransformed');
    console.log(dataTransformed);
    console.log(dataTransformed.elevation);
    apiDiv.innerText = dataTransformed.latitude + ' ' + dataTransformed.longitude;
};
contactApi();