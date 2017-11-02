
document.querySelector("#publicNavigationbar").addEventListener("click", function (evt) {
    if (!evt.target.classList.contains("menuitem")) {
        return;
    }
    if (document.querySelector(".itemActive")) {
        document.querySelector(".itemActive").classList.toggle("itemActive");
    }
    evt.target.classList.toggle("itemActive");

    //send request til route

    var catid = evt.target.dataset.catid;

    fetch(`/article?catid=${catid}`)
        .then(function (data) {
            return data.json()
        })
        .then(function (art) {
            art.forEach(function(a){
                var cnt = ;
                // document.querySelector('#content.innerHTML')
                // console.log(art);
            })
          

        })
        .catch(function (err) {
            console.log(err);
        });
});