const pop = gsap.timeline({
    paused: "true"
})
pop.to(".popup-template",{

    duration: .7,
    x:0,
    y: 0,
    opacity: 1,
    scale: 1,
    ease: Power4.easeOut
})
pop.from(".popup-top, .form-row1 h1, .form-row1 inpurt, .form-row1 textarea, .submit-popup,.emptybox",{
    duration : .5,
    opacity: 0,
    y: 15,
    stagger: {
        amount: .4
    }
}, "-=.2")

function openPop(){
    pop.play()
}
function closePop(){
    pop.reverse()
}


const cursor = document.querySelector(".cursor, .inner-cursor")
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX  + 'px';
    cursor.style.top = e.pageY  + 'px';

    innerCursor.style.left = e.pageX + 'px';
    innerCursor.style.top = e.pageY  + 'px';
})


