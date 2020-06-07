import {equipment} from './mainData';
import showImgs from './mainWidth';


let activeService = equipment[0]

// переключение по услугам
const mainBtns = document.querySelectorAll('.main-button')

for(let btn of mainBtns){
    btn.addEventListener('click', changeActiveService)
}

function changeActiveService (){
    for(let btn of mainBtns){
        btn.classList.remove('active')
    }
    this.classList.add('active')
    activeService = equipment[this.dataset.index]
    renderListSections(activeService.service)
}

// выбрать активную секцию
function changeActiveSection(){
    for(let item of listSectionContainer.children){
        item.classList.remove('active')
    }
    this.classList.add('active')
    renderSliderSection(activeService.service[this.dataset.index])
}


//ссылка на страницу раздела
const sectionLink = document.querySelector('.main-section-link')

const setSectionLink = section => {
    sectionLink.href = section.link
}
// рендер производителей
const producerSectionContainer = document.querySelector('.main-slider-container-producer-img')

const renderSectioinProducers = section => {
    let str = ''
    for(let i = 0; i < 4; i++){
        str += `<img src=${section.producers[i]}>`
    }
    producerSectionContainer.innerHTML = str
}

// рендер картинок раздела
const sectionImgContainer = document.querySelector('.main-slider-container-img')

const setImgs = section => {
    while (sectionImgContainer.lastElementChild) {
        sectionImgContainer.removeChild(sectionImgContainer.lastElementChild)
    }

    let elems = ''
    for(let i = 0; i < section.equipment.length; i++){
        elems += `<div class="main-slider-img ${i===0 ? 'active' : ''}"><img src="${section.equipment[i].img}" alt="Equipment"><span>${section.equipment[i].name}</span></div>`
    }

    sectionImgContainer.innerHTML = elems
    showImgs()
}

// рендер пагинатора
const pagContainer = document.querySelector('.main-slider-paginator-container')

const renderPag = section => {
    while (pagContainer.lastElementChild) {
        pagContainer.removeChild(pagContainer.lastElementChild)
    }

    for(let i = 0; i < section.equipment.length; i++){
        const item = document.createElement('div')
        if(i === 0){
            item.innerHTML = '<div></div>'
        }
        pagContainer.appendChild(item)
    }
}

// рендер всех элементов слайдера
function renderSliderSection(section){
    setSectionLink(section)
    renderSectioinProducers(section)
    renderPag(section)
    setImgs(section)
}

renderSliderSection(activeService.service[0])


// рендеринг списка разделов
const listSectionContainer = document.querySelector('.main-list-container')

function renderListSections(service){
    while (listSectionContainer.lastElementChild) {
        listSectionContainer.removeChild(listSectionContainer.lastElementChild)
    }
    for(let i = 0; i < service.length; i++){
        const item = document.createElement('h5')
        item.addEventListener('click', changeActiveSection)
        item.innerHTML = service[i].name
        item.setAttribute('data-index', i)
        i === 0 ? item.classList.add('active') : null

        listSectionContainer.appendChild(item)
    }
    renderSliderSection(activeService.service[0])
}

renderListSections(activeService.service)



// РАБОТА СЛАЙДЕРА
const nextBtn = document.querySelector('.main-slider-pag-right')
const prevBtn = document.querySelector('.main-slider-pag-left')

nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)

function nextSlide() {

    // изменить active pag
    const pags = pagContainer.children

    for(let i = 0; i < pags.length; i++){
        if (pags[i].lastElementChild){
            pags[i].removeChild(pags[i].lastElementChild)
            if(i === pags.length-1){
                pags[0].innerHTML = '<div></div'
                break
            }
            pags[i+1].innerHTML = '<div></div'
            break
        }
    }

    // изменить active img
    const imgs = sectionImgContainer.children

    for(let i = 0; i < imgs.length; i++){
        if(imgs[i].classList.contains('active')){
            imgs[i].classList.remove('active')
            if(i === imgs.length-1){
                imgs[0].classList.add('active')
                if(!imgs[0].classList.contains('show')){
                    for(let k = 0; k < imgs.length; k++){
                        k < 3
                        ? imgs[k].classList.add('show')
                        : imgs[k].classList.remove('show')
                    }
                }
                break
            }
            
            imgs[i+1].classList.add('active')

            if(!imgs[i+1].classList.contains('show')){
                imgs[i+1].classList.add('show')

                for(let k = 0; k < imgs.length; k++){
                    if(imgs[k].classList.contains('show')){
                        imgs[k].classList.remove('show')
                        break
                    }
                }
            }
            break
        }
    }
}

function prevSlide() {

    // изменить active pag
    const pags = pagContainer.children

    for(let i = 0; i < pags.length; i++){
        if (pags[i].lastElementChild){
            pags[i].removeChild(pags[i].lastElementChild)
            if(i === 0){
                pags[pags.length-1].innerHTML = '<div></div'
                break
            }
            pags[i-1].innerHTML = '<div></div'
            break
        }
    }

    // изменить active img
    const imgs = sectionImgContainer.children

    for(let i = 0; i < imgs.length; i++){
        if(imgs[i].classList.contains('active')){
            imgs[i].classList.remove('active')
            if(i === 0){
                imgs[imgs.length-1].classList.add('active')
                if(!imgs[imgs.length-1].classList.contains('show')){
                    for(let k = imgs.length-1; k > -1; k--){
                        k > imgs.length-4
                        ? imgs[k].classList.add('show')
                        : imgs[k].classList.remove('show')
                    }
                }
                break
            }
            
            imgs[i-1].classList.add('active')

            if(!imgs[i-1].classList.contains('show')){
                imgs[i-1].classList.add('show')

                for(let k = imgs.length-1; k > -1; k--){
                    if(imgs[k].classList.contains('show')){
                        imgs[k].classList.remove('show')
                        break
                    }
                }
            }
            break
        }
    }
}