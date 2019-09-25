var s=0;
var w=0;
var hscore=0;
var music=document.querySelector('.background');
var lost=document.querySelector('.lose');
var scor=document.querySelector('.score');
var htp=document.querySelector('.htp');
var abt=document.querySelector('.abt');
function open_htp()
{
  //htp.style.height=100%
  htp.style.width="100%";
}
function closehtp()
{
  htp.style.width="0%";
}
function open_abt()
{
  abt.style.height='100%';
}
function closeabt()
{
  abt.style.height='0%';
}
function placebombs(d)
{
//  console.log((d.length)/2);
  var l=[];
  var r=0;
  while(l.length < (d.length)/2)
  {
    let i=Math.floor(Math.random()*d.length);
    j=1
    for(let k=0;k<l.length;k++)
    {
      if(i==l[k])
      {
        j=0;
      }
    }
    if (j==1)
    {
      l.push(i);
    }
  }
  //console.log(l)
  for(let i=0;i<l.length;i++)
  {
    d[l[i]].id=2;
  }
}
function lose()
{
  music.pause();
  lost.play();
  music.load();
  var b=document.querySelector('.anounce');
  b.innerHTML="YOU LOSE..better luck next time....";
}
function win(d)
{
  if(s>hscore)
  {
    hscore=s;
  }
  var b=document.querySelector('.anounce');
  for(let j=0;j<d.length;j++)
  {
    d[j].id=0;
  }
  b.innerHTML="Winner Winner Chicken Diner!!!!";
}
function check(d,i)
{
  //console.log(d);
  //console.log(i);
  if(d[i].id==1)
  {
    var sc=document.querySelector('.scorep');
    scor.currentTime=0;
    //treasure
    scor.play();
    d[i].src="source/images/t_open.jpg";
    d[i].id=0;
    s++;
    //console.log(s);
    let cpy='<h4>score: '+s+'</h4>'+'<h4 class=\'hsc\'>HighScore:'+hscore+'</h4>';
    //console.log(cpy);
    sc.innerHTML=cpy;
    //console.log(Math.floor(d.length/2));
    w++;
    //console.log(sc);
    if(w>=Math.floor(d.length/2))
    {
      win(d);
    }
  }
  else if(d[i].id==0)
  {
    //already opened
  }
  else
  {
    //bomb
    d[i].src="source/images/bomb.png";
    for(let j=0;j<d.length;j++)
    {
      d[j].id=0;
    }
    lose();
  }
}
function func()
{
  lost.pause();
  lost.load();
  music.play();
  var b=document.querySelector('.anounce');
  b.innerHTML="GAME START";
  w=0;
  var sc=document.querySelector('.scorep');
  s=0;
  sc.innerHTML='<h4 >score: 0</h4> <h4 class=\'hsc\'>HighScore:'+hscore+'</h4>';
  var a=document.querySelector('#num');
  var b=document.querySelector('.game');
  var c="<img id=\"1\" class=\"t_close\" src=\"source/images/t_close\.jpg\">  ";
  var dc=""
  for(let i=0;i<a.value;i++)
  {
  //  console.log(dc);
    dc=dc+c;
  }
  b.innerHTML=dc;
  var d=document.querySelectorAll('.t_close');
  placebombs(d);
  for(let i=0;i<d.length;i++)
  {
    d[i].addEventListener('click',function(){check(d,i)});
  }
  //console.log(d[0].src)
}
music.play();
music.loop=true;
