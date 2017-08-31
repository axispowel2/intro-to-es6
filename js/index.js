function key(e) {
	var txt = e;
    document.getElementById("outPut").innerHTML= document.getElementById("outPut").innerHTML + e;  
}

function removes(){
	var out = document.getElementById("outPut").innerHTML;
   	document.getElementById("outPut").innerHTML= out.slice(0, -1) ;
}
function en(br) {
	document.getElementById("outPut").innerHTML= document.getElementById("outPut").innerHTML + br;
}
function spac(sp) {
	document.getElementById("outPut").innerHTML= document.getElementById("outPut").innerHTML+ sp;
}
function tab(ta) {
	document.getElementById("outPut").innerHTML= document.getElementById("outPut").innerHTML+ta;
}