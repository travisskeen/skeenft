insert into (traitType, traitValue, yakPropertiesId)
values ($1, $2, $3)
returning *;