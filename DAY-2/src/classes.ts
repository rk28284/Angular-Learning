//constructor
 //super

 //private property
 //public property

 //static property
 //static methods


 //get and set

 class Hero{
    title:string="Batman"
    private _firstname:string="Bruce"
    private _lastname:string="wyane"
    static version:Number=1001
    // -------------------------------------------------
    constructor(ntitle:string){
this.title=ntitle
    }

    //--------------------------------------------------------
    get firstname(){
       return this._firstname
    }

    set firstname(nfirstname:string){
        this._firstname=nfirstname
    }

    get lastname(){
        return this._lastname
    }
    set lastname(nlastname:string){
        this._lastname=nlastname
    }
 }