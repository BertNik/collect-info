var load = ()=>{

    var ci = window.navigator;
    var a = [];
    for (let i in ci) {
        let c = {};
        c['name'] = i;
        c['value'] = ci[i];
        a.push(c)
    }
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            console.log(req.responseText);
            if (req.status === 200) {
                document.getElementById('onload').remove();
            } else {
                
            }
        }
    }
    req.open("GET", window.location.href + "ci.php/?ci=" + JSON.stringify(a));
    req.send();

}

window.onload = load;