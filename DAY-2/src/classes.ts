//constructor
 //super

 //private property
 //public property

 //static property
 //static methods


 //get and set

//  class Hero{
//     title:string="Batman"
//     private _firstname:string="Bruce"
//     private _lastname:string="wyane"
//     static version:Number=1001
//     // -------------------------------------------------
//     constructor(ntitle:string,nfirstname:string,nlastname:string){
// this.title=ntitle;
// this._firstname=nfirstname;
// this._lastname=this.lastname
//     }

//     //--------------------------------------------------------
//     get firstname(){
//        return this._firstname
//     }

//     set firstname(nfirstname:string){
//         this._firstname=nfirstname
//     }

//     get lastname(){
//         return this._lastname
//     }
//     set lastname(nlastname:string){
//         this._lastname=nlastname
//     }
//  }
//super class
class Person{

    constructor(public canwalk:string){

    }
}

//interface
interface IHero{
    title:string;
   fullname():string;
}


class Hero extends Person implements IHero  {
    // -------------------------------------------------
    constructor(
        public title:string,
         private _firstname:string, 
         private _lastname:string,
         ncw:string) {
      super(ncw)
        //key Takeway-we can define constructor to public and private property 
    }
    //--------------------------------------------------------
    fullname(){
     return  this._firstname+" "+this._lastname
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

let hero = new Hero("ram", "shyam", "shiv","krishna is everything");
console.log(hero.title);
console.log(hero.firstname);
console.log(hero.canwalk);

 