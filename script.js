//les variables dont on a besoin 

var sp, btnstart, btnstop, t, mn, s, h, ms; 

// fonction pour initialiser les variables

window.onload = function(){
    sp = document.getElementsByTagName('span'); 
    btnstart = document.getElementById('start'); 
    btnstop = document.getElementById('stop'); 
    ms = 0, s = 0, mn = 0, h = 0;  

}

//le compteur 


function update_chrono(){
   ms+=1;
    if(ms == 10){
        ms=1; 
        s+=1
    }
    if(s == 60){
        s=1; 
        mn+=1
    }
    if(mn == 60){
        mn=0; 
        h+=1; 
    }


//insertion des valeurs des spans 
//[0] permet de choper le premier span 
//[1] permet de choper le deuxieme span ...

sp[0].innerHTML = h + "h";
sp[1].innerHTML = mn + "min";
sp[2].innerHTML = s + "s";
sp[3].innerHTML = ms + "ms";


}

//mettre en place fonction du bouton start

function start(){
    //cette ligne de code execute la function update_chrono()
    t = setInterval(update_chrono, 100); 
    btnstart.disabled = true
}

