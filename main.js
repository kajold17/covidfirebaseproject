// Wrap every letter in a span
var textWrapper = document.querySelector('.lt1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.lt1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.lt1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.lt1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

//validate

    //   // Form validation code will come here.
    //   function validate() {
      
        
    //      if( document.myForm.email.value == "" ) {
    //         alert( "Please provide your Email!" );
    //         document.myForm.email.focus() ;
    //         return false;
    //      }
    //      if( document.myForm.password.value == "" ) {
    //       alert( "Please provide your password!" );
    //       document.myForm.password.focus() ;
    //       return false;
    //    }
    //    if( document.myForm.password.value != document.myForm.confpasswd.value) {
    //     alert( "Password doesn't match!" );
    //     document.myForm.confpasswd.focus() ;
    //     return false;
    //  }
    //      return( true );
    //   }

