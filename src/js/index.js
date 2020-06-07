import {tabHeader, mobileHeader, mainHeader} from './header'
import {mobileBanner, mainBanner} from './banner'
import {mobMainSlider, bigMainSlider} from './main/main'



// отслеживание изменения размеров окна
const setWidth = () => {
    const width = document.documentElement.clientWidth
    if(width < 1000 && width > 750){
        tabHeader()
    }else if(width <= 750){
        mobileHeader()
    }else{
        mainHeader()
    }

    if(width <= 600){
        mobileBanner()
        mobMainSlider()
    }else{
        mainBanner()
        bigMainSlider()
    }
}

window.addEventListener('load', setWidth)
window.addEventListener('resize', setWidth)