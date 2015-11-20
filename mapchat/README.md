# comp20-kwang
# mapchat

In assignment 2, I used 
a JSON API -- https://secret-about-box.herokuapp.com/sendLocation to send my loaction information and to retrive everyone else's information; 

a third-party JavaScript API -- Google Maps，to display my location on the map with unique marker and info window and display locations of people on the map and info window that displays person's login, message, and miles away from me;

the HTML5 geolocation API(to determine my location) 

and the XMLHttpRequest objects to make requests and manage the response data.

I spent about 15 hours learning the API that uesd in the index.html，the XMLHttpRequest objects and finishing the assignment.


#The Server for Map Chat 
###(Update on 11/20/2015)

The web application server https://secret-about-box.herokuapp.com/ that used in the assignment 2 was replaced by the new server https://shielded-journey-5174.herokuapp.com/.

This is a server-side web application using Heroku, Node.js, and the Express web framework.
Using Cross-Origin Resource Sharing (CORS).
Read and write data to a MongoDB database.

##3 APIs

*A POST /sendLocation API
Returns a JSON string. Submits check-in from any domain.
The mandatory fields and exact field names for submission to this API are login, lat, lng, and message.
Successful submission of these four pieces of data shall result in one entry into the collection checkins in Mongo. 

*A GET /latest.json API
Returns the last known location of a login as a JSON string of a single object. 
The mandatory parameter for this API is login. If login is empty or no results found, return empty JSON object {}.

*A GET / - Home, the root, the index
Display list of the check-ins and messages for all logins sorted in descending order by timestamp 
--the last person who checked-in is displayed first. 

I don't remember how many hours I have spent completing the assignment, but it did take a few days to finish it.