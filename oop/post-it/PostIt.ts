"use strict";

class PostIt {

    backgroundColor: string;
    textColor: string;
    text: string;

    constructor(backgroundColor: string, textColor: string, text: string) {
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.text = text;
    }
}



export {PostIt};