var tab=new Array();
tab[0]="f-img";
tab[1]="s-img";
tab[2]="fe-img";
tab[3]="e-img";
 

indx=0
function next(){
    indx++ 



if(indx>3)
indx=3

     var element = document.getElementById(tab[indx]);
    element.style.opacity = "100%";
    
    
for(let i =0;i<4;i++){
    if(i!=indx)
    var element = document.getElementById(tab[i]);
    element.style.opacity = "60%";  }

}

function follow(){
    indx--
if(indx<0)
   indx=0


    var element = document.getElementById(tab[indx]);
   element.style.opacity = "100%";
   document.getElementById('d-text').innerHTML=" high-quality animation on-time and"
   
for(let i = 0;i<4;i++){
   if(i!=indx){ 
   var element = document.getElementById(tab[i]);
   element.style.opacity = "60%";

}
  else {
    var element = document.getElementById(tab[i]);
    element.style.opacity = "100%";   
  }                 
}




    }
