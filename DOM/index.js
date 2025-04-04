
document.getElementById("submit").addEventListener("click", getCountry);

function  getCountry(){

    var continent = document.getElementById("continent_select").value;

    switch(continent){

        case "india":
        alert("New Delhi is the capital of India");
        break;

        case "belgium":
        alert("Brussels is the capital of Belgium");
        break;

        case "france":
        alert("Paris is the capital of France");
        break;

        case "germany":
        alert("Berlin is the capital of Germany");
        break;

        case "united kingdom":
        alert("London is the capital of United Kingdom");
        break;

        case "canada":
        alert("Ottawa is the capital of Canada");
        break;

        default:
        alert("Please select a valid continent");
        break;
    }
}