var x = document.getElementsByClassName("card-body");


var i;
for (i = 0; i < x.length; i++) {
  var util = x[i].getElementsByTagName('h2')[0].innerHTML;
  util = util.replace('%','');
  util = Number(util);

   if (util >= 60){
        x[i].style.backgroundColor = "rgba(152,161,72,0.7)";
    }
    else if (util >= 35 && util < 60){
        x[i].style.backgroundColor = "rgba(243,156,18,0.7)";
    }
    else{
         x[i].style.backgroundColor = "rgba(231,76,60,0.7)";
    }

}