"use strict";

function callXHR(link,callBack) {
    
    let request = new XMLHttpRequest();
    request.onload = () => {
        let response = JSON.parse(request.response);
        callBack(response);
    };
    request.open("GET", link);
    request.send();

};

