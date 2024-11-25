// 50개의 해부학 및 생리학 관련 단어 리스트 (영어 단어, 한글 뜻)
const terms = [
    { word: "Cardiac Muscle", definition: "심장에서만 발견되는 근육으로, 혈액을 펌프하는 역할을 한다." },
    { word: "Neuron", definition: "신경계에서 메시지를 전달하는 세포." },
    { word: "Plasma", definition: "혈액의 맑고 황색의 액체 부분으로, 물, 단백질 및 기타 영양소를 포함한다." },
    { word: "Aorta", definition: "몸의 나머지 부분에 산소화된 혈액을 공급하는 가장 큰 동맥." },
    { word: "Heart", definition: "혈액을 순환시키는 주요 기관으로, 두 개의 심방과 두 개의 심실을 가진다." },
    { word: "Blood Vessels", definition: "혈액이 흐르는 통로로, 동맥, 정맥, 모세혈관으로 나뉜다." },
    { word: "Muscle", definition: "신체의 움직임을 담당하는 조직." },
    { word: "Liver", definition: "신체에서 해독, 대사 및 저장 기능을 수행하는 주요 기관." },
    { word: "Brain", definition: "중추 신경계를 구성하며, 생각, 감정, 기억 및 운동을 조절한다." },
    { word: "Lungs", definition: "산소를 흡수하고 이산화탄소를 배출하는 기관." },
    { word: "Digestive System", definition: "음식을 소화하고 영양소를 흡수하는 신체의 시스템." },
    { word: "Tissue", definition: "비슷한 세포가 모여서 특정 기능을 수행하는 집합체." },
    { word: "Cell", definition: "생명의 기본 단위, 모든 생명체의 기본적인 구조를 이루는 단위." },
    { word: "Skeletal System", definition: "신체를 지탱하고 보호하는 뼈와 관절로 이루어진 시스템." },
    { word: "Respiratory System", definition: "산소를 공급하고 이산화탄소를 배출하는 기관들의 시스템." },
    { word: "Immune System", definition: "외부 침입자나 질병에 대한 방어를 담당하는 신체 시스템." },
    { word: "Endocrine System", definition: "호르몬을 분비하여 신체 기능을 조절하는 기관들." },
    { word: "Nervous System", definition: "신경 세포를 통해 신호를 전달하고 신체의 반응을 조절하는 시스템." },
    { word: "Heart Rate", definition: "1분 동안의 심장 박동 횟수." },
    { word: "Blood Pressure", definition: "혈액이 혈관 벽에 가하는 압력." },
    { word: "Muscle Contraction", definition: "근육이 짧아지고 강해져서 움직임을 만들어내는 과정." },
    { word: "Reflex", definition: "자극에 대한 즉각적인 신경계 반응." },
    { word: "Metabolism", definition: "신체가 에너지를 생성하고 사용하는 과정." },
    { word: "Digestion", definition: "음식을 분해하여 영양소로 변환하는 과정." },
    { word: "Excretion", definition: "불필요한 물질이나 노폐물을 신체에서 제거하는 과정." },
    { word: "Water Balance", definition: "체내 수분의 양을 유지하는 과정." },
    { word: "Kidney", definition: "체내 노폐물과 과도한 물을 배설하는 기관." },
    { word: "Body Temperature", definition: "신체의 온도, 정상 범위는 약 36.5°C에서 37°C." },
    { word: "Physiology", definition: "생물체의 기능을 연구하는 생물학의 한 분야." },
    { word: "Anatomy", definition: "생물체의 구조를 연구하는 생물학의 한 분야." },
    { word: "Muscle Tone", definition: "근육이 지속적으로 긴장 상태에 있는 것." },
    { word: "Physical Fitness", definition: "육체적인 활동을 수행할 수 있는 능력." },
    { word: "Vein", definition: "심장으로 혈액을 운반하는 혈관." },
    { word: "Artery", definition: "심장에서 산소가 풍부한 혈액을 신체로 보내는 혈관." },
    { word: "Capillary", definition: "모세혈관으로, 산소와 영양소를 조직에 공급하는 미세한 혈관." },
    { word: "Tendon", definition: "근육을 뼈에 연결하는 강한 결합 조직." },
    { word: "Ligament", definition: "뼈와 뼈를 연결하는 결합 조직." },
    { word: "Joint", definition: "뼈와 뼈가 연결되어 있는 부분, 운동을 가능하게 한다." },
    { word: "Cartilage", definition: "뼈 사이에 위치하여 충격을 완화하고 유연성을 제공하는 연골." },
    { word: "Sensation", definition: "자극에 대한 신경계의 반응, 감각기관을 통해 감지된다." },
    { word: "Hormone", definition: "몸의 다양한 기능을 조절하는 화학 물질." },
    { word: "Enzyme", definition: "화학 반응을 촉진하는 단백질." },
    { word: "Antibody", definition: "체내에서 외부 침입자에 대응하여 면역 반응을 일으키는 물질." },
    { word: "Cortex", definition: "뇌의 외부 부분, 고차원적인 사고와 감각을 담당." },
    { word: "Medulla", definition: "뇌의 내부 부분, 기본적인 생리적 기능을 담당." },
    { word: "Cerebellum", definition: "뇌의 일부로, 운동 조정과 균형을 담당." },
    { word: "Myocardium", definition: "심장의 근육층." }
];

// 현재 단어 인덱스
let currentIndex = 0;

// DOM 요소
const wordElement = document.getElementById("word");
const definitionElement = document.getElementById("definition");
const flipButton = document.getElementById("flip-button");
const nextButton = document.getElementById("next-button");

// 단어 카드 뒤집기
flipButton.addEventListener("click", () => {
    if (definitionElement.style.display === "none") {
        definitionElement.style.display = "block";
        wordElement.style.display = "none";
    } else {
        definitionElement.style.display = "none";
        wordElement.style.display = "block";
    }
});

// 다음 단어로 넘어가기
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % terms.length;  // 인덱스를 순차적으로 변경, 끝에 도달하면 처음으로 돌아감
    wordElement.innerText = terms[currentIndex].word;
    definitionElement.innerText = terms[currentIndex].definition;
    definitionElement.style.display = "none";  // 단어를 다시 보여주고 정의는 숨김
    wordElement.style.display = "block";
});

// 첫 번째 단어 표시
wordElement.innerText = terms[currentIndex].word;
definitionElement.innerText = terms[currentIndex].definition;
definitionElement.style.display = "none";  // 처음에는 정의가 보이지 않도록 설정
