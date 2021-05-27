import { images } from 'data/images.js'

function Slider(){
    let template = '';
    for(let {name, title} of images){
        template += `
        <div class="center container padding">
            <img src=${name} alt=${name} class="sticker-gallery padding" loading="lazy">
            <br>
            <div class="large padding">${title}</div>
        </div>`
        
    }
    return template;
}

export default Slider()










