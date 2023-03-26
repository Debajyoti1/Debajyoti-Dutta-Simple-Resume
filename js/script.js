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
            window.scrollBy(0,50)
        },10)
    })
}