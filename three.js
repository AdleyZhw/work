window.onload = function()  {
    var items = document.getElementsByTagName('li');
    let listArr = ['list1', 'list2', 'list3', 'list4', 'list5'];
    // let listAll = ['text1', 'text2', 'text3', 'text4', 'text5'];
    // var a = 0;
    
    for (let i = 0; i < items.length; i++) 
    {
        items[i].addEventListener('click',function()  
        {
            items[i].innerHTML = listArr[i];
        },false);
        
    }
// if(a == 1){
//     for (let i = 0; i < items.length; i++) 
//     {
//         items[i].addEventListener('click',function()  
//         {
//             items[i].innerHTML = listAll[i];
//         },false);
//       }
//    }
}