// изменения положения элементов в зависимости от устройства
const menu = document.querySelector('nav')
const time = document.querySelector('.header-time')
const adress = document.querySelector('.header-adress')
const contact = document.querySelector('.header-contact')
const linkPhone = document.querySelector('.header-link-phone')
const headerInfo = document.querySelector('.header-info')
const headerLinks = document.querySelector('.header-links')

export const tabHeader = () => {
    changeELemPosition(time, menu)

    changeELemPosition(linkPhone, headerLinks)
    changeELemPosition(adress, headerInfo)
    changeELemPosition(contact, headerInfo)
}

export const mobileHeader = () => {
    changeELemPosition(time, menu)
    changeELemPosition(adress, menu)

    changeELemPosition(linkPhone, headerInfo)
    changeELemPosition(contact, menu)
}

export const mainHeader = () => {
    changeELemPosition(linkPhone, headerLinks)

    changeELemPosition(adress, headerInfo)
    changeELemPosition(time, headerInfo)
    changeELemPosition(contact, headerInfo)
}

// изменить положение элемента
const changeELemPosition = (elem, newParent) => {
    elem.parentElement.removeChild(elem)
    newParent.appendChild(elem)
}




// открыть меню
const menuBtn = document.querySelector('.nav-burger')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')

    menuBtn.classList.contains('active')
    ? menu.style.display = 'flex'
    : menu.style.display = 'none'
})