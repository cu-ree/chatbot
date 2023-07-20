document.addEventListener('DOMContentLoaded',
function() {
	var sendButton = document.getElementById('send-button');
        var userInput = document.getElementById('user-message');
		var sendclick = document.getElementById('send-click');
        var imageButton1 = document.getElementById("image-button-1");
        var imageButton2 = document.getElementById("image-button-2");
        var imageButton3 = document.getElementById("image-button-3");
        var imageButton4 = document.getElementById("image-button-4");
        var imageButton5 = document.getElementById("image-button-5");
        var imageButton6 = document.getElementById("image-button-6");
        var imageButton7 = document.getElementById("image-button-7");
        var imageButton8 = document.getElementById("image-button-8");
        var imageButton9 = document.getElementById("image-button-9");
		
        document.getElementById("send-click").addEventListener("click",
	hideSelectBox);
function hideSelectBox() {
		document.getElementById("select-container").style.display = "none";
	}document.addEventListener('click',
	function(event) {
		var target = event.target;
                    if (target.classList.contains('chat-button')) {
			var buttonValue = target.getAttribute('data-value');
                        console.log('버튼을 클릭했습니다:',
			buttonValue);
                        if (buttonValue === '교양선택') {
				var message = "교양 선택에 대해 알고싶어";
                            appendMessage(message,
				'right');
                            var botResponse = processUserInput(message);
                            appendMessage(botResponse,
				'left');
                            scrollToBottom();
			}else if (buttonValue === '교양필수') {
				var message = "교양 필수에 대해 알고싶어";
                            appendMessage(message,
				'right');
                            var botResponse = processUserInput(message);
                            appendMessage(botResponse,
				'left');
                            scrollToBottom();
			}
		}
	});
        sendButton.addEventListener('click',
	sendMessage);
        sendclick.addEventListener('click',
	sendImage);
        userInput.addEventListener('keydown',
	handleKeyDown);
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
        function handleKeyDown(event) {
		if (event.key === 'Enter') {
			event.preventDefault();
                sendMessage();
		}
	}function sendMessage() {
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
	}function sendImage() {
		if (imageURL !== '') {
			var imageMessage = '<img src="' + imageURL + '" alt="Image">';
                appendMessage(imageMessage,
			'right');
                var botResponse = processUserInput(imageURL);
                appendMessage(botResponse,
			'left');
                scrollToBottom();
		}
	}document.getElementById("image-button-5").addEventListener("click",
	showSelectBox);
        function showSelectBox() {
		document.getElementById("select-container").style.display = "block";

	}var button = document.getElementById("select-button");
        button.addEventListener("click",
	hideSelectBox);
        function scrollToBottom() {
		var chatContainer = document.getElementById('chat-container');
            chatContainer.scrollTop = chatContainer.scrollHeight;
	}function appendMessage(message,
	position) {
		var chatLog = document.getElementById('chat-log');
            var messageContainer = document.createElement('div');
            messageContainer.className = 'message ' + position;
            messageContainer.innerHTML = message;
            chatLog.appendChild(messageContainer);
	}function processUserInput(userMessage) {
		var response;
            if (userMessage.includes("전공과목에 대해 알고싶어")) {
			response = "전공과목에 대해 소개해드리겠습니다.";
		}else if (userMessage.includes("교양과목에 대해 알고싶어")) {
			response = "필요한 내용을 선택해주세요";
                response += '<div class="button-grid">';
                response += '<button class="chat-button" data-value="교양필수">교양필수</button>';
                response += '<button class="chat-button" data-value="교양선택">교양선택</button>';
                response += '</div>';
		}else if (userMessage.includes("교양 필수에 대해 알고싶어")) {
			response = "교양 필수와 관련된 내용을 아래 홈페이지에서 확인하실 수 있습니다.";
		}else if (userMessage.includes("교양 선택에 대해 알고싶어")) {
			response = "관련 홈페이지로 이동합니다.";
                window.open ("https://cup.ac.kr");
		}else if (userMessage.includes("계절학기에 대해 알고싶어")) {
			response = "계절 학기에 대해 소개해드리겠습니다.";
		}else if (userMessage.includes("등록금에 대해 알고싶어")) {
			response = "등록금에 대해 소개해드리겠습니다.";
		}else if (userMessage.includes("교내연락처에 대해 알고싶어")) {
			response = "필요하신 연락처를 선택해주세요.";

  function sendResponse() {
    var selectBox = document.getElementById("chatbot-select");
    var selectedOption = selectBox.options[selectBox.selectedIndex].value;
    var chatText = "";

                    if (selectedOption === "교무부") {
					 chatText = "교무처 FAX. 051)510-0519";
				}else if (selectedOption === "학사지원부") {
					 chatText = "교무처 FAX. 051)510-0519";
				}else if (selectedOption === "교육성과관리부") {
					 chatText = "교무처 FAX. 051)510-0519";
				}else if (selectedOption === "학생부") {
					 chatText = "학생처 FAX. 051)510-0527";
				}else if (selectedOption === "장학부") {
					 chatText = "학생처 FAX. 051)510-0527";
				}else if (selectedOption === "인재개발부") {
					 chatText = "학생처 FAX. 051)510-0527";
				}else if (selectedOption === "사회봉사센터") {
					 chatText = "학생처 FAX. 051)510-0527";
				}else if (selectedOption === "예산부") {
					 chatText = "기획처 FAX. 051)510-0695";
				}else if (selectedOption === "기획부") {
					 chatText = "기획처 FAX. 051)510-0695";
				}else if (selectedOption === "대학혁신추진단") {
				 chatText = "기획처 FAX. 051)510-0695";
				}else if (selectedOption === "총무부") {
					 chatText = "사무처 FAX. 051)514-1576";
				}else if (selectedOption === "경리부") {
					 chatText = "사무처 FAX. 051)514-1576";
				}else if (selectedOption === "시설관리부") {
					 chatText = "사무처  FAX. 051)514-1576";
				}else if (selectedOption === "교목처") {
					 chatText = "교목처  FAX. 051)510-0509";
				}else if (selectedOption === "입학관리부") {
					 chatText = "입학처  FAX. 051)510-0709";
				}else if (selectedOption === "입학사정관실") {
					 chatText = "입학처  FAX. 051)510-0709";
				}else if (selectedOption === "대외협력부") {
					 chatText = "대외협력처  FAX. 051)510-0869";
				}else if (selectedOption === "연구부") {
					 chatText = "산학연구처  FAX. 051)510-0769";
				}else if (selectedOption === "대학원") {
					 chatText = "대학원  FAX. 051)510-0749";
				}else if (selectedOption === "(2층)멀티실") {
					 chatText = "중앙도서관  FAX. 051)510-0759";
				}else if (selectedOption === "(3층)제1자료실") {
					 chatText = "중앙도서관  FAX. 051)510-0759";
				}else if (selectedOption === "(4층)제2자료실") {
					 chatText = "중앙도서관  FAX. 051)510-0759";
				}else if (selectedOption === "(5층)참고자료실") {
				 chatText = "중앙도서관  FAX. 051)510-0759";
				}else if (selectedOption === "개발팀") {
					 chatText = "정보전산원  FAX. 051)510-0609";
				}else if (selectedOption === "서버/네트워크") {
				 chatText = "정보전산원  FAX. 051)510-0609";
				}else if (selectedOption === "홈페이지	") {
					 chatText = "정보전산원  FAX. 051)510-0609";
				}else if (selectedOption === "PC헬퍼") {
					 chatText = "정보전산원  FAX. 051)510-0609";
				}else if (selectedOption === "행정실") {
					 chatText = "학생생활교육관  FAX. 051)510-0989";
				}else if (selectedOption === "진로심리상담센터") {
					 chatText = "대학생활공감원  FAX. 051)510-0919,0929";
				}else if (selectedOption === "취업지원센터") {
					 chatText = "대학생활공감원  FAX. 051)510-0919,0929";
				}else if (selectedOption === "인권·성평등센터") {
					 chatText = "인권·성평등센터";
				}else if (selectedOption === "교수학습개발센터") {
					 chatText = "교수학습개발센터  FAX. 051)510-0929";
				}else if (selectedOption === "예비군대대") {
					 chatText = "예비군대대  FAX. 051)510-0768";
				}else if (selectedOption === "산학협력단") {
					 chatText = "산학협력단  FAX. 051)510-0769";
				}else if (selectedOption === "평생교육원") {
					 chatText = "평생교육원  FAX. 051)510-0497";
				}
				
				// 모든 chatText는 왼쪽에서 출력
				appendMessage(chatText, 'left');

				// chatbot-select를 불러와 변수를 저장
				// 만약 chatbot-select가 작동했을 경우 숨김처리 진행
    			var selectWrapper = document.getElementById("chatbot-select");
    			selectWrapper.style.display = "none";
  				}

				// html에 위치하는 send-click을 변수로 저장
				var sendclick = document.getElementById('send-click');
				sendclick.addEventListener('click', function() {
    			var selectBox = document.getElementById("chatbot-select");
   				if (selectBox.value !== "") {
   				sendResponse();
    }
  });

  function showSelectBox() {
    var selectContainer = document.getElementById("select-container");
    selectContainer.style.display = "block";
  }
		}else if (userMessage.includes("졸업에 대해 알고싶어")) {
			response = "졸업에 대해 소개해드리겠습니다.";
		}else if (userMessage.includes("캠퍼스맵")) {
			response = "캠퍼스맵에 대해 소개해드리겠습니다.";
		}else if (userMessage.includes("증명서")) {
			response = "증명서에 대해 소개해드리겠습니다.";
		}else if (userMessage.includes("학점조회에 대해 알고싶어")) {
			response = "학점조회에 대해 소개해드리겠습니다.";
		}else if (userMessage.includes("학사일정에 대해 알고싶어")) {
			response = "학사일정에 대해 소개해드리겠습니다.";
		}else if (userMessage.includes("기숙사에 대해 알고싶어")) {
			response = "기숙사에 대해 소개해드리겠습니다.";
		}else if (userMessage.includes("복학")) {
			response = "복학신청에 대해 소개해드리겠습니다.";
		}else if (userMessage.includes("버스")) {
			response = "버스 시간표에 대해 소개해드리겠습니다.";
		}else if (userMessage.includes("대학규정")) {
			response = "대학 규정집 사이트로 이동합니다.";               
                window.open ("https://www.cup.ac.kr/about/about_06.asp?exec=list&table=board_provision&m_code=mcode000");
		}else {
			response = "죄송합니다. 잘 이해하지 못했습니다. 다른 질문을 해주시겠어요?";
		}return response;
	}
});