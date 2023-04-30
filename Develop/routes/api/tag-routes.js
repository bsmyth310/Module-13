const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tData = await Tag.findAll(
      {include: [{model: Product,
        through: ProductTag}]}
    );
    res.status(200).json(tData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tData = await Tag.findByPkAll(req.params.id,
      {include: [{model: Product,
        through: ProductTag}]}
    );
    res.status(200).json(tData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tData = await Tag.create(req.body);
    res.status(200).json(tData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tData = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
  });
    res.status(200).json(tData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tData = await Product.destroy({
      where: {
        id: req.params.id
      }
  });
  if(!tData) {
    res.status(404).json({ message: 'Tag not found with this id' });
    return;
  }
    res.status(200).json(tData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
