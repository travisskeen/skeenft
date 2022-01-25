module.exports={
   addYaks: async (req, res, next) => {
       const db = req.app.get('db');
       const {name, description, image, dna, edition, date, sellerFeeBasisPoints, compiler, yakCollectionName, family, collectionClass} = req.body;
       const newYaks = await db.addYak([name, description, image, dna, edition, date, sellerFeeBasisPoints, compiler]);
       const yaksId = newYaks[0].id
       const newYakCollection = await db.addYakCollection([yakCollectionName, family, collectionClass, yaksId]);
       
       
       const newCreatedYak = {
           mainYakInfo: newYaks[0],
           collection: newYakCollection[0],
       }

       if(newYaks){
           res.status(200).send(newYaks);
       } else {
           res.status(400).send({message: 'Invalid entry, check formatting'});
       }
   },
}