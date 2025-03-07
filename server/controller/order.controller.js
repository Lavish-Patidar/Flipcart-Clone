import Order from '../models/OrderSchema.js';

export const createOrder = async (req, res) => {
    try {
        const { productId, quantity, userId } = req.body; // Get userId from the request body

        const newOrder = new Order({
            userId,
            productId,
            quantity
        });

        await newOrder.save();
        res.status(201).json({ message: 'Order created successfully', order: newOrder });
    } catch (error) {
        console.log('Error in creating order:', error);
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
};
