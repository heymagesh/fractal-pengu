function copy(){

var copyText=document.getElementById("ca")

copyText.select()

document.execCommand("copy")

alert("Contract copied!")

}
