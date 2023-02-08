import model from './model.js'

const FANLAR = async (req, res) => {
    try {
     let updtedFan = await model.FANLAR(req.body);
     if (updtedFan) {
        res.status(201).json({status: 201, message: 'succes', updtedFan})
     } else {
        res.status(400).json({status: 400, message: "wrong id or firts fan and second fan required"})
     }
    } catch (error) {
      res.status(400).json({status: 400, message: error.message})
    }
}

export default {
    FANLAR
}