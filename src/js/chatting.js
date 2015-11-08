
var webSocket;
var messageTextArea

$(document).ready(function(){

		webSocket = new WebSocket("ws://localhost:8080/chat");
		messageTextArea = document.getElementById("messageTextArea");
		webSocket.onopen = function(message){processOpen(message)};
		webSocket.onclose = function(message){processClose(message)};
		webSocket.onerror = function(message){processError(message)};
		webSocket.onmessage = function(message){processMessage(message)};

});

		function processOpen(message){
			messageTextArea.value += "Server connect...\n";
		}
		function processClose(message){
			messageTextArea.value += "Server Disconnect...\n";
		}
		function processError(message){
			messageTextArea.value += "error...\n"
		}
		function processMessage(message){
			messageTextArea.value += "Recieve From Server => "+message.data+"\n";
		}
		function sendMessage(){
			var message = document.getElementById("textMessage");
			webSocket.send("{\"type\":\"chat\",\"msg\":\""+message.value+"\"}");
			message.value = "";
		}
		function disconnect(){
			webSocket.close();
		}


