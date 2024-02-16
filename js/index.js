const selectAlbumArt = document.querySelector("#album-art");
const albumForm = document.querySelector("#album-form");
const albumTitle = document.querySelector("#album-title");
const albumDescription = document.querySelector("#album-description");
const invalidTitle = document.querySelector("#invalid-title");
const invalidDescription = document.querySelector("#invalid-description");
const invalidAlbum = document.querySelector("#invalid-album");
const allAlbumsList = document.querySelector("#all-albums-list");

selectAlbumArt.addEventListener("change", onSelectAlbumArt);
albumForm.addEventListener("submit", onCreateAlbum);
albumTitle.addEventListener("input", onHandleAlbumTitleInput);
albumDescription.addEventListener("input", onHandleAlbumDescriptionInput);

function onSelectAlbumArt(e) {
  e.currentTarget.value;
  //Check if user selected an image
  if (selectAlbumArt.value == "") {
    invalidAlbum.classList.add("d-flex");
    console.log("Select an image");
  } else {
    invalidAlbum.classList.remove("d-flex");
    console.log(selectAlbumArt.value);
  }
}

function onHandleAlbumTitleInput() {
  const title = albumTitle.value.trim();
  //check for valid title
  if (!isValidTitle(title)) {
    invalidTitle.classList.add("d-flex");
    console.log(`"Title has to be 0-20 chars ${title.length}"`);
  } else {
    console.log(title + " is " + title.length + " chars");
    invalidTitle.classList.remove("d-flex");
  }
}

function onHandleAlbumDescriptionInput() {
  const description = albumDescription.value.trim();
  //check for valid description
  if (!isValidDescription(description)) {
    console.log(description + " is " + description.length + " chars");
    invalidDescription.classList.add("d-flex");
  } else {
    invalidDescription.classList.remove("d-flex");
    console.log(`"description has to be 0-40 chars ${description.length}"`);
  }
}

function isValidTitle(title) {
  const lenghtRegex = /^.{1,20}$/;
  return lenghtRegex.test(title);
}

function isValidDescription(description) {
  const lenghtRegex = /^.{1,40}$/;
  return lenghtRegex.test(description);
}

function isSuccess() {
  if (
    onHandleAlbumTitleInput() &&
    onHandleAlbumDescriptionInput() &&
    onSelectAlbumArt()
  ) {
    return true;
  } else {
    return false;
  }
}

function onCreateAlbum(e) {
  e.preventDefault();
  if (isSuccess) {
    allAlbumsList.innerHTML += `<div class="col">
	<div class="card shadow-sm">
		<img class="bd-placeholder-img card-img-top" src="${selectAlbumArt.value}" />
		<div class="card-body">
			<h5 class="card-title">${albumDescription.value.trim()}</h5>
			<p class="card-text">${albumTitle.value.trim()}</p>
		</div>
	</div>
</div>`;
  } else {
    allAlbumsList.classList.add("d-none");
  }
}
