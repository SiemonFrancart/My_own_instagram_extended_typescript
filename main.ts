type post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

const API_URL = "http://localhost:3000/posts";
let POST_DATA: post[] = [];
let currentPostIndex = 0;

function init() {
	loadPostList();
	const button = document.getElementById("loadMoreButton") as HTMLButtonElement;
	button.addEventListener("click", loadNextPosts);
}

function loadPostList() {
	fetch(API_URL)
		.then((response) => response.json())
		.then(function (data) {
			console.log(data);
			POST_DATA = data;
			displayPostList();
		});
}

function displayPostList() {
	const currentVisablePosts = POST_DATA.slice(currentPostIndex, currentPostIndex + 10);
	currentVisablePosts.forEach((postElement) => {
		displayPost(postElement);
	});
}

function displayPost(postElement: post) {
	const htmlElement = `
	<div class="post">
	<h2>${postElement.title}</h2>
	<p>${postElement.body}</p>
	</div>
	`;
	const containerElement = document.getElementById("content") as HTMLDivElement;
	console.log(containerElement);
	containerElement.insertAdjacentHTML("beforeend", htmlElement);
}

function loadNextPosts() {
	console.log("loading");
	currentPostIndex += 10;
	displayPostList();
}

init();
