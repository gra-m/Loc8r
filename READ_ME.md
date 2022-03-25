# Loc8r 

###Firsts:
* Node Back-end, not just for Angular 
* Pug 
* Express
* [Heroku and Heroku with Git](https://devcenter.heroku.com/articles/git#create-a-heroku-remote)
* [Heroku deployment problems](https://devcenter.heroku.com/articles/troubleshooting-node-deploys)
  * Repo was just on Heroku, Heroku deploy broke at same time as dual repo (github/heroku)
  * Updated to node 17.7.1 as heroku using this..
* Continuous Deployment -shaky at present (23032022)
*[MongoDB: 30min CrashCourse Mongosh](https://youtu.be/ofme2o29ngU) To 22:50 just getting to updates.
* mongosh "mongodb+srv://juice-learnin-mongo.3m8qv.mongodb.net/loc8rem" --apiVersion 1 --username loc8remUser
  
### Org:
Gra-m

By: Gram 

On: March 8th

### Project resources used or useful

* heroku apps
* heroku create --region eu
* git push heroku main/master
* git reset HEAD^ blat the last commit
* git reset --soft unstage files
* git reset --hard remove changes since last commit?
* git reset --hard commit return to that commit

##MongoDb:
* mongosh 
* db.shutdownServer() (restart service to use again)
* db.hello()
* db.serverStatus()
* db.stats()
  * close connection from cl:
  * exit, exit, or exit().
    Type quit or quit().
    Press Ctrl + D.
    Press Ctrl + C twice.
* show dbs
* show collections
* db.dropDatabase()
* cls
* use newdbname
* db.newcollectionname.insertOne({database: object})

####Queries
* db.users.find().limit(2)
* db.users.find().sort({ age: 1, name: -1}) //-1 reverse
* db.users.find({ name: "Denzel-nee"}, {name: 1, age: 1}) // find and what fields _id:0 no id..
####Complex Queries
* find( {field:{$ComplexQuery: "criteria"}})
* $ne: not equal
* $eq: equal
* db.users.find({name: {$ne: "Denzel-nee"}})

* db.users.find({ age:{$gte: 15, lte: 40}})


* db.users.find({ age:{$gte: 15, lte: 40}, name: "Denzel-nee"})

* $gt:  greaterThan
* $gte: >=
* $lte: <=
* { name: { $in: "thisvalue", "thatvalue"}} , == and
* $nin
* find({ age:{$exists: true}}) // only docs with age key, does not check value 


* db.users.find({ $and: [{age: 26}, {name: "Denzel-nee"}]})
* db.users.find({ $or: [{age:{$lte: 26}}, {name: "Denzel-nee"}]})

* db.users.find( { age: { $not: { $lte 20 } }}) // also returns ev that doesn't have age too.

* db.users.find({$expr: { $gt: ["$debt", "$balance"]}}) where debt > balance $debt use like column

* db.users.countDocuments({age: {$lte: 40}})

####Query Nested Objects:
* db.users.find({"address.street": "123 Main St"})

####UPDATEONE Updating Data requires ATOMIC $ operators:

* db.users.updateOne({age: 19},{$set: {age: 24}})

* db.users.updateOne({ _id: ObjectId(123423523523423ddsfetc)}, { $inc: {age: 3}})

* db.users.updateOne({ _id: ObjectId(123423523523423ddsfetc)}, { $rename: {name: "rename a key"}})

  * // completely removes from object
* db.users.updateOne({ _id: ObjectId(123423523523423ddsfetc)}, { $unset: {name: ""}})
 
  * // push item to existing array
* db.users.updateOne({ _id: ObjectId(123423523523423ddsfetc)}, { $push: {hobbies: "Swimming"}})
 
  * // pull (remove) from existing array
* db.users.updateOne({ _id: ObjectId(123423523523423ddsfetc)}, { $pull: {hobbies: "Swimming"}})

####UPDATEMANY 
* db.users.updateMany({address: {$exists: true}}, { $unset: {address: "" }})

####REPLACEONE
* replace a document and whatever it represents with just one key value pair:
  * db.users.replaceOne({ _id: objectId(etc.)}, {name: "John"})

####DELETEONE/MANY

*db.users.deleteOne({ _id: objectId(etc.)})

*db.users.deleteMany([{ _id: objectId(etc.)}, { _id: objectId(etc.)}]) // not tried..or in vid

*db.users.deleteMany({ age: { $exists : false}})

####Windows
* window r -> services.msc -> restart mongo


##Remember
* [Future start point for gmaps](https://developers.google.com/maps/documentation/api-picker?hl=en-GB)
Set git remotes in webstorm git push heroku main will not work otherwise (observed behaviour 21032022)

[Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet "Adam P")

[Stack Edit](https://stackedit.io "31/08")

[Dillinger](https://dillinger.io "until you are off of visible page..")




Table of Contents:

1. [Chapter 3](#1)
2. [Chapter4](#2)

   a. [Sub Heading a](#2a)
3. [Heading 3](#3)
4. [Heading 4](#4)

<a id="1"></a>
##Chapter 3:
Finished @ [a126cfe](https://github.com/gra-m/Loc8r/commit/a126cfe332a62fd6bc81ac4941bd7e642959d2c5)
* Simple ways of defining and organizing routes in Express
* How to use Node modules to hold the controllers
* The best ways to set up multiple sets of controllers by proper definition of the routes
* Prototyping views with Pug and Bootstrap
* Making reusable Pug components and mixins
* Displaying dynamic data in Pug templates
* Passing data from controllers to views

<a id="2"></a>
##Chapter 4:

* npm i mongoose
###Relational vs Document database
*I was thinking to myself -- different schemas/tables!* But:
![img.png](img.png)

###Compiling a MongoDB model from mongoose schema:
follows this pattern:
mongoose.model('modelname', 'schemaToUse', 'MongoDBCollectionIfItAlreadyExixts');


###Managing DBs and collections from Mongo shell
so this line was added below the schema definition:
mongoose.model('location', locationSchema);

1. mongosh
2. show dbs
   * admin
   * config
   * local
3 use local
   * switched to db local
4 show collections
   * startup_log

###Query collections:

db.collectionName.find(queryObject)

#### findAll - Check start up logs with:
db.startup_log.find()
(returns subset)

#### Don't create just start using:
use loc8r

And the collections within it will be created when you add data

#### Collection.save() is deprecated:
* insertOne
* insertMany
* updateOne
* updateMany

#####db.locations.insertOne({main location document})

* Returns:
{
acknowledged: true,
insertedId: ObjectId("623b1d0e767cc2bbc6d49c83")
}

#####db.locations.find()
.pretty() prettified == standard

####ADDING SUB DOCUMENTS to existing document

Push new object (subdocuments must be given own _id: objectId())
db.users.insertOne({name: "Denzel-nee"}, { $push: {_id: ObjectId(), rating: 5}})

* db.locations.insertOne({name: "Starcups"}, { $push: { reviews:{ author: "Jesse Watters", _id: ObjectId(), rating: 5, timestamp: new Date("May 15, 2022"), reviewText:"Order the fish fingers, they are to die for" }}})

1. Create appdb use appdb
2. Create users collection and first document
   1. db.users.insertOne({name: "humphrey", reviews: [{ _id: ObjectId(), timestamp: new Date("Mar 14, 2022")}]})
3. Push a new review
4. db.users.update({name: "humphrey"}, { $push: {reviews: {_id: ObjectId(), timestamp: new Date("Apr 15, 2022)}}})
    



###More local Geo data Long Lat order in db:
[What's my lat lng](https://whatsmylatlng.com/)
[My geoposition](http://mygeoposition.com/)






<a id="2a"></a>
SubHeading 2a:

<a id="3"></a>
Heading 3:

<a id="4"></a>
Heading 4:
