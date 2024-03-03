let Component=function(config:any){
    return function(TargetClass:any){
        let tc=new TargetClass();
        return class{
            title:string=tc.title;
            power:number=config.power;
            template:string=config.template
        }
    }
}


@Component({
    power:100,
    selector:"app-root",
    template:
   `
   <div>
   
   <h2>{{title}}</h2>
   <ul>
   
   <li> List  Item 1</li>
   <li> List  Item 2</li>
   <li> List  Item 3</li>

   
   </ul>
   </div>
   `
})



class MyComp{
    title:string="Welcome to Your Life"
}