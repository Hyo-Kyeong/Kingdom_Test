const card = document.querySelector(".card-main");
const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const loading = document.querySelector("#loading");
const result_back = document.querySelector(".result-back")
const endPoint = 5;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


function rotateCard() {
  card.style.WebkitAnimation = "rotateY 2s linear";
  card.style.animation = "rotateY 2s linear";

}

function calResult(){
  var result = select.indexOf(Math.max(...select));
  return result;
}

function setResult(){
  let point = calResult();
  const resultName = document.querySelector(".resultname");
  resultName.innerHTML = infoList[point].name + '맛 쿠키';

  var resultImg = document.createElement("img");
  const imgDiv = document.querySelector("#resultImg");
  var imgURL = "img/character/img" + point + ".png";
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add("img-fluid");
  imgDiv.appendChild(resultImg);

  const resultScript = document.querySelector(".resultScript");
  resultScript.innerHTML = infoList[point].script;

  const resultDesc = document.querySelector(".resultDesc");
  resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
  loading.style.WebkitAnimation = "fadeOut 1s";
  loading.style.animation = "fadeOut 1s";
  rotateCard();
  setTimeout(() => {
    loading.style.display = "none";
    setTimeout(() => {
      result.style.WebkitAnimation = "fadeIn 1s";
      result.style.animation = "fadeIn 1s";
      result_back.style.WebkitAnimation = "fadeIn 1s";
      result_back.style.animation = "fadeIn 1s";
      setTimeout(() => {
        result.style.display = "block";
        result_back.style.display="block";
      }, 1000);
    });
  }, 1000);
  setResult();
}

function setLoading(){
  let point = calResult();
  const resultSkill = document.querySelector(".skill-script");
  resultSkill.innerHTML = infoList[point].skill;

  setTimeout(() => {
      goResult();
  }, 2000);
}

function goLoading(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    loading.style.WebkitAnimation = "fadeIn 1s";
    loading.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      loading.style.display = "block";
    }, 1000);
  });
  setLoading();
}


function addAnswer(answerText, qIdx, idx){
  var a = document.querySelector(".answerBox");
  var answer = document.createElement("button");
  answer.classList.add("answerList");
  answer.classList.add("fadeIn");

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      var target = qnaList[qIdx].a[idx].type;
      for(let i = 0; i < target.length; i++) {
        select[target[i]] += 1;
      }
      for(let i = 0; i < children.length; i++){
        children[i].style.display = "none";
      }
      goNext(++qIdx);
    }, 450);
  }, false);
}

function goNext(qIdx){
  if(qIdx === endPoint) {
    goLoading();
    return;
  }
  var q  = document.querySelector(".qBox");
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector(".status");
  status.innerHTML = qIdx+1 + " / " + endPoint;
}

function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 450);
    let qIdx = 0;
    goNext(qIdx);
  }, 450);

}
