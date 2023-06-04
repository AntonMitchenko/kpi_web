document.getElementById('submitComment').addEventListener('click', function() {
  var commentInput = document.getElementById('commentInput');
  var commentDisplay = document.getElementById('commentDisplay');

  var commentText = commentInput.value;

  if (commentText.trim() !== '') {
    var commentElement = document.createElement('div');
    commentElement.textContent = commentText;
    commentDisplay.appendChild(commentElement);

    commentInput.value = '';
  }
});
