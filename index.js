console.log("funguju");


let choosed = document.querySelectorAll(".color-option__box");
const fce = (event) => {
  event.target.classList.toggle("border");
};
choosed.forEach((vybran) => {
  vybran.addEventListener("click", fce);
});

const colorBtns = document.querySelectorAll('.color-option__box');
const orderBtn = document.querySelector('#orderBtn')
const productImage = document.querySelector('#product-image');
const messageElm = document.querySelector('.message p');

const white = {     /**working with english names that need to be transfered to message in Czech language */
    czech: 'Bílá',
    availability: 'available'
}

const red = {
    czech: 'Červená',
    availability: 'available'
}

const black = {
    czech: 'Černá',
    availability: 'nA'
}

const skyblue = {
    czech: 'Nebesky modrá',
    availability: 'available'
}

let colorSelected;
let order;
let barva;


const selectColor = (selectedButton) => {
    const previouslySelected = document.querySelector('.color-option__box--selected');
    let shirtBorderColor = 'black';

    selectedButton.classList.toggle('color-option__box--selected');            /**(de)selecting color-button */

    if(previouslySelected === null || selectedButton !== previouslySelected) { /**in case of selecting any color (or changing color) */
        colorSelected = selectedButton.id;
        productImage.style.fill = colorSelected;
        orderBtn.classList.add('order__button--enabled');               /**enabling order-button */
        orderBtn.removeAttribute('disabled')

        if (colorSelected === 'black')  {    /**changing stroke of t-shirt to white to recognize details of black t-shirt */
            shirtBorderColor = 'white';
        }
        if (previouslySelected !== null) {                                  /**if changing from one color to another => deselect color-button */
            previouslySelected.classList.remove('color-option__box--selected')
        }
    } else {                                                                /**in case deselecting color => new color will be default-grey */
        colorSelected = null;                                               /**color back to grey */
        productImage.style.fill = 'grey';
        orderBtn.classList.remove('order__button--enabled');                /**disabling order-button */
        orderBtn.setAttribute('disabled','')
    }
    productImage.style.stroke = shirtBorderColor;

    return colorSelected    /**returns either color (order button is then enabled) or null (order button disabled) */
}

const writeMessage = (color) => {       /**message for customer about availability of selected product */
    let message
    if (color.availability === 'available') {
        message = `${color.czech} košile je na skladě, bude vám dodána v průběhu 3 pracovních dní.`
    } else {
        message = `${color.czech} košile bohužel není naskladněna, kontrolujeme stav u dodavatele. O případném naskladnění vás budeme informovat, objednávku momentálně nemůžeme přijmout.`
    }    
    messageElm.textContent = message;
}

colorBtns.forEach( (button) => {        /**color button press */        
    button.addEventListener('click', () => {
        colorSelected = selectColor(button);
    })
})  

orderBtn.addEventListener('click', () => {  /**order button press */  
    writeMessage(eval(colorSelected));  /**argument - selected color (string) as variable name */ 
})



