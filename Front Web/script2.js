document.addEventListener("DOMContentLoaded", () => {
    const messages = [
        "Hello! How can I help you? ",
        "You can ask questions about symptoms, recommendations, and tests."
    ];
    const options = ["Recommendations", "Checking for symptoms", "Ask a doctor"];
    const messageBox = document.querySelector(".message-box");
    const optionsContainer = document.querySelector(".chat-options");
    const inputField = document.querySelector(".chat-input input");
    const sendButton = document.querySelector(".send-button");

    let currentMessageIndex = 0;
    let charIndex = 0;

    // Функция печати сообщений
    function typeMessage() {
        if (charIndex < messages[currentMessageIndex].length) {
            messageBox.textContent += messages[currentMessageIndex][charIndex];
            charIndex++;
            setTimeout(typeMessage, 50);
        } else {
            if (currentMessageIndex < messages.length - 1) {
                currentMessageIndex++;
                charIndex = 0;
                messageBox.innerHTML += "<br>";
                setTimeout(typeMessage, 500);
            } else {
                setTimeout(showOptions, 500);
            }
        }
    }

    // Функция для показа кнопок
    function showOptions() {
        options.forEach((option, index) => {
            setTimeout(() => {
                const button = document.createElement("button");
                button.className = "option-button";
                button.textContent = option;
                button.addEventListener("click", () => {
                    inputField.value = option;
                });
                optionsContainer.appendChild(button);
            }, index * 300);
        });
    }

    // Функция отправки сообщения
    function sendMessage() {
        const userMessage = inputField.value.trim();
        if (userMessage) {
            const userMessageElement = document.createElement("div");
            userMessageElement.className = "user-message";
            userMessageElement.textContent = userMessage;
            messageBox.appendChild(userMessageElement);
            inputField.value = ""; // Очистить поле ввода
        }
    }

    // Обработчик кнопки отправки
    sendButton.addEventListener("click", sendMessage);

    // Обработчик нажатия клавиши Enter
    inputField.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    // Запуск печати сообщений
    typeMessage();
});