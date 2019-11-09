window.onload = () => {

    var z = document.getElementById('z');

    z.onclick = () => {
        var x = document.getElementById('d').value;
        var adc = document.createElement('text');
        adc.innerHTML = x;

        var i = document.createElement('div');
        o.appendChild(i);
        i.appendChild(adc);
        i.style.cssText = "color:#008B8B;background-color:#40E0D0;display:flex;font-size:20px;line-height:20px;width:600px;height:auto;word-break:break-all;word-wrap:break-word;border:2px solid #FFE4C4"

        document.getElementById('d').value = "";
        var b = document.createElement('button');
        b.style.cssText = "display:block;background-color:#EEE8AA;color:#FF6347"
        i.appendChild(b);
        b.innerHTML = "删除";

        b.onclick = () => {
            i.innerHTML = '';
        }

        var c = document.createElement('button');
        c.style.cssText = "display:block;background-color:#EEE8AA;color:#FF6347"
        i.appendChild(c);
        c.innerHTML = "修改";

        var a = 1;
        c.onclick =function ()  {
                 if(a==1){
                if(!document.getElementById('textarea'))
                {
                   var text = document.createElement('input');
                   text.type = 'text';
                   text.style.cssText="border:0;border-bottom:1 solid black;background-color:grey;"
                   text.id='textarea';
                   {i.appendChild(text);}
                       a = 0;}
                }
                   else 
                    {
                           adc.innerHTML = document.getElementById('textarea').value;
                           i.removeChild(document.getElementById('textarea')); 
                           a = 1;
                   }
               }
    }
 }
 