# The SBUX Card API
Get's the balance as well as when the balance was last updated of your starbucks card.

## Definition
https://sbux-card.azurewebsites.net/

## Parameters
**card_number:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*required*

**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pin:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*required*

## Results Format

*200* Success:

    { "bal":"$20.00", "lastUpdated":"5/10/2015 10:42 AM" }
    
## Documentation

### Node.js

```Javascript

var request = require('request');

request.get(
    'https://sbux-card.azurewebsites.net/',
    { form: { 'card_number': '<card_number>',
              'pin': '<pin>' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);
```
### Javascript

```Javascript
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var response = httpGet('https://sbux-card.azurewebsites.net/?card_number=' + cardNumber + '&pin=' + pin);
```
