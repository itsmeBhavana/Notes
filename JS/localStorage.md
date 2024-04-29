# Session Storage
- As soon as the user visits the web app, the session is started and the data that is stored in the session storage will be persisted only till he is on that web browser window.
- As soon as he closes the tab, the data is lost.
- It is very useful than cookies
- Unlike cookies, session storage data is not sent to the server while making network request calls.
- Session storage data has a larger capacity to hold.
- Cookies can only store 4000bytes of data
- Session storage can store atleast 5MB of data.

# Local Storage
- Same as Session Storage
- But, it does not come with an expiry
- The data is still persisted in the browser even when the user closes the tab, window, shuts down the system.
- The data can be stored in the browser as long as we want.
- Local storage has the highest memory capacity when compared to session storage or cookies.
- Memory capacity depends on what type of browser you are using and what type of device you are using.
- Min of 5MB is guarenteed.
  ## Uses
  - Any relevant data that is not stored in server is stored in local storage.
  - For A/B testing
  - Optimizing the performance of the web app.
  - Getting data from local stoarge is very much faster than making a network call and getting the data from the server.
  - The most famous Indian startup, Flipkart stores a lot of data in the local storage.
  - Another Example: Bigbinary
    ## Methods
    - localstorage takes key-value pairs in the form of strings as input
    - localStorage.setItem("key", "value")
    - localStorage.getItem("key")
    - localStorage.removeItem("key")
    - localStorage.clear()
    - Generally, we dont store strings in our local storage, but we store objects

# Same Origin Policy
  - Storage APIs follow the same origin policy.
  - Origin comprises of 3 things.
    - Protocol: http or https
    - Host/Domain: flipkart.com or amazon.com
    - Port: 8080 or 8081

# lab
localStorage.setItem("name", "Bhavana");
undefined
localStorage.getItem("name");
'Bhavana'
const user={
    "city" : "san ramon"
};
undefined
localStorage.setItem("name", JSON.stringify(user));
undefined
localStorage.getItem("user");
null
localStorage.getItem("name");
'{"city":"san ramon"}'
JSON.parse(localStorage.getItem("name");
VM735:1 Uncaught SyntaxError: missing ) after argument list
JSON.parse(localStorage.getItem("name"));
{city: 'san ramon'}