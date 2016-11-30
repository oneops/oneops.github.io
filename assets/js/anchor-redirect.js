// Anchor Redirector
// Redirect any incoming anchor #example to the identical named example.html page
function anchorRedirect() {
  var loc = window.location.href;
  var hash = window.location.hash.substring(1);
  var newLoc = loc.substring(0, loc.length - (hash.length + 1)) + hash + ".html";
  
  if (hash) {
    window.location.replace(newLoc);
  }
}
