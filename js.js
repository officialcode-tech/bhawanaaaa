	function calculate()
{
	var firstinputid=document.getElementById("firstinputid").value;
	var selecctid=document.getElementById("selecctid").value;
	var secondinputid=document.getElementById("secondinputid").value;
	var selectid=document.getElementById("selectid").value;
	var secondselectid=document.getElementById("secondselectid").value;
	var thirdselectid=document.getElementById("thirdselectid").value;
	var write="";
	
	if(firstinputid==0||selecctid==""|| secondinputid==0)
	{
		
		alert("please enter values");
	}
	else if(selecctid==selectid)
	{
		var voutstanding=(firstinputid/100)*15;
		var outstanding=voutstanding/secondinputid;
		
		document.getElementById("amountt").innerHTML=outstanding;
		
	}
	else if(selecctid==secondselectid)
	{
		var vgood=(firstinputid/100)*10;
		var good= vgood/secondinputid;
		
		
		document.getElementById("amountt").innerHTML=good;
		
	
	}
		else{
			
			var vok=(firstinputid/100)*5;
		var ok=vok/secondinputid;
		
		document.getElementById("amountt").innerHTML=ok;
		
		}
		
	
}
document.getElementById("button").onclick=function(){
	
	
	calculate();
}
	
		
		
		
		
		
		