const Renderer = () => {
    const renderPosts = posts => {
        $('#posts').empty();
        for (let post of posts) {
            $('#posts').append(`<div class="post" data-id="${post.id}">
                                    <h3>${post.text}</h3>
                                    <ul data-id="${post.id}"></ul>
                                </div>`);
            for (let comment of post.comments) {
                $(`ul[data-id="${post.id}"]`).append(`<li data-id="${comment.id}">${comment.text}</li>`);
            }
        }
    }
    return { renderPosts }
}