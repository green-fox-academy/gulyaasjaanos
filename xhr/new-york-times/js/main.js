"use strict";

const LINK = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11&api-key=j5IfEewGFP6M64JVaCXIHjcPqTixyzVe";

callXHR(LINK, (response) => {
    responseToDOM(response);
});