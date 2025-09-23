//using var
const browsername="Chrome"//global declaration

function getbrowsername(browsername)
{
    if(browsername=='chrome')
    {
        var browsername="chrome"
    }
console.log("inside the function" +browsername);//outside the block inside the function
}
getbrowsername(browsername); 
console.log("outside the function " +browsername);//outside the function

//using let
const bname="edge"//global declaration

function getbrowsername(bname)
{
    if(bname=='edge')
    {
        let bname="edge t2"
    }
console.log("inside the function "+bname);//outside the block inside the function
}
getbrowsername(bname); 
console.log("outside the function "+bname);//outside the function