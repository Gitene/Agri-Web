function toggledropdown() {
    let navbartoggle = document.getElementById('navbar-toggle');
    if (navbartoggle.className === 'ulparent'){
      navbartoggle.className += ' responsive';
      console.log("button is criiiiiiii");
    }else {
      navbartoggle.className === 'ullparent';
    }
}
