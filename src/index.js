function updateTime() {
    let sanFranciscoElement = document.querySelector("#san-francisco");
    let sanFranciscoDateElement = sanFranciscoElement.querySelector(".date");
    let sanFranciscoTimeElement = sanFranciscoElement.querySelector(".time");
    let sanFranciscoTime = moment().tz("America/San_Francisco");
    
    sanFranciscoDateElement.innerHTML = sanFranciscoTime.format("MMMM Do, YYYY");
    sanFranciscoTimeElement.innerHTML = sanFranciscoTime.format("h:mm:ss [<small>]A[</small>]");
    
    let dublinElement = document.querySelector("#dublin");
    let dublinDateElement = dublinElement.querySelector(".date");
    let dublinTimeElement = dublinElement.querySelector(".time");
    let dublinTime = moment().tz("Europe/Dublin");
    
    dublinDateElement.innerHTML = dublinTime.format("MMMM Do, YYYY");
    dublinTimeElement.innerHTML = dublinTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);