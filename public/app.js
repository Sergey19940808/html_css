'use strict';

document.addEventListener("DOMContentLoaded", function (event) {
    if (window.navigator.vendor === '') {
        var listFZContent = document.querySelectorAll('.fz-18');
        for (var i = 0; i < listFZContent.length; ++i) {
            listFZContent[i].style.fontSize = '15px';
        }

        var listFZHeader = document.querySelectorAll('.fz-25');
        for (var _i = 0; _i < listFZHeader.length; ++_i) {
            listFZHeader[_i].style.fontSize = '20px';
        }
    }
});