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

const GET = async (req, res) => {
  try {
   let univer = await model.GET(req.params);
   res.status(201).json({status: 200, message: 'ok', univer})
  } catch (error) {
    res.status(400).json({status: 400, message: error.message})
  }
}

const FAKULTET = async (req, res) => {
  try {
   let fakultet = await model.FAKULTET(req.params);
   res.status(201).json({status: 200, message: 'ok', fakultet})
  } catch (error) {
    res.status(400).json({status: 400, message: error.message})
  }
}

const PUT = async (req, res) => {
  try {
    let user = await model.PUT(req.body);
    if (user) {
      res.status(200).json({status: 200, message: 'ok', user: user})
    } else {
      res.status(400).json({status: 400, message: 'forbidden error'})
    }
   
   } catch (error) {
     res.status(400).json({status: 400, message: error.message})
   }
}

const TEST = async (req, res) => {
  try {
   let test = await model.TEST(req.params);
   res.status(200).json({status: 200, message: 'ok', tests: test})
  } catch (error) {
    res.status(400).json({status: 400, message: error.message})
  }
}

const CHECK = async (req, res) => {
  try {
   let answer = await model.CHECK(req.params);
   if (answer.length) {
    res.status(200).json({status: 200, message: 'ok', test: answer})
   } else {
    res.status(400).json({status: 400, message: 'error'})
   }
  
  } catch (error) {
    res.status(400).json({status: 400, message: error.message})
  }
}

export default {
    FANLAR,
    GET,
    FAKULTET,
    PUT,
    TEST,
    CHECK
}