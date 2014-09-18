(function() {
    
    url = 'https://account.lab.fi-ware.org/assets/signOut.js'

    // Adding the script tag to the body
    var body = document.getElementsByTagName('body')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Fire the loading
    body.appendChild(script);

})();