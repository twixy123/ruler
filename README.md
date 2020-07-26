# ruler
Полоса линейки на сайте

Для корректного использования требуется :
В HTML создать  создать два div: 
  первый родительский для ваших нужд, для придания ему значения высоты и ширины;
  второй div с классом ruler
  
В файле ruler.js в самом низу задать :
  ось направления для ваших нужд в ключах top/right/bottom/left; 
  цвет для блока ruler в ключе rulerBackgroundColor; 
  цвет полос в ключе lineColor.

!!!!Пример для использования в горизонтальном положения и что бы полосы были прижаты к низу блока ruller :

 <pre>
 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- HTML -  

 <style>
    .block{
        height: 10px;
        width: 100%;
    }
</style>

&lt;div class="block"&gt;
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="ruler"&gt;&lt;/div&gt;
&lt;/div&gt;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ruler.js - 

"Не нужный вам код"...
           
const ruler = new RULER({
    ruler: '.ruler',
    top: true,
    left: false,
    right:false,
    bottom:false,
    rulerBackgroundColor: 'black',
    lineColor: 'white',
})
</pre>


!!!!Пример для использования в вертикальном положения и что бы полосы были прижаты к левой стороне блока ruler :

 <pre>
 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- HTML -  

 <style>
    .block{
        height: 100vh;
        width: 10px;
    }
</style>

&lt;div class="block"&gt;
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="ruler"&gt;&lt;/div&gt;
&lt;/div&gt;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ruler.js - 

"Не нужный вам код"...
       
const ruler = new RULER({
    ruler: '.ruler',
    top: false,
    left: true,
    right:false,
    bottom:false,
    rulerBackgroundColor: 'black',
    lineColor: 'white',
})
</pre>
