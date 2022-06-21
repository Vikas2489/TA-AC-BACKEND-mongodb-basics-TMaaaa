// Write command to

// - List collections from a database.

// show dbs

// - create a new collection in your country
//  database which you created recently.

db.createCollection("Delhi");

// Write code to:-

// - create a database named `weather`

db.createCollection("weather");

// - create a capped collection named `temperature` 
// with maximum of 3 documents
//  and try inserting more than 3 to see the result.

db.createCollection("temperature", { capped: true, size: 10000, max: 3 })
db.temperature.insert({ title: "Delhi", name: "vikas", howIsTheDay: "sunny" })

// if in this temperature we will insert more than 3 documents then it will be going to pop out the first element from documents.

// - create a simple collection named `humidity`

db.createCollection("humidity");

// - check whether `temperature` collection is 
// capped or not ?

db.humidity.isCapped();

// - Delete `humidity`

db.humidity.drop();

//  collection and then the entire database(weather).

db.dropDatabase();