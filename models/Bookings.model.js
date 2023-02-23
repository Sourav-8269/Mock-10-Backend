const mongoose=require("mongoose"), Schema = mongoose.Schema;

const bookingSchema=mongoose.Schema(
    {
        user : { type: Schema.Types.ObjectId, ref: 'users' },
        flight : { type: Schema.Types.ObjectId, ref: 'flights' }
   });

const BookingModel=mongoose.model("booking",bookingSchema);

module.exports={BookingModel};