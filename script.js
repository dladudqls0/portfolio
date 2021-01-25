


$(document).ready(function () {
  modal();
  click();
  $(window).scroll(scrollMove);
  tab();
})

//스크롤 이동시(모든 페이지)
function scrollMove() {
  temp_scroll = $(this).scrollTop();
  // if ( $( this ).scrollLeft() > 0 ) {
  //     window.scrollTo({left:0});
  // }
  if (temp_scroll > 400) {
    $('.top').fadeIn();
  } else {
    $('.top').fadeOut();
  }
}

function click() {
  $('.top').click(function () {
    $('html, body').filter(":not(:animated)").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
}

/*모달창*/
function modal() {
  const modals = document.querySelectorAll('.modal')
  const modalContainers = document.querySelectorAll('.modalContainer')
  const overlays = document.querySelectorAll('.modal_overlay');
  const closeBtns = document.querySelectorAll('button');
  for (let m = 0; m < modals.length; m++)
    modals[m].addEventListener('click', function () {
      openModal(m)
    });
  for (let m = 0; m < closeBtns.length; m++)
    closeBtns[m].addEventListener('click', function () {
      closeModal(this.parentElement.parentElement.parentElement.parentElement)
    });
  for (let m = 0; m < overlays.length; m++)
    overlays[m].addEventListener('click', function () {
      closeModal(this.parentElement)
    });
  const openModal = (num) => {
    modalContainers[num].classList.remove('hidden');
    document.body.style.overflow = "hidden";
  }
  const closeModal = (obj) => {
    obj.classList.add('hidden');
    document.body.style.overflow = "visible";
  }
}

// 섹션 탭메뉴
function tab() {
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

}
