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
           - HTML -  
 <pre>
 <style>
    .block{
        height: 10px;
        width: 100%;
    }
</style>

&lt;div class="block"&gt;
    &lt;div class="ruler"&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

           - ruler.js - 
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


!!!!Пример для использования в вертикальном положения и что бы полосы были прижаты к левой стороне блока ruler :

           - HTML -  
 <pre>
 <style>
    .block{
        height: 100vh;
        width: 10px;
    }
</style>

&lt;div class="block"&gt;
    &lt;div class="ruler"&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

           - ruler.js - 
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
