//loader:
var by = document.getElementsByTagName('body')[0];
var lr = document.getElementById("loader");

var n,lt;
window.onload = function(){	
	lt = new Date().getTime() - window.performance.timing.navigationStart;
	one();
}
function one(){
		lr.style.opacity="0";
		setTimeout(function(){
			lr.style.display="none";
		},2000);
}

//Showing and hiding the top menu on clicking the menu button & clicking outside respectively:	
	var mb = document.getElementById("menuButtonM");
	var mi = document.getElementById("mtItemsM");
	var mc = document.getElementById("menuCloseButtonM");
						
			var n=0;
			
			window.addEventListener('click',function(e){
					
				if(mb.contains(e.target)){n=1;}
				else{n=0;}
				
				if(mc.contains(e.target)){
				mb.style="initial";
				mi.style="initial";			
				}
				
				if(n==0){
					if(mi.contains(e.target)){n==1}
					else{
					mb.style="initial";
					mi.style="initial";
					}
				}
				
				if(n==1){
				mb.style.visibility = "hidden";
				mb.style.opacity="0";			
				mb.addEventListener('transitionend',function(){
				n=1;
				
				mb.style.display = "none";
				mi.style.display = "flex";
				mi.style.visibility = "visible";})			
				}			
			})

//Volume on off:
/*var vol = document.getElementById("Volume");
var spk1 = document.getElementById("Speaker1");
var spk2 = document.getElementById("Speaker2");
var snd = document.getElementById("Sound");
var sno = document.getElementById("No_sound");

var bg1 = document.getElementById("bgAudio1");
var bg2 = document.getElementById("bgAudio2");

var m=0;

window.addEventListener('click',function(g){
	if(m>=1||vol.contains(g.target)){
		if(spk1.contains(g.target)||snd.contains(g.target)){
			snd.style.display="none";
			spk1.style.display="none";
			sno.style.display="block";
			spk2.style.display="block";
			bg1.pause();
			bg2.pause();
		}
		if(spk2.contains(g.target)||sno.contains(g.target)){
			snd.style.display="initial";
			spk1.style.display="initial";
			sno.style.display="none";
			spk2.style.display="none";
			if(bg1.muted=true){bg2.play();}
			else{
				bg1.play();
				bg1.addEventListener('ended',function(){
					bg1.muted=true;
					bg2.play();
				});	
			}
		}
		m++;
		}
	else if(m==0){	
		snd.style.display="initial";
		spk1.style.display="initial";
		sno.style.display="none";
		spk2.style.display="none";
		bg1.play();
		bg1.addEventListener('ended',function(){
			bg1.muted=true;
			bg2.play();
		});			
	}
})*/
