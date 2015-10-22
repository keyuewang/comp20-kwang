# comp20-kwang
# Lab 6: Messages

For security reasons, XMLHttpRequest requests follow the browser's same-origin policy, and will therefore only succeed if they are made to the host that served the original web page. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource. In this lab, simply opening the index.html page on a web browser will not work, because the page is in the local, not be hosted on a web server. It is impossible to request the data from a different origin either, due to the same-origin policy.

In this assignment, I modified the lab.js to open the JSON file using XMLHttpRequest, parse the JSON data.So when you open the index.html, you can see the "messages" in the data.json file.

I spend about 2 hours to learn the XMLHttpRequest object, how to parse the JSON file, what is the same-origin policy and finished this lab.

