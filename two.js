
window.onload =function ()  {
    var adc = document.getElementsByTagName('button');
    adc[0].onclick =function ()  {
        adc[0].style.opacity = '0.5';
        console.log('我的透明度从0.8变为0.5了');
    }
}