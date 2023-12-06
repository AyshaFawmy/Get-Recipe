import express from "express"
import axios from "axios"

const app = express();
const port = 3000;
const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php"

app.use(express.static("public"));

app.get("/", async(req, res) => {
    try {
        const response = await axios.get(API_URL)
        console.log(response.data)
        res.render("index.ejs", {
            imageSrc: response.data.meals[0].strMealThumb,
            recipeName: response.data.meals[0].strMeal,
            category: response.data.meals[0].strCategory,
            recipeLink: response.data.meals[0].strYoutube,
        })
    } catch (error) {
        console.log(error.message);
        res.status(500);
    }
});


app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})
