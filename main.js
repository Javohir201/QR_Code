// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

let qrtext = document.getElementById('qrtext');
let qrbtn = document.getElementById('qrbtn');
let qrimge = document.getElementById('qrimge');

// console.log(qrtext);
// console.log(qrbtn);
// console.log(qrimge);


qrbtn.addEventListener('click', () => {
    if(qrtext.value == ''){
        alert("So'z kiriting");
        qrtext.focus();
    } else {
        qrimge.setAttribute('src', "https://api.qrserver.com/v1/create-qr-code/?size=350x350&data="+qrtext.value);
    }
});