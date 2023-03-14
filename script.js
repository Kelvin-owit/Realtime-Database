firebase
  .database()
  .ref("mwanafunzi")
  .get()
  .then(function (x) {
    console.log(x);

    if (x.exists()) {
      var stude = Object.values(x.val());
      console.log(x.val());
      console.log(stude);

      stude.forEach(function (stude) {
        console.log(stude);

        var fullStack = document.getElementById("fullstack");

        var para = document.createElement("div");
        var name = document.createElement("h3");
        var description = document.createElement("p");
        var image = document.createElement("img");

        name.innerHTML = stude.Name;
        description.innerHTML = stude.Description;

        image.src = "https://w.wallhaven.cc/full/v9/wallhaven-v9kw9l.jpg";
        fullStack.appendChild(para);
        para.appendChild(name);
        para.appendChild(description);
        para.appendChild(image);

        image.style.width = "30%";
      });
    }
  });
