function launchbrowser(browsername)
{
    if(browsername=='chrome')
    {
    console.log("It is a supported browser");
    }
    else
    {
    console.log("unsupported browser");
        
    }
}
let browsername='firefox';
launchbrowser(browsername);

function runtest(testtype)
{
switch (testtype)
{
    case 'smoke':
        console.log("you are going to do smoke testing");
        break;
        case 'sanity':
            console.log("you are going to do sanity testing");
            break;
            case 'regression':
            console.log("You are going to do Regression testing");
            break;
            default:
                console.log("By default- You choosen smoke");
}
}
let testtype='sanity';
runtest(testtype);