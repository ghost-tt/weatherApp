// console.log('Client side Javascript file is loaded');
// fetch('http://puzzle.mead.io/puzzle').then((response)=> {
//     response.json().then((data) => {
//         console.log(data);
//     });
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
weatherForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const location = search.value;
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    const url = 'http://localhost:3000/weather?address=' + location;
    fetch(url).then((response)=> {
    response.json().then((data) => {
            if(data.error){
                ///console.log("Error: "+data.error);
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
                //console.log("Current ForestCast Data: " +data.forecast);
                //console.log("Location: " +data.location);
            }
        });
    });
});


