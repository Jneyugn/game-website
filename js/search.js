let searchInput = document.getElementById('search-input');
let searchResults = document.getElementById('search-results'); 
let searchDiv = document.getElementById('search');

searchInput.addEventListener('blur', function(){
    searchResults.style.display = 'none';
});


var searchResult;
searchInput.addEventListener('input', function(){
    while (searchResults.firstChild){
        searchResults.removeChild(searchResults.firstChild);
    }
    let found = false;
    if (searchInput.value != 0 && searchInput.value.trim().length != 0){
        for (let i = 0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            if (key != 'userAccount' && key != 'signedIn' && key != 'storedGame' && key != 'savedPost')
            {
                if (localStorage.key(i).toUpperCase().includes(this.value.toUpperCase().trim())){
                    searchResult = document.createElement('li');
                    let searchTitle = document.createTextNode(localStorage.key(i));
                    searchResult.appendChild(searchTitle);
                    searchResult.classList.add('search-item');
                    searchResults.appendChild(searchResult);
                    found = true;
                }
            }
        }
        searchResults.style.display = 'flex';
        if (!found){
            searchResult = document.createElement('li');
            let noResults = document.createTextNode('No results found.');
            searchResult.appendChild(noResults);
            searchResult.style.cursor = 'default';
            searchResult.style.textTransform = 'none';
            searchResults.appendChild(searchResult);
        }
    }
});

searchInput.addEventListener('focus', function(){
    while (searchResults.firstChild){
        searchResults.removeChild(searchResults.firstChild);
    }
    let found = false;
    if (searchInput.value != 0 && searchInput.value.trim().length != 0){
        for (let i = 0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            if (key != 'userAccount' && key != 'signedIn' && key != 'storedGame' && key != 'savedPost')
            {
                if (localStorage.key(i).toUpperCase().includes(this.value.toUpperCase().trim())){
                    searchResult = document.createElement('li');
                    let searchTitle = document.createTextNode(localStorage.key(i));
                    searchResult.appendChild(searchTitle);
                    searchResult.classList.add('search-item');
                    searchResults.appendChild(searchResult);
                    found = true;
                }
            }
        }
        searchResults.style.display = 'flex';
        if (!found){
            searchResult = document.createElement('li');
            let noResults = document.createTextNode('No results found.');
            searchResult.appendChild(noResults);
            searchResult.style.cursor = 'default';
            searchResult.style.textTransform = 'none';
            searchResults.appendChild(searchResult);
        }
    }
});

searchDiv.addEventListener('mousedown', function(event){
        if (event.target.classList.contains('search-item')){
            let gameTitle = event.target.innerHTML;
            localStorage.setItem('storedGame', gameTitle);
            window.location.href = 'game.html';
        } 
});

