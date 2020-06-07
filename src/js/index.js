import $ from 'jquery'
window.jQuery = $;
window.$ = $;

import {tabHeader, mobileHeader, mainHeader} from './header'
import {mobileBanner, mainBanner} from './banner'
import showImgs from './main/mainWidth';

import './main/main'
import './_libs/img-svg'

// отслеживание изменения размеров окна
const setWidth = () => {
    const width = document.documentElement.clientWidth
    if(width < 1000 && width > 750){
        tabHeader()
        bigMainSlider()
    }else if(width <= 750){
        mobileHeader()
        tabMainSlider()
    }else{
        mainHeader()
    }

    if(width <= 600){
        mobileBanner()
        mobileMainSlider()
    }else{
        mainBanner()
    }

    showImgs()
}

window.addEventListener('load', setWidth)
window.addEventListener('resize', setWidth)