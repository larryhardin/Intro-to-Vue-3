/* Summary of code below.
  1) Because index.htm imported the script: <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
     Vue can be used here.
  2) the Vue framework creates an app with a function called data
  3) The data function returns an object named Socks. 
  4) AFAIK, socks does not have anything other than a name? 
*/

/* the createApp method/function receives an Options object inside of the curly braces
   so it appears that the first ( if thre are more than 1 ) elemenbt in the arrary parameter
   is an options object. not optional, must pass in at least an empty object for the app to 
   successfully create
   The way it works is that the div tag in the index html file is named app.
   The object inside of the double curly braces {{}} on the h1 div of the app div
   is basically directional in that it can receive a request and reply to it.
   {{}} AKA mustache syntax allows coder to write a JavaScript expression, allowing us to run
        valid javascripts wihtin our html. 
*/
const app = Vue.createApp(
    {   //data: function() {
        //Switched to use ES6 shorthand
        data() {
            return{
            product: 'Socks'
            }
        }
    }
)
// WAS ONLY THIS LINE: const product = 'Socks'
