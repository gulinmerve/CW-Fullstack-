document.getElementById("find").addEventListener("click", fibonacci);
document.getElementById("index").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    document.getElementById("find").click();
  }
});


function fibonacci() {
  const number = document.getElementById("index").value;
  const fiboArray = [1, 1];

  if (number < 1 || number === "") {
    document.getElementById("result").innerHTML = "⚡⚡Please Enter A Positive Number⚡⚡"
  } else {
    for (let i = 2; i < number + 1; i++) {

      fiboArray.push(fiboArray[i - 2] + fiboArray[i - 1]);

    }
    document.getElementById("result").innerHTML = `✨Fibonacci(${number}) ➞ ${fiboArray[number]}✨`;
  }
}