// use blog

db.createCollection("articles")



let data = [{
        title: "title1",
        date: "22 June",
        details: "details1",
        author: {
            name: "author1",
            email: "author1@gmail.com",
            age: 21
        },
        tags: ["html", "css", "javascript"]
    },
    {
        title: "title2",
        date: "23 June",
        details: "details2",
        author: {
            name: "author2",
            email: "author2@gmail.com",
            age: 22
        },
        tags: ["reactjs", "node", "ruby"]
    },
    {
        title: "title3",
        date: "23 June",
        details: "details3",
        author: {
            name: "author3",
            email: "author3@gmail.com",
            age: 23
        },
        tags: ["html5", "terminal", "mongodb"]
    }
];

db.articles.insertMany(data);


db.articles.find();

db.articles.find({ _id: ObjectId("62b4bc309c988cf0518a8dc5") });

db.articles.find({ title: "title1" });
// Example of nested object query
db.articles.find({ "author.name": "author1" });

db.articles.find({ tags: "html" });

// 9. Update title of a document using its \_id field.
db.articles.update({ _id: ObjectId("62b4bc309c988cf0518a8dc5") }, {
    $set: {
        title: "new title updated"
    }
})

// 10. Update a author's name using article's title.

db.articles.update({ title: "title1" }, { $set: { "author.name": "James Bond" } })

// 11. rename details field to description from all articles in articles collection.

db.articles.updateMany({}, { $rename: { "details": "description" } })

// 12. Add additional tag in a specific document.

db.articles.update({ title: "title1" }, { $push: { tags: "New tag" } })

// 13. Update an article's title using $set and without $set.

// - Write the differences here 
// if we use set operator it will gonna change
//  or update that specific field but without $set it will remove the whole document and replace it with that new document.

// 13. find an article using title and increment it's auhtor's age by 5.

db.articles.update({ title: "title1" }, { $set: { "author.age": 26 } });

// 14. Delete a document using \_id field with `db.COLLECTION_NAME.remove()`.

db.articles.remove({ _id: ObjectId("62b4bc309c988cf0518a8dc5") });

// - Find all males who play cricket.

db.users.find({ sports: "cricket" });

// - Update user with extra golf field in sports array whose name is "Steve Ortega".

db.users.update({ name: "Steve Ortega" }, { $push: { sports: "golf" } });

// - Find all users who play either 'football' or 'cricket'.

db.users.find({ sports: { $in: ["football", "cricket"] } });

// - Find all users whose name includes 'ri' in their name.

db.users.find({ name: { $regex: "ri" } })