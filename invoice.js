
function buatInvoice(){

var nama=document.getElementById("nama").value
var produk=document.getElementById("produk").value
var hari=document.getElementById("hari").value

var harga=30000
var total=hari*harga

alert(
"INVOICE SEWA HT\n\n"+
"Nama: "+nama+"\n"+
"Produk: "+produk+"\n"+
"Lama sewa: "+hari+" hari\n"+
"Total: Rp "+total
)

}
