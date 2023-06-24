// Smooth Scrolling

var navAnchors=document.querySelectorAll ('nav a')

for (let i=0;i<navAnchors.length;i++){
    navAnchors[i].addEventListener('click',(event)=>{
        event.preventDefault()
        var targetSectionId = navAnchors[i].getAttribute('href').slice(1)
        var targetSection=document.getElementById(targetSectionId)
        // console.log(targetSection)
        
        var interval=setInterval(()=>{
            var targetCoordinates=targetSection.getBoundingClientRect()
            // console.log(targetCoordinates)
            if (targetCoordinates.top<=10){
                clearInterval(interval)
                return
            }
            window.scrollBy(0,30)
        },10)
    })
}

let alertBox = document.getElementById("alert-box");
let submitBtn = document.getElementById("contact-submit");

let showAlert = () => {
    alertBox.style.opacity = '1';
    alertBox.style.visibility = 'visible';
};

let sendMsg = () => {
    let data = {
        name: document.getElementById('formname').value,
        email: document.getElementById('formemail').value,
        message : document.getElementById('msg').value
    };
    console.log(data);
    let url='http://debajyoti.tk:8130/submit'
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            return showAlert();
        }
        throw new Error('Error: ' + response.status);
    })
    .catch(error => {
        console.error(error);
        document.getElementById('text-head').className='bg-red'
        document.getElementById('text-head').innerHTML='Failed'
        document.getElementById('text-body').innerHTML='Something went wrong, Your message can not be send'
        return showAlert();
    });
    
};

let hideAlert = () => {
    alertBox.style.opacity = '0';
    setTimeout(() => {
        alertBox.style.visibility = 'hidden';
    }, 500); // Adjust the duration (in milliseconds) as desired
};