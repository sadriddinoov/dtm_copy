import { userSchema, fanShema } from "../utils/validation.js"

export default (req, res, next) => {
    try {
        if (req.url == '/users' && req.method == "POST") {
          let { error } = userSchema.validate(req.body)

          if (error) throw error;     
        }

        if (req.url == '/fanlar' && req.method == "PUT") {
            let { error } = fanShema.validate(req.body)
  
            if (error) throw error;     
        }

        return next()

        
    } catch (error) {
        res.status(400).json({status:400,error: error.message})
    }
}