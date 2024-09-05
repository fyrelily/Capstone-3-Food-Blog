import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/blog", (req, res) => {
    res.render("blog.ejs");
});

app.get("/newPost", (req, res) => {
    res.render("newPost.ejs");
});

// app.post("/newImg", (req,res) => {
//     var newImg = req.body["filename"];

//     res.render("newPost.ejs",{image:newImg});
//     console.log("File has been uploaded")
//     console.log(newImg);
// })

app.post("/newRecipe", (req,res) => {
    // Todo Add the remaining input fields

    
    function Recipe(recipeName, description, servings, prepTime, cookTime, difficulty, ingredients, instructions){
        this.recipeName = recipeName;
        this.description = description;
        this.servings = servings;
        this.prepTime = prepTime;
        this.cookTime = cookTime;
        this.difficulty = difficulty;
        this.ingredients = ingredients;
        this.instructions = instructions;
    
            console.log(instructions);
    }
    
    // var recipe = new Recipe(req.body["recipeName"],req.body["description"], req.body["servings"], req.body["prepTime"], req.body["cookTime"], req.body["difficulty"], req.body["ingredients"], req.body["instructions"])

    var recipe = new Recipe("Tiramisù","A feather-light sponge layered with a pascarpone mousse and gently flavored with coffee and brandy - this is the cake version of the Italian 'pick-me-up. Once assembled, it's chilled overnight, which not only makes slicing easier but really boosts the taste and texture. A white chocolate ribbon adds an elegant finishing touch to this delectable showstopper." ,"6 to 8 servings", "25 minutes", "4 to 24 hours' chilling", req.body["difficulty"], ["4 large egg yolks","½ cup/100 grams granulated sugar, divided", "¾ cup heavy cream","1 cup/227 grams mascarpone (8 ounces)","1¾ cups good espresso or very strong coffee","2 tablespoons rum or cognac","2 tablespoons unsweetened cocoa powder","About 24 ladyfingers (from one 7-ounce/200-gram package)","1 to 2 ounces bittersweet chocolate, for shaving (optional)"], ["Prepare the cream: Using an electric mixer in a large bowl, whip together egg yolks and ¼ cup/50 grams sugar until very pale yellow and about tripled in volume. A slight ribbon should fall from the beaters (or whisk attachment) when lifted from the bowl. Set aside.",
        "In a medium bowl, whip cream and remaining ¼ cup/50 grams sugar until it creates soft peaks. Add mascarpone and continue to whip until it creates a soft, spreadable mixture with medium peaks. Gently fold the mascarpone mixture into the sweetened egg yolks until combined.",
        "For the assembly, combine espresso and rum in a shallow bowl and set aside.",
        "Using a sifter, dust the bottom of a 2-quart baking dish (an 8x8-inch dish, or a 9-inch round cake pan would also work here) with 1 tablespoon cocoa powder.",
        "Working one at a time, quickly dip each ladyfinger into the espresso mixture -- they are quite porous and will fall apart if left in the liquid too long -- and place them rounded side up at the bottom of the baking dish. Repeat, using half the ladyfingers, until you've got an even layer, breaking the ladyfingers in half as needed to fill in any obvious gaps (a little space in between is O.K.). Spread half the mascarpone mixture onto the ladyfingers in one even layer. Repeat with remaining espresso-dipped ladyfingers and mascarpone mixture.","Dust top layer with remaining tablespoon of cocoa powder. Cover with plastic wrap and let chill in the refrigerator for at least 4 hours (if you can wait 24 hours, all the better). Top with shaved or finely grated chocolate, if desired, then slice or scoop to serve."

    
    ])

    res.render("newRecipe.ejs",{recipe});
    console.log("Recipe has been uploaded")
})


app.post("/newPost", (req,res)=>{
   res.render("newPost.ejs"); 
})
// app.post("/startOver", (req, res) => {
//     res.render("newPost.ejs");
// });

app.get("/recipes", (req, res) => {
    res.render("recipes.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})