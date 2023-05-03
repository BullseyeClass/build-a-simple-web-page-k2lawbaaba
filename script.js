document.querySelector('#btn').addEventListener('click', ()=>{
    alert('Hello World');
   var result= document.querySelector("#result");
    result.innerText= "Button Clicked";
    result.classList.add("result");
});