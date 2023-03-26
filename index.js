const express = require('express');
const cors = require("cors");
const app = express();

app.use(express.json())
app.use(cors());


app.post("/ads", (req, res) => {
    try {
        const adMetadata = req.body;

        const htmlContent = `<div id="ad-element" style="width:100%; padding: 5px; background-color: aliceblue; display: flex; flex-direction: column; align-items: center;">
    <h3 id="headline-element">${adMetadata.headline}</h3>
    <p id="ad-content-element">${adMetadata.content}</p>
    <img src="${adMetadata.imgUrl}" width="${adMetadata.imgWidth}" height="${adMetadata.imgHeight}">
    </div>`

        res.send({ htmlRes: htmlContent })
    } catch (e) {
        res.status(400).send("Please provide a valid id of your HTML element where you want to show the ad!")
    }

})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is up on ${port}!`);
})