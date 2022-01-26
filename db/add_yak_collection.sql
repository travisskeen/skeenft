insert into yak_collection (collectionName, collectionFamily, collectionClass, yaksId)
values ($1, $2, $3, $4)
returning *;