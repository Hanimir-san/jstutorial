"use strict";

let translationUnits = {
    0: ["en", "hello"],
    1: ["de", "hallo"],
    2: ["fr", "salut"],
    3: ["no", "hei"],
    languages: ["en", "de", "fr", "no"],

    [Symbol.iterator]() {
        return {
            current: this.0,
            last: this.3,

            next() {

            }
        }
    }
}

