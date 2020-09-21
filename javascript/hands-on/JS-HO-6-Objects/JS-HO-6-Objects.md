<h2 style="float:right;"><img src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg" width="20px"> Clarusway</h2>

# Hands-on JavaScript-Objects

> Purpose of the this hands-on training is to teach the students JavaScript Objects.

## Learning Outcomes

> At the end of the this hands-on training, students will learn;

- What is JavaScript Object?
- Create Object using Object Literal Syntax.
- Create Object using Object Constructor
- JavaScript Properties
- Adding New Properties
- Modifying a Property
- Removing/Deleting Object Properties
- JavaScript Object Methods
- Adding New Method to Object

### Part 1 - What is JavaScript Object?

---

- **In JavaScript, objects are king. If you understand objects, you understand JavaScript.**

- The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the `Object()` constructor.

| Object |        Property         |    Method    |
| :----: | :---------------------: | :----------: |
|        | bike.type : mountain300 | bike.drive() |
|  bike  |   bike.weight : 15kg    | bike.break() |
|        | bike.color : turqouise  |              |

### Part 2 - Create Object using Object Literal Syntax.

---

The object literal is a simple way of creating an object using `{}` brackets. You can include key-value pair in `{}`.

Syntax :

```js
var nameOfObject = {
    key1: value1,
    key2: value2,
    ...
    keyN: valueN
    };
```

```js

```

### Part 3 - Create Object using Object Constructor

---

- The second way to create an object is with **Object Constructor** using `new` keyword. You can attach properties and methods using **dot notation**. Optionally, you can also create properties using `[ ]` brackets and specifying property name as string.

Syntax :

```js
var nameOfObject = new Object();
nameOfObject.key1 = value1; // dot property accessor | dot notation
// or
nameOfObject["key2"] = value2; // square brackets property accessor
```

```js

```

### Part 4 - JavaScript Properties

---

- Properties are the values associated with a JavaScript object. A JavaScript object is a collection of **unordered** properties. Properties can usually be changed, added, and deleted, but some are read only.

Syntax :

```js
nameOfObject.key1 = value1;
nameOfObject["key2"] = value2;
```

```js

```

### Part 5 - Adding New Properties

---

- To add a new property to an object, specify the object name followed by: a dot, the name of the new property, an equals sign, and the value for the new property (enclosed in quotes if it is a string).

Syntax :

```js
nameOfObject.nameOfPropety = value;
```

```js

```

### Part 6 - Modifying a Property

---

- The process for modifying a property is essentially the same.

Syntax :

```js
nameOfObject.nameOfExistingPropety = newValue;
```

```js

```

### Part 7 - Removing/Deleting Object Properties

---

- The `delete` keyword deletes a property from an object. The delete operator should not be used on predefined JavaScript object properties. It can crash your application.

Syntax :

```js
delete nameOfObject.nameOfExistingPropety;
// Expected Output : true
```

- The delete operation evaluates as `true` if the property was successfully removed, or if it was used on a property that doesn’t exist.

```js

```

### Part 8 - JavaScript Object Methods

---

- A method is a function which is a property of an object.

Syntax :

```js
let nameOfObject = {
  nameOfMethod: function () {
    statement;
  },
};
```

```js

```

- JavaScript has a special keyword, `this`, that you can use within a method to refer to the current object.

Syntax :

```js
let nameOfObject = {
    nameOfProperty : value
  nameOfMethod: function () {
    return this.nameOfProperty
  },
};
```

```js

```

### Part 9 - Adding New Method to Object

---

- Adding new method to an object is similiar the adding new property to an object.

Syntax :

```js
nameOfExistingObject.newMethodName = function () {
  statement;
};
```

```js

```

---
