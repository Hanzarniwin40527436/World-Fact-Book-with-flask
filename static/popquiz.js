fetch("static/worldl.json")
  .then((r) => r.json())
  .then((r) => {
    let q = document.createElement("div");
    q.innerText = "Which country has the biggest population?";
    document.getElementById("question").append(q);
    let alist = r.filter((c) => c.population >= 100000000);
    for (let c of alist) {
      c.rand = Math.random();
    }
    alist.sort((a, b) => a.rand - b.rand);
    let distractors = [];
    for (let i = 0; i < 4; i++) {
      distractors.push(alist[i]);
    }
    //......................................................................
    let s = document.createElement("div");
    s.innerText = "Which country has the smallest population?";
    document.getElementById("question1").append(s);
    let clist = r.filter((c1) => c1.population >= 100000000);
    for (let c1 of clist) {
      c1.rand = Math.random();
    }
    clist.sort((a1, b1) => a1.rand - b1.rand);
    let distractors1 = [];
    for (let z = 0; z < 4; z++) {
      distractors1.push(clist[z]);
    }

    //Find smallest population
    let smallest = 100000000000;
    for (let c1 of distractors1) {
      if (c1.population < smallest) {
        smallest = c1.population;
      }
    }
    for (let c1 of distractors1) {
      let d1 = document.createElement("div");
      d1.innerText = c1.name;
      d1.onclick = () => {
        if (c1.population === smallest) {
          alert("You are right!");
        } else {
          alert("That is not right");
        }
      };
      document.getElementById("question1").append(d1);
    }

    //Find biggest population
    let biggest = 0;
    for (let c of distractors) {
      if (c.population > biggest) {
        biggest = c.population;
      }
    }
    for (let c of distractors) {
      let d = document.createElement("div");
      d.innerText = c.name;
      d.onclick = () => {
        if (c.population === biggest) {
          alert("You are right!");
        } else {
          alert("That is not right");
        }
      };
      document.getElementById("question").append(d);
    }
  });

document.getElementById("quizid").onclick = () => {
  var r = document.getElementById("quizt");
  if (r.style.display === "none") {
    r.style.display = "inline";
  } else {
    r.style.display = "none";
  }
};
