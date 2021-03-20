/*
에스프레소 0
뱀파이어 1
라떼 2
정글전사 3
눈설탕 4
칠리 5
다크초코 6
허브 7
감초 8
석류 9
호밀 10
구미호 11
민트초코 12
스파클링 13
웨어울프 14
우유 15
독버섯 16
자색고구마 17
마들렌 18
슈크림 19
체리 20
커스터드 21
블랙베리 22
양파 23
버블껌 24
팬케이크 25
탐험가 26
용사 27
공주 28
연금술사 29
클로버 30
아보카도 31
당근 32
용감 33
근육 34
닌자 35
천사 36
마법사 37
딸기 38
비트 39
아몬드 40

*/

const qnaList = [{
    q: '1. 카페에서 가장 좋아하는 메뉴는?',
    a: [{
        answer: '커피',
        type: [0, 2, 6, 14, 26, 34, 40]
      },
      {
        answer: '디저트',
        type: [4, 5, 16, 18, 19, 21, 22, 25, 31, 32, 33, 36, 37]
      },
      {
        answer: '음료',
        type: [1, 9, 11, 12, 13, 15, 17, 20, 24, 27, 28, 29, 38]
      },
      {
        answer: '차',
        type: [3, 7, 8, 10, 23, 30, , 35, 39]
      },
    ]
  },
  {
    q: '2. 남들에게 나는?',
    a: [{
        answer: '기대고 싶은 어른스러운 사람',
        type: [0, 1, 2, 6, 7, 9, 12, 13, 14, 22, 27, 29, 30, 35, 37, 10, 40]
      },
      {
        answer: '귀여워 해주고 싶은 사랑스러운 사람',
        type: [3, 4, 11, 15, 16, 19, 21, 23, 25, 28, 32, 36, 38, 39]
      },
      {
        answer: '장난치며 놀고싶은 편안한 사람',
        type: [5, 8, 17, 18, 20, 24, 26, 31, 33, 34]
      },
    ]
  },
  {
    q: '3. 시험기간의 나는?',
    a: [{
        answer: '몇 주 전부터 세운 계획대로 착착 공부한다',
        type: [0, 6, 7, 9, 15, 22, 27, 29, 32, 35, 36, 37, 40]
      },
      {
        answer: '책상에는 앉았으나 자꾸 핸드폰으로 손이 간다',
        type: [8, 14, 17, 19, 21, 23, 25, 26, 31, 38]
      },
      {
        answer: '놀면서 공부해도 좋은 성적을 받아낸다',
        type: [1, 2, 4, 11, 12, 13, 18]
      },
      {
        answer: '내일이 시험이었어?',
        type: [3, 5, 10, 16, 20, 24, 28, 30, 33, 34, 39]
      },
    ]
  },
  {
    q: '4. 시간여유가 날 때 나는?',
    a: [{
        answer: '생산적인 일하기(요리, 만들기, 그림그리기 등)',
        type: [0, 2, 7, 8, 9, 12, 19, 22, 24, 29, 32, 37]
      },
      {
        answer: '잠자기',
        type: [1, 3, 6, 14, 23, 38, 39, 40
          3
        ]
      },
      {
        answer: '친구만나기',
        type: [4, 10, 11, 13, 16, 18, 20, 21, 25, 26, 28, 30, 33, 36]
      },
      {
        answer: '운동하기',
        type: [5, 15, 17, 27, 31, 34, 35]
      },
    ]
  },
  {
    q: '5. 길가다 약간 어색한 친구를 마주쳤다',
    a: [{
        answer: '먼저 말을 걸며 인사한다',
        type: [1, 2, 4, 7, 10, 12, 13, 15, 16, 18, 21, 25, 28, 30, 31, 33, 36]
      },
      {
        answer: '못 본 척 지나가다 눈이 마주치면 인사한다',
        type: [3, 6, 8, 14, 19, 23, 27, 35, 38]
      },
      {
        answer: '신경쓰지 않고 지나간다',
        type: [0, 5, 9, 11, 17, 20, 22, 24, 26, 29, 32, 34, 37, 39, 40]
      },
    ]
  },
  {
    q: '6. 좋아하는 사람이 생기면 나는?
    ',
    a: [{
        answer: '바라만 봐도 좋아! 멀찍이서 지켜본다
        ',
        type: [3, 6, 12, 14, 16, 19, 22, 23, 27, 38, 39]
      },
      {
        answer: '적극적으로 애정을 표현한다
        ',
        type: [1, 10, 13, 15, 18, 20, 21, 25, 28, 31, 33, 34]
      },
      {
        answer: '친구인듯 썸인듯 다가간다
        ',
        type: [2, 4, 7, 8, 11, 26, 30, 32, 35, 36, 40]
      },
      {
        answer: '왠지 더 쌀쌀맞게 굴게 된다

        ',
        type: [0, 5, 9, 17, 24, 29, 37]
      },
    ]
  },
  {
    q: '7. 좋아하는 영화 장르는?
    ',
    a: [{
        answer: '판타지
        ',
        type: [0, 3, 14, 16, 18, 19, 21, 25, 28, 29, 33, 37]
      },
      {
        answer: '로맨스
        ',
        type: [1, 2, 4, 7, 8, 11, 12, 13, 15, 23, 27, 30, 36, 38]
      },
      {
        answer: '액션
        ',
        type: [5, 6, 10, 17, 20, 24, 26, 31, 32, 34, 35, 39, 40]
      },
      {
        answer: '공포
        ',
        type: [9, 22]
      },
    ]
  },
  {
    q: '8. 반려동물 카페에 취직해 내가 맡게 된 일은?
    ',
    a: [{
        answer: '음료제조&베이킹
        ',
        type: [0, 13, 19, 20, 29, 32, 37, 38]
      },
      {
        answer: '동물 케어
        ',
        type: [3, 4, 7, 14, 23, 36]
      },
      {
        answer: '카운터&서빙
        ',
        type: [1, 2, 9, 10, 11, 12, 18, 21, 22, 25, 28, 33, 40]
      },
      {
        answer: '물류정리&청소
        ',
        type: [5, 6, 8, 15, 16, 17, 24, 26, 27, 31, 34, 35, 39]
      },
    ]
  },
  {
    q: '9. 조별과제를 할 때 나는?
    ',
    a: [{
        answer: '팀을 리드하며 역할을 정해준다
        ',
        type: [0, 2, 9, 10, 18, 27, 32, 33, 40]
      },
      {
        answer: '맡은 역할을 열심히 한다
        ',
        type: [4, 6, 7, 11, 12, 13, 15, 19, 21, 22, 29, 30, 31, 35, 36, 37]
      },
      {
        answer: '대충 하라는 대로 한다
        ',
        type: [1, 3, 8, 16, 20, 23, 25, 28, 34, 38]
      },
      {
        answer: '잠수탄다
        ',
        type: [5, 14, 17, 24, 26, 39]
      },
    ]
  },
  {
    q: '10. 게임 할 때 선호하는 직업은?
    ',
    a: [{
        answer: '전사
        ',
        type: [6, 11, 14, 15, 17, 18, 27, 28, 31, 33, 34, 38]
      },
      {
        answer: '마법사
        ',
        type: [0, 2, 4, 8, 16, 19, 20, 22, 24, 29, 37]
      },
      {
        answer: '궁수
        ',
        type: [3, 10, 39]
      },
      {
        answer: '도적

        ',
        type: [1, 5, 25, 26, 35]
      },
      {
        answer: '힐러

        ',
        type: [7, 9, 12, 13, 21, 23, 30, 32, 36, 40]
      },
    ]
  },
]

const infoList = [{
    name: '에스프레소',
    script: '"비효율적이에요, 더 빠른 방법이 있을 텐데~"',
    skill: '도망쳐 보시죠.',
    desc: '정확한 온도에 정확한 양의 원두를 정확한 타이밍에 로스팅! 모든 것이 계획대로 딱딱 맞아떨어져야 직성이 풀린다는 에스프레소맛 쿠키. 언제나 바쁘게 시간에 맞춰 동분서주하니 왕국에 커피향이 마를 날이 없다! 타이밍이 중요한 커피마법의 창시자가 에스프레소맛 쿠키라는 것은 어쩌면 당연한 일일지도? 어딘가 탄 것 같은 수상한 냄새를 폴폴 풍겨 종종 흑마법사라 오해를 받고는 하지만... 딱히 해명할 생각은 없어보인다. 잠도 자지 않는지 밤마다 커피콩을 갈며 새로운 마법을 연구하는 모습을 쉽게 볼 수 있는데, 덕분에 일각에서는 커피를 너무 많이 마시는 게 아니냐는 걱정이 속출하고 있다.'
  },
  {
    name: '뱀파이어',
    script: '"뭐가 그리 심각해? 포도주스 한 잔 하며 즐기라구~"',
    skill: '목마르다구!',
    desc: '다른 쿠키들을 만드느라 정신없이 시간을 보내던 마녀가, 질 좋은 포도를 제 때 사용하지 않고, 주스를 만들어 참나무통에 담아 오랫동안 숙성해 놓았다가 쿠키에 넣었는데, 그렇게 탄생한 것이 뱀파이어맛 쿠키다. 쿠키 내에 이 포도주스가 10% 넘게 함유되어 있어, 깨어나는데 좀 시간이 걸렸다고 한다. 또한 이 쿠키는, 다른 쿠키들과는 달리 쿠키생을 느긋하게 즐기는 듯 보이고, 심지어 오븐 안에서도 뜨거운줄 모르고 여유를 부리다가 여동생인 연금술사맛 쿠키의 도움으로 탈출에 성공했다고 한다. 창백한 표정과 삐딱한 자세가 매력인 이 쿠키는 오늘도 \'인생 뭐 있냐\'며 잘 숙성된 포도주스 한잔을 권한다'
  },
  {
    name: '라떼',
    script: '"쓰디 쓴 실패라도 부드러운 우유 몇 방울이면 달콤해질거야"',
    skill: '선생님이 하는 거 잘 봐~!',
    desc: '커피냐 우유냐 고민된다면 둘 다 마시면 되지~ 쓰디쓴 커피와 달콤한 우유가 섞여 걱정도 녹일만큼 깊고 부드러워진 쿠키. 에칭 스태프를 요리조리 휘둘러 라떼 마법진을 만드는데, 시시각각 변하는 아름다운 문양에 넋을 놓고 있다간 마법에 걸려들지도 모른다! 어느 깐깐한 마법사와 함께 커피마법을 연구한 공로를 인정받아 마법 학교 선생님이 되었다는데... 종소리보다 늦게 도착하는 건 십중팔구 라떼 한 잔의 여유를 즐기고 있기 때문! 믿음직한 선생님이 되기엔 갈 길이 멀지만, 서툴러도 중요한 건 자신감이라며 미소지으니 누군가에게 이미 최고의 선생님일지도?'
  },
  {
    name: '정글전사',
    script: '"가까이… 오지… 마…"',
    skill: '가자...',
    desc: '왕국에서 그리 멀지 않은 숲 속에서 만난 경계심 가득한 눈빛의 야생쿠키. 어쩌다 숲 속에서 혼자 지내게 되었는지는 모르지만, 강인해 보이는 외모와는 달리 어딘가 여린 구석이 있을것 같아 보호해 주고 싶은 쿠키다. 가족 같은 친구인 버터호랑이와 함께, 그간 갈고 닦은 창던지기 솜씨, 뛰어난 점프 실력으로 오늘도 용감하게 달린다.'
  },
  {
    name: '눈설탕',
    script: '"눈을 많이 모으면 커다란 친구도 만들 수 있어~"',
    skill: '스노우킹!',
    desc: '눈과 설탕, 그리고 알려지지 않은 비밀의 재료 하나로 만들어진 쿠키인데, 어쩌다가 혼자 눈밭에 버려진 채 한참이나 외로움에 떨고 있었다. 그러던 어느 날, 눈밭을 헤매다가 오븐의 열기에도 결코 녹지 않는다는 신비로운 눈꽃 소환봉을 구하게 되었다! 그 후로는 언제든지 스노우콘, 스노우킹 같은 멋진 친구들을 소환해 낼 수 있게 되었고 이젠 더 이상 외롭지 않다.'
  },
  {
    name: '칠리',
    script: '"가진 거 다 내놔! 없어도 내놔!"',
    skill: '이번 건 좀 매울걸?!',
    desc: '혀에 닿기만 해도 불처럼 매운 칠리소스가 법적인 기준보다 훨씬 많이 들어가는 바람에, 법 따위 신경 쓰지 않는 독하디 독한 쿠키가 탄생했다! 가는 곳마다 시끌벅적 요란한 소동을 일으키는 이 쿠키는, 값비싸고 반짝이는 것만 보면 송두리째 훔쳐가고 먼지만 남겨버린다. 이 화끈한 장난에 눈물 콧물 쏙 뺀 쿠키들이 수두룩 하다고. 지금도 틈만 나면 칠리소스를 마셔댄다고 하니, 아마 더욱더 맵고 지독한 쿠키가 되지 않을까?'
  },
  {
    name: '다크초코',
    script: '"정신을 차려보니 어둠에 휩싸여있었다…"',
    skill: '이걸로 끝이다!',
    desc: '한때는 영웅이 되겠다는 일념 하에 겁없이 암흑의 세계로 모험을 떠났다. 그러던 어느 날 금지된 딸기잼 마법검을 손에 넣게 되었고 그 순간 어둠의 기운에 사로잡혀 다시 예전의 삶으로 돌아갈 수 없게 되어버렸다. 먹구름과 천둥번개를 몰고 다니며 모두의 두려움의 대상이 되어버린 비운의 쿠키. 지금도 마음 속으로는 마법의 검과 싸우고 있다는데...'
  },
  {
    name: '허브',
    script: '"행복이 가득 넘치는 하루가 될 것 같아요!"',
    skill: '무럭무럭 자라라!',
    desc: '초록의 싱그러움과 따뜻함을 가지고 있어 함께 있으면 마음이 편안해지는 허브맛 쿠키. 건강하면서도 자극적이지 않은 유기농 재료로 만들어져 호불호가 갈린다. 비가 올 때면 풀잎 우산을 쓰고 톡톡 빗소리 듣는 걸 좋아하고, 따뜻한 볕이 나면 아끼는 화분과 햇살 맞는 것을 좋아한다. 세상의 모든 생명과 매 순간이 소중하다고 생각하는 쿠키. 울기도 하고 웃기도 하는 작은 일상들이 아름다운 삶을 만든다고 생각한다. 비바람이 지나고 해가 나고 또 비가 내려 싹이 자라듯.'
  },
  {
    name: '감초',
    script: '"날 무시하지 않는 게 좋을걸? 킥킥..."',
    skill: '최강의 해골이다!!',
    desc: '씹으면 씹을수록 검게 물들어버리는 감초에 푹 절여 만든 쿠키. 불길한 모양의 커다란 낫을 들고다니는 이 쿠키는 어딘지 모르게 비열한 웃음을 지으며 킥킥대기 일쑤다. 어려서부터 마법사의 제자가 되고 싶어 했지만 인정받지 못하자 금지된 흑마법에 손을 대고 말았다고 한다. 닥치는 대로 죽은 자들을 되살리고 쫄깃한 감초젤리 해골을 소환해 쿠키들을 깜짝 놀래키던 중, 우연히 어둠마녀 쿠키의 강력한 힘을 목격하고 가뜩이나 납작한 몸을 더 납작하게 엎드리며 충성을 맹세했다. 그 후로 총애를 얻고자 사방팔방 애를 쓰고 있지만 한 편으로는 매일 매일 쌓이는 불만에 남몰래 쓴 비밀일기만 벌써 수십 권이라고.'
  },
  {
    name: '석류',
    script: '"누구에게나 어둠은 있답니다"',
    skill: '그분을 위해!',
    desc: '강력한 주술의 땅에서 자란 석류 한 알을 통째로 얹어 영험한 기운이 느껴지는 쿠키. 진하게 농축된 석류 시럽으로 맛을 더해 유난히도 새빨갛다. 신비로운 석류 나무를 모시던 어느 날, 어둠을 따르라는 운명을 계시받게 되는데… 혼란에 빠진 그 순간 약속한 듯 어둠의 무리가 몰아닥쳐 마을을 삼켜 버렸고, 자욱한 연기만이 피어나는 그곳에 단 하나의 그림자가 우뚝 서 있었다. 그제야 석류맛 쿠키는 자신이 섬겨야 할 상대가 누구인지 알게 되었다. 어떤 계시를 보았기에, 석류맛 쿠키는 그림자를 따라나선 걸까?'
  },
  {
    name: '호밀',
    script: '"한번 문 건 놓지 않지! 그게 호밀의 방식이다!"',
    skill: '각오해라, 애송이!!',
    desc: '달달함이 날아간 파수꾼 뱃지를 장식처럼 달고, 껍질도 까지 않은 밀알을 마구 쏴대는 호밀맛 쿠키는 그야말로 와일드함 그 자체! 뉘엿뉘엿 해가 지면 처음 보는 가게라도 꼭 문을 쾅 열며 등장해, 삐뚜름하게 고개를 기울이곤 \'늘 먹던 걸로!\'하고 호탕하게 외쳐댄다. 유독 반짝이고 탐스러운 밀들이 열린 해, 밀 한 톨 남기지 않고 창고를 털어간 쿠키를 찾아 나섰다고 하는데... 가만히 인상착의를 듣고 있자니 익숙한 쿠키의 향기가?! 걸리기만 하면 호밀의 거친 맛을 보여주겠다고 벼르고 있다. 함께 있는 것만 봐도 공범이냐며 인정사정 봐주지 않을지도 모르니비슷한 쿠키를 봤다면 설탕 빠지게 도망치자.'
  },
  {
    name: '구미호',
    script: '"날 거부할 순 없을 걸?"',
    skill: '내 매력에 빠져봐~',
    desc: '이 쿠키는 원래는 동물모양 마시멜로였는데 쿠키가 되기를 너무나 동경한 나머지 900일동안 밀가루와 버터만 먹으며 쿠키로 둔갑하는 요술을 익혀왔다. 그 결과 누구나 한눈에 반할만큼 요염하고도 매력적인 쿠키로 둔갑할 수 있게 되었는데 그 모습이 얼마나 매력적인지 누구나 한번 보면 반하게 된다고 한다.'
  },
  {
    name: '민트초코',
    script: '"특별한 날에는 저를 불러주세요."',
    skill: '클라이맥스입니다.',
    desc: '찬란한 연주만큼이나 찬란한 외모로 매력이 철철 흐르는 맛. 민트캔디 바이올린만이 내는 우아한 소리와 달콤한 향기, 그리고 음악을 닮은 미소 덕분에 항상 많은 팬들이 따른다. 천재라는 찬사에도 늘 겸손하고 친절할 수 있었던 건 수년간의 길거리 악사 시절 때문이 아닐까.'
  },
  {
    name: '스파클링',
    script: '"당신을 기다리고 있었습니다"',
    skill: '상쾌하게 가죠!',
    desc: '눈부시게 화려한 연회장의 문을 열면, 상큼달달한 미소로 정중히 잔을 권하는 스파클링맛 쿠키를 만날 수 있다. 천연 미네랄 탄산수가 섞여 산뜻하고 깔끔한 뒷맛을 자랑하는 쿠키. 느끼하지 않은 유창한 말솜씨와 단정한 매너로 손님들을 자신의 매력에 퐁당 빠트려 허우적거리게 만든다. 상쾌한 맛에 한 번, 달콤한 눈웃음에 두 번 반하게 되는 마성의 쿠키! 거기에 롤업된 소매는 알 만한 쿠키는 모두 아는 매력 포인트! 한 치의 흐트러짐도 없는 완벽한 헤어 스타일까지! 스파클링맛 쿠키에게 반하지 않으면 대체 누구에게 반하겠는가!'
  },
  {
    name: '웨어울프',
    script: '"다가오지 마… 다쳐…"',
    skill: '자꾸 자극하면...!',
    desc: '이 쿠키가 만들어질 때 다량의 후추가 들어갔는데 이때 후추통에 묻어있던 늑대의 털 하나가 딸려 들어간 모양이다. 그 후로 마음이 불안하고 분노를 느낄 때면 늑대의 기운이 드러나 자신도 모르게 포악한 행동을 하게 된다. 오래 전, 지켜야 할 누군가가 위험에 처했을 때 변신한 적이 있는데, 이로 인해 머물던 마을에서 쫓겨나 숲속에서 홀로 떠돌이 생활을 하고 있다. 아픔을 겪어서인지 후추 맛에 울음이 밴, 조금 짜고 매운맛이다. 상처에 대해 묻거나 가까이 다가오는 이에게 \'다치게 할 수 있다\'며 밀어내는 웨어울프맛 쿠키. 사라지지 않는 눈 밑의 흉터처럼 그의 마음에도 지워지지 않는 상처가 남아있는 걸까.'
  },
  {
    name: '우유',
    script: '"평화를 위해 어둠과 맞서 싸우리라!"',
    skill: '이 땅에 평화를!',
    desc: '우윳빛 섬광이 비추는 곳에 오직 평화가 가득하리라! 하늘의 가르침대로 어둠으로부터 세상을 수호하는 우유맛 쿠키. 치유의 우유지팡이를 번쩍 들어올리면, 성스럽고 눈부신 광채가 하늘 높이 치솟아 온 세상을 순백의 빛으로 물들인다. 사나운 폭풍이 앞을 막아설 때면 신성한 우유방패로 힘차게 돌파하는데, 그 거침없는 돌진에 어둠의 무리들도 겁을 먹고 달아나버리고 만다고. 하염없이 짚은 암흑과 맞서면서도 어둠의 얼룩 하나 묻지 않은 깨끗함과 고결함을 유지하는 쿠키. 끝내 지쳐 쓰러지는 순간에도 다른 쿠키들을 위해 축복의 가호를 내릴 만큼 숭고한 마음씨도 가지고 있다.'
  },
  {
    name: '독버섯',
    script: '"와아~ 새 친구우... 버섯 먹을래애애...?"',
    skill: '버섯 머겅~',
    desc: '아무리 먹음직스러워도, 탐스럽고 통통해도 먹어서는 안되는 것이 있다. 어질어질 보라버섯이 바로 그것! 배가 너무도 고팠던 어느 날 독버섯을 먹어버려, 그 영향으로 멍하고 굼뜬 쿠키가 되어버린 독버섯맛 쿠키. 가만히 있으면 감쪽같이 버섯 그 자체가 되어버린다. 지나가던 쿠키들이 버섯인 줄 알고 뽑아보려고 했지만, 화를 내기는커녕 오랜 친구처럼 편하게 안겨있었다나!? 품에서 보라색 향기가 가득한 버섯을 꺼내 주는 것은 독버섯맛 쿠키 나름의 호감 표시 방법. 하지만 어디서 온 지 모를 수상한 버섯은 함부로 먹으면 큰일 날 수 있으니 주의해야해!'
  },
  {
    name: '자색고구마',
    script: '"나랑 싸울 쿠키 다 나와!"',
    skill: '고구마 돌풍!',
    desc: '활활 타오르는 불길에 굽고, 또 굽고, 계속 구웠더니 마침내 단단히 열받은 자색고구마맛 쿠키가 탄생했다! 늘 화가 나 있어 살짝만 다가가도 이글거리는 열기에 데어버릴 지경이다. 분노로 날뛰며 장애물을 싹 다 부수는 걸로는 부족한지, 싸울 쿠키 어디 없냐며 큰소리를 질러대는 과격한 쿠키. 최후의 순간, 폭발하는 분노의 힘으로 다시 일어나 커다란 보라색 돌풍으로 모든 걸 한 방에 날려버린다. 뜨거운 불지옥 속에서 뒹굴고 구르고 산전수전 다 겪은 줄 알지만, 그곳이 다른 쿠키들도 탈출한 마녀의 오븐이란 걸 자기만 모르고 있다!'
  },
  {
    name: '마들렌',
    script: '"내가 가는 길에 신의 가호가 따른다!',
    skill: '빛의 가호',
    desc: '넓은 바다 저 멀리 평화로운 공화국 출신의 귀족적인 쿠키. 남부러울 것 없이 명망 있는 마들렌 가문의 후광을 입고 자라나 검 한 번 휘둘러만 봤을 뿐인데 곧바로 기사단장의 자리에 올랐다. 비록 경험은 부족해도 자신감이 무기! 단장 즉위식 날, 신께 맹세하고 받은 빛나는 마법검과 방패는 이 쿠키가 가진 수많은 자존심 중에서도 단연 최고라고! 새하얀 설탕말에 올라타 마을 한 바퀴 산책하기, 대련 연습 중에 망토 펄럭여주기 등 오늘도 기사단장의 의무를 착실히 수행 중이다. 쿠키에게 영원한 생명을 준다는 전설 속의 소울 잼을 찾아 위풍도 당당하게 모험길에 올랐다는데, 과연 온갖 어둠이 도사리는 첫 원정을 성공적으로 마칠 수 있을지?!'
  },
  {
    name: '슈크림',
    script: '"제 힘을 쿠키들을 위해 쓰고 싶어요!"',
    skill: '젤리우스 익스트리모스!',
    desc: '생크림을 가득 얹어 보기만 해도 달콤하고 기분 좋아지는 쿠키. 어딘가 모르게 어리숙해서 항상 마음을 놓을 수 없는 철부지이지만, 다듬어지지 않은 잠재력이 어마어마한 것 같다. 홀로 마법을 공부하던 시기를 지나 마법 학교에 입학해 졸업까지 했지만, 그 과정이 순탄하지만은 않았던 모양인데?! 워낙 슈가 부드럽고 얇아서 멘탈이 부서지기 쉬운 타입. 과연 슈크림맛 쿠키가 보여줄 마법의 세계는 어떤 모습일까?'
  },
  {
    name: '체리',
    script: '"어랏? 터져버렸네~? 미안...일부러 그랬어~ 헤헷!"',
    skill: '다 터져라!',
    desc: '새빨간 체리시럽으로 장식된 귀여운 쿠키지만, 사실은 엄청난 장난꾸러기다. 귀엽고 사랑스런 외모와는 달리 파괴적인 장난을 즐기는 성격으로 폭죽처럼 터지는 체리폭탄을 마구 던지면서 즐거워한다. 체리폭탄이 터질 때 나는 달콤 상큼한 냄새를 맡으면, 쌓였던 스트레스가 한방에 날아간다는 소문이!!!'
  },
  {
    name: '커스터드',
    script: '"나 좀 위엄있지! …뭐?! 아니라고!?"',
    skill: '왕의 축복!',
    desc: '어느 옛날에 있었던 멋지고 웅장한 왕국처럼 어엿한 자신만의 왕국을 만드는 것이 꿈인 커스터드 3세맛 쿠키. 머리 위의 커스터드가 모양이 잡히기도 전부터 왕국 이야기를 들으며 왕이 되기 위한 수행을 해왔다고 주장한다. 아직 백성이 없어 만나는 쿠키마다 백성이 되라며 지팡이를 탕탕 두드리는데, 자세히 보면 왕관이며 지팡이며 색종이를 오려 만든 장난감이라 앙증맞기 그지없다. 왕관을 보고 눈을 번뜩이며 달려왔던 칠리맛 쿠키가 맥이 빠져 버럭 화를 냈을 정도! 아직 커스터드 크림에서 풋내가 나는 것이, 내심 걱정되는 한편 정말 왕국을 세울 수 있을지 궁금하게 만드는 천진난만한 쿠키. 커스터드 3세맛 쿠키의 활약을 지켜봐 줄 백성은 언제나 상시 모집 중!'
  },
  {
    name: '블랙베리',
    script: '"맡기실 일이 있다면 뭐든 말씀하세요."',
    skill: '이게 보이시나요!',
    desc: '매사에 무심할 것만 같은 시무룩한 표정에도 불구하고 그렇게 친절하고 성실할 수 없는 반전의 맛. 꽤 오랫동안 어느 대단한 가문을 위해 일해 왔다는 이 쿠키는, 집중해서 일할 때면 어딘가 묘한 기운이 감돌며 혼자서도 마치 여럿이서 해치운 것 같은 대단한 능력을 보여준다! 집안의 대소사를 관리하는 것만으로도 늘 바쁠텐데, 뭘 찾아야 한다며 끊임없이 가출하는 주인집의 문제 쿠키를 찾아 데려와야 하는 중요한 임무가 있기 때문에 밤낮으로 더 열심히 뛰어다니고 있다.'
  },
  {
    name: '양파',
    script: '"눈물이 멈추지 않아... 으앙~"',
    skill: '으아아아아앙~',
    desc: '양파 껍질을 통째로 쓰고 있어 옆에만 가도 눈이 따가워지는 쿠키. 흘려도 흘려도 눈물을 계속 흘리는 이유는 한 번 울기 시작하면, 양파즙이 포함된 눈물 때문에 눈이 따가워 더 울게 되어서라고 한다. 유령을 무서워해 조금만 겁을 먹어도 목놓아 울어버리는데, 언젠가는 자신이 나타났을 때 왜 주위가 으스스해지고 시계가 거꾸로 돌아가는지... 깨닫게 될 날이 오지 않을까 싶다.'
  },
  {
    name: '버블껌',
    script: '"내 예술세계를 이해할 수 있겠어?"',
    skill: '너 좀 밋밋한데?',
    desc: '버블껌의 단단한 겉 부분과 달콤하고 부드러운 알맹이를 분리해 내어 쿠키반죽에 딱 맞게 발라서 만든 쿠키! 팡~팡~ 어디선가 달콤하고 새콤한 향이 강하게 난다면 바로 버블껌맛 쿠키가 나타난 것! 밋밋한 세상을 알록달록하게 물들이겠다며 벽과 천장, 장애물 할 것 없이 색색의 버블껌볼을 터뜨리고 다녀 쿠키계의 악동으로 불리곤 한다. 만들어진지 하루 만에 오븐 안을 죄다 난장판으로 만들어 마녀의 화를 샀을 정도라나. 그런 이유로 가는 곳마다 원성을 사곤 하지만, 꿋꿋이 자신만의 예술세계를 고집하고 있다.'
  },
  {
    name: '팬케이크',
    script: '"놀아줘~ 같이 날자~"',
    skill: '잘 봐~!',
    desc: '팬에 노릇노릇 건강하게 구워져 늘 기운이 넘치는 천진난만 팬케이크맛 쿠키. 워낙 깜찍한 탓에 쿠키들에게 예쁨을 받는데, 자기도 그걸 아는지 뿔 모양 버터를 스스로 얹어 귀여움을 배가시켰다. 제일 좋아하는 것은 도토리젤리. 이 젤리만 보면 얻기 위해 온갖 애교를 부리는데 <파닥거리며 귀여움 발사하기>와 <눈 찡끗 감기>는 그 중에서도 당해낼 수가 없다. 이 쿠키에게 넘어가지 않으려고 애를 써봤자, 어느 새 뒤를 돌아보면 착 엉겨있기 때문에 손에 도토리젤리를 쥐고 있다면 \'이미 내 것이 아니다…\'라고 생각하는 게 낫다.'
  },
  {
    name: '탐험가',
    script: '"가자! 새로운 세계로~!"',
    skill: '못 빠져나갈걸?',
    desc: '마녀의 섬 저 너머에 낯선 세계를 탐험하며 다른 쿠키들을 기다리는 탐험가맛 쿠키가 있다는 오래된 소문은 거짓이 아니었다! 드디어 실제로 만나게 된 이 쿠키는 의미심장한 표정으로 지도를 펼쳐들며 그동안 발견한 새로운 세계로 가는 길을 안내한다. 하지만 그 후에도 숨겨진 진실, 전설의 용, 왕국의 유적... 등 뭔가를 찾아내야 한다는 알 수 없는 이야기를 하며 또다시 미지의 세계로 탐험을 계속한다.'
  },
  {
    name: '용사',
    script: '"두려운 건 없다!"',
    skill: '명예를 위해!',
    desc: '화이트초콜릿으로 무장하고, 우유거품으로 장식한 용사맛 쿠키. 광속질주 아이템을 먹으면 한몸처럼 다루는 말을 타고 달리기 때문에 누구보다 강력해진다. 변하지 않는 마음으로 한 법 믿음을 주면 끝까지 함께 해주는 듬직한 쿠키. 하지만 거침없이 칼을 휘두르는 모습과 달리 자신의 속마음은 쉽게 표현하지 못하는 듯하다.'
  },
  {
    name: '공주',
    script: '"매일매일 신나게 놀 거야~!"',
    skill: '후훗. 이야앗!',
    desc: '조신하고 기품 있는 공주를 상상했다면 오산! 공주다운 맛이라고는 찾아볼 수 없다. 만나는 모든 것에 호기심을 갖고 사랑의 기운을 마구 발산하는 쿠키. 점프하고 슬라이딩하고 이리저리 구르는 통에 드레스가 뒤집혀 얼굴을 덮어도 미워할 수 없다.'
  },
  {
    name: '연금술사',
    script: '"한치의 오차도 용납할 수 없다구!"',
    skill: '완벽한 시약이라구!',
    desc: '신의 성분을 담고 있다고 알려진 싱싱한 포도송이를 듬뿍 넣어 만든 똑똑한 쿠키로, 언제나 반짝이는 눈빛으로 연구에 몰입한다. 항상 머릿속에 든 자기만의 공식을 가지고 여기저기 평가해 보는 습관이 있다. 이것은 그냥 하는 평가가 아니라 물질의 속성을 변화시키기 위해 필요한 요소를 측정하는 것이라고 한다...?! 아무튼 소중한 것을 얻으려면 그만큼 소중한 것을 투자해야만 하고, 게으르고 안일하게 살다가는 아무것도 변화시킬 수 없게 된다는 것이 바로 연금술사맛 쿠키의 핵심이론이다.'
  },
  {
    name: '클로버',
    script: '"결과보다 이 순간순간이 제겐 중요하답니다"',
    skill: '행운이 따르기를.',
    desc: '햇살 가득 꽃밭에 옹기종기 피어난 토끼풀처럼 소박하고 다정한 쿠키. 초원과 숲을 방랑하며 자유롭게 노래하는 걸 좋아한다. 쿠키들의 이야기를 노래로 부르고 싶어 풀꽃 엮은 류트 하나만을 들고 살며시 찾아왔다고. 감수성이 풍부해 소소한 일상에서도 여러 가지 멜로디를 떠올리는데 솔솔 부는 바람소리, 졸졸 흐르는 시냇물 소리, 즐거운 쿠키들의 웃음소리로 만든 클로버맛 쿠키의 노래를 듣고 있으면 마음이 기분 좋게 잔잔해지곤 한다. 사랑이 넘치는 이 땅에 바삭한 두 발을 딛고 노래할 수 있어서 행복하다는 쿠키. 작은 선율이 산과 강을 건너 시간을 지나 아름다운 모두의 노래가 되기를.'
  },
  {
    name: '아보카도',
    script: '"내 농담에 불만있어? 그럼 물도 가져와! 으하하!"',
    skill: '제작 대성공!',
    desc: '아보카도맛 쿠키를 만들 때의 핵심은, 뜨거운 태양 아래서 건강하게 자란 아보카도를 통크게 수확해 매우 호탕하게 반죽해야 한다는 것! 더운 곳에서 푹 익히면 더욱 더 넉살 좋은 맛이 난다. 영양가는 풍부하지만 영양가 없는 말장난을 좋아하는 쿠키. 썰렁한 농담을 좋아하는 이유는 대장간의 열기가 너무 뜨거워 온도를 낮추기 위해서라는데... 믿거나 말거나! 언제나 즐겁고 유쾌한 아보카도맛 쿠키는 밤낮없이 이어지는 힘든 대장장이 일에도 지치는 법이 없다. 그야말로 망치질 몇 번에 무엇이든 뚝딱 만들어 내는 제작의 달인.'
  },
  {
    name: '당근',
    script: '"일하지 않는 쿠키는 먹지도 말라!"',
    skill: '땀의 결실이다!',
    desc: '쨍쨍 내리쬐는 햇빛! 피어오르는 흙먼지! 솟아나는 땀방울! 당근맛 쿠키의 하루는 밭에서 시작해 밭에서 끝난다! 풋풋한 당근에 자연의 건강함이 깃든 이 쿠키는, 마녀의 텃밭을 몰래 가꾼 적이 있을 정도로 농사에 푹 빠졌다. 아주 작은 씨앗도 솜씨 좋게 대왕채소로 길러내는데, 한번은 너무 자라서 오두막 천장을 뚫어버렸다고 한다. 그런데도 스스로가 대견스러워 칭찬했다고! 수확철에는 곰젤리 하나 먹을 여유도 없이 일한다는 쿠키. 비가 와도 해가 져도 지치지 않는 농사 질주에 당근 농장은 언제나 풍년!'
  },
  {
    name: '용감',
    script: '"앞을 보고 나아가는 거야!"',
    skill: '모두 비켜!',
    desc: '맨 처음 탈출을 감행한 용감한 쿠키. 마녀의 오븐 속에서 구워지고 있던 쿠키가 어떻게 해서 생명을 얻게 되었는지 알려져 있지 않다. 아마도 쿠키를 만들던 마녀가 생강가루와 생명을 주는 마법가루를 혼동했던 것 아닐까?'
  },
  {
    name: '근육',
    script: '"운동이 끝난 뒤에는 젤리를 먹지 않는다!"',
    skill: '근육 최고!',
    desc: '근육맛 쿠키에는 단백질 파우더가 들어가며, 땀이 쏙 빠질 때까지 열심히 반죽을 해줘야 한다. 3주 정도 반죽을 하고 나면 비로소 근육맛이 나기 시작한다. 이렇게 오랜 단련을 통해 만들어진 근육맛 쿠키는 화가 나면 운동기구를 던져버리는 습관이 있다. 그러나 케이크 괴물들을 웬만큼 혼내주고 나면 금방 화가 풀리니 너무 무서워하지 말자.'
  },
  {
    name: '닌자',
    script: '"끊임없는 자기 단련만이 살 길이다!"',
    skill: '단번에 끝낸다!',
    desc: '김치에게 숙성이 중요한 만큼 쿠키에게도 수련이 중요하다는 걸 닌자맛 쿠키를 통해 알 수 있다. 바람을 딛고 여러 번 점프를 할 수 있다는 이 쿠키의 성분이나 맛의 비결은 밝혀지지 않았다. 닌자맛 쿠키가 점프를 하면 결코 발이 땅에 닿지 않는다는 소문도 있고, 사실 뛰고 있는 것은 분신일 뿐이라는 소문도 있다. 수련을 계속하여 점프 실력을 더 향상시킬 수 있다는데 과연 어디까지 올라갈 수 있을까.'
  },
  {
    name: '천사',
    script: '"아름다운 날이네요…"',
    skill: '행복을 당신에게…!',
    desc: '천사맛이 나는 쿠키지만, 아직 나는법을 완전히 익히지 못해 날 수 있는 높이가 1cm 남짓밖에 안된다. 탱탱한 곱슬머리에서 나오는 특별한 자력으로 주변의 젤리와 아이템들을 끌어당긴다! 좋아하는 동물은 펭귄과 타조 그리고 귀여운 병아리다.'
  },
  {
    name: '마법사',
    script: '"가슴은 뜨겁게 머리는 앗 차거!"',
    skill: '번개여, 쏟아져라!',
    desc: '정말 우연히 마녀의 마법사탕지팡이를 얻게 된 이후로, 매우 특별하고도 강력한 마법을 사용할 수 있게 된 쿠키. 톡톡 터지는 식감의 팝핑캔디 아이스크림을 멋스럽게 얹어, 마법사다운 맛을 더했다. 자주 쓰는 주문으로는, 언제나 파티처럼 즐거운 분위기를 일으키는 \'파티파티 페스티베르르\' 그리고 예상치도 못한 행운과 우연한 재미를 불러오는 \'세렌디피티 아프라시아시타\'가 있다.'
  },
  {
    name: '딸기',
    script: '"쿠키생은 혼자야…"',
    skill: '다가오지 마.',
    desc: '부끄러움이 많아 좋은 점이 있다면 달콤한 딸기향이 쉽게 날아가지 않는다는 것. 다른 쿠키들처럼 활발하게 움직였다면, 사실 딸기가 직접 들어있지는 않고 향만 첨가되어 있다는 사실을 금방 들켜버렸을지도 모른다. 하지만 젤리들을 녹여 딸기젤리로 만들 정도로 달콤상큼한 향이니 자신감을 가지기를!'
  },
  {
    name: '비트',
    script: '"힘들어도 참고 견딜 수 있어"',
    skill: '명중이다!',
    desc: '바위 바닥과 거친 흙마저 뚫고 자란 야생 비트로 만들어 근성으로 넘치는 쿠키. 이렇게 힘든 날을 견디고 참으며 자랐기 때문인지 더욱 붉게 익어버렸다. 깊은 숲에 텐트 하나를 치고 사는데, 자신의 영역을 지키기 위해 석궁을 겨누며 주변을 경계한다. 힘든 환경에 그나마 남은 단내가 쏙 빠져도, 비바람에 텐트가 날아가도 어떻게든 살 길을 찾는 야무지고 끈질긴 쿠키! 홀로 숲에서만 살았기 때문인지 쿠키를 만나기라도 하는 날에는 사냥감을 봤을 때보다 더 화들짝 놀란다고 한다.'
  },
  {
    name: '아몬드',
    script: '"이런... 사건 경위를 설명해주십시오"',
    skill: '당신을 체포하겠습니다!',
    desc: '구김없는 코트, 몸에 딱 맞는 셔츠, 쓸어넘긴 머리까지! 언제나 완벽하고 단정하게 하루를 시작하는 쿠키. 하지만 그것도 찰나, 골목마다 펑펑 터지는 마법사고를 수습하다보면 언제 그랬냐는 듯 헝클어져 버린다! 살아 움직이는 책에서부터 끊임없이 젤리를 뱉는 솥까지, 우왕좌왕 정신없는 사건도 일사천리로 해결하는 베테랑 형사 쿠키. 너무 바쁘게 뛰어다녀서인지 고소함이 다 날아갈 지경이지만, 그 어떤 당황스러운 사건에도 눈 깜짝하지 않는 건 아몬드 특유의 단단함 덕분이라고. 꼬리에 꼬리를 물고 터지는 사건을 쫓아다니느라 커피 한 잔 마실 틈도 없다는데... 마법 도시가 평화로워질 그날까지, 코트 자락 휘날리며 형사는 오늘도 달린다!'
  },
]
