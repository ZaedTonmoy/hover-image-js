/*Name this external file gallery.js*/
/*
function upDate(previewPic){
    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src +"')";
}
	function unDo(){
	document.getElementById('image').innerHTML="Hover over an image below to display here.";
    document.getElementById('image').style.backgroundImage = "url('')";
}
*/

/*
function upDate(previewPic){

    x= document.getElementById("image");
    x.innerHTML = previewPic.alt;
    x.style.backgroundImage = "url("+previewPic.src+")";
  
    }

    function unDo(){
    document.getElementById("image").innerHTML = "Hover over an image below to display here";
    document.getElementById("image").style.backgroundImage = "url('')";
        
    }
*/
/*Name this external file gallery.js*/

/*Name this external file gallery.js*/

function upDate(previewPic){
    var src = previewPic.src;
    document.getElementById('image').style.backgroundImage = "url("+previewPic.src+")";
    document.getElementById('image').innerHTML = previewPic.alt;
    }

    function unDo(){
    document.getElementById('image').style.backgroundImage = "url('')";
    var text = "Hover over an image below to display here.";
    document.getElementById('image').innerHTML = text;
    }