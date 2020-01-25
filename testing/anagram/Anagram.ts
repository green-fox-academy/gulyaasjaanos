"use strict";

export class Anagram {

    public anagram(str1:string, str2:string) {
        return str1.split('').sort().join() === str2.split('').sort().join();
    }

}