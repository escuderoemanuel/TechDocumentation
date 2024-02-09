# Collections

### Create

- __db.createCollection(collectionName):__ Creates a collection in the database in use.
  ```powershell
  db.createCollection('students')
  ```
- __db.collection.insertOne():__ Inserts a single document into a collection.
  ```powershell
  db.users.insertOne({name:'John', lastName: 'Doe', age: 35})
  ```
- __db.collection.insertMany():__ Inserts multiple documents into a collection.
  ```powershell
  db.users.insertMany(
    [
      { name:'Saul', lastName: 'Hudson', age: 58, hobbies: ['playing guitar', 'Skate'] },
      { name: 'Izzy', lasName: 'Stradlin', age: 57 }
    ]
  )
  ```
- __db.collection.aggregate():__ Performs aggregation operations on data in a collection.
- __db.collection.createIndex():__ Creates an index on a collection to improve query performance.
- 

### Read

- __show collections:__ Lists all collections in the current database.
- __db.collection.find():__ Retrieves documents from a collection. You can specify search criteria as a filter.
- __db.collection.find(option).pretty():__ Retrieves documents from a collection. You can specify search criteria as a filter. Pretty results.
- __db.collection.findOne(option):__ Retrieves documents from a collection. You can specify search criteria as a filter.
- __db.stats():__ Returns statistics about the current database, such as size, number of collections, etc.
- __db.collection.stats():__ Returns statistics about the specified collection, such as size, number of documents, etc.
- __db.collection.estimatedDocumentCount():__ 
- __db.collection.find( { key: {$operator: value} } )__
  - $and: Performs AND operation -> syntax: {$and: [ {},{} ] }
  - $or: Performs OR operation -> syntax: {$or: [ {},{} ] }
  - $lt: Matches values that are less than a specified value.
  - $lte: Matches values less than or equal to a specified value.
  - $gt: Matches values greater than a specified value.
  - $gte: Matches values greater than or equal to a specified value.
  - $ne: Matches values that are not equal to a specified value.
  - $eq: Selects documents that are equal to a specified value.
  - $exists: Selects documents based on the existence of a field.
  - $in: Selects documents where the value of a field matches any value in an array. 
    - syntax: {key:{$in: [array of values] } }
  - $nin: Matches none of the values specified in an array.
  - $size: Matches the number of specified elements.
  - $all: Matches all values defined within an array.
  - $elemMatch: Matches at least one value defined within the query.
  - db.users.find({},{name:1}); This indicates that the "name" field is the only one we need to retrieve from the document, saving space and complexity in the result.
  - db.collection.find().sort({val_A:1,val_B:-1}): Used to sort the information. 
  - .skip(offset): Omits the specified number of documents: We can use it for pagination, when we need to ignore unnecessary values, etc.
  - .limit(num): Limits the number of returned documents. So we can implement different pagination levels (your page can return 5 elements per page, or 100, you decide).
  


### Update

- __db.collection.updateOne(query,update,option):__ Updates a single document in a collection. 
  - query: used to filter which elements to update (use the same filters as find)
  - update: Section to indicate what to update in the documents that meet the filter. Update has its own operators like $set, $unset, $inc, $rename, $mul, $min, $max
  - option: Options to take into account for the update (such as upsert, which inserts the value in case the document to be updated does not even exist).
- __db.collection.updateMany(query,update,options):__ Updates multiple documents that meet the criteria.
- 


### Delete

- __db.collection.drop():__ Delete the current collection.
- __db.collection.deleteOne():__ Deletes a single document from a collection.
- __db.collection.deleteMany():__ Deletes multiple documents from a collection.
- __db.collection.dropIndex():__ Drops an index from a collection.
- __db.collection.deleteOne({key:val}):__ Delete only the first element that meets the criteria, mainly used to find specific identifiers. It is recommended not to use it if we are aware that the value to be searched is not repeated.
- __db.collection.deleteMany({key:val}):__ Delete all documents that meet the criteria, it is used when we know that more than one value will have that value and we need to do a general cleanup.
