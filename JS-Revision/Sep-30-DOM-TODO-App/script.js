let form = document.getElementById('form')
let input = document.getElementById('input')
let msg =document.getElementById('msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("button click");
    checkFormValidation();
});
let checkFormValidation = () => {
    console.log(input.value)
    // if form input present, log success
    if(input .value != ''){
        console.log('success');
        msg.innerHTML = '';
       
    }
    else{
        console.log('failure');
        msg.innerHTML= <strong>Add some text, empty post not allowed !</strong>
    }


    // else form input 
};