//NFT 1//
var eoc1 = document.querySelector('#eoc-1');

var m1 = document.querySelector('.modal-bg1');

eoc1.addEventListener('click', function () {
    m1.classList.add('bg1-active')
});

//NFT 2//
var eoc2 = document.querySelector('#eoc-2');

var m2 = document.querySelector('.modal-bg2');

eoc2.addEventListener('click', function () {
    m2.classList.add('bg2-active')
});

//NFT 3//
var eoc3 = document.querySelector('#eoc-3');

var m3 = document.querySelector('.modal-bg3');

eoc3.addEventListener('click', function () {
    m3.classList.add('bg3-active')
});

//NFT 4//
var eoc4 = document.querySelector('#eoc-4');

var m4 = document.querySelector('.modal-bg4');

eoc4.addEventListener('click', function () {
    m4.classList.add('bg4-active')
});

//NFT 5//
var eoc5 = document.querySelector('#eoc-5');

var m5 = document.querySelector('.modal-bg5');

eoc5.addEventListener('click', function () {
    m5.classList.add('bg5-active')
});

//Close Modal 1//

mc1.addEventListener('click', function () {
    m1.classList.remove('bg1-active')
});

//Close Modal 2//
mc2.addEventListener('click', function () {
    m2.classList.remove('bg2-active')
});

//Close Modal 3//
mc3.addEventListener('click', function () {
    m3.classList.remove('bg3-active')
});

//Close Modal 4//
mc4.addEventListener('click', function () {
    m4.classList.remove('bg4-active')
});

//Close Modal 5//
mc5.addEventListener('click', function () {
    m5.classList.remove('bg5-active')
});
