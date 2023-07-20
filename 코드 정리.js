document.addEventListener('DOMContentLoaded',
    function() {
        // 전송하기 버튼
        var sendButton = document.getElementById('send-button');

        // 질문을 입력해주세요 (질문 입력창)
        var userInput = document.getElementById('user-message');

        // SelectBox 답변 보내기 버튼
        var sendclick = document.getElementById('send-click');

        // 이미지1~9 이하 생략
        var imageButton1 = document.getElementById("image-button-1");
        var imageButton2 = document.getElementById("image-button-2");
        var imageButton3 = document.getElementById("image-button-3");
        var imageButton4 = document.getElementById("image-button-4");
        var imageButton5 = document.getElementById("image-button-5");
        var imageButton6 = document.getElementById("image-button-6");
        var imageButton7 = document.getElementById("image-button-7");
        var imageButton8 = document.getElementById("image-button-8");
        var imageButton9 = document.getElementById("image-button-9");

        // SelecBox에 답변보내기를 클릭하면 SelectBox가 숨김 처리
        document.getElementById("send-click").addEventListener("click",
            hideSelectBox);

        // hiedSelectBox를 정의하고 버튼이 클릭될 때 디스플레이를 none 모드로 변경
        // select-container은 html에 있는 selectbox에 포함되어 있는 내용이다
        function hideSelectBox() {
            document.getElementById("select-container").style.display = "none";
        }

        //문서 전체에 click 이벤트 리스너 추가
        document.addEventListener('click', function(event) {

            //target 변수를 선언하고 속성값을 할당
            var target = event.target;

            // chat-button 클래스에만 적용되며 버튼벨류에 변수를 저장
            if (target.classList.contains('chat-button')) {
                var buttonValue = target.getAttribute('data-value');

                // 버튼밸류 값이 교양선택일 경우 메세지를 실행한다.
                // 사용자의 메세지를 오른쪽에서 출력한다.
                if (buttonValue === '교양선택') {
                    var message = "교양 선택에 대해 알고싶어";
                                appendMessage(message,
                    'right');               

                    // 챗봇의 메세지를 왼쪽에서 출력한다.
                    var botResponse = processUserInput(message);
                            appendMessage(botResponse,
                        'left');

                    // 스크롤을 가장 아래로 고정시킨다.
                    scrollToBottom();

                    // 이하 else if 로 반복되는 문장은 같은 의미로 출력되는 값만 다르다.            
                } else if (buttonValue === '교양필수') {
                    var message = "교양 필수에 대해 알고싶어";
                    appendMessage(message,
                        'right');

                    var botResponse = processUserInput(message);
                    appendMessage(botResponse,
                        'left');

                    scrollToBottom();
                }
                else if (buttonValue === '소프트웨어') {
                    var message = "소프트웨어학과에 대해 알고싶어";
                    appendMessage(message,
                        'right');

                    var botResponse = processUserInput(message);
                    appendMessage(botResponse,
                        'left');

                    scrollToBottom();
                }
            
            else if (buttonValue === '컴퓨터공학과') {
                var message = "컴퓨터공학과에 대해 알고싶어";
                appendMessage(message,
                    'right');

                var botResponse = processUserInput(message);
                appendMessage(botResponse,
                    'left');

                scrollToBottom();
            }
            else if (buttonValue === '컴퓨터정보공학과') {
                var message = "컴퓨터정보공학과에 대해 알고싶어";
                appendMessage(message,
                    'right');

                var botResponse = processUserInput(message);
                appendMessage(botResponse,
                    'left');

                scrollToBottom();
            }
            else if (buttonValue === '간호학과') {
                var message = "간호학과에 대해 알고싶어";
                appendMessage(message,
                    'right');

                var botResponse = processUserInput(message);
                appendMessage(botResponse,
                    'left');

                scrollToBottom();
            }
            else if (buttonValue === '물리치료학과') {
                var message = "물리치료학과에 대해 알고싶어";
                appendMessage(message,
                    'right');

                var botResponse = processUserInput(message);
                appendMessage(botResponse,
                    'left');

                scrollToBottom();
            }
            else if (buttonValue === '사회복지학과') {
                var message = "사회복지학과에 대해 알고싶어";
                appendMessage(message,
                    'right');

                var botResponse = processUserInput(message);
                appendMessage(botResponse,
                    'left');

                scrollToBottom();
            }
        }
            
        });
        // sendButton(전송하기)을 누르면 클릭 이벤트 발생
        sendButton.addEventListener('click',
            sendMessage);

        // sendclick(답변보내기)을 누르면 클릭 이벤트 발생
        sendclick.addEventListener('click',
            sendImage);

        // userInput(엔터키)를 누르면 클릭 이벤트 발생
        userInput.addEventListener('keydown',
            handleKeyDown);

        //이하 위의 설명과 같은 버튼밸류 함수
        imageButton1.addEventListener("click",
            function() {
                message = "전공과목에 대해 알고싶어";
                appendMessage(message,
                    'right');
                var botResponse = processUserInput(message);
                appendMessage(botResponse,
                    'left');
                scrollToBottom();
            });
        imageButton2.addEventListener("click",
            function() {
                message = "교양과목에 대해 알고싶어";
                appendMessage(message,
                    'right');
                var botResponse = processUserInput(message);
                appendMessage(botResponse,
                    'left');
                scrollToBottom();
            });
        imageButton3.addEventListener("click",
            function() {
                message = "계절학기에 대해 알고싶어";
                appendMessage(message,
                    'right');
                botResponse = processUserInput(message);
                appendMessage(botResponse,
                    'left');
                scrollToBottom();
            });
        imageButton4.addEventListener("click",
            function() {
                message = "등록금에 대해 알고싶어";
                appendMessage(message,
                    'right');
                botResponse = processUserInput(message);
                appendMessage(botResponse,
                    'left');
                scrollToBottom();
            });
        imageButton5.addEventListener("click",
            function() {
                message = "교내연락처에 대해 알고싶어";
                appendMessage(message,
                    'right');
                botResponse = processUserInput(message);
                appendMessage(botResponse,
                    'left');
                scrollToBottom();
            });
        imageButton6.addEventListener("click",
            function() {
                message = "졸업에 대해 알고싶어";
                appendMessage(message,
                    'right');
                botResponse = processUserInput(message);
                appendMessage(botResponse,
                    'left');
                scrollToBottom();
            });
        imageButton7.addEventListener("click",
            function() {
                message = "학사일정에 대해 알고싶어";
                appendMessage(message,
                    'right');
                botResponse = processUserInput(message);
                appendMessage(botResponse,
                    'left');
                scrollToBottom();
            });
        imageButton8.addEventListener("click",
            function() {
                message = "학점조회에 대해 알고싶어";
                appendMessage(message,
                    'right');
                botResponse = processUserInput(message);
                appendMessage(botResponse,
                    'left');
                scrollToBottom();
            });
        imageButton9.addEventListener("click",
            function() {
                message = "기숙사에 대해 알고싶어";
                appendMessage(message,
                    'right');
                botResponse = processUserInput(message);
                appendMessage(botResponse,
                    'left');
                scrollToBottom();
            });

        // Enter 버튼 클릭 시 메세지가 보내지는 이벤트 발생
        function handleKeyDown(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                sendMessage();
            }
        }

        // sendMessage(전송하기) 이벤트가 발생했을 때 사용자의 채팅은 오른쪽 챗봇은 왼쪽에 출력
        // 이미 설정한 메세지의 값을 불러와서 출력
        // 스크롤은 맨 아래로 고정
        function sendMessage() {
            var message = userInput.value.trim();
            if (message !== '') {
                appendMessage(message,
                    'right');
                userInput.value = '';
                var botResponse = processUserInput(message);
                appendMessage(botResponse,
                    'left');
                scrollToBottom();
            }

            // sendImage(답변보내기) 이벤트가 발생했을 때 사용자의 채팅은 오른쪽 챗봇은 왼쪽에 출력
            // 답변보내기 버튼을 보이기 위해 img 태그를 생성하고 변수를 할당
        }

        function sendImage() {
            if (imageURL !== '') {
                var imageMessage = '<img src="' + imageURL + '" alt="Image">';
                appendMessage(imageMessage,
                    'right');
                var botResponse = processUserInput(imageURL);
                appendMessage(botResponse,
                    'left');
                scrollToBottom();
            }
        }

        // image-button-5(교내연락처) 버튼을 눌렀을 때 이벤트가 발생
        // 이벤트가 발생했을 때 SelectBox가 보여지게 된다
        // 만약 select-container(html에 위치)가 선택되면 다시 사라지게 된다
        document.getElementById("image-button-5").addEventListener("click",
            showSelectBox);

        function showSelectBox() {
            document.getElementById("select-container").style.display = "block";
        }

        // select-button()을 button으로 선언
        // 만약 버튼이 실행됐을 경우 셀렉트 박스는 숨김 처리가 된다.
        var button = document.getElementById("select-button");
        button.addEventListener("click",
            hideSelectBox);

        // 스크롤 고정 이벤트가 실행될 경우 챗봇의 스크롤이 맨 아래로 고정
        // chat-container = 챗봇의 기본적인 틀
        function scrollToBottom() {
            var chatContainer = document.getElementById('chat-container');
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        // html에 위치하고 있는 chat-log와 div를 불러온 후 새롭게 선언한다.
        // div의 메세지 값과 매개변수를 구별한다.
        // 출력값은 chat-log 안에서만 출력할 수 있도록 설정한다.
        // 이 기능은 추후 챗봇 메세지와 사용자 메세지를 구별하여 오른쪽과 왼쪽으로 나누는 역할을 한다.
        function appendMessage(message,
            position) {
            var chatLog = document.getElementById('chat-log');
            var messageContainer = document.createElement('div');
            messageContainer.className = 'message ' + position;
            messageContainer.innerHTML = message;
            chatLog.appendChild(messageContainer);
        }

        // userMessage라는 메세지를 받은 후 매개변수를 출력한다.
        // 사용자 -> userMessage / 챗봇 -> response
        // 이하 보여지는 코드는 위의 설명과 동일
        function processUserInput(userMessage) {
            var response;

            if (userMessage.includes("전공과목에 대해 알고싶어")) {
                response = "전공과목에 대해 소개해드리겠습니다.";

                response += '<div class="button-grid">';
                    response += '<button class="chat-button" data-value="소프트웨어">소프트웨어</button>';
                    response += '<button class="chat-button" data-value="컴퓨터공학과">컴퓨터공학과</button>';
                    response += '<button class="chat-button" data-value="컴퓨터정보공학과">컴퓨터정보공학과</button>';
                    response += '<button class="chat-button" data-value="간호학과">간호학과</button>';
                    response += '<button class="chat-button" data-value="물리치료학과">물리치료학과</button>';
                    response += '<button class="chat-button" data-value="사회복지학과">사회복지학과</button>';
                    response += '</div>';

            }else if (userMessage.includes("교양과목에 대해 알고싶어")) {
                response = "필요한 내용을 선택해주세요";
                // button-grid를 통해 버튼을 생성
                // button 안에 data-value를 통해 데이터값 넣기
                    response += '<div class="button-grid">';
                    response += '<button class="chat-button" data-value="교양필수">교양필수</button>';
                    response += '<button class="chat-button" data-value="교양선택">교양선택</button>';
                    response += '</div>';
            } else if (userMessage.includes("교양 필수에 대해 알고싶어")) {
                response = "교양 필수와 관련된 내용을 아래 홈페이지에서 확인하실 수 있습니다.";
            } else if (userMessage.includes("교양 선택에 대해 알고싶어")) {
                response = "관련 홈페이지로 이동합니다.";
                window.open("https://cup.ac.kr");
            } else if (userMessage.includes("계절학기에 대해 알고싶어")) {
                response = "계절 학기에 대해 소개해드리겠습니다.";
            } else if (userMessage.includes("등록금에 대해 알고싶어")) {
                response = "관련 홈페이지로 이동합니다.";
                window.open("https://st.cup.ac.kr");
            } else if (userMessage.includes("졸업에 대해 알고싶어")) {
                response = "졸업에 대해 소개해드리겠습니다.";
            } else if (userMessage.includes("캠퍼스맵")) {
                response = "캠퍼스맵에 대해 소개해드리겠습니다.";
            } else if (userMessage.includes("증명서")) {
                response = "증명서에 대해 소개해드리겠습니다.";
            } else if (userMessage.includes("학점조회에 대해 알고싶어")) {
                response = "관련 홈페이지로 이동합니다.";
                window.open("https://st.cup.ac.kr");
            } else if (userMessage.includes("학사일정에 대해 알고싶어")) {
                response = "학사일정에 대해 소개해드리겠습니다.";
            } else if (userMessage.includes("기숙사에 대해 알고싶어")) {
                response = "기숙사에 대해 소개해드리겠습니다.";
            } else if (userMessage.includes("복학")) {
                response = "복학신청에 대해 소개해드리겠습니다.";
            } else if (userMessage.includes("버스")) {
                response = "버스 시간표에 대해 소개해드리겠습니다.";
            } else if (userMessage.includes("대학규정")) {
                response = "대학 규정집 사이트로 이동합니다.";
                window.open("https://www.cup.ac.kr/about/about_06.asp?exec=list&table=board_provision&m_code=mcode000");



                // 새로운 이벤트 추가    
            }else if (userMessage.includes("교내연락처에 대해 알고싶어")) {

                // 변수에 아래 내용과 같은 변수 설정
                // 함수를 통해 chatbot-select를 가져옴 [기존에 HTML에 위치]
                // var selectedOption = selectBox.options[selectBox.selectedIndex].value을 통해 사용자가 선택한 값을 불러옴
                response = "필요하신 연락처를 선택해주세요.";
                    function sendResponse() {
                    var selectBox = document.getElementById("chatbot-select");
                        var selectedOption = selectBox.options[
                        selectBox.selectedIndex
                    ].value;


                        if (selectedOption === "교무부") {
                        var chatText = "교무처 FAX. 051)510-0519";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "학사지원부") {
                        var chatText = "교무처 FAX. 051)510-0519";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "교육성과관리부") {
                        var chatText = "교무처 FAX. 051)510-0519";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "학생부") {
                        var chatText = "학생처 FAX. 051)510-0527";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "장학부") {
                        var chatText = "학생처 FAX. 051)510-0527";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "인재개발부") {
                        var chatText = "학생처 FAX. 051)510-0527";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "사회봉사센터") {
                        var chatText = "학생처 FAX. 051)510-0527";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "예산부") {
                        var chatText = "기획처 FAX. 051)510-0695";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "기획부") {
                        var chatText = "기획처 FAX. 051)510-0695";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "대학혁신추진단") {
                        var chatText = "기획처 FAX. 051)510-0695";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "총무부") {
                        var chatText = "사무처 FAX. 051)514-1576";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "경리부") {
                        var chatText = "사무처 FAX. 051)514-1576";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "시설관리부") {
                        var chatText = "사무처  FAX. 051)514-1576";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "교목처") {
                        var chatText = "교목처  FAX. 051)510-0509";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "입학관리부") {
                        var chatText = "입학처  FAX. 051)510-0709";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "입학사정관실") {
                        var chatText = "입학처  FAX. 051)510-0709";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "대외협력부") {
                        var chatText = "대외협력처  FAX. 051)510-0869";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "연구부") {
                        var chatText = "산학연구처  FAX. 051)510-0769";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "대학원") {
                        var chatText = "대학원  FAX. 051)510-0749";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "(2층)멀티실") {
                        var chatText = "중앙도서관  FAX. 051)510-0759";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "(3층)제1자료실") {
                        var chatText = "중앙도서관  FAX. 051)510-0759";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "(4층)제2자료실") {
                        var chatText = "중앙도서관  FAX. 051)510-0759";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "(5층)참고자료실") {
                        var chatText = "중앙도서관  FAX. 051)510-0759";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "개발팀") {
                        var chatText = "정보전산원  FAX. 051)510-0609";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "서버/네트워크") {
                        var chatText = "정보전산원  FAX. 051)510-0609";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "홈페이지	") {
                        var chatText = "정보전산원  FAX. 051)510-0609";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "PC헬퍼") {
                        var chatText = "정보전산원  FAX. 051)510-0609";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "행정실") {
                        var chatText = "학생생활교육관  FAX. 051)510-0989";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "진로심리상담센터") {
                        var chatText = "대학생활공감원  FAX. 051)510-0919,0929";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "취업지원센터") {
                        var chatText = "대학생활공감원  FAX. 051)510-0919,0929";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "인권·성평등센터") {
                        var chatText = "인권·성평등센터";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "교수학습개발센터") {
                        var chatText = "교수학습개발센터  FAX. 051)510-0929";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "예비군대대") {
                        var chatText = "예비군대대  FAX. 051)510-0768";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "산학협력단") {
                        var chatText = "산학협력단  FAX. 051)510-0769";
                            appendMessage(chatText,
                        'left');
                    }else if (selectedOption === "평생교육원") {
                        var chatText = "평생교육원  FAX. 051)510-0497";
                            appendMessage(chatText,
                        'left');
                    }
                }

                // 아래 중괄호 코드가 한번 더 작동할 시 강제중단
                var codeExecuted = false;

{
    //chatText와 변수를 가져온 후 텍스트 출력
    //chat-log에 채팅이 올라가게 설정
  function appendMessage(chatText, position) {
    var chatLog = document.getElementById('chat-log');
    var messageContainer = document.createElement('div');
    messageContainer.className = 'message ' + position;
    messageContainer.textContent = chatText;
    chatLog.appendChild(messageContainer);
  }

  // send-click 이벤트 처리
  var sendClick = document.getElementById('send-click');
  sendClick.addEventListener('click', function() {
    var selectBox = document.getElementById('chatbot-select');
    if (selectBox.value !== '' && !codeExecuted) {
      sendResponse();
      // 코드가 실행되었음을 표시
      // 근데 이 코드 안먹어서 위에서 강종시키는 기능 추가해버림
      // 그렇다고 또 지우면 챗봇이 먹통되버림;
      codeExecuted = true; 
      
    }
  });
}
}else if (userMessage.includes("소프트웨어학과에 대해 알고싶어")) {
    response = "학년을 선택해주세요";
    // button-grid를 통해 버튼을 생성
    // button 안에 data-value를 통해 데이터값 넣기
        response += '<div class="button-grid">';
        response += '<button class="chat-button" data-value="소프트웨어 1학년">소프트웨어 1학년</button>';
        response += '<button class="chat-button" data-value="소프트웨어 2학년">소프트웨어 2학년</button>';
        response += '<button class="chat-button" data-value="소프트웨어 3학년">소프트웨어 3학년</button>';
        response += '<button class="chat-button" data-value="소프트웨어 4학년">소프트웨어 4학년</button>';
        response += '</div>';
    }else if (userMessage.includes("컴퓨터공학과에 대해 알고싶어")) {
        response = "학년을 선택해주세요";
        // button-grid를 통해 버튼을 생성
        // button 안에 data-value를 통해 데이터값 넣기
            response += '<div class="button-grid">';
            response += '<button class="chat-button" data-value="컴퓨터공학과 1학년">컴퓨터공학과 1학년</button>';
            response += '<button class="chat-button" data-value="컴퓨터공학과 2학년">컴퓨터공학과 2학년</button>';
            response += '<button class="chat-button" data-value="컴퓨터공학과 3학년">컴퓨터공학과 3학년</button>';
            response += '<button class="chat-button" data-value="컴퓨터공학과 4학년">컴퓨터공학과 4학년</button>';
            response += '</div>';}
            else if (userMessage.includes("컴퓨터정보공학과에 대해 알고싶어")) {
                response = "학년을 선택해주세요";
                // button-grid를 통해 버튼을 생성
                // button 안에 data-value를 통해 데이터값 넣기
                    response += '<div class="button-grid">';
                    response += '<button class="chat-button" data-value="컴퓨터정보공학과 1학년">컴퓨터정보공학과 1학년</button>';
                    response += '<button class="chat-button" data-value="컴퓨터정보공학과 2학년">컴퓨터정보공학과 2학년</button>';
                    response += '<button class="chat-button" data-value="컴퓨터정보공학과 3학년">컴퓨터정보공학과 3학년</button>';
                    response += '<button class="chat-button" data-value="컴퓨터정보공학과 4학년">컴퓨터정보공학과 4학년</button>';
                    response += '</div>';}
                    else if (userMessage.includes("물리치료학과에 대해 알고싶어")) {
                        response = "학년을 선택해주세요";
                        // button-grid를 통해 버튼을 생성
                        // button 안에 data-value를 통해 데이터값 넣기
                            response += '<div class="button-grid">';
                            response += '<button class="chat-button" data-value="물리치료학과 1학년">물리치료학과 1학년</button>';
                            response += '<button class="chat-button" data-value="물리치료학과 2학년">물리치료학과 2학년</button>';
                            response += '<button class="chat-button" data-value="물리치료학과 3학년">물리치료학과 3학년</button>';
                            response += '<button class="chat-button" data-value="물리치료학과 4학년">물리치료학과 4학년</button>';
                            response += '</div>';}
                            else if (userMessage.includes("간호학과에 대해 알고싶어")) {
                                response = "학년을 선택해주세요";
                                // button-grid를 통해 버튼을 생성
                                // button 안에 data-value를 통해 데이터값 넣기
                                    response += '<div class="button-grid">';
                                    response += '<button class="chat-button" data-value="간호학과 1학년">간호학과 1학년</button>';
                                    response += '<button class="chat-button" data-value="간호학과 2학년">간호학과 2학년</button>';
                                    response += '<button class="chat-button" data-value="간호학과 3학년">간호학과 3학년</button>';
                                    response += '<button class="chat-button" data-value="간호학과 4학년">간호학과 4학년</button>';
                                    response += '</div>';}
                                    else if (userMessage.includes("사회복지학과에 대해 알고싶어")) {
                                        response = "학년을 선택해주세요";
                                        // button-grid를 통해 버튼을 생성
                                        // button 안에 data-value를 통해 데이터값 넣기
                                            response += '<div class="button-grid">';
                                            response += '<button class="chat-button" data-value="사회복지학과 1학년">사회복지학과 1학년</button>';
                                            response += '<button class="chat-button" data-value="사회복지학과 2학년">사회복지학과 2학년</button>';
                                            response += '<button class="chat-button" data-value="사회복지학과 3학년">사회복지학과 3학년</button>';
                                            response += '<button class="chat-button" data-value="사회복지학과 4학년">사회복지학과 4학년</button>';
                                            response += '</div>';
            } else {
                response = "죄송합니다. 잘 이해하지 못했습니다. 다른 질문을 해주시겠어요?";
            }
            {
                
            }
            return response;
        }
    });