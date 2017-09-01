var cab = false;
var shi = false;

function key(e) {
    var txt = e;
        if (cab == true) {
            if (shi == true) {
            	document.getElementById("outPut").innerHTML = document.getElementById("outPut").innerHTML + txt;
            	shi == false;
            }
            else{
            	document.getElementById("outPut").innerHTML = document.getElementById("outPut").innerHTML + txt.toUpperCase();
            }
        }
        else if (cab == false && shi == true) {
        	document.getElementById("outPut").innerHTML = document.getElementById("outPut").innerHTML + txt.toUpperCase();
            document.getElementById("ship").style.backgroundColor ="black";
            shi = false;
        } 
        else {
            document.getElementById("outPut").innerHTML = document.getElementById("outPut").innerHTML + txt;
        }
}

function removes() {
    var out = document.getElementById("outPut").innerHTML;
    document.getElementById("outPut").innerHTML = out.slice(0, -1);
}

function en(br) {
    document.getElementById("outPut").innerHTML = document.getElementById("outPut").innerHTML + br;
}

function spac(sp) {
    document.getElementById("outPut").innerHTML = document.getElementById("outPut").innerHTML + sp;
}

function tab() {
    document.getElementById("outPut").innerHTML = document.getElementById("outPut").innerHTML + "\t";
}

function cabb() {
	if (cab == false) {
        cab = true;
        document.getElementById("cabb").style.backgroundColor ="#adad85";
    }	
    else{
    	cab = false;
    	document.getElementById("cabb").style.backgroundColor ="black";
    }
    
}
function ship(){
	if (shi == false) {
        shi = true;
        document.getElementById("ship").style.backgroundColor ="#8a8a5c";
    }	
    else{
    	shi = false;
    	document.getElementById("ship").style.backgroundColor ="black";
    }
}