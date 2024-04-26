const colorBtns = document.querySelectorAll('.color-option__box');
const productImage = document.querySelector('#product-image');
const orderBtn = document.querySelector('#orderBtn')
let colorToOrder;




const selectColor = (selectedButton) => {
    previouslySelected = document.querySelector('.color-option__box--selected')
    console.log(selectedButton)
    let newColor;
    let shirtColor;
    let shirtBorderColor = 'black';

    if(selectedButton === document.querySelector('#white')){
        newColor = 'white';
    }
    if(selectedButton === document.querySelector('#black')){
        newColor = '#141518';
        shirtBorderColor = 'white';
    }
    if(selectedButton === document.querySelector('#red')){
        newColor = 'red';
    }
    if(selectedButton === document.querySelector('#blue')){
        newColor = 'skyblue';
    }
    shirtColor = newColor;


    if(previouslySelected === null) {
        selectedButton.classList.add('color-option__box--selected')
        productImage.style.fill = newColor;
        productImage.style.stroke = shirtBorderColor;
        orderBtn.classList.toggle('order__button--enabled');
        colorToOrder = newColor;    
    } else {
        if (selectedButton !== previouslySelected) {
            previouslySelected.classList.remove('color-option__box--selected')
            selectedButton.classList.add('color-option__box--selected')
            productImage.style.fill = newColor;
            productImage.style.stroke = shirtBorderColor;
            colorToOrder = newColor;
        } else {
            selectedButton.classList.remove('color-option__box--selected')
            productImage.style.fill = 'grey';
            productImage.style.stroke = 'black';
            orderBtn.classList.toggle('order__button--enabled');
            colorToOrder = null;
        }
    }

    return colorToOrder
}


colorBtns.forEach( (button) => {
    button.addEventListener('click', () => {
        order = selectColor(button);
        console.log(order)
        

    })
})
