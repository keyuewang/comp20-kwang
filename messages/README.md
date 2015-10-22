# comp20-kwang
# messages

For security reasons, XMLHttpRequest requests follow the browser's same-origin policy, and will therefore only succeed if they are made to the host that served the original web page. In this assignment, if we simply open the index.html page on a web browser we will not see the content of the JSON file. It is because using the XMLHttpRequest to open a file requires your page to be hosted on a web server. We can solve this problem by opening "http://tuftsdev.github.io/comp20-kwang/messages". Further more, it is impossible either to request the data from a different origin using XMLHttpRequest due to the same-origin policy.

In this lab, I modified the lab.js file to open the JSON file using XMLHttpRequest, parse the JSON data. When you open "http://tuftsdev.github.io/comp20-kwang/messages", you can see the "messages" in the data.json file. Also, I modified the CSS file to make the page look better.

I spent about 2 hours learning the XMLHttpRequest object, the same-origin policy and how to parse the JSON file and finished the lab.
