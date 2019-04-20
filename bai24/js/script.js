function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}
var urlString = window.location.href;
 urlParams = parseURLParams(urlString);

function displayText(){
    document.getElementsByClassName('displayName')[0].innerHTML=urlParams.name;
    document.getElementsByClassName('displayEmail')[0].innerHTML=urlParams.email;
    document.getElementsByClassName('displayOrganisation')[0].innerHTML=urlParams.organisation;
    document.getElementsByClassName('displayPassword')[0].innerHTML=urlParams.password;
    document.getElementsByClassName('displayTelephoneNumber')[0].innerHTML=urlParams.telephonenumber;
    document.getElementsByClassName('displayGender')[0].innerHTML=urlParams.gender;
}
displayText();