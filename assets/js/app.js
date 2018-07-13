document.addEventListener("DOMContentLoaded", function(event) { 
    if ( window.navigator.vendor === '' ) { 
        const listFZContent = document.querySelectorAll('.fz-18');
        for (let i = 0; i < listFZContent.length; ++i) {
            listFZContent[i].style.fontSize = '15px';
        }

        const listFZHeader = document.querySelectorAll('.fz-25');
        for (let i = 0; i < listFZHeader.length; ++i) {
            listFZHeader[i].style.fontSize = '20px';
        }
    }
});