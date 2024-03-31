
const buildHTMLPost = (id ,title , description ,views)=> {
    return `
    
      <div class="col-6" id="post-${id}" >
      
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
                <button onClick="deletePost('${id}')"  class="btn btn-danger ms-3">Remove</button>
                <a href="/pages/edit.html?id=${id}" class="btn btn-warning ms-3">Edit</a>
            </div>
        </div>
      </div>
    `
}


const loadAllPosts = () => {
    $.ajax({
        url: `http://localhost:3000/posts`,
        success: function (posts) {

            // Option 1 
            for (let i = 0; i < posts.length; i++) {
                const post = posts[i];
                postHtml  = buildHTMLPost(post.id, post.title, post.description, post.views); 
                $('#posts').append(postHtml);
            }
            // Option 2
            // for (const post of posts) {
            //     postHtml  = buildHTMLPost(post.id, post.title, post.description, post.views); 
            //     $('#posts').append(postHtml);
            // }

            // Option 3
            // posts.forEach(post => {
            //     postHtml  = buildHTMLPost(post.id, post.title, post.description, post.views); 
            //     $('#posts').append(postHtml);
            // });
        },
        error: function (error) {
            console.log(error);
        }
    });
}


const savePost = (title, description, views) => {
    $.ajax({
        url: `http://localhost:3000/posts`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            title,
            description,
            views
        }),
        success: function (postCreated) {
            alert("Post created successfully");
            firstOptionAfterCreate(postCreated);
            // secondOptionAfterDelete()
        }
    });
}


const deletePost = (id) => {

    const shouldDelete = confirm("Are you sure you want to delete this post?");

    if (!shouldDelete) return;

    $.ajax({
        url: `http://localhost:3000/posts/${id}`,
        type: 'DELETE',
        success: function(result) {
            alert("Post deleted successfully");
            firstOptionAfteDelete(id);
            // secondOptionAfterDelete();
        }
    });
    
}

const firstOptionAfteDelete = (id) => {
    $(`#post-${id}`).remove()
}
const secondOptionAfterDelete = (id) => {
    location.reload();
}

const firstOptionAfterCreate = (post) => {

    const {id, title, description, views} = post;
    const postHTML =    buildHTMLPost(id, title, description, views);
    $('#posts').append(postHTML);
}

const secondOptionAfterCreate = () => {
    location.reload();
}

$('#create-post-form').on('submit', function (event) {
    event.preventDefault();
    const title = $('#title').val();
    const description = $('#description').val();
    const views = $('#views').val();
    savePost(title, description, views);
})



loadAllPosts();