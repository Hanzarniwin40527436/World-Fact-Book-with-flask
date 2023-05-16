fetch("static/worldl.json")
  .then((r) => r.json())
  .then((r) => {
    let rnd = Math.floor(r.length * Math.random());
    document.getElementById("question2").innerHTML = `
      Choose the flag of: ${r[rnd].name}
      `;

    let distractors2 = [];

    distractors2.push(r[56].flag);
    distractors2.push(r[44].flag);
    distractors2.push(r[rnd].flag);
    distractors2.push(r[92].flag);
    for (let d of distractors2) {
      let img = document.createElement("img");
      img.src = d;
      img.onclick = () => {
        if (d === r[rnd].flag) {
          alert("You are right!");
        } else {
          alert("That is not right");
        }
      };
      img.style.width = "auto";
      img.style.height = "50px";
      document.getElementById("question2").append(img);
    }
  });
