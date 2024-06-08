
gsap.from("#page1 #box", {
  //scale:0,
  //delay:1,
  //rotate:360,
  //duration:2
  scale: 0,
  opacity: 0,
  rotate: 720,
  duration: 2,
  scrollTrigger: {
      trigger: "#page1 #box",
      scroller: "body",
      marker: true,
      start: "top 50%",
      end: "top 30%",
      //scrub:true//Deault
      //WE can Assign value for the smoothness
      scrub: 10
  }

})
//gsap.from("#page2 box",{
//  scale:0,
//delay:1,
//duration:2,
//rotation:360,
//scrollTrigger:"#page2 #box"
//By using onject
//scrollTrigger:{
//  trigger:"#page2 #box",
//scroller:"body",
//markers:true,
//start:"top 50%"
//}

//})
gsap.from("#page2 h1", {
  opacity: 0,
  duration: 2,
  x: 500,
  scrollTrigger: {
      trigger: "#page2 h1",
      scroller: "body",
      markers: true,
      start: "top 50%"
  }
})
gsap.from("#page2 h2", {
  opacity: 0,
  duration: 2,
  x: -500,
  scrollTrigger: {
      trigger: "#page2 h2",
      scroller: "body",
      markers: true,
      start: "top 50%"
  }
})
gsap.from("#page3 #box", {
  scale: 0,
  opacity: 0,
  rotate: 720,
  duration: 2,
  scrollTrigger: {
      trigger: "#page3 #box",
      scroller: "body",
      marker: true,
      start: "top 100%",
      end: "top 30%",
      scrub: true
  }

})