window.addEventListener('load', () => {

    const inputs = document.querySelectorAll('.input');

    console.log('hello')

    function onFocus() {
        let parent = this.parentNode.parentNode;
        parent.classList.add('focus');
    };
    function onBlur() {
        let parent = this.parentNode.parentNode;
        if(this.value === "")
            parent.classList.remove('focus')
    }

    inputs.forEach(input => {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    });

});