const Cart = require("../models/Cart");
const Tea = require("../models/Tea");

// We use a single "guest cart" for simplicity
let guestCart = null;

// Add item to cart
exports.addToCart = async (req, res) => {
  try {
    const { teaId, quantity } = req.body;

    if (!teaId || !quantity) {
      return res.status(400).json({ error: "teaId and quantity are required" });
    }

    if (!guestCart) guestCart = { items: [] };

    const tea = await Tea.findById(teaId);
    if (!tea) return res.status(404).json({ error: "Tea not found" });

    const itemIndex = guestCart.items.findIndex((i) => i.tea.toString() === teaId);
    if (itemIndex > -1) {
      guestCart.items[itemIndex].quantity += quantity;
    } else {
      guestCart.items.push({ tea: teaId, quantity });
    }

    res.json(guestCart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
  try {
    const { teaId } = req.body;
    if (!guestCart) return res.status(404).json({ error: "Cart not found" });

    guestCart.items = guestCart.items.filter((i) => i.tea.toString() !== teaId);

    res.json(guestCart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get cart
exports.getCart = async (req, res) => {
  try {
    res.json(guestCart || { items: [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update item quantity
exports.updateCartQuantity = async (req, res) => {
  try {
    const { teaId, quantity } = req.body;

    if (!guestCart) return res.status(404).json({ error: "Cart not found" });

    const itemIndex = guestCart.items.findIndex((i) => i.tea.toString() === teaId);
    if (itemIndex === -1) return res.status(404).json({ error: "Item not in cart" });

    guestCart.items[itemIndex].quantity = quantity;

    res.json(guestCart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
