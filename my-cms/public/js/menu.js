
(function () {
    document.addEventListener('DOMContentLoaded', menuUpdate);

    function menuUpdate() {
        fetch('/menuitems')
            .then(function (data) {
                return data.json()
            })
            .then(function (menuitems) {
                var menu = '';
                menuitems.forEach(function (item) {
                    menu += `<span class="menuitem" data-categoryid="${item.id}">${item.name}</span>`;
                });
                document.querySelector('#publicnavigationbar').innerHTML = menu;
            })
            .then(function () {
                // henter indhold fra det første punkt i menuen og sætter ind på forsiden
                document.querySelector('.menuitem').click();
            })
            .catch(function (err) {
                console.log(err);
            });
    }
})();