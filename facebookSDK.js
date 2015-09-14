// appId is set for 'test' app for Lindsay Ward

window.fbAsyncInit = function() {
    FB.init({
        appId      : '956652764381017',
        xfbml      : true,
        version    : 'v2.4'
    });

    testAPI();
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// ...

function testAPI()
{
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response)
    {
        console.log('Good to see you, ' + response.name + '.');
    });
    FB.api('/cocacola/feed?limit=5', function(response)
    {
        for (var i=0; i<response.data.length; i++)
        {
            console.log(i + " : " + response.data[i].message);
        }
    });
}
//testAPI();