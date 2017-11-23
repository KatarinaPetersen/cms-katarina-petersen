(function () {
    document.addEventListener("click", menuclick, true);

    function menuclick(e) {
        var caller = e.target;
        if (!caller.dataset.cmd) {
            return;
        }
        if (document.querySelector('.itemActive')) {
            document.querySelector('.itemActive').classList.toggle('itemActive');
        }
        caller.classList.toggle('itemActive');

        switch (caller.dataset.cmd) {
            case 'catEdit': // OK
                catEdit(caller); //caller fortæller hvad der bliver kaldet på
                break;
            case 'catAdd':
                catAdd(caller);
                break;
            case 'catDelete':
                catDelete(caller);
                break;
            case 'categories': // OK 
                categories();
                break;
            case 'userEdit': // OK
                userEdit(caller);
                break;
            case 'userAdd':
                userAdd(caller);
                break;
            case 'userDelete':
                userDelete(caller);
                break;
            case 'users':
                users()
                break;
            case 'article':
                break
            case 'logout': // OK
                logout();
                break;
            default:
                alert(caller);
        }
    }

    function catEdit(caller) {
        var formId = caller.dataset.id
        var frm = document.querySelector(`#${formId}`);
        var frmData = new FormData(frm);
        fetch('/menuitems', {
            credentials: 'include',
            method: 'put',
            body: frmData
        })
            .then(function (data) {
                document.querySelector('div[data-cmd="categories"]').click();
                // return data.json();
            })
    }

    function catAdd(caller) {
        var form = document.querySelector('#frmCatAdd');
        // lav en kopi af formularen til at sende afsted. Derved undgåes at siden refreshes hvis den originale form sendes
        var formData = new FormData(form); fetch('/menuitems', {
            method: 'post',
            credentials: 'include',
            body: formData
        })
            .then(function (data) {
                // tager fat i knappen KATEGORIER og simulerer et klik, så siden genindlæses og tabellen refreshes
                document.querySelector('div[data-cmd="categories"]').click();
            })
            .catch(function (err) {
                console.log(err);
            });

    }

    function catDelete(caller) {
        var formId = caller.dataset.id;
        var form = document.querySelector(`#${formId}`);
        var formData = new FormData(form);
        fetch('/menuitems', {
            method: 'delete',
            credentials: 'include',
            body: formData
        })
            .then(function (data) {
                document.querySelector('div[data-cmd="categories"]').click();
            })
            .catch(function (err) {
                console.log(err);
            });

    }

    function categories() {
        fetch('/menuitems', { method: 'get' })
            .then(function (data) {
                return data.json();
            })
            .then(function (jsonData) {
                var content = `
                            <div class="cat-container"><div class="cat-head">Rediger menu</div>
                                <form>
                                    <div class="cat-row">
                                        <div class="cat-cell"><input readonly type="text" value="Navn"></div>
                                        <div class="cat-cell"><input readonly type="text" value="Position"></div>
                                    </div>
                                </form>`;
                jsonData.forEach(function (d) {
                    content += `<form id="frm${d.id}">
                                    <div class="cat-row">
                                        <div class="cat-cell">
                                            <input name="id" type="hidden" value="${d.id}">
                                            <input name="catname" type="text" value="${d.name}">
                                        </div>
                                        <div class="cat-cell">
                                            <input name="catpos" type="number" value="${d.position}">
                                        </div>
                                        <div class="cat-cell">
                                            <img data-cmd="catEdit" data-id="frm${d.id}" class="iconImage clickable" src="img/Refresh.png" title="Opdater">
                                        </div>
                                        <div class="cat-cell">
                                            <img data-cmd="catDelete" data-id="frm${d.id}" class="iconImage clickable" src="img/Trash.png" title="Slet">
                                        </div>
                                    </div>
                                </form>`;
                });
                content += `<br><hr>Eller tilføj<form id="frmCatAdd">
                                <div class="cat-row">
                                    <div class="cat-cell">
                                        <input name="catname" type="text" placeholder="Menunavn">
                                    </div>
                                    <div class="cat-cell">
                                        <input name="catpos" type="number" placeholder="position">
                                    </div>
                                    <div class="cat-cell">
                                        <img data-cmd="catAdd"  class="iconImage clickable" src="img/plus-2x.png" title="Opdater">
                                    </div>
                                </div>
                            <form>`;
                content += `</div>`;
                document.querySelector('#content').innerHTML = content;
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    function userEdit(caller) {
        var formId = caller.dataset.id
        var frm = document.querySelector(`#${formId}`);
        var frmData = new FormData(frm);
        fetch('/useritems', {
            credentials: 'include',
            method: 'put',
            body: frmData
        })
            .then(function (data) {
                document.querySelector('div[data-cmd="users"]').click();
                // return data.json();
            })
    }

    function userAdd(caller) {
        var form = document.querySelector('#frmUserAdd');
        // lav en kopi af formularen til at sende afsted. Derved undgåes at siden refreshes hvis den originale form sendes
        var formData = new FormData(form); fetch('/useritems', {
            method: 'post',
            credentials: 'include',
            body: formData
        })
            .then(function (data) {
                // tager fat i knappen BRUGERE og simulerer et klik, så siden genindlæses og tabellen refreshes
                document.querySelector('div[data-cmd="users"]').click();
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function userDelete(caller) {
        var formId = caller.dataset.id;
        var form = document.querySelector(`#${formId}`);
        var formData = new FormData(form);
        fetch('/useritems', {
            method: 'delete',
            credentials: 'include',
            body: formData
        })
            .then(function (data) {
                document.querySelector('div[data-cmd="users"]').click();
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function users() {
        fetch('/useritems', { method: 'get' })
            .then(function (data) {
                return data.json();
            })
            .then(function (jsonData) {
                var content = `
                            <div class="cat-container"><div class="cat-head">Rediger brugere</div>
                                <form>
                                    <div class="cat-row">
                                        <div class="cat-cell"><input readonly type="text" value="Brugernavn"></div>
                                        <div class="cat-cell"><input readonly type="text" value="Password"></div>
                                    </div>
                                </form>`;
                jsonData.forEach(function (d) {
                    content += `<form id="frm${d.id}">
                                    <div class="cat-row">
                                        <div class="cat-cell">
                                            <input name="id" type="hidden" value="${d.id}">
                                            <input name="username" type="text" value="${d.username}">
                                        </div>
                                        <div class="cat-cell">
                                            <input name="userpw" type="text" value="${d.password}">
                                        </div>
                                        <div class="cat-cell">
                                            <img data-cmd="userEdit" data-id="frm${d.id}" class="iconImage clickable" src="img/Refresh.png" title="Opdater">
                                        </div>
                                        <div class="cat-cell">
                                            <img data-cmd="userDelete" data-id="frm${d.id}" class="iconImage clickable" src="img/Trash.png" title="Slet">
                                        </div>
                                    </div>
                                </form>`;
                });
                content += `<br><hr>Eller tilføj<form id="frmUserAdd">
                                <div class="cat-row">
                                    <div class="cat-cell">
                                        <input name="username" type="text" placeholder="Brugernavn">
                                    </div>
                                    <div class="cat-cell">
                                        <input name="userpw" type="text" placeholder="Password">
                                    </div>
                                    <div class="cat-cell">
                                        <img data-cmd="userAdd"  class="iconImage clickable" src="img/plus-2x.png" title="Opdater">
                                    </div>
                                </div>
                            <form>`;
                content += `</div>`;
                document.querySelector('#content').innerHTML = content;
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    function logout() {
        fetch('/logout', { credentials: 'include', method: 'delete' })
            .then(function () {
                document.querySelector("#title").innerHTML = 'Du loggede af...';
                setTimeout(function () { location.href = "/"; }, 1000);
            });
    }

    // Interval-functtion der holder øje med om session-cookien stadig eksisterer
    setInterval(function () {
        if (!document.cookie.length) {
            alert("Du logges af nu...");
            setTimeout(function () { location.href = "/"; }, 2000);
        }
    }, 1000 * 60 * 5)

})();

