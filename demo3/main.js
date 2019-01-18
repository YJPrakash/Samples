let data = {
    // limit: 3
}

function formatParams(params) {
    return "?" + Object.keys(params).map(function (key) {
        return key + "=" + params[key]
    }).join("&");
}

let url = "/api/Books";
let method = "GET";
let xhr = new XMLHttpRequest();
// url += formatParams(data);
xhr.open(method, url, true);
xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
    }
};
xhr.send();
