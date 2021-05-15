function search() {
    //declare variable
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('mysearch');//get the input from user
    filter = input.value.toUpperCase();//make sure to make the text capital letter
    ul = document.getElementById("ul-search");//get the ul from the html to check for the search options
    li = ul.getElementsByTagName('li');//gets the elements inside the ul

    for (i = 0; i < li.length; i++) {//loops though each li to get the anchor
    a = li[i].getElementsByTagName("a")[0];//gets the anshor from the li
    txtValue = a.textContent || a.innerText;//search for the text inside the anchor
    if (txtValue.toUpperCase().indexOf(filter) > -1) {//checks if the text inside the anchor is equal to the text inputed by user
        li[i].style.display = "";//display the searched text
    } else {
        li[i].style.display = "none";//removes the non searched
        }
    }
}