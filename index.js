/* Required External Modules מודלים שמצטרך לייבא 
 */
const express = require('express');//קיבלנו את זה כי התקנו
const path = require('path');//קיבלנו את זה מהnode
const bodyParser = require("body-Parser")

/**
 * App Variables משתנים 
 */
const app = express();//המופע של אקספרס
const port = process.env.port | 4000
/**
 *  App Configuration 
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug"); //שימוש במנוע פאג להרצת תצוגה מונעת מידע
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Routes Definitions יצירת הראוטינג
 */
app.get('/', (req, res) => {
   res.render("home")
})



app.route('/user')
   .get((req, res) => {
      res.render("pageNotFound")
   })
   .post((req, res) => {
      res.render("user",
         {
            user:

            {
               name: req.body.name,
               lastName: req.body.lastName

            }
         })

   })


/**
 * Server Activation הרצת השרת
 */
app.listen(port)
