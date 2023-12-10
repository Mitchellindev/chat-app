function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    if (message.trim() !== '') {
        displayMessage('You', message);
        messageInput.value = '';
    }
}

function displayMessage(sender, text) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `    
		<div class="flex flex-col justify-end items-end">
            <p class="max-w-xs  h-fit py-2 px-2 mb-1  text-sm bg-white rounded-l-lg rounded-tr-lg md:w-2/4 md:p-2 md:text-base" >${text}</p>
        </div>
    `;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
}
