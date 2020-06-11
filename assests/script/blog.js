var btn =  document.getElementById('submit');
var id,count = 0;

btn.addEventListener('click',function(){
	var title = document.getElementById('title').value;
	var text = document.getElementById('txt').value;

	topblog.innerHTML  +='<article>'+ '<h1>' + `${title}` + '</h1>' + '<p>' + `${text}` + '<p>'+
	'</article>';
 });


	
