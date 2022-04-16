
var list=document.getElementsByClassName('list-item');
function clicked(){
    alert('the color of list items will change into red');
for(var i=0; i<=list.length; i++){

    list[i].style.color='red';
}
}

document.querySelector('.btn').addEventListener('click',clicked);


