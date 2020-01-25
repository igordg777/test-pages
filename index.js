const fs = require("fs");
module.exports = test

function test() {
    fs.writeFile('index@.html', "<!doctype html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <meta name=\"viewport\"\n" +
        "          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n" +
        "    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" +
        "<link rel=\"stylesheet\" href=\"index@.css\">" +
        "    <title>Document</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "<h6>Hello friend! Enjoy using! © iGorG, 2020<h6>" +
        "<h6 align=\"center\">Test page<h6>" +
        "\n" +
        "\n" +
        "<script src="index@.js"></script>\n" +
            "</body>\n" +
            "</html>", function () {
                console.log("The creation of your index@.html file   is complete!  завершено! © iGorG", '\n', "Создание файла index@.html завершено! © iGorG");

                fs.writeFile('index@.js', "", function () {
                    console.log("The creation of your index@.js file   is complete!  завершено! © iGorG", '\n', "Создание файла index@.js завершено! © iGorG");
                });

                fs.writeFile('index@.css', "h6{\n" +
                    "opacity: 0.5;" +
                    "}", function () {
                        console.log("The creation of your index@.js file   is complete!  завершено! © iGorG", '\n', "Создание файла index@.css завершено! © iGorG");
                    });
            });
}
test()
