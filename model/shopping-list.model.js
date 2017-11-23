const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoppingListSchema = new Schema({
	name: String,
	ingredients: [{
		type: Schema.Types.ObjectId,
		ref: 'ingredient'
	}]
});

const ShoppingList = mongoose.model('shopping-list', ShoppingListSchema);

module.exports = ShoppingList;