import Sender from "../models/sender_m.js";
import createError from "../utils/error.js";

export const register = async (req, res, next) => {
    try {
      const newSender = new Sender({
        fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        desc:req.body.desc
      });
  
      await newSender.save();
      res.status(200).send({
        message: "Your response send to Kushagra",
        success: true,
      });
    } catch (err) {
      next(createError(400,"Something went wrong Try again!"));
    }
  };