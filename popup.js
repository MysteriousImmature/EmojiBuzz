// List of emojis
const emojis = ['😄', '❤️', '😍', '😂', '👍', '🎉', '😊', '😎', '🙌', '😇', '🔥', '🚀', '💯', '🤔', '😜', '🎈', '🌟', '🍕', '🎸', '🌈', '🍦'];

// Function to create emoji buttons dynamically
function createEmojiButtons() {
  const emojiContainer = document.getElementById('emojiContainer');

  emojis.forEach(emoji => {
    const button = document.createElement('button');
    button.innerHTML = emoji;
    button.className = 'emojiButton';
    button.addEventListener('click', () => reactWithEmoji(emoji));
    emojiContainer.appendChild(button);
  });
}

// Function to simulate reacting with an emoji (you can replace this with your actual logic)
function reactWithEmoji(emoji) {
  alert(`Reacted with ${emoji}`);
}

// Call the function to create emoji buttons when the popup is loaded
document.addEventListener('DOMContentLoaded', createEmojiButtons);
