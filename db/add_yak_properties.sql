insert into yak_properties (category, yaksId)
values ($1, $2)
returning *;