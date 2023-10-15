import express from "express";
import { fileURLToPath } from 'url';
import path from 'path';
import { MongoClient } from "mongodb";

const uri = "mongodb://0.0.0.0:27017";

const client = new MongoClient(uri);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const assetsRouter = express.Router();

const imageRegex = /\/.+\.(svg|png|jpg|png|jpeg)$/;
const videoRegex = /\/.+\.(mp4|ogv)$/;

app.set("view engine", "ejs"); // Set the view engine here

app.use(express.json());

assetsRouter.get(imageRegex, (req, res) => {
  const filePath = req.path;
  res.redirect(303, `http://localhost:5173/src${filePath}`);
});

assetsRouter.get(videoRegex, (req, res) => {
  const filePath = req.path;
  res.redirect(303, `http://localhost:5173/src${filePath}`);
});

// Serve static files from the "public" directory
app.use("/", express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

// Use the assetsRouter for the "/assets" and "/src" routes
app.use("/assets", assetsRouter);
app.use("/src", assetsRouter);

// Define your API route
app.get("/api/v1", (req, res) => {
  res.json({
    project: "React and Express Boilerplate",
    from: "Vanaldito",
  });
});

// Serve the index.html file for all other routes
app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const { PORT = 5000 } = process.env;

app.post("/locate", (req, res) => {
  // Handle the data sent by the form
  const formData = req.body;

  async function run() {
    try {
      const database = client.db('E-Waste');
      const sign = database.collection('locate');
      const tab = {city:formData['city'],country:'US'};
      const datas = await sign.findOne(tab);
      console.log(datas);
      res.json({ message: "Form data received on the server" ,data:datas});

    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.post("/credit_calc", (req, res) => {
  // Handle the data sent by the form
  const formData = req.body;

  // You can now send this data to the "locate" component or do any other processing
  // For now, just log the data
  console.log("Form data received on the server:", formData);

  // Send a response back to the client (you can customize this response)
  res.json({ message: "Form data received on the server" });
});

app.post("/login", (req, res) => {
  // Handle the data sent by the form
  const formData = req.body;

  // You can now send this data to the "locate" component or do any other processing
  // For now, just log the data
  console.log("Form data received on the server:", formData);

  // Send a response back to the client (you can customize this response)
  res.json({ message: "Form data received on the server" });
});


app.listen(PORT, () => {
  console.log();
  console.log(`  App running on port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
