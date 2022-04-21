/** Кроссбраузерность, для корректной работы в IE.
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
 if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

// Show/hide mobile menu icon

const asideToggleBtnE = document.querySelector('.menu-icon-wrapper');
const menuIconE = document.querySelector('.menu-icon');
const asideE = document.querySelector('.aside');

asideToggleBtnE.onclick = function () {
    menuIconE.classList.toggle('menu-icon-active');
    asideE.classList.toggle('aside--mobile-active');

};

// Show/hide more cards items

const showMoreBtnE = document.querySelector('.btn-show-more');
const cardsE = document.querySelectorAll(".card-link-hidden");

showMoreBtnE.onclick = function () {
    const showMoreTextE = document.querySelector('.show-more-text');
    
    cardsE.forEach(e => {
        e.classList.toggle('card-link-hidden');
        if (!e.classList.contains('card-link-hidden')) {
            showMoreTextE.textContent = 'Скрыть';
        } else showMoreTextE.textContent = 'Показать еще';

    });
};

// Hide/show fieldsets bodies

const fieldsetsE = document.querySelectorAll('.fieldset');

fieldsetsE.forEach(fieldsetE => {
    fieldsetE.addEventListener('click', onClick);
})

function onClick(element) {
    if (element.target.classList.contains('fieldset__legend')) {
        element.target.classList.toggle('fieldset__legend--active');
        element.target.nextElementSibling.classList.toggle('fieldset__body--hidden');
    }
}

// Checkboxes selection

const checkBoxAnyE = document.querySelector('#any');
const topLocationCheckboxesE = document.querySelectorAll('[data-location-param]');

checkBoxAnyE.addEventListener('change', function () {
    if (checkBoxAnyE.checked) {
        topLocationCheckboxesE.forEach(function (item) {
            item.checked = false;
        });
    }
})

topLocationCheckboxesE.forEach(function (item) {
    item.addEventListener('change', function () {
        if (checkBoxAnyE.checked) {
            checkBoxAnyE.checked = false;
        }
    })
})

// Show/hide more fieldset items

const fieldsetShowMoreBtnE = document.querySelector('.fieldset__show-more');
const fieldsetItemsE = document.querySelectorAll(".fieldset__item--hidden");


fieldsetShowMoreBtnE.onclick = function () {
    
    fieldsetItemsE.forEach(e => {
        e.classList.toggle('fieldset__item--hidden');
        if (!e.classList.contains('fieldset__item--hidden')) {
            fieldsetShowMoreBtnE.textContent = 'Скрыть';
        } else fieldsetShowMoreBtnE.textContent = 'Показать еще';

    });
};