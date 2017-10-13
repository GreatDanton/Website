// add click event listener for each project
// that creates post ajax request with clicked link
(function () {
    var url = "http://stats.optotron.eu/12345678" // change this url
    var links = document.getElementsByTagName("a");
    // create get request on my analytics server
    // that fires when website is loaded
    var req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.send();

    // if user clicked on 'a' link => send the url via ajax
    // to analytics server
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        link.addEventListener('click', function (e) {
            var r = new XMLHttpRequest();
            // create post request on server
            var l = e.currentTarget.href // get href from clicked link
            r.open("POST", url, true);
            r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            r.send(encodeURI('link=' + l));
        });
    }
})();