
function kirimWA(){

var nama=document.getElementById("nama").value
var produk=document.getElementById("produk").value
var hari=document.getElementById("hari").value

var pesan=
"Halo admin saya ingin sewa HT%0A"+
"Nama: "+nama+"%0A"+
"Produk: "+produk+"%0A"+
"Lama sewa: "+hari+" hari"

window.open("https://wa.me/6281234567890?text="+pesan)

}
