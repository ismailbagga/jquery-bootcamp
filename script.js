
const url  = "http://localhost:3000"

const generatePost = (id) => {
    return `

    `
}





const getPost = (id) => {
    $.ajax({
        url: `url`,
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(error);
        }
    });
}

const getAllPost = () => {
    $.ajax({
        url: `${url}/posts`,
        success: function (posts) {
            console.log(data);
        },
        error: function (error) {
            console.log(error);
        }
    });
}