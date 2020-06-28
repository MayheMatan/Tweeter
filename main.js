const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());

const post = () => {
    tweeter.addPost($('#input').val());
    renderer.renderPosts(tweeter.getPosts());
};

$("#posts").on("click", ".delete-post", function() {
    tweeter.removePost($(this).closest(".post").data().id);
    renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".submit-comment", function() {
    const text = $(this).prev().val();
    const postId = $(this).closest(".post").data().id;
    tweeter.addComment(text, postId);
    renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".delete-comment", function() {
    const postId = $(this).closest(".post").data().id;
    const commentId = $(this).closest(".comment").data().id;
    tweeter.removeComment(postId, commentId);
    renderer.renderPosts(tweeter.getPosts());
});