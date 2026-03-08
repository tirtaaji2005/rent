
var rating = 0

function rate(star){
rating = star
}

function kirimReview(){

var text = document.getElementById("review").value
var div = document.createElement("p")
div.innerText = rating + "⭐ - " + text
document.getElementById("listReview").appendChild(div)

}
