export function setupEditor(element) {
	const sectionToHide = document.getElementById("entry");
	const editorBody = document.querySelector(".editor");

	element.addEventListener("click", () => {
		sectionToHide.classList.toggle("hidden");
		document.querySelector("#app").innerHTML = `
            <div class="editor">			
                <nav class="editor__nav"> 
                    <ul class="editor__control-buttons">
                        <li><button class="editor__control-button"><i class="fa-solid fa-arrow-up-from-bracket editor__icon"></i>Upload</button></li>
                        <li><button class="editor__control-button"><i class="fa-solid fa-download editor__icon"></i>Save</button></li>
                        <li><button class="editor__control-button"><i class="fa-brands fa-audible editor__icon"></i>Audit</button></li>
                        <li><button class="editor__control-button"><i class="fa-solid fa-xmark editor__icon"></i>Close</button></li>
                    </ul>	
                </nav>
                <div class="editor__container">
                    <div class="editor__header">
                        <span class="editor__ids-info">IDS File: xxxxxxxxxxxxxxx.ids</span>
                    </div>
                    <div class="editor__metadata">
                        <div class="editor__metadata-item">
                            <i class="fas fa-envelope editor__icon editor__icon--metadata"></i>
                            <span class="editor__metadata-value">example@gmail.com</span>
                        </div>
                        <div class="editor__metadata-item">
                            <i class="fas fa-calendar-alt editor__icon editor__icon--metadata"></i>
                            <span class="editor__metadata-value">April 1, 2024</span>
                        </div>
                        <div class="editor__metadata-item">
                            <i class="fas fa-flag editor__icon editor__icon--metadata"></i>
                            <span class="editor__metadata-value">Construction</span>
                        </div>
                        <div class="editor__metadata-item">
                            <i class="fas fa-code-branch editor__icon editor__icon--metadata"></i>
                            <span class="editor__metadata-value">Ver.1.0</span>
                        </div>
                    </div>
                    <div class="editor__body">
                        <div class="editor__gutter">
                            <button class="editor__button add-section"><i class="fa-solid fa-plus fa-flip-horizontal fa-xs"></i></button>
                            <button class="editor__button remove-section"><i class="fa-solid fa-trash fa-xs"></i></button>
                        </div>
                        <div class="content">
                            <div class="section">
                                <h2 class="">Requirement name:</h2>
                                <div class="spec-contents">
                                    <p class="section__editable description" contenteditable>Describe why the requirement is important to the project.</p>
                                    <p class="section__editable description" contenteditable>Provide instructions on who is responsible and how to achieve it.</p>
                                </div>
                                <h3>APPLIES TO:</h3>
                                <div class="applicables">
                                    <span class="section__editable facet" contenteditable>xxxxxxxxxxxxx</span>
                                </div>
                                <h3>REQUIREMENTS:</h3>
                                <div class="requirements">
                                    <span class="section__editable facet" contenteditable>yyyyyyyyyyyyy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
            </div>
          `;

		setUpEditorSideBar();
	});

	function setUpEditorSideBar() {
		// Function to update editor body height
		function updateEditorHeight() {
			const editorBody = document.querySelector(".editor");
			const sections = document.querySelectorAll(".section");
			let totalHeight = 0;
			sections.forEach((section) => {
				totalHeight += section.offsetHeight; // Add the height of each section
			});
			// Set the height of the editor body
			editorBody.style.height = totalHeight + "px";
		}

		const addSectionBtn = document.querySelector(".add-section");
		const removeSectionBtn = document.querySelector(".remove-section");
		const editorContent = document.querySelector(".content");

		// Function to add a new requirement
		function addSection() {
			const newSection = document.createElement("div");
			newSection.classList.add("section");
			newSection.innerHTML = `
                <div class="section__separator"></div>
                <h2 class="">Requirement name:</h2>
                <div class="spec-contents">
                    <p class="section__editable description" contenteditable>Describe why the requirement is important to the project.</p>
                    <p class="section__editable description" contenteditable>Provide instructions on who is responsible and how to achieve it.</p>
                </div>
                <h3>APPLIES TO:</h3>
                <div class="applicables">
                    <span class="section__editable facet" contenteditable>xxxxxxxxxxxxx</span>
                </div>
                <h3>REQUIREMENTS:</h3>
                <div class="requirements">
                    <span class="section__editable facet" contenteditable>yyyyyyyyyyyyy</span>
                </div>
            `;
			editorContent.appendChild(newSection);
			updateEditorHeight(); // Update editor height when a section is added
		}

		// Function to remove the last requirement
		function removeSection() {
			const sections = editorContent.querySelectorAll(".section");
			if (sections.length > 1) {
				editorContent.removeChild(sections[sections.length - 1]);
				updateEditorHeight(); // Update editor height when a section is removed
			}
		}

		addSectionBtn.addEventListener("click", addSection);
		removeSectionBtn.addEventListener("click", removeSection);
	}
}
