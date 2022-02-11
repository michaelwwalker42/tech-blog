async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const post_content = document.querySelector('#content').value;
  // get hidden post id 
  const id = document.querySelector('#post_id').value
  // this way would get the id from the url in the browser
  // const id = window.location.toString().split('/')[
  //   window.location.toString().split('/').length - 1
  // ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title, 
      post_content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

async function deleteFormHandler(event) {
  event.preventDefault(); 
 
  const id = document.querySelector('#post_id').value 

  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);

