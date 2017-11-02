fetch('/menuitems')
    .then(function (data) {
        return data.json();
    })
    .then(function (jsonData) {
        var menu = '';
        jsonData.forEach(function(menuElement){
            menu += `<li><a class="menuitem" data-catid=${menuElement.id} href="#">${menuElement.name}</a></li>`
        });
        document.querySelector('#publicNavigationbar').innerHTML = menu;
    })
    .catch(function(err){
        console.log(err);
    })
