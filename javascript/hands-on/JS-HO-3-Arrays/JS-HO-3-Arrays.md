<h2 style="float:right;"><img src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg" width="20px"> Clarusway</h2>

# Hands-on JavaScript Arrays

> Purpose of the this hands-on training is to teach the students JavaScript Arrays.

## Learning Outcomes

> At the end of the this hands-on training, students will be able to use;

- Arrays
- Array `length` Property
- Array Methods

## Outline

- What is an Array?
- Defining an Array
- Defining an Array with `new` Keyword
- Access the Elements of an Array
- Changing an Array Element
- Access the Full Array
- Arrays are Special type of Objects
- Array Properties and Methods

### Part 1 - What is an Array?

- In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable.

---

### Part 2 - Defining an Array?

Syntax :

```js
var nameOfArray = [item1, item2, ...];
```

Let's give an Array example:

```js

```

---

### Part 3 - Defining an Array with `new` Keyword

- You can initialize an array with Array constructor syntax using new keyword.

Syntax :

```js
var arrayName = new Array(element1, element2, element3, ...elementN);
```

```js

```

❗ The two examples above do exactly the same. There is no need to use `new Array()`. For **simplicity**, **readability** and **execution speed**, use the first one (the array literal method).

---

### Part 4 - Accessing Elements of an Array

You access an array element with index number.

Syntax :

```js
var element = nameOfArray[indexNumber];
```

```js

```

❗ Array indexes start with 0.

### Part 5 - Changing an Array Element

You can change an element by giving a new value.

Syntax :

```js
nameOfArray[indexNumber] = "newElement";
```

```js

```

### Part 6 - Accessing Full Array

- You can access the full array with array name.

Syntax :

```js
console.log(nameOfArray);
```

```js

```

### Part 7 - Arrays are Special type of Objects

- The typeof operator in JavaScript returns "object" for arrays.

```js

```

- How to check if a variable is an array in JavaScript?

Syntax :

```js
Array.isArray(value);
```

```js

```

---

### Part 8 - Array Properties and Methods

- The real strength of JavaScript arrays are the built-in array properties and methods.

- The `length` Property

```js

```

- Accessing the Last Array Element

```js

```

- The `push()` Method

```js

```

- Also new element can be added to an array using `length` propert

```js

```

- The `toString()` Method

`toString()` method converts an array to a string of (comma separated) array values.

```js

```

- The `join()` Method

The `join()` method is used to join the elements of an array into a string. The elements of the string will be separated by a specified separator and its default value is a comma(,).

```js

```

- The `pop()` Method

Remove an item from the end of an array with `pop()` method.

```js

```

`pop()` returns the remeoved item.

```js

```

- The `push` Method

Add items to the end of the an array

```js

```

`push()` returns the new array length.

```js

```

- The `shift()` Method

Remove an item from the beginning of an array

```js

```

`shift()` returns the removed item.

```js

```

- The `unshift()` Method

Add items to the beginning of an array.

```js

```

`unshift()` returns the new array length.

```js

```

- Deleting Elements

Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete.

```js

```

❗ Using delete may leave undefined holes in the array. Use `pop()` or `shift()` instead.

- The `splice()` Method

The `splice()` method can be used to add new items to an array.

```js

```

First parameter of splice method defines the position where new elements should be added.

Second parameter of splice method defines how many elements should be removed.

Rest of the parameters define the new items to be added.

- The `concat()` Method

The `concat()` method creates a new array by merging (concatenating) existing arrays:

```js

```

❗ The `concat()` method does not change the existing arrays. It always returns a new array.

The `concat()` method can take any number of array arguments:

```js

```

- The `slice()` Method

The `slice()` method slices out a piece of an array into a new array.

```js

```

The `slice()` method can take two arguments like `slice(2, 4)`.

```js

```
