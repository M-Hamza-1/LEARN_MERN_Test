const btn  = document.querySelector('button')!;  // ! means that we are sure that this element exists

btn.addEventListener('click', () => {
    console.log('Clicked!');
});