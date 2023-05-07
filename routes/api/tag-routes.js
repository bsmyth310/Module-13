const router = require('express').Router();
const {Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//GET all tags, inclduing Product data
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: {all: true, nested:true}
    //include: [{model: Product, through: ProductTag, as: 'tag_products'}] couldn't get to this syntax to work like in products
    });
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err)
  }
});

  // GET a single tag by its `id`
router.get('/:id', async (req, res) => {
  try{
    const tagData = await Tag.findByPk(req.params.id, {
      include: {all: true, nested:true}
      //include: [{model: Product, through: ProductTag, as: 'tag_products'}]
    });
    res.status(200).json(tagData)
}
catch (err) {
    res.status(500).json
}
});

  // CREATE a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData)
} 
catch (err) {
    res.status(400).json(err);
}
});

   // UPDATE a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id:req.params.id,    
      },
    })
    
    if(!tagData) {
      res.status(400).json(`Tag ID ${req.params.id} could not be found!`)
    }
    res.status(200).json(`Tag ID ${req.params.id} has been updated`)
    
  } catch (err) {
      res.status(400).json(err)
  }
});
 
// DELETE on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
       id:req.params.id,
      },
    })
    
    if(!tagData) {
      res.status(400).json(`Tag ID ${req.params.id} could not be found!`)
    }

    res.status(200).json(`Tag ID ${req.params.id} has been deleted`)
    
  } catch (err) {
      res.status(400).json(err)
  }
});

module.exports = router;