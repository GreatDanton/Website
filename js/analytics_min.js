!function(){var e="http://stats.optotron.eu/12345678",t=document.getElementsByTagName("a"),n=new XMLHttpRequest;n.open("POST",e,!0),n.send();for(var o=0;o<t.length;o++)t[o].addEventListener("click",function(t){var n=new XMLHttpRequest,o=t.currentTarget.href;n.open("POST",e,!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.send(encodeURI("link="+o))})}();