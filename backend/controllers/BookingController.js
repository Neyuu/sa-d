const { firestore } = require('../firebase/firebase');

const createBooking = async (req, res) => {
    const { 
        roomNum, 
        userId, 
        fromTime, 
        toTime, 
        status,
        paymentMethod 
    } = req.body;

    try {
        if (!roomNum || !userId || !fromTime || !toTime || !status || !paymentMethod){
            return res.status(400).json({ error: 'Bad request' });
        }

        const doc = await firestore.collection('bookings').add({
            roomNum: roomNum, 
            userId: userId, 
            fromTime: new Date(fromTime),
            toTime: new Date(toTime), 
            status: status,
            paymentMethod: paymentMethod
        });
        
        const id = doc.id;
        return res.status(200).json({ id });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
}

const deleteBooking = async (req, res) => {
    const {
        bookingId
    } = req.body

    try {
        const doc = await firestore.collection('bookings').doc(bookingId).get();
        const id = doc.id;
        if (!doc.exists) {
            return res.status(400).json({ error: 'Bad request' });
        }

        await doc.ref.delete();

        return res.status(200).json({ id });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
}

module.exports = { createBooking, deleteBooking };