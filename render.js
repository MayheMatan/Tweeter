const Renderer = () => {
    const renderPosts = posts => {
        $('#posts').empty();
        for (let post of posts) {
            $('#posts').append(`<div class="post" data-id="${post.id}">
                                    <h3>${post.text}</h3>
                                    <ul data-id="${post.id}"></ul>
                                    <div class="add-comment">
                                        <input class="comment-input" placeholder="Got something to say?">
                                        <button class="submit-comment">Comment</button>
                                    </div>
                                    <button class="delete">Delete Post</button>
                                </div>`);
            for (let comment of post.comments) {
                $(`ul[data-id="${post.id}"]`).append(`<li class="comment" data-id="${comment.id}">
                                                        <span class="delete-comment">x</span> 
                                                        ${comment.text}
                                                      </li>`);
            }
        }
    }
    return { renderPosts };
}