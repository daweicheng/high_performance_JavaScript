function initUI(){
	with (document){ //avoid!
		var bd = body,
		links = getElementsByTagName("a"),
		i= 0,
		len = links.length;
		while(i < len){
			update(links[i++]);
		}
		getElementById("go-btn").onclick = function(){
			start();
		};
		bd.className = "active";
	}
}