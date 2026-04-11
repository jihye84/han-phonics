document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('app-container');

    // URL 파라미터에서 group 읽기 (기본값은 '1')
    const urlParams = new URLSearchParams(window.location.search);
    const group = urlParams.get('group') || '1';
    
    // 그룹별 데이터 정의
    const allData = {
        '1': {
            title: 'ㄱ, ㅋ, ㄲ',
            data: [
                ['가', '갸', '거', '겨', '고', '교', '구', '규', '그', '기'],
                ['카', '캬', '커', '켜', '코', '쿄', '쿠', '큐', '크', '키'],
                ['까', '꺄', '꺼', '껴', '꼬', '꾜', '꾸', '뀨', '끄', '끼']
            ]
        },
        '2': {
            title: 'ㄷ, ㅌ, ㄸ',
            data: [
                ['다', '댜', '더', '뎌', '도', '됴', '두', '듀', '드', '디'],
                ['타', '탸', '터', '텨', '토', '툐', '투', '튜', '트', '티'],
                ['따', '땨', '떠', '뗘', '또', '뚀', '뚜', '뜌', '뜨', '띠']
            ]
        },
        '3': {
            title: 'ㅂ, ㅍ, ㅃ',
            data: [
                ['바', '뱌', '버', '벼', '보', '뵤', '부', '뷰', '브', '비'],
                ['파', '퍄', '퍼', '펴', '포', '표', '푸', '퓨', '프', '피'],
                ['빠', '뺘', '뻐', '뼈', '뽀', '뾰', '뿌', '쀼', '쁘', '삐']
            ]
        },
        '4': {
            title: 'ㅅ, ㅆ',
            data: [
                ['사', '샤', '서', '셔', '소', '쇼', '수', '슈', '스', '시'],
                ['싸', '쌰', '써', '쎠', '쏘', '쑈', '쑤', '쓔', '쓰', '씨']
            ]
        },
        '5': {
            title: 'ㅈ, ㅊ, ㅉ',
            data: [
                ['자', '쟈', '저', '져', '조', '죠', '주', '쥬', '즈', '지'],
                ['차', '챠', '처', '쳐', '초', '쵸', '추', '츄', '츠', '치'],
                ['짜', '쨔', '쩌', '쪄', '쪼', '쬬', '쭈', '쮸', '쯔', '찌']
            ]
        },
        '6': {
            title: 'ㄴ, ㄷ, ㅌ, ㄸ',
            data: [
                ['나', '냐', '너', '녀', '노', '뇨', '누', '뉴', '느', '니'],
                ['다', '댜', '더', '뎌', '도', '됴', '두', '듀', '드', '디'],
                ['타', '탸', '터', '텨', '토', '툐', '투', '튜', '트', '티'],
                ['따', '땨', '떠', '뗘', '또', '뚀', '뚜', '뜌', '뜨', '띠']
            ]
        },
        '7': {
            title: 'ㄹ',
            data: [
                ['라', '랴', '러', '려', '로', '료', '루', '류', '르', '리']
            ]
        },
        '8': {
            title: 'ㅁ, ㅂ, ㅍ, ㅃ',
            data: [
                ['마', '먀', '머', '며', '모', '묘', '무', '뮤', '므', '미'],
                ['바', '뱌', '버', '벼', '보', '뵤', '부', '뷰', '브', '비'],
                ['파', '퍄', '퍼', '펴', '포', '표', '푸', '퓨', '프', '피'],
                ['빠', '뺘', '뻐', '뼈', '뽀', '뾰', '뿌', '쀼', '쁘', '삐']
            ]
        },
        '9': {
            title: 'ㅅ, ㅆ, ㅈ, ㅊ, ㅉ',
            data: [
                ['사', '샤', '서', '셔', '소', '쇼', '수', '슈', '스', '시'],
                ['싸', '쌰', '써', '쎠', '쏘', '쑈', '쑤', '쓔', '쓰', '씨'],
                ['자', '쟈', '저', '져', '조', '죠', '주', '쥬', '즈', '지'],
                ['차', '챠', '처', '쳐', '초', '쵸', '추', '츄', '츠', '치'],
                ['짜', '쨔', '쩌', '쪄', '쪼', '쬬', '쭈', '쮸', '쯔', '찌']
            ]
        },
        '10': {
            title: 'ㅇ, ㅎ',
            data: [
                ['아', '야', '어', '여', '오', '요', '우', '유', '으', '이'],
                ['하', '햐', '허', '혀', '호', '효', '후', '휴', '흐', '히']
            ]
        },
        '11': { title: 'ㄱ', data: [['가', '갸', '거', '겨', '고', '교', '구', '규', '그', '기']] },
        '12': { title: 'ㄴ', data: [['나', '냐', '너', '녀', '노', '뇨', '누', '뉴', '느', '니']] },
        '13': { title: 'ㄷ', data: [['다', '댜', '더', '뎌', '도', '됴', '두', '듀', '드', '디']] },
        '14': { title: 'ㄹ', data: [['라', '랴', '러', '려', '로', '료', '루', '류', '르', '리']] },
        '15': { title: 'ㅁ', data: [['마', '먀', '머', '며', '모', '묘', '무', '뮤', '므', '미']] },
        '16': { title: 'ㅂ', data: [['바', '뱌', '버', '벼', '보', '뵤', '부', '뷰', '브', '비']] },
        '17': { title: 'ㅅ', data: [['사', '샤', '서', '셔', '소', '쇼', '수', '슈', '스', '시']] },
        '18': { title: 'ㅇ', data: [['아', '야', '어', '여', '오', '요', '우', '유', '으', '이']] },
        '19': { title: 'ㅈ', data: [['자', '쟈', '저', '져', '조', '죠', '주', '쥬', '즈', '지']] },
        '20': { title: 'ㅊ', data: [['차', '챠', '처', '쳐', '초', '쵸', '추', '츄', '츠', '치']] },
        '21': { title: 'ㅋ', data: [['카', '캬', '커', '켜', '코', '쿄', '쿠', '큐', '크', '키']] },
        '22': { title: 'ㅌ', data: [['타', '탸', '터', '텨', '토', '툐', '투', '튜', '트', '티']] },
        '23': { title: 'ㅍ', data: [['파', '퍄', '퍼', '펴', '포', '표', '푸', '퓨', '프', '피']] },
        '24': { title: 'ㅎ', data: [['하', '햐', '허', '혀', '호', '효', '후', '휴', '흐', '히']] },
        '25': { title: 'ㄲ', data: [['까', '꺄', '꺼', '껴', '꼬', '꾜', '꾸', '뀨', '끄', '끼']] },
        '26': { title: 'ㄸ', data: [['따', '땨', '떠', '뗘', '또', '뚀', '뚜', '뜌', '뜨', '띠']] },
        '27': { title: 'ㅃ', data: [['빠', '뺘', '뻐', '뼈', '뽀', '뾰', '뿌', '쀼', '쁘', '삐']] },
        '28': { title: 'ㅆ', data: [['싸', '쌰', '써', '쎠', '쏘', '쑈', '쑤', '쓔', '쓰', '씨']] },
        '29': { title: 'ㅉ', data: [['짜', '쨔', '쩌', '쪄', '쪼', '쬬', '쭈', '쮸', '쯔', '찌']] }
    };
    
    const currentGroupData = allData[group] || allData['1'];
    const syllablesData = currentGroupData.data;
    const rowCount = syllablesData.length;
    
    // JS에서 그리드의 행 개수를 데이터 길이에 맞춰 동적 할당
    if (rowCount === 1) {
        // 단일 행일 경우 화면 전체를 100% 늘리지 않고 25vh 높이 지정 후 가운데 정렬
        container.style.gridTemplateRows = `25vh`;
        container.style.alignContent = `center`;
    } else {
        container.style.gridTemplateRows = `repeat(${rowCount}, 1fr)`;
        container.style.alignContent = `stretch`;
    }
    
    // 제목 업데이트
    const titleObj = document.getElementById('app-title');
    if (titleObj) titleObj.textContent = currentGroupData.title;

    // ----- 색상 설정 모달 동적 생성 -----
    const titleParts = currentGroupData.title.split(',').map(s => s.trim());
    const basePalette = ['#e0f7fa', '#fff9c4', '#fce4ec', '#e8f5e9', '#f3e5f5', '#ffe0b2'];
    let defaultColors = [];
    for(let i=0; i<rowCount; i++) {
        defaultColors.push(basePalette[i % basePalette.length]);
    }
    
    let savedColors = JSON.parse(localStorage.getItem(`colors_group_${group}`)) || [...defaultColors];
    while(savedColors.length < rowCount) {
        savedColors.push(defaultColors[savedColors.length]);
    }
    savedColors = savedColors.slice(0, rowCount);
    
    function applyColors(colors) {
        for(let i=0; i<rowCount; i++) {
            document.documentElement.style.setProperty(`--row-${i}-bg`, colors[i]);
        }
    }
    applyColors(savedColors);

    // 모달 DOM 참조 및 내부에 라벨/Input 동적 생성
    const bgModal = document.getElementById('settings-modal');
    const dynamicColorContainer = document.getElementById('dynamic-color-settings');
    dynamicColorContainer.innerHTML = ''; // 초기화
    
    let colorInputs = [];
    for(let i=0; i<rowCount; i++) {
        let rowLabel = titleParts[i] ? `${titleParts[i]} 행 색상:` : `${i+1}번째 행 색상:`;
        
        let div = document.createElement('div');
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.alignItems = 'center';
        div.style.fontSize = '3vh';
        div.innerHTML = `
            <label id="label-row-${i}">${rowLabel}</label>
            <input type="color" id="color-row-${i}" style="width: 6vw; height: 6vw; border: none; cursor: pointer; border-radius: 10px;">
        `;
        dynamicColorContainer.appendChild(div);
        colorInputs.push(document.getElementById(`color-row-${i}`));
    }

    document.getElementById('settings-btn').addEventListener('click', () => {
        for(let i=0; i<rowCount; i++) colorInputs[i].value = savedColors[i];
        bgModal.style.display = 'flex';
    });

    document.getElementById('save-colors-btn').addEventListener('click', () => {
        savedColors = colorInputs.map(inp => inp.value);
        localStorage.setItem(`colors_group_${group}`, JSON.stringify(savedColors));
        applyColors(savedColors);
        bgModal.style.display = 'none';
    });

    document.getElementById('reset-colors-btn').addEventListener('click', () => {
        savedColors = [...defaultColors];
        localStorage.removeItem(`colors_group_${group}`);
        for(let i=0; i<rowCount; i++) colorInputs[i].value = savedColors[i];
        applyColors(savedColors);
    });

    document.getElementById('close-modal-btn').addEventListener('click', () => {
        bgModal.style.display = 'none';
    });
    // ------------------------------------

    // 오디오 재생을 위한 인스턴스 (중복 재생 방지용)
    let currentAudio = null;
    let allCards = [];

    // 카드 생성 및 렌더링
    syllablesData.forEach((row, rowIndex) => {
        row.forEach((syllable, colIndex) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.classList.add(`row-${rowIndex}`); // 색상을 위한 클래스 지정
            card.textContent = syllable;
            
            // 초기 원래 위치 정보 저장
            card.dataset.originalRow = rowIndex;
            card.dataset.originalCol = colIndex;
            card.style.order = rowIndex * 10 + colIndex;

            // 클릭 이벤트 리스너: 애니메이션 효과 및 TTS
            card.addEventListener('click', () => {
                playTTS(syllable);
                playAnimation(card);
            });

            container.appendChild(card);
            allCards.push(card);
        });
    });

    // MP3 오디오 파일 읽어주기 함수
    function playTTS(text) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        
        currentAudio = new Audio(`audio/${text}.mp3`);
        currentAudio.play().catch(e => console.error("오디오 재생 실패:", e));
    }

    // 카드 클릭 애니메이션 처리 함수
    function playAnimation(cardElement) {
        cardElement.classList.add('playing');
        
        // 200ms 후 클래스 제거 (CSS transition 시간과 유사하게)
        setTimeout(() => {
            cardElement.classList.remove('playing');
        }, 200);
    }

    // 색상 토글 버튼 로직
    const toggleBtn = document.getElementById('color-toggle');
    let isColorOff = false;
    
    toggleBtn.addEventListener('click', () => {
        isColorOff = !isColorOff;
        if (isColorOff) {
            document.body.classList.add('color-off');
            toggleBtn.textContent = '색깔 켜기';
        } else {
            document.body.classList.remove('color-off');
            toggleBtn.textContent = '색깔 끄기';
        }
    });

    // 셔플 로직
    const shuffleBtn = document.getElementById('shuffle-btn');
    let shuffleState = 0; 
    // 다중 행일 경우 0: 초기, 1: 행만 섞기, 2: 행 안에서 섞기, 3: 전체 섞기
    // 단일 행일 경우 0: 초기, 1: 섞기
    
    if (rowCount === 1) {
        shuffleBtn.textContent = '섞기';
    }

    // 동적으로 행 인덱스 배열 생성
    let rowIndicesArray = [];
    for(let i=0; i<rowCount; i++) rowIndicesArray.push(i);

    // 배열 셔플 유틸리티 함수 (피셔-예이츠)
    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    shuffleBtn.addEventListener('click', () => {
        if (rowCount === 1) {
            // 단일 행: 0(초기) -> 1(무작위 섞기) 토글
            shuffleState = (shuffleState + 1) % 2;
            if (shuffleState === 1) {
                shuffleBtn.textContent = '초기화 (원래대로)';
                let totalOrders = shuffleArray([0,1,2,3,4,5,6,7,8,9]);
                allCards.forEach((card, idx) => {
                    card.style.order = totalOrders[idx];
                });
            } else {
                shuffleBtn.textContent = '섞기';
                allCards.forEach(card => {
                    card.style.order = parseInt(card.dataset.originalCol);
                });
            }
        } else {
            // 다중 행: 기존 1~3단계 로직 유지
            shuffleState = (shuffleState + 1) % 4;
            
            if (shuffleState === 1) {
                // 1단계: 행 단위 섞기 (위아래)
                shuffleBtn.textContent = '카드 섞기 (2단계)';
                let rowOrders = shuffleArray([...rowIndicesArray]);
                allCards.forEach(card => {
                    let origRow = parseInt(card.dataset.originalRow);
                    let origCol = parseInt(card.dataset.originalCol);
                    card.style.order = rowOrders[origRow] * 10 + origCol;
                });
            } 
            else if (shuffleState === 2) {
                // 2단계: 각 행 안에서 10개 글자끼리 섞기
                shuffleBtn.textContent = '카드 섞기 (3단계)';
                // 행 단위로 모으기
                let rowGroups = {};
                rowIndicesArray.forEach(r => rowGroups[r] = []);
                allCards.forEach(card => {
                    rowGroups[card.dataset.originalRow].push(card);
                });
                
                // 기존 행의 offset (10의 자리)을 유지한 채 0~9 랜덤 부여
                rowIndicesArray.forEach(r => {
                    let colOrders = shuffleArray([0,1,2,3,4,5,6,7,8,9]);
                    let baseOrder = Math.floor(parseInt(rowGroups[r][0].style.order) / 10) * 10;
                    
                    rowGroups[r].forEach((card, idx) => {
                        card.style.order = baseOrder + colOrders[idx];
                    });
                });
            }
            else if (shuffleState === 3) {
                // 3단계: 전체 무작위 섞기 (개수에 맞게)
                shuffleBtn.textContent = '초기화 (원래대로)';
                let totalOrders = [];
                let totalCardsCount = rowCount * 10;
                for (let i = 0; i < totalCardsCount; i++) totalOrders.push(i);
                totalOrders = shuffleArray(totalOrders);
                
                allCards.forEach((card, idx) => {
                    card.style.order = totalOrders[idx];
                });
            }
            else if (shuffleState === 0) {
                // 4단계: 초기화 (0단계로 돌아감)
                shuffleBtn.textContent = '카드 섞기 (1단계)';
                allCards.forEach(card => {
                    let origRow = parseInt(card.dataset.originalRow);
                    let origCol = parseInt(card.dataset.originalCol);
                    card.style.order = origRow * 10 + origCol;
                });
            }
        }
    });
});
