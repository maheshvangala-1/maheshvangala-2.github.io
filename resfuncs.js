window.onload=function()
{
        let width=window.screen.width;
        let height=window.screen.height;
        if((width>=240 && width<=480) && (height>=320 && height<=854))
        {
            digitalData.information.device="Mobile"
        }
        else if((width>=600 && width<=1024) && (height>=960 && height<=1366))
        {
            digitalData.information.device="Tablet";
        }
        else{
            digitalData.information.device="Desktop";
        }
        


    
        let s=Visitor.getInstance("856F5BDE58C158A50A495D50@AdobeOrg").getMarketingCloudVisitorID()
        digitalData.userID=s;
        console.log(digitalData.page.pageName)
        console.log(digitalData.userID)
    
    
    }