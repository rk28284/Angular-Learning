"use strict";
//constructor
//super
//private property
//public property
//static property
//static methods
//get and set
class Hero {
    // -------------------------------------------------
    constructor(ntitle) {
        this.title = "Batman";
        this._firstname = "Bruce";
        this._lastname = "wyane";
        this.title = ntitle;
    }
    //--------------------------------------------------------
    get firstname() {
        return this._firstname;
    }
    set firstname(nfirstname) {
        this._firstname = nfirstname;
    }
    get lastname() {
        return this._lastname;
    }
    set lastname(nlastname) {
        this._lastname = nlastname;
    }
}
Hero.version = 1001;