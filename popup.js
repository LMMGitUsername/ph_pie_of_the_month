/*some code from popup.html adapted from code at
https://dzone.com/articles/develop-your-first-google-chrome-extension-using-h-1
 and https://www.w3schools.com/jquery/jquery_ajax_load.asp*/
$(document).ready(function() {
  $("#pizzaInfo").load("http://pinthousepizza.com/food/menu #menu-off-the-map > p:nth-child(3)");
});
