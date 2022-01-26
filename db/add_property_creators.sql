insert into (creatorName, creatorAddress, creatorShare, yakPropertiesId)
values ($1, $2, $3, $4)
returning *;