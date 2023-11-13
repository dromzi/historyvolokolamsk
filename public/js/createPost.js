let profilePic = document.querySelector(".profile-pic")
let inputFile = document.getElementById("input-file")

inputFile.onchange = function () {
    profilePic.style.display = "block"
    profilePic.src = URL.createObjectURL(inputFile.files[0])
}
const textArea = document.querySelector('#default');
const btnSubmit = document.querySelector(".btnSubmit")
const titlePost = document.querySelector('.titlePost')


const form = document.querySelector('form');

form.addEventListener('submit', async event => {
  event.preventDefault();
    const userId = localStorage.getItem('userId');
    const title = titlePost.value;
    let text = tinymce.get('default').getContent();
    const imgPost = inputFile.files[0] ? inputFile.files[0] : "img/userimage.png"

    const formData = new FormData();

    formData.append('title', title);
    formData.append('text', text);
    formData.append('userId', userId);
    formData.append('image', imgPost);


    const response = await fetch('/createPost', {
        method: 'POST',
        body: formData 
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        // body: JSON.stringify({
        //   title,
        //   text,
        //   userId,
        //   imgPost
        // })
      });
      
    if(response.ok) {
        window.location.href = '/';
    } else {
        form.innerHTML = "Ошибка"
    }
});

    // console.log(title);
    // console.log(text);
    // console.log(userId);
    // console.log(imgPost);
    // const formData = new FormData();
    // formData.append('title', title);
    // formData.append('text', text);
    // formData.append('userId', userId);
    // formData.append('imgPost', imgPost);

    // const formData = new FormData();

    // formData.append('title', title);
    // formData.append('text', text);
    // formData.append('userId', userId);
    // formData.append('imgPost', imgPost);
    // const response = await fetch('/createPost', {
    //     method: 'POST',
    //     body: formData 
    // });
    // if(response.ok) {
    //     window.location.href = '/';
    // } else {
    //     form.innerHTML = "Ошибка"
    // }

    // const formData = new FormData();

    // formData.append('image', imgPost);
    // formData.append('title', title);
    // formData.append('text', text);
    // formData.append('userId', userId);

