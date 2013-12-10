var bt1,bt2,bt3;
var pg1,pg2,pg3;


var init = function() {
  bt1 = document.querySelector('#Bt1');
  bt2 = document.querySelector('#Bt2');
  bt3 = document.querySelector('#Bt3');
  pg1 = document.querySelector('#Pg1');
  pg2 = document.querySelector('#Pg2');
  pg3 = document.querySelector('#Pg3');
  
  bt1.onclick = function(e) {
    Pg1.style.opacity = '100'; 
    Pg2.style.opacity = '0';
    Pg3.style.opacity = '0'; 
  };
  bt2.onclick = function(e) {
    Pg1.style.opacity = '0'; 
    Pg2.style.opacity = '100'; 
    Pg3.style.opacity = '0';
  };
  bt3.onclick = function(e) {
    Pg1.style.opacity = '0'; 
    Pg2.style.opacity = '0'; 
    Pg3.style.opacity = '100';
  };
  
};


window.onload = function(e) {

    init();    
};