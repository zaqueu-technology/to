export function whichSelected(e) {
  const unitButton = document.querySelector('.cat__unit');
  const currencyButton = document.querySelector('.cat__currency');

  const dataType = e.target.dataset.category;

  if(dataType === 'unit'){
    if(unitButton.classList.contains('cat__selected')){
      return;
    }else{
      unitButton.classList.add('cat__selected');
      currencyButton.classList.remove('cat__selected');
    }
  } else if(dataType == 'currency'){
    if(currencyButton.classList.contains('cat__selected')){
      return;
    }else{
      currencyButton.classList.add('cat__selected');
      unitButton.classList.remove('cat__selected');
    }
  } 
  
}

export function addListeners() {
  const unitButton = document.querySelector('.cat__unit');
  const currencyButton = document.querySelector('.cat__currency');
  
  unitButton.addEventListener('click', whichSelected);
  currencyButton.addEventListener('click', whichSelected);
}

