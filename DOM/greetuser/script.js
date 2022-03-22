function newpage() {
    var thename = document.getElementById("yourname").value;
    document.open();
    document.write("<h1>Welcome!</h1>");
    document.write("Hello, "+thename+", and welcome to my page!");
    document.close();
    }
    