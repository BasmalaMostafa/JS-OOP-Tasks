# JS-OOP-Tasks
 
# Task 1:

![oop lab](https://github.com/user-attachments/assets/5e8cbc8a-48a8-4f6a-a2f1-d7e0f3fdf9fb)

# Task 2:
Display the area and perimeter of an object created from using Rectangle Constructor that has width 
and height properties and 2 extended methods (using prototype property) for calculating area, 
perimeter (last day task). 
a. Override toString() function to display a message declaring the width, height, area and 
perimeter of the created object. 
b. Create Class Property that counts numbers of created objects and Class method to retrieve it.

# Task 3:
 Make proper updates in your previous code of generating Rectangle object that should inherit from 
Shape Constructor, and create your Square constructor that inherits from Rectangle.
Prevent creating any object from shape, allow creation of only rectangles and square 
Bonus: allow creation of only one square and one rectangle.

# Task 4:
. Create your box object that contains books objects, ensure that you can : 
a. count # of books inside box. 
b. delete any of these books in box according to book name or type. 
c. create book object and add it to box object content property 
d. use toString() to tell its dimensions and how books are stored in it. 
e. implement valueof() so that if there is more than one box object we can a. get total books in these 
boxes by adding the i.e. box1 has 5 books while box2 has 2 books, box1 + box2 should return 7
Note: 
• there is no inheritance 
• box object has the following properties: height, width, length, numOfBooks, volume, material, content. 
• The content property contains an array of books. 
• book object has the following properties: title, numofChapters, author, numofPages, publisher, 
numofCopies 
• you can define any function needed for both box and book objects.

# Task 5:
Study new array api methods then create the following methods and apply it on this array
var fruits = ["apple", "strawberry", "banana", "orange", "mango"]
a. test that every element in the given array is a string.
b. test that some of array elements starts with "a".
c. generate new array filtered from the given array with only elements that starts with "b" or "s".
d. generate new array each element of the new array contains a string declaring that you like the give 
fruit element e. use forEach to display all elements of the new array from previous point.

# Task 6: Using ES6 new Syntax & features:
Write a script to create different shapes (rectangle, square, circle)
make all of them inherits from shape class.
a. each shape contains two functions to calculate its area and its
parameter.
b. Display the area and each object parameter in your console by
overriding toString().
c. Make your classes in an external file and import them in a module to
create objects

# Task 7: Proxy:
create a dynamic object using Proxy such that it has only the following
properties
a∙ name property that accepts only string of 7 characters.
b∙ address property that accepts only string value.
c∙ age property that accepts numerical value between 25 and 60.

# Task 8: Generator:
Create a generator that returns fibonacci series that takes only
one parameter. Make two different implementations as described
below:
a. the parameter passed determines the number of elements
displayed from the series.
b. the parameter passed determines the max number of the
displayed series should not exceed its value.

# Task 9: Iterator:
Create an iterable object by implementing @@iterator method
i.e. Symbol.iterator, so that you can use for..of and retrieve its
properties. retrieving the object properties and its values.
