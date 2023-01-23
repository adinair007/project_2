// const searchForm = async (event) => {
//   event.preventDefault();

//   let search = document.getElementById('searchInput').value.trim();
//   search = search.replace(/\s/g, '-');

//   console.log('search' + search);
//   if (search) {
//     const response = await fetch(`/search?gametitle=${search}`, {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     })
//       .then((results) => {
//         console.log(response);
//         return results.json();
//       })
//       .then((resultsData) => {
//         console.log('bark', resultsData);
//         displayGameInfo(resultsData);
//       });
//   }
// };

// const displayGameInfo = async (gameInfo) => {
//   let gameCardEl = document.getElementById('gameCard');
//   gameCardEl.style.display = 'inline-block';
//   let gameTitle = document.getElementById('game-title');
//   gameTitle.setAttribute('data-slug', gameInfo.slug);
//   let gameDescription = document.getElementById('description');
//   let gameMetacritic = docuement.getElementById('metacritic');
//   let gameImage = document.getElementById('game-image');
//   let released = document.getElementById('released');

//   gameTitle.setAttribute('data-gameId', gameInfo.name);
//   gameDescription.textContent = gameInfo.description;
//   gameImage.setAttribute('src', gameInfo.background_image);
//   released.textContent = gameInfo.released;
//   gameMetacritic.textContent = gameInfo.metacritic;
// };

const reviewFormHandler = async (event) => {
  event.preventDefault();

  console.log('Inside reviewForm');
  let ratingEl = document.getElementById('user_score');
  let reviewContent = document.getElementById('review');
  let gameTitle = document.getElementById('game_title');

  if (!ratingEl.value) {
    alert('Please provide a rating out of 10.');
  }

  if (!reviewContent.value) {
    alert('Please provide a review.');
  }

  // gameTitle = game_title.textContent;
  if (!gameTitle.value) {
    alert('Please search the game you want to review.');
  }

  if (gameTitle && ratingEl && reviewContent) {
    
    console.log('testing')
    const response = await fetch('/api/add-review', {
      method: 'POST',
      body: JSON.stringify({ gameTitle:gameTitle.value, ratingEl:ratingEl.value, reviewContent:reviewContent.value }),
      headers: {  'Content-Type': 'application/json' },
    });
    console.log('success')
    if (response.ok) {
      document.location.replace('/review');
    } else {
      alert('Unable to submit review.');
    }
  }
};

// const editButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     let ratingEl = document.getElementById('user_score');
//     let reviewContent = document.getElementById('Review');
//     let gameTitle = document.getElementById('game_title');

//     if (gameTitle && ratingEl && reviewContent) {
//       const response = await fetch(`/api/review/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ gameTitle, ratingEl, reviewContent }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       if (response.ok) {
//         document.location.replace('/review');
//       }
//     } else {
//       alert('Unable to edit review.');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/review/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/review');
//     } else {
//       alert('Unable to delete this review.');
//     }
//   }
// };

document.querySelector('.new-review-form').addEventListener('submit', reviewFormHandler);
// document
//   .querySelector('.reviewList')
//   .addEventListener('click', delButtonHandler);
// document
//   .querySelector('.reviewList')
//   .addEventListener('click', editButtonHandler);
// document.getElementById('searchBtn').addEventListener('submit', searchForm);
