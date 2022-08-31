let images=document.querySelectorAll("img.pimg");
let cmpimages=document.querySelectorAll("img.cimg");
let cont=document.querySelector("div.player");
let cmpcont=document.querySelector("div.computer");
let rock=document.querySelector("img[alt='rock']");
let paper=document.querySelector("img[alt='paper']");
let scissor=document.querySelector("img[alt='scissor']");
let crock=document.querySelector("img[alt='crock']");
let cpaper=document.querySelector("img[alt='cpaper']");
let cscissor=document.querySelector("img[alt='cscissor']");
let p=document.querySelector(".Win");


let rps=["rock","paper","scissor"];

for(let img of images)
{
	img.onclick=function()
	{
		let ranimg=Math.floor(Math.random()*3);
		ranimg=Math.floor(Math.random()*3);
		


		cont.style.animationPlayState="running";		
		cmpcont.style.animationPlayState="running";		

		setTimeout(function()
		{
			cont.style.animationPlayState="running"==="running"?"paused":"running";
			cmpcont.style.animationPlayState="running"==="running"?"paused":"running";

			for(let imgall of images)
			{
				imgall.style.display="none";
			}
			for(let imgall of cmpimages)
			{
				imgall.style.display="none";
			}

			switch(img.alt)
			{
				case "rock":
					rock.style.display="block";
					break;

				case "paper":
					paper.style.display="block";
					break;

				case "scissor":
					scissor.style.display="block";
					break;

			}

			switch(rps[ranimg])
			{
				case "rock":
					crock.style.display="block";
					break;

				case "paper":
					cpaper.style.display="block";
					break;

				case "scissor":
					cscissor.style.display="block";
					break;

			}

			Winscenario(img.alt,rps[ranimg]);
			document.querySelector(".restart").style.display="block";
			document.querySelector(".restart").onclick=Restart;

		},810);

	}
}

function Restart()
{
	location.reload(true);
}

function Winscenario(player,computer)
{
	if(player===computer)
	{
		p.innerHTML="Nobody Winssss!<br>DRAW!";
	}
	
	else if(player==="rock" && computer==="scissor")
	{
		p.innerHTML="Booo to computer!.<br>You Win!";
	}

	else if(player==="paper" && computer==="rock")
	{
		p.innerHTML="Booo to computer!.<br>You Win!";
	}
	else if(player==="scissor" && computer==="paper")
	{
		p.innerHTML="Cut-cut-cut! Booo to computer!.<br>You Win!	";
	}
	
	else
	{
		p.innerHTML="You Lose!";
	}
	



}
