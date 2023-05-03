function updateTime() {
    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    
    losAngelesDateElement.innerHTML = losAngelesTime.format(`MMMM Do, YYYY`);
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
    
    let dublinElement = document.querySelector("#dublin");
    let dublinDateElement = dublinElement.querySelector(".date");
    let dublinTimeElement = dublinElement.querySelector(".time");
    let dublinTime = moment().tz("Europe/Dublin");
    
    dublinDateElement.innerHTML = dublinTime.format(`MMMM Do, YYYY`);
    dublinTimeElement.innerHTML = dublinTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);

function showCity(event) {
    let citiesTimeZone = event.target.value;
    let citiesTime = moment().tz(citiesTimeZone);
    let cityElement = innerHTML = `
        <div class="city">
            <div>
                <h2>${citiesTimeZone}</h2>
                <div class="date">${citiesTime.format('MMMM Do, YYYY')}</div>
            </div>
            <div class="time">${citiesTime.format("h:mm:ss")}
                <small>${citiesTime.format("A")}</small> 
            </div>
        </div>
    `;
}

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", showCity);