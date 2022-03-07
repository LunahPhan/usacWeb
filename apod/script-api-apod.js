const BASE_APOD_URL = "https://api.nasa.gov/planetary/apod?";
const API_KEY = "api_key=DEMO_KEY";
const STAR_DATE = "start_date="
const END_DATE = "end_date="  
const APOD_URL = BASE_APOD_URL + API_KEY;

async function getApod(){
    var responseApod = await fetch(APOD_URL)
    // Converting to JSON
    var jsonResponseApod = await responseApod.json()
    return jsonResponseApod
}
async function requestApod (){
    getApod().then((jsonResponseApod) => {
            // Displaying results to console
            console.log(jsonResponseApod)
            document.getElementById('title').innerText = jsonResponseApod.title;
            document.getElementById('date').innerText = jsonResponseApod.date;
            document.getElementById('explain').innerText = jsonResponseApod.explanation;
            document.getElementById('apod').src = jsonResponseApod.hdurl;
        }
    )
}
window.onload = requestApod();