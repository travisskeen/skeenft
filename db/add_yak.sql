insert into yaks (name, description, image, dna, edition, date, seller_fee_basis_points, compiler, id)
values ($1, $2, $3, $4, $5, $6, $7, $8, $9)
returning *;