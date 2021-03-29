function getDevice()
    {
        let width=window.screen.width;
        let height=window.screen.height;
        if((width>=240 && width<=480) && (height>=320 && height<=854))
        {
            return "Mobile"
        }
        else if((width>=600 && width<=1024) && (height>=960 && height<=1366))
        {
            return "Tablet";
        }
        else{
            return "Desktop";
        }
        

    }
    var digitalData={
        page:{
            "pageName" : document.title,
            "pageURL" : window.location.href
        },
        siteSection:"Home|Login|Order Online|Add to Cart|CheckOut",
        userID:Visitor.getInstance("856F5BDE58C158A50A495D50@AdobeOrg").getMarketingCloudVisitorID(),
        information:{
            "domain":window.location.hostname,
            "device":getDevice(),
            "date":new Date().toDateString()
        }

    }