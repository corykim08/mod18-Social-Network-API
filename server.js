const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require("./routes"));

// Connect to MongoDB and localhost server using mongoose

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/social_network_API",{

    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
    
  }
);

mongoose.set("debug", true);

app.listen(PORT, () => console.log(`App running on PORT :${PORT}`));
