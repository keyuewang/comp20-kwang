function parse(){
	var message;
	if (window.XMLHttpRequest){
		message = new XMLHttpRequest();
	}else {
		//code for older browsers
		message = new ActiveXObjects("Microsoft.XMLHTTP");
	}
	message.open("GET","data.json",true);
	message.onreadystatechange = function(){
		if (message.readyState == 4 && message.status == 200){
			data = JSON.parse(message.responseText);
			elem = document.getElementById("messages");
			for (count = 0; count < data.length; count++){
				elem.innerHTML += "<p>" + data[count]["content"] + data[count]["username"] + "</p> "
			}
		}
	}
	message.send();
}		

