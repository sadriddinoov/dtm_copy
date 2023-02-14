import model from './model.js'

const POST = async (req, res) => {
    try {
     let newUser = await model.POST(req.body);
     if (newUser) {
        res.status(201).json({status: 201, message: 'succes', newUser})
     } else {
        res.status(400).json({status: 400, message: "duplicate key username or bad request"})
     }
    } catch (error) {
      res.status(400).json({status: 400, message: error.message})
    }
}

const PUT = async (req, res) => {
  try {
   let updatedUser = await model.PUT(req.params);
   if (updatedUser.length) {
    res.status(200).json({status: 200, message: 'succes'})
   } else {
    res.status(400).json({status: 400, message: 'error'})
   }
  } catch (error) {
    res.status(400).json({status: 400, message: error.message})
  }
}

const GET = async (req, res) => {
  try {
   let users = await model.GET();
   res.status(200).json({status: 200, message: 'succes', users})
  } catch (error) {
    res.status(400).json({status: 400, message: error.message})
  }
}

export default {
    POST,
    PUT,
    GET
}