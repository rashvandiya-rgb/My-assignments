let companyName='Testleaf';
let chars=companyName.split("");
let reverse="";
for(i=chars.length-1;i>=0;i--)
{
reverse+=chars[i];
}
console.log(reverse);
