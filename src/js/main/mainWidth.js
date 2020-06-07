const sectionImgContainer = document.querySelector('.main-slider-container-img').children

const mobileMainSlider = () => {
    for(let i = 0; i < sectionImgContainer.length; i++){
        if(i === 0){
            console.log(sectionImgContainer[i])
            sectionImgContainer[i].classList.add('show')
        }else{
            sectionImgContainer[i].classList.remove('show')
        }
    }
}
const tabMainSlider = () => {
    for(let i = 0; i < sectionImgContainer.length; i++){
        if(i < 2){
            sectionImgContainer[i].classList.add('show')
        }else{
            sectionImgContainer[i].classList.remove('show')
        }
    }
}
const bigMainSlider = () => {
    for(let i = 0; i < sectionImgContainer.length; i++){
        if(i < 3){
            sectionImgContainer[i].classList.add('show')
        }else{
            sectionImgContainer[i].classList.remove('show')
        }
    }
}

const showImgs = () => {
    const width = document.documentElement.clientWidth
    if(width < 750){
        tabMainSlider()
    }else if(width < 600){
        mobileMainSlider()
    }else{
        bigMainSlider()
    }
}

export default showImgs