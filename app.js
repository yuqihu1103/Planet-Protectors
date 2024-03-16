import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { connectToDatabase } from "./db/db.js";
import incrementRoute from "./routes/increment.js";
import valueRoute from "./routes/value.js";
import TreesModel from "./models/trees.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

//test route
app.get("/test", (req, res) => {
  res.status(200).json({ message: "Test success!" });
});

// Include your trees routes
app.put("/increment", incrementRoute);
app.get("/value", valueRoute);

// Start your server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectToDatabase();
await TreesModel.createTree();
export default app;
