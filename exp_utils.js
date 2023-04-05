
function level2Exp(level) {
  return Math.pow(level, 3) + 1;  

}

function level2ExpInBillion(level) {
  return (level2Exp(level) / 1e9).toFixed(2);
}

function exp2Level(exp) {
  return Math.pow(exp - 1, 1/3);
}

function expInBillion2Level(exp) {
  return exp2Level(exp * 1e9);
}

function levelDifference(level1, level2) { 
  const smaller = level1 > level2 ? level2 : level1;
  const bigger = level1 > level2 ? level1 : level2;
  return exp2Level(level2Exp(bigger) - level2Exp(smaller));
}

function expAdd(exp, level) {
  return exp2Level(level2Exp(level) + exp);
}

function expInBillAdd(exp, level) {
  return exp2Level(level2Exp(level) + exp * 1e9);
}

function calculateLevel2Exp() {
  const level = document.getElementById("levelInput").value;
  const exp = level2Exp(level);
  document.getElementById("levelExpOutput").value = exp;
}

function calculateLevel2ExpInBillion() {
  const level = document.getElementById("levelInputBillion").value;
  const exp = level2ExpInBillion(level);
  document.getElementById("levelExpOutputBillion").value = exp;
}

function calculateExp2Level() {
  const exp = document.getElementById("expInput").value;
  const level = exp2Level(exp);
  document.getElementById("expLevelOutput").value = level;
}

function calculateExpInBillion2Level() {
  const exp = document.getElementById("expInputBillion").value;
  const level = expInBillion2Level(exp);
  document.getElementById("expLevelOutputBillion").value = level;
}

function calculateLevelDifference() {
  const level1 = document.getElementById("levelInput1").value;
  const level2 = document.getElementById("levelInput2").value;
  const levelDiff = levelDifference(level1, level2);
  document.getElementById("levelDiffOutput").value = levelDiff;
}

function calculateExpAdd() {
  const exp = document.getElementById("expInput2").value;
  const level = document.getElementById("levelInput3").value;
  const newLevel = expAdd(exp, level);
  document.getElementById("expLevelOutput2").value = newLevel;
}

function calculateExpInBillAdd() {
  const exp = document.getElementById("expInput3").value;
  const level = document.getElementById("levelInput4").value;
  const newLevel = expInBillAdd(exp, level);
  document.getElementById("expLevelOutput3").value = newLevel;
}

const scrollToTopBtn = document.getElementById("scroll-to-top");

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
      scrollToTopBtn.classList.add("show");
  } else {
      scrollToTopBtn.classList.remove("show");
  }
});

module.exports = { level2exp, level2ExpInBillion, exp2Level, expInBillion2Level, levelDifference, expAdd, expInBillAdd };