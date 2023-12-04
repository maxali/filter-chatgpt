
  window.addEventListener('load', function() {
    console.log("Adding filter input box...");
    
    window.setTimeout(function() {
      console.log("Adding filter input box after 300ms...");
      var navElements = document.getElementsByTagName('nav');
      if (navElements && navElements.length > 0) {
        var navElement = navElements[0];
        var inputBox = document.createElement('input');
        inputBox.type = 'text';
        inputBox.id = 'liFilterInput';
        inputBox.className = 'm-0 mt-2 p-2 rounded text-sm';
        inputBox.style = 'color: black;';
        inputBox.placeholder = 'Filter items...';
        navElement.appendChild(inputBox); // Appends the input box to the end of the last <nav>
    
        inputBox.addEventListener('input', filterItems);
      }
    }, 1000);
  });


function filterItems() {
  console.log("Filtering items...");
  var input = document.getElementById('liFilterInput');
  var filter = input.value.toUpperCase();
  var listItems = document.querySelectorAll('li');

  listItems.forEach(function(item) {
    var text = item.textContent || item.innerText;
    if (text.toUpperCase().indexOf(filter) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
