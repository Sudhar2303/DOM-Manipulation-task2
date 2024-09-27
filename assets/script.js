function shapes(e)
{
    var shapes = document.getElementsByClassName('shape-container')[0]
    shapes.style.display = 'none';
    
    var shape = e.target.className
    const shapeContainer = document.createElement('div');
    shapeContainer.setAttribute('class','dynamic-shape-container');

    const h2Element = document.createElement('h2');
    h2Element.setAttribute('class','shape-heading');

    const inputField1 = document.createElement('input');
    inputField1.setAttribute('class','shape-input');

    const inputField2 = document.createElement('input');
    inputField2.setAttribute('class','shape-input');

    const goBackButton = document.createElement('button');
    goBackButton.setAttribute('class','go-back-button');

    const displayArea = document.createElement('h3');
    displayArea.setAttribute('class','display-area');

    const calculateAreaButton = document.createElement('button');
    calculateAreaButton.setAttribute('class','calculate-area-button');
    
    switch(shape)
    {
        case 'square':
            h2Element.textContent = "Enter the Side of the square";
            inputField1.setAttribute('placeHolder','Enter the Side');
            inputField1.setAttribute('type','number');
            shapeContainer.append(inputField1);
            break;
        
        case 'triangle':
            h2Element.textContent = "Enter the Height and Base of the Triangle";
            inputField1.setAttribute('placeHolder','Enter the Base');
            shapeContainer.append(inputField1);
            inputField2.setAttribute('placeHolder','Enter the Height');
            shapeContainer.append(inputField2);
            break;

        case 'circle':
            h2Element.textContent = "Enter the Radius of the Circle";
            inputField1.setAttribute('placeHolder','Enter the Radius');
            shapeContainer.append(inputField1);
            break;
    }
    calculateAreaButton.textContent = "Calculate Area"
    calculateAreaButton.addEventListener('click', () =>
        {
            var area;
            h2Element.remove();
            inputField1.remove();
            switch(shape)
            {
                case 'square':
                    area = inputField1.value*inputField1.value;
                    displayArea.textContent = `Area of Square is ${area}`
                    break;
                case 'triangle':
                    inputField2.remove();
                    area = 0.5*inputField1.value*inputField2.value;
                    displayArea.textContent = `Area of Triangle is ${area}`
                    break;
                case 'circle':
                    area = Math.PI*inputField1.value*inputField1.value;
                    displayArea.textContent = `Area of Circle is ${area.toFixed(2)}`
                    break;
            }
            shapeContainer.insertBefore(displayArea,goBackButton)
            calculateAreaButton.remove();
        }
    )
    goBackButton.textContent = "Go BACK";
    goBackButton.addEventListener('click', function() 
    {
        shapes.style.display = 'block';
        shapeContainer.remove()
    });
    shapeContainer.insertBefore(h2Element,inputField1);
    shapeContainer.append();
    shapeContainer.append(calculateAreaButton);
    shapeContainer.append(goBackButton);
    document.body.appendChild(shapeContainer);
}