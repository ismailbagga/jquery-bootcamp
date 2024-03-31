
    

const getPostHTML = (id,title,description,views) => {
    return `
    
        <div class="card"  >
            <div class="card-body">
                <h5 class="card-title"><a href="/pages/single.html?id=${id}"> ${title}</a></h5>
                <p class="card-text">
                    ${description}
                </p>
                <button type="button" class="btn btn-primary position-relative">
                ${views}
                <span
                    class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
                >
                    <span class="visually-hidden"></span>
                </span>
                </button>
            </div>
        </div>
    `
}

const getCommentHTML = (body) => {
    return `<li>${body}</li>`;
}


const getSinglePostWithComments = (id) => {
    $.ajax({
        url: `http://localhost:3000/posts/${id}?_embed=comments`,
        success: function (post) {
            console
            const postHTML = getPostHTML(post.id, post.title, post.description, post.views);
           $('#post').html(postHTML);


            for (const comment of post.comments) {
                const commentHTML = getCommentHTML(comment.text);
                $('#comments').append(commentHTML);
            }
        }
    });

}



let params = new URL(document.location).searchParams;
/* 
 {
    id  : 2
 }
*/
const postId = params.get('id');
getSinglePostWithComments(postId);


