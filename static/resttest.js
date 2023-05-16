document.getElementById("getbutton").onclick = () => {
  //Make a GET call
  let id = document.getElementById("getid").value;
  fetch(`/api/country/${id}`)
    .then((r) => r.json())
    .then((r) => {
      document.getElementById("getoutput").value = JSON.stringify(r);
    });
};

document.getElementById("deletebutton").onclick = () => {
  //Make a DELETE call
  let id = document.getElementById("deleteid").value;
  fetch(`/api/country/${id}`, { method: "DELETE" });
};

document.getElementById("putbutton").onclick = () => {
  //Assemble the payload
  let payload = {
    id: document.getElementById("putid").value,
    name: document.getElementById("putname").value,
    continent: document.getElementById("putcontinent").value,
    capital: document.getElementById("putcapital").value,
  };
  fetch(`/api/country/${payload.id}`, {
    method: "put",
    body: JSON.stringify(payload),
    headers: { "content-type": "application/json" },
  });
};

document.getElementById("Resttest").onclick = () => {
  var r = document.getElementById("restt");
  if (r.style.display === "none") {
    r.style.display = "inline";
  } else {
    r.style.display = "none";
  }
};
