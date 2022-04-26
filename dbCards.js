import mongoose from "mongoose";
const cardSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
});
export default mongoose.model(
  "cards",
  cardSchema

  //in sql there are tables..
  //in mongo there are collections of records no tables..
);
