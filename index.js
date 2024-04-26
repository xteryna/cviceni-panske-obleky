const colorBtns = document.querySelectorAll('.color-option__box');
const productImage = document.querySelector('#product-image');




const selectColor = (selectedButton) => {
    previouslySelected = document.querySelector('.color-option__box--selected')
    console.log(selectedButton)
    let newColor;
    let shirtColor;
    let shirtBorderColor = 'black';

    if(selectedButton === document.querySelector('#white')){
        newColor = 'white';
        shirtColor = 'white';
    }
    if(selectedButton === document.querySelector('#black')){
        newColor = '#141518';
        shirtColor = '#141518';
        shirtBorderColor = 'white';
    }
    if(selectedButton === document.querySelector('#red')){
        newColor = 'red';
        shirtColor = 'red';
    }
    if(selectedButton === document.querySelector('#blue')){
        newColor = 'skyblue';
        shirtColor = 'skyblue';
    }

    if(previouslySelected === null) {
        selectedButton.classList.add('color-option__box--selected')
        productImage.style.fill = newColor;
        productImage.style.stroke = shirtBorderColor;
    } else {
        if (selectedButton !== previouslySelected) {
            previouslySelected.classList.remove('color-option__box--selected')
            selectedButton.classList.add('color-option__box--selected')
            productImage.style.fill = newColor;
            productImage.style.stroke = shirtBorderColor;

        } else {
            selectedButton.classList.remove('color-option__box--selected')
            productImage.style.fill = 'grey';
            
            productImage.style.stroke = 'black';
        }
    }
}


colorBtns.forEach( (button) => {
    button.addEventListener('click', () => {
        console.log(`${button}`)
        selectColor(button)
    })
})
