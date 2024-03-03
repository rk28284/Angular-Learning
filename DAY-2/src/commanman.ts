//         let commonman = {
// title : "Bruce"
//         }
// let addpower = function(power:number){
// return function(hero:any){
// return {
// title : hero.title,
// power : power
// }
// }

// };

// ;
// commonman = addpower(7) (commonman) ;

//   console. log(commonman) ;
let AddPower=function(power:number){
    return function(targetClass:any){
        return class{
            title:string=new targetClass().title
            power:number=power
        }
    }
}

//decorater
@AddPower(7)
class CommanMan{
title:string="Bruce"
}
console.log(new CommanMan().power);
