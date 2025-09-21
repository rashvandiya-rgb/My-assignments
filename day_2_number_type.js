function numbercheck(n)
{
    if(n>0)
    {
        return "Positive Number";
    }
    else if(n<0)
    {
        return "Negative number";
    }
    else 
    {
        return "neutral number";
    }
}
console.log(numbercheck(10));