const searchForm = document.querySelector('.search');
const searchButton = document.querySelector('.search__button');

searchButton.addEventListener('click',function(e){

    if(searchForm.classList.contains('search--visible')){
        //ничего не происходит 
    }else{
    e.preventDefault();
    searchForm.classList.toggle('search--visible');
    }


})