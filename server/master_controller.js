module.exports = {
    create: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { item_name, item_price, image_url, bin_id } = req.body;
      
      console.log(item_name, item_price, image_url, bin_id) 

      dbInstance.create_item([ item_name, item_price, image_url, bin_id ])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },
  
 
    getAllBins: ( req, res, next ) => {
      console.log('getAllBins') 
      const dbInstance = req.app.get('db');
  console.log(req.params.id)
      dbInstance.read_bins([ req.params.id ])
        .then( bins => res.status(200).send( bins ) )
        .catch( () => res.status(500).send() );
    },

    getAllShelves: ( req, res, next ) => {
      console.log('getAllShelves') 
      const dbInstance = req.app.get('db');
  
      dbInstance.read_shelves( )
        .then( shelves => res.status(200).send( shelves ) )
        .catch( () => res.status(500).send() );
    },

    getOne: ( req, res, next ) => {
      console.log('getOne')
      const dbInstance = req.app.get('db');
      dbInstance.read_items([ req.params.id ])
        .then( items => res.status(200).send( items ) )
        .catch( () => res.status(500).send() );
    },
  
    update: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { item_name, item_price, image_url, bin_id } = req.body;

      console.log('update') 
      dbInstance.update_item([ req.params.id, item_name, item_price, image_url, bin_id ])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },
  
    delete: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      console.log('delete') 
      dbInstance.delete_item([ req.params.id ])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    }
  };