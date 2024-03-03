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
    constructor(ntitle:string,nfirstname:string,nlastname:string){
this.title=ntitle;
this._firstname=nfirstname;
this._lastname=this.lastname
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

 let hero=new Hero("ram","shyam","shiv")
 console.log(hero.title);
 console.log(hero.firstname);
 
 