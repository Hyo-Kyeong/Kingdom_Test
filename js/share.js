const url = 'https://cookingdomtest.netlify.app/';

function kakaoShare() {
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '나와 닮은 쿠키 결과';
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + 'img/character/img' + resultAlt + '.png';
  const shareURL = url + 'resultPage/result-' + resultAlt + '.html';

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
      },
    },

    buttons: [
      {
        title: '결과확인하기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ]
  });
}
