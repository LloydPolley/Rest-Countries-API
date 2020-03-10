

export const toggleMode = () => {
    console.log(document.body.classList[0]);
    if(document.body.classList[0] === 'darkMode'){
        document.body.classList.add('lightMode');
        document.body.classList.remove('darkMode');
    }else{
        document.body.classList.remove('lightMode');
        document.body.classList.add('darkMode');
    }
}