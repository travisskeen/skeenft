insert into yak_collection (yakCollectionName, family, collectionClass, yaksId)
values ($1, $2, $3, $4)
returning *;