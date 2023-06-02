document.getElementById('submitComment').addEventListener('click', function() {
    // Get the input text
    var commentText = document.getElementById('commentInput').value;
    
    // Create a new div for the comment
    var newComment = document.createElement('div');
    newComment.textContent = commentText;
    newComment.style.marginBottom = "10px";

    // Add the new comment to the display
    document.getElementById('commentDisplay').appendChild(newComment);

    // Clear the input
    document.getElementById('commentInput').value = '';
});
