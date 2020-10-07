"use strict"


function col(t, y)
{

var tt  = t / 30;
if(y) tt += 65;
tt = tt % 110;
if (tt < 50) return 1;
if((tt >= 50 && tt < 65) || tt > 95) return 2;
return 3;
}
window.addEventListener("load", function(over) {
	
let car = Array(100); 

var vx = Array(100);
var vy = Array(100);

for(var i = 0; i < 100; i++)
{
    vy[i] = 0;
    vx[i] = 0;
}

var cx = Array(100);
var cy = Array(100);

for(var i = 0; i < 100; i++)
{
    cy[i] = 0;
    cx[i] = 0;
}

var s = Array(100);

for(var i = 0; i < 100; i++)
{
    s[i] = false;

}
var n = 0;


let xm = [767, 748, 729, 709, 690, 671, 500, 500, 500, 935, 935, 935];
let ym = [480, 480, 480, 40, 40, 40, 316, 298, 279, 258, 239, 221];

var T = 0;



var m = Array(10);

for (var i = 0; i < 4; i++) {
     m[i] = document.createElement('img');
    document.body.append(m[i]);
    m[i].width = 17;
    m[i].height = 17;
    m[i].style.position = "absolute";
}
m[0].src = "images/m1.png";
m[1].src = "images/m3.png";
m[2].src = "images/m1.png";
m[3].src = "images/m3.png";
m[0].style.top =  '179px';
m[0].style.left = '650px';
m[1].style.top =  '200px';
m[1].style.left = '805px';
m[2].style.top =  '356px';
m[2].style.left = '783px';
m[3].style.top =  '33' + 3 + 'px';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
m[3].style.left = '630px';
////////////////////////////////////////////////////////////////////////

function animate()
{
    requestAnimationFrame(animate);



T++;
m[0].src = "images/m" + col(T, false) + ".png";
m[1].src = "images/m" + col(T, true) + ".png";
m[2].src = "images/m" + col(T, false) + ".png";
m[3].src = "images/m" + col(T, true) + ".png";
    var i = 0, u = 0, nn = n;

    while (u < nn && i < 99)
    {
        
        //alert(i + " " + s[i]);
        if(s[i])
        {
var pp = false;

if ((cx[i] + vx[i] < 592 || cx[i] + vx[i] > 842 || cy[i] + vy[i] < 137 || cy[i] + vy[i] > 397)
 || (cx[i] < 600 && vx[i] < 0) || (cx[i] > 850 && vx[i] > 0) || (cy[i] < 146 && vy[i] < 0) || (cy[i] > 405 && vy[i] > 0))
{
var w, h;
if (vx[i] == 0)
{
    h = 26;
    w = 12;
}
else
{
    h = 12;
    w = 26;  
}
pp = true;

for (var j = 0; j < 100 && pp; j++) {
    var wj, hj;
    if (vx[j] == 0)
{
    hj = 26;
    wj = 12;
}
else
{
    hj = 12;
    wj = 26;  
}
   
   pp = !s[j] || i == j || (cx[i] + vx[i] - 5 > cx[j] + wj) || (cx[i] + vx[i] + w + 5 < cx[j]) || (cy[i] + vy[i] - 5 > cy[j] + hj) || (cy[i] + vy[i] + h + 5 < cy[j]);

}
//if(pp)car[i].src = "images/test3.png";
}
else if(!(cx[i] < 592 || cx[i] > 842 || cy[i] < 137 || cy[i] > 397) 
  && ((col(T, false) == 2 && Math.abs(vy[i]) > 0) || (col(T, true) == 2 && Math.abs(vx[i]) > 0))) {
   //(cx[i] + vx[i] < 836 && cx[i] + vx[i] > 614 && cy[i] + vy[i] < 414  && cy[i] + vy[i] > 166)
   pp = true;
//car[i].src = "images/test1.png";
}
if(pp || (col(T, false) == 3 && Math.abs(vy[i]) > 0) || (col(T, true) == 3 && Math.abs(vx[i]) > 0))

{
//if(!pp)car[i].src = "images/test2.png";
u++;
cx[i] += vx[i];
cy[i] += vy[i];
car[i].style.top = cy[i] + 'px';
car[i].style.left = cx[i]  + 'px';

}



if (cy[i] < 35 ||  cy[i] > 480 || cx[i] > 935 || cx[i] < 500){
    car[i].remove();
    s[i] = false;
    n--;
}
}
i++;
};








var t = Math.floor(Math.random() * 100) % 12;


var dor = Array(t + 1);
var dn = 0, k =  Math.floor(Math.random() * 100) % 12;

for(var j = k; j < 12 && dn < t + 1; j++)
{
    var p = true;

    for (i = 0; i < 100 && p; i++) 
    {
p = !s[i] || (cy[i] < 450 && cy[i] > 71 && cx[i] > 530 && cx[i] < 908)
 || (cx[i] != xm[j] && Math.floor(j / 3) < 2) || (cy[i] != ym[j] && Math.floor(j / 3) >= 2);
}
if (p) {
dor[dn] = j;
dn++;
}

}

//alert(dor);

    for(var j = 0; j < dn; j++)
    {
        if(Math.floor(Math.random() * 15) == 1)
        {
    var p = true;
    for (var i = 0; i < 100 && p; i++) 
    {
        if(!s[i])
        { 
            car[i] = document.createElement('img');
            document.body.append(car[i]);
s[i] = true;
car[i].width = 12;
car[i].height = 26;
if ( Math.floor(dor[j] / 3) == 0) {
    vx[i] = 0;
    vy[i] = -1;
}
else {
    if ( Math.floor(dor[j] / 3) == 1) {
            vx[i] = 0;
            vy[i] = 1;
}
         else {
               if ( Math.floor(dor[j] / 3) == 2) {    
                                     vx[i] = 1;
                                     vy[i] = 0;}
                                     else{        vx[i] = -1;
                                     vy[i] = 0;}
}}



	car[i].src = 'images/car' + Math.floor(Math.random() * 10) % 7 + '.png';
car[i].style.position = "absolute";
cx[i] = xm[dor[j]];
cy[i] = ym[dor[j]];
car[i].style.top = cy[i] + 'px';
car[i].style.left = cx[i]  + 'px';
car[i].id = "c" + i;
jQuery(document).ready(function() {jQuery("#" + car[i].id).rotate({angle:Math.atan(vx[i] / vy[i]) / (Math.PI/180)});});
u++;

p = false;
n++;
        }
    }

}

}



}
animate();


});






