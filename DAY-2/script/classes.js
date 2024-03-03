"use strict";
//constructor
//super
class Hero {
    // -------------------------------------------------
    constructor(title, _firstname, _lastname) {
        this.title = title;
        this._firstname = _firstname;
        this._lastname = _lastname;
        //key Takeway-we can define constructor to public and private property 
    }
    //--------------------------------------------------------
    fullname() {
        return this._firstname + " " + this._lastname;
    }
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
let hero = new Hero("ram", "shyam", "shiv");
console.log(hero.title);
console.log(hero.firstname);
