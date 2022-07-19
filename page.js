function calculate() {
  let a = parseInt(document.getElementById("bookone").value);
  let b = parseInt(document.getElementById("booktow").value);
  let c = parseInt(document.getElementById("bookthree").value);
  let d = parseInt(document.getElementById("bookfour").value);
  let e = parseInt(document.getElementById("bookfive").value);

  if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {
    alert("please enter the correct value");
    prompt("enter your name");
  } else {
    let obtains = a + b + c + d + e;
    document.getElementById("Obtain").innerHTML = obtains;
    let per = (obtains / 500) * 100;

    document.getElementById("per").innerHTML = per;
    if (a > 40 && b > 40 && c > 40 && d > 40 && e > 40) {
      document.getElementById("remak").innerHTML =
        "<span style='color:#292'>Pass</span>";
    } else {
      document.getElementById("remak").innerHTML =
        "<span style='color:red'>Fail</span>";
    }

    if (a >= 80 && a <= 100) {
      document.getElementById("grade").innerHTML =
        "<span style='color:darkturquoise'>A</span>";
    } else if (a >= 70 && a <= 80) {
      document.getElementById("grade").innerHTML =
        "<span style='color:darkturquoise'>B</span>";
    } else if (a >= 60 && a <= 70) {
      document.getElementById("grade").innerHTML =
        "<span style='color:darkturquoise'>C</span>";
    } else if (a >= 50 && a <= 60) {
      document.getElementById("grade").innerHTML =
        "<span style='color:darkturquoise'>D</span>";
    } else if (a >= 40 && a <= 50) {
      document.getElementById("grade").innerHTML =
        "<span style='color:darkturquoise'>E</span>";
    } else {
      document.getElementById("grade").innerHTML =
        "<span style='color:darkturquoise'>F</span>";
    }
  }
  if (b >= 80 && b <= 100) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>A</span>";
  } else if (b >= 70 && b <= 80) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>B</span>";
  } else if (b >= 60 && b <= 70) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>C</span>";
  } else if (b >= 50 && b <= 60) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>D</span>";
  } else if (b >= 40 && b <= 50) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>E</span>";
  } else {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>F</span>";
  }
  if (c >= 80 && c <= 100) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>A</span>";
  } else if (c >= 70 && c <= 80) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>B</span>";
  } else if (c >= 60 && c <= 70) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>C</span>";
  } else if (c >= 50 && c <= 60) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>D</span>";
  } else if (c >= 40 && a <= 50) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>E</span>";
  } else {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>F</span>";
  }
  if (c >= 80 && c <= 100) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>A</span>";
  } else if (c >= 70 && c <= 80) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>B</span>";
  } else if (c >= 60 && c <= 70) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>C</span>";
  } else if (c >= 50 && c <= 60) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>D</span>";
  } else if (c >= 40 && c <= 50) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>E</span>";
  } else {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>F</span>";
  }
  if (c >= 80 && c <= 100) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>A</span>";
  } else if (c >= 70 && c <= 80) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>B</span>";
  } else if (c >= 60 && c <= 70) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>C</span>";
  } else if (c >= 60 && c <= 50) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>D</span>";
  } else if (c >= 40 && c <= 50) {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>E</span>";
  } else {
    document.getElementById("grade").innerHTML =
      "<span style='color:darkturquoise'>F</span>";
  }
}
