// 섹션 탭메뉴
let tabList = document.querySelectorAll(".gnb .btn");

Array.prototype.forEach.call(tabList, function (list) {
  list.children[0].addEventListener("click", function (e) {
    e.preventDefault();

    let tabSection = document.querySelectorAll(".wrapper .content");
    let tabNumber = this.parentElement.getAttribute("data-tabnum");

    Array.prototype.forEach.call(tabSection, function (cont, i) {
      cont.style.display = "none";
      tabList[i].className = "btn";
    });

    tabSection[tabNumber].style.display = "block";

    if (list.className.indexOf("on") == -1) {
      list.className = "btn on";
    }
  });
});


//프로젝트 모달창
const openClick1 = document.getElementById("modal1");
const openClick2 = document.getElementById("modal2");
const openClick3 = document.getElementById("modal3");
const openClick4 = document.getElementById("modal4");
const openClick5 = document.getElementById("modal5");
const modal1 = document.querySelector(".modalContainer1");
const modal2 = document.querySelector(".modalContainer2");
const modal3 = document.querySelector(".modalContainer3");
const modal4 = document.querySelector(".modalContainer4");
const modal5 = document.querySelector(".modalContainer5");
const overlay1 = modal1.querySelector(".modal_overlay1");
const closeBtn1 = modal1.querySelector(".button1");
const overlay2 = modal2.querySelector(".modal_overlay2");
const closeBtn2 = modal2.querySelector(".button2");
const overlay3 = modal3.querySelector(".modal_overlay3");
const closeBtn3 = modal3.querySelector(".button3");
const overlay4 = modal4.querySelector(".modal_overlay4");
const closeBtn4 = modal4.querySelector(".button4");
const overlay5 = modal5.querySelector(".modal_overlay5");
const closeBtn5 = modal5.querySelector(".button5");

const openModal1 = () => {
  modal1.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};
const openModal2 = () => {
  modal2.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};
const openModal3 = () => {
  modal3.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};
const openModal4 = () => {
  modal4.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};
const openModal5 = () => {
  modal5.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

const closeModal1 = () => {
  modal1.classList.add("hidden");
  document.body.style.overflow = "visible";
};
const closeModal2 = () => {
  modal2.classList.add("hidden");
  document.body.style.overflow = "visible";
};
const closeModal3 = () => {
  modal3.classList.add("hidden");
  document.body.style.overflow = "visible";
};
const closeModal4 = () => {
  modal4.classList.add("hidden");
  document.body.style.overflow = "visible";
};
const closeModal5 = () => {
  modal5.classList.add("hidden");
  document.body.style.overflow = "visible";
};

overlay1.addEventListener("click", closeModal1);
closeBtn1.addEventListener("click", closeModal1);

overlay2.addEventListener("click", closeModal2);
closeBtn2.addEventListener("click", closeModal2);

overlay3.addEventListener("click", closeModal3);
closeBtn3.addEventListener("click", closeModal3);

overlay4.addEventListener("click", closeModal4);
closeBtn4.addEventListener("click", closeModal4);

overlay5.addEventListener("click", closeModal5);
closeBtn5.addEventListener("click", closeModal5);

openClick1.addEventListener("click", openModal1);
openClick2.addEventListener("click", openModal2);
openClick3.addEventListener("click", openModal3);
openClick4.addEventListener("click", openModal4);
openClick5.addEventListener("click", openModal5);


$( document ).ready( function() {
  click();
  $( window ).scroll( scrollMove );
})

//스크롤 이동시(모든 페이지)
function scrollMove() {
  temp_scroll=$(this).scrollTop();
  // if ( $( this ).scrollLeft() > 0 ) {
  //     window.scrollTo({left:0});
  // }
  if ( temp_scroll > 400 ) {
      $( '.top' ).fadeIn();
  } else {
      $( '.top' ).fadeOut();
  }
}

function click(){
  $( '.top' ).click( function() {
      $( 'html, body' ).filter(":not(:animated)").animate( { scrollTop : 0 }, 600 );
      return false;
  } );
}