const Tweeter = () => {
    const _posts = [{
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];

    let postIdCounter = _posts.length;
    let commentIdCounter = _posts.map(post => post.comments.length).reduce((a, b) => a + b);

    const getPosts = () => _posts;

    const addPost = text => _posts.push({ text: text, id: "p" + postIdCounter + 1, comments: [] });

    const removePost = postId => {
        for (let i in _posts) {
            if (_posts[post].id === postId) {
                _posts.splice(i, 1);
            }
        }
    }

    const addComment = (text, postId) => {
        for (let post of _posts) {
            if (post.id === postId) {
                post.comments.push({ id: "c" + commentIdCounter + 1, text: text });
                return;
            }
        }
    }

    const removeComment = (postId, commentId) => {
        for (let post of _posts) {
            if (post.id === postId) {
                for (let comment in post.comments) {
                    if (post.comments[comment].id === commentId) {
                        post.comments.splice(comment, 1);
                        return;
                    }
                }
            }
        }
    }

    return { getPosts, addPost, removePost, addComment, removeComment };
}