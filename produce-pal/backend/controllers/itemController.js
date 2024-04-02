const PostalCodeItems = require('../models/postalcode_model');

// get all items with a specific name in a specific postal code
const searchItems = async (req, res) => {
    try {
        const postalCode = req.params.postalCode;
        const name = req.params.name;
        if (name.length < 3) {
            throw new Error("Name must be at least 3 characters long");
        }
        const allItems = await PostalCodeItems.findOne({postalCode: postalCode})
        const items = allItems ? allItems.items.filter(item => item.name.match(new RegExp(".*" + name + ".*", 'i')))
                                                  .sort((a, b) => a.price - b.price) : [];
        res.status(200).json(items);
        console.log("Fetched items with name: " + name);
    } catch (error) {
        res.status(500).json({message: error.message});
        console.log(error.message);
    };
};

module.exports = {searchItems};