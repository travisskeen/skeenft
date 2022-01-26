insert into property_files (uri, type, yakPropertiesId)
values ($1, $2, $3)
returning *;