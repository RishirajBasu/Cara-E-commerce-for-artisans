// Hamburger menu js
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

// singleproduct page js
// javascript slider
var mainimg = document.getElementById('main-img');
console.log(mainimg)
var smallimg= document.getElementsByClassName('small-img')
console.log(smallimg[0])
smallimg[0].onclick= ()=>{
    mainimg.src=smallimg[0].src

}
smallimg[1].onclick= ()=>{
    console.log(mainimg.src)
    // here the source file of the img tag of the mainimg is change to the src file of the img tag of the smallimg
    mainimg.src=smallimg[1].src
}
smallimg[2].onclick= ()=>{
    console.log(mainimg.src)
     // here the source file of the img tag of the mainimg is change to the src file of the img tag of the smallimg
    mainimg.src=smallimg[2].src
}
smallimg[3].onclick= ()=>{
    console.log(mainimg.src)
     // here the source file of the img tag of the mainimg is change to the src file of the img tag of the smallimg
    mainimg.src=smallimg[3].src
}
smallimg[4].onclick= ()=>{
    console.log(mainimg.src)
     // here the source file of the img tag of the mainimg is change to the src file of the img tag of the smallimg  
    mainimg.src=smallimg[4].src
}