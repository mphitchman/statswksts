var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   mphitchman.com\/stats   https:\/\/mphitchman.com\/stats   copyright  "
},
{
  "id": "governors",
  "level": "1",
  "url": "governors.html",
  "type": "Section",
  "number": "1.1",
  "title": "Governors",
  "body": " Governors   Scene We use RStudio to investigate a data set containing information about the current governors of the 50 US States.    Begin this worksheet by completing the following steps:  Open RStudio.  At the console prompt load the tidyverse by entering library(tidyverse)  Load the governors data into your session by entering this line in the console prompt gov = read.csv(\"https:\/\/mphitchman.com\/stats\/data\/gov23.csv\")    By running the two lines of code you should now have the data frame gov loaded into your session, and you are also ready to utilize commands in the tidyverse package.       How many observations does this data set have?    How many variables? Classify each variable as numerical or categorical.    Use the table() command to determine how many current governors are Republican and how many are Democratic.          nrow(gov) returns the number of rows (observations) in the data frame gov      ncol(gov) returns the number of columns (variables)     table(gov$party) summarizes the party variable of the data frame gov     What proportion of governors, currently, are Republican? Express your answer as a fraction or in decimal form.          How many observations does the data frame gov have?             "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "governors.html#exercise-1",
  "type": "Worksheet Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "    How many observations does this data set have?    How many variables? Classify each variable as numerical or categorical.    Use the table() command to determine how many current governors are Republican and how many are Democratic.          nrow(gov) returns the number of rows (observations) in the data frame gov      ncol(gov) returns the number of columns (variables)     table(gov$party) summarizes the party variable of the data frame gov     What proportion of governors, currently, are Republican? Express your answer as a fraction or in decimal form.     "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "governors.html#exercise-2",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "  How many observations does the data frame gov have?           "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
