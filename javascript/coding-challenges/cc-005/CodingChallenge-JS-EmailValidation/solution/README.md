<p>Clarusway<img align="right"
  src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"  width="15px"></p>

# JS-CC-005 : Email Validation

Purpose of the this coding challenge is to write a code that given email adresses, returns the emails valid or invalid.

- Valid email addresses must follow these rules:

1. It must have the username@websitename.extension format type.
1. The maximum length of the extension is 3.

## Learning Outcomes

At the end of the this coding challenge, students will be able to;

- Analyze a problem, identify and apply programming knowledge for appropriate solution.

- Demonstrate their knowledge of algorithmic design principles by using JavaScript and Python effectively.

## Problem Statement

- Write a function that takes email variable and return `true` or `false` and write console `invalid` or `valid`.

- Please note that, extension length can be 2 or 3 letters( For example: `.co`, `com`. )

#### JavaScript Solution

```javascript
function email_val(email) {
  if (email.indexOf("@") <= 0) {
    console.log("Invalid @ position.");
  }
  if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    console.log("Invalid . position at 4");
  }
}
```

#### Python Solution

```python
def email_val(email):
    if ('@' in email) and ('.' in email):
        email = email[email.index('@')+1:]
        domain = email[:email.index('.')]
        extension = email[email.index('.')+1:]
        res = domain.isalpha() and extension.isalpha() and len(extension) < 4
        return res
    else:
        return False


def test_case():
    try:
        assert email_val("edward@clarusway.com") == True
        assert email_val("edward@clarusway") == False
        assert email_val("edward@clarusway.co") == True
        assert email_val("edward") == False
        print("Code is valid.")
    except:
        print('Code is invalid')


test_case()
```

<center> ⌛ Happy Coding  ✍ </center>
