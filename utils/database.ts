import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
if (isConnected) {
    console.log("Connected");
    return;
}
try {
    await mongoose.connect('mongodb+srv://alielhamied1:alyakbar07@cluster0.zvhd3hj.mongodb.net/?', {
        dbName: "share_prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('Connected');
} catch (error) {
    console.log(error);
}
};
