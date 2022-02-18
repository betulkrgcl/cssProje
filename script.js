let nav =document.querySelector("#navbar")
function animation() {
    let controller =new ScrollMagic.Controller
    let t1 = gsap.timeline({ defaults : { ease : Expo.InOut } } );
    t1.fromTo(nav , 2 ,{ y : "-10rem " },{ y:0});
    t1.fromTo(
        ".soldan",
        1,
        { x : "-2rem" , opacity : 0},
        { x : 0 , opacity : 1},
       
        
        


 );
 let t2 = gsap.timeline({ defaults : { ease : Expo.InOut}})
 
 t1.fromTo(
    ".sagdan",
    1,
    { x : "2rem" , opacity : 0},
    { x : 0 , opacity : 1},
    "-=1"


);
t2.fromTo(
    ".sag img",
    2,
    { x : "5rem" , opacity : 0},
    { x : "0" , opacity : 1},
    "-=0.5"

); 
 //t1.fromTo(".sag img", 0.2 , {scale : 1.1}, {scale : 1}); 


t2.fromTo ( 
    ".sol h4 , .sol p",
    2,
    { x: "-3rem" , opacity: 0},
    { x: "0" , opacity:1 },
    "-=0.5"
    
); 


t2.fromTo ( 
    ".sag h4 , .sag p",
    2,
    { x: "3rem" , opacity: 0},
    { x: "0" , opacity:1 },
    "-=0.5"
    
); 
t2.fromTo(
    ".sol img",
    2,
    { x : "-5rem" , opacity : 0},
    { x : "0" , opacity : 1},
    "-=0.5"

); 
//t2.fromTo (".sol img ", 0.01 , { scale : 1.5} , {scale : 1});
new ScrollMagic.Scene({
    triggerElement : "#bolme1",
    triggerHook : 0.5,
    reverse: false
})
    .setTween(t2)
    .addTo(controller)

    let t3 = gsap.timeline({defaults : { ease : Expo.InOut}});
    t3.fromTo(
        ".social-media",
        1,
        {y : "-3rem", opacity : 0},
        {y : "0", opacity : 1 , stagger: 0.8}

    );
    t3.set("#footer" , {clearProps : "all"});
    new ScrollMagic.Scene({
        triggerElement:"#footer",
        triggerHook: 0.5,
        reverse: false,
    })
    .setTween(t3)
    .addTo(controller);
}
animation();

function myFunction() {
    document.getElementById("footer").style.transition = "all 2s";
  }