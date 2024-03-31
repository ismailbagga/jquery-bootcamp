

const getSinglePost = (id) => {
    $.ajax({
        url: `http://localhost:3000/posts/${id}`,
        success: function (post) {
            $('#title').val(post.title);
            $('#description').val(post.description);
            $('#views').val(post.views ?? 0);
        }
    });
}



const updatePost = ( id,title, description , views) => {
    $.ajax({
        url: `http://localhost:3000/posts/${id}`,
        method: 'PUT',
        contentType: 'application/json',
        data:  JSON.stringify( {
            title,
            description ,
            views
        }),
        success: function (response) {
            window.location.href = 'http://localhost:5500/pages/list.html'
        } 
    });

}


// document.location = http://127.0.0.1:5500/pages/edit.html?id=2
let params = new URL(document.location).searchParams;
/* 
 {
    id  : 2
 }
*/
const postId = params.get('id');
getSinglePost(postId);


$('#edit-form').on('submit', function (event) {

    console.log('clicked', event);
    event.preventDefault();

    const title = $('#title').val();
    const description = $('#description').val();
    const views = $('#views').val();
    updatePost(postId, title, description , views);
});