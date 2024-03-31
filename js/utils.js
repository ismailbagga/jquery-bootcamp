const SERVER_URL = 'http://localhost:3000';

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
                <button onClick="deletePost(${id})"  class="btn btn-danger ms-3">Remove</button>
                <a href="/pages/edit.html?id=${id}" class="btn btn-warning ms-3">Edit</a>
            </div>
        </div>
      </div>
    `
}


const extractId = (url) => {
    let params = new URL(url).searchParams;
    return params.get('id');
}


const navigateTo = (url) => {
    window.location.href = url;
}




export { extractId, navigateTo };