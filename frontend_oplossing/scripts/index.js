const API_URI = "http://localhost:3000/posts";
let POST_DATA = [];
let currentPostIndex = 0;

function init() {
	loadPostList();
	document.getElementById("loadMoreButton").addEventListener("click", loadNextPosts);
}

function loadPostList() {
	fetch(API_URI)
		.then((response) => response.json())
		.then(function (data) {
			POST_DATA = data;
			displayPostList();
		});
}

function displayPostList() {
	const currentVisiblePosts = POST_DATA.slice(currentPostIndex, currentPostIndex + 10);
	currentVisiblePosts.forEach((postElement) => {
		displayPost(postElement);
	});
}

function displayPost(postElement = {}) {
	const htmlElement = `
    <div class="post">
      <h2>${postElement.title}</h2>
      <p>${postElement.body}</p>
    </div>
  `;
	const containerElement = document.getElementById("container");
	containerElement.insertAdjacentHTML("beforeend", htmlElement);
}

function loadNextPosts() {
	console.log("loading");
	currentPostIndex += 10;
	displayPostList();
}
init();
