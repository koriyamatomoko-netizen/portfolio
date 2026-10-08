// /************* 共通のjs ***************/
// document.addEventListener("DOMContentLoaded",() => {



// /************* 
//  header
//  * ***************/
// window.addEventListener('scroll', function() {
//     const catchcopy = document.querySelector('.catchcopy');

//     if (window.scrollY > 0) {
//         catchcopy.style.opacity = '0';
//     } else {
//         catchcopy.style.opacity = '1';
//     }
// });

// const titles = document.querySelectorAll('h2');

// const observer = new IntersectionObserver(function(entries) {
//     entries.forEach(function(entry) {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         }
//     });
// }, {
//     threshold: 0.2
// });

// titles.forEach(function(title) {
//     observer.observe(title);
// });


// /************* 
// MODAL
//  * ***************/


// // const modalButtons = document.querySelectorAll('[data-modal]');
// // const modals = document.querySelectorAll('.modal');
// // const closeButtons = document.querySelectorAll('.modal-close');

// const modalButtons = document.querySelectorAll('[data-modal]'); 
// const modals = document.querySelectorAll('.modal'); 
// const closeButtons = document.querySelectorAll('.modal-close'); 


// /* =========================
//    OPEN MODAL
// ========================= */

// modalButtons.forEach(button => {

//     button.addEventListener('click', () => {

//         const modalId = button.dataset.modal;
//         const modal = document.getElementById(modalId);

//         if (!modal) return;

//         modal.classList.add('is-open');

//         // 背景のスクロールを止める
//         document.body.style.overflow = 'hidden';

//     });

// });




// /* =========================
//    CLOSE MODAL
// ========================= */

// closeButtons.forEach(button => {

//     button.addEventListener('click', () => {

//         const modal = button.closest('.modal');

//         if (!modal) return;

//         modal.classList.remove('is-open');

//         document.body.style.overflow = '';

//     });

// });


// /* =========================
//    CLICK OUTSIDE
// ========================= */

// modals.forEach(modal => {

//     modal.addEventListener('click', event => {

//         if (event.target === modal) {

//             modal.classList.remove('is-open');

//             document.body.style.overflow = '';

//         }

//     });

// });


// /* =========================
//    ESC KEY
// ========================= */

// document.addEventListener('keydown', event => {

//     if (event.key !== 'Escape') return;

//     modals.forEach(modal => {
//         modal.classList.remove('is-open');
//     });

//     document.body.style.overflow = '';

// });





// const pages = modal.querySelectorAll('.modal-page');
// const nextButton = modal.querySelector('.modal-next');
// const prevButton = modal.querySelector('.modal-prev');
// const pageNumber = modal.querySelector('.modal-page-number');

// let currentPage = 0;


// function showPage(page) {

//     pages.forEach((item, index) => {

//         if (index === page) {
//             item.style.display = 'flex';
//         } else {
//             item.style.display = 'none';
//         }

//     });

//     pageNumber.textContent = `${page + 1} / ${pages.length}`;

//     prevButton.style.visibility =
//         page === 0 ? 'hidden' : 'visible';

//     nextButton.style.visibility =
//         page === pages.length - 1 ? 'hidden' : 'visible';
// }


// nextButton.addEventListener('click', () => {

//     if (currentPage < pages.length - 1) {
//         currentPage++;
//         showPage(currentPage);
//     }

// });


// prevButton.addEventListener('click', () => {

//     if (currentPage > 0) {
//         currentPage--;
//         showPage(currentPage);
//     }

// });


// showPage(currentPage);


    
// });



/************* 共通のjs ***************/
document.addEventListener("DOMContentLoaded", () => {



/*************
 header
***************/

window.addEventListener('scroll', function() {

    const catchcopy = document.querySelector('.catchcopy');

    if (window.scrollY > 0) {
        catchcopy.style.opacity = '0';
    } else {
        catchcopy.style.opacity = '1';
    }

});


const titles = document.querySelectorAll('h2');

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

}, {
    threshold: 0.2
});


titles.forEach(function(title) {
    observer.observe(title);
});



/*************
 MODAL
***************/

const modalButtons = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.modal-close');



/* =========================
   OPEN MODAL
========================= */

modalButtons.forEach(button => {

    button.addEventListener('click', () => {

        const modalId = button.dataset.modal;
        const modal = document.getElementById(modalId);

        if (!modal) return;

        modal.classList.add('is-open');

        // 背景のスクロールを止める
        document.body.style.overflow = 'hidden';

    });

});



/* =========================
   CLOSE MODAL
========================= */

closeButtons.forEach(button => {

    button.addEventListener('click', () => {

        const modal = button.closest('.modal');

        if (!modal) return;

        modal.classList.remove('is-open');

        document.body.style.overflow = '';

    });

});



/* =========================
   MODALごとの処理
========================= */

modals.forEach(modal => {


    /* =========================
       CLICK OUTSIDE
    ========================= */

    modal.addEventListener('click', event => {

        if (event.target === modal) {

            modal.classList.remove('is-open');

            document.body.style.overflow = '';

        }

    });



    /* =========================
       MODAL PAGE
    ========================= */

    const pages = modal.querySelectorAll('.modal-page');

    const nextButton = modal.querySelector('.modal-next');

    const prevButton = modal.querySelector('.modal-prev');

    const pageNumber = modal.querySelector('.modal-page-number');


    // ページがない場合は何もしない
    if (!pages.length || !nextButton || !prevButton || !pageNumber) {
        return;
    }


    let currentPage = 0;



    /* =========================
       ページ表示
    ========================= */

    function showPage(page) {

        pages.forEach((item, index) => {

            if (index === page) {

                item.style.display = 'flex';

            } else {

                item.style.display = 'none';

            }

        });


        // ページ番号
        pageNumber.textContent =
            `${page + 1} / ${pages.length}`;


        // 前へボタン
        prevButton.style.visibility =
            page === 0 ? 'hidden' : 'visible';


        // 次へボタン
        nextButton.style.visibility =
            page === pages.length - 1 ? 'hidden' : 'visible';

    }



    /* =========================
       NEXT
    ========================= */

    nextButton.addEventListener('click', () => {

        if (currentPage < pages.length - 1) {

            currentPage++;

            showPage(currentPage);

        }

    });



    /* =========================
       PREV
    ========================= */

    prevButton.addEventListener('click', () => {

        if (currentPage > 0) {

            currentPage--;

            showPage(currentPage);

        }

    });



    // 最初は1ページ目を表示
    showPage(currentPage);


});



/* =========================
   ESC KEY
========================= */

document.addEventListener('keydown', event => {

    if (event.key !== 'Escape') return;

    modals.forEach(modal => {

        modal.classList.remove('is-open');

    });

    document.body.style.overflow = '';

});



/* =========================
   画像
========================= */



const categoryLinks = document.querySelectorAll(".sub-category a");
const workItems = document.querySelectorAll(".work-item");

categoryLinks.forEach(link => {

    link.addEventListener("mouseenter", () => {

        const target = link.dataset.target;

        workItems.forEach(work => {
            work.classList.remove("is-hover");
        });

        const targetWork = document.querySelector(
            `.work-item[data-work="${target}"]`
        );

        if (targetWork) {
            targetWork.classList.add("is-hover");
        }

    });


    link.addEventListener("mouseleave", () => {

        workItems.forEach(work => {
            work.classList.remove("is-hover");
        });

    });

});
    
});


