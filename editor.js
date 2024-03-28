export function setupEditor(element) {
    const sectionToHide = document.getElementById("entry");
    const editorBody = document.querySelector(".editor");

    element.addEventListener("click", () => {
        sectionToHide.classList.toggle("hidden");
        document.querySelector("#app").innerHTML = `
            <div class="editor">			
                <nav> 
                    <ul class="control-buttons">
                        <li><button class="control-button"><i class="fa-solid fa-arrow-up-from-bracket icon"></i>Upload</button></li>
                        <li><button class="control-button"><i class="fa-solid fa-download icon"></i>Save</button></li>
                        <li><button class="control-button"><i class="fa-brands fa-audible icon"></i>Audit</button></li>
                        <li><button class="control-button"><i class="fa-solid fa-xmark icon"></i>Close</button></li>
                    </ul>	
                </nav>
                <div class="editor-container">
                    <div class="editor-header">
                        <span class="ids-info">IDS File: xxxxxxxxxxxxxxx.ids</span>
                    </div>
                    <div class="metadata">
                      <div class="metadata-item">
                        <i class="fas fa-envelope icon icon--metadata"></i>
                        <span class="metadata-value">example@gmail.com</span>
                      </div>
                      <div class="metadata-item">
                        <i class="fas fa-calendar-alt icon icon--metadata"></i>
                        <span class="metadata-value">May 1, 2023</span>
                      </div>
                      <div class="metadata-item">
                        <i class="fas fa-flag icon icon--metadata"></i>
                        <span class="metadata-value">Construction</span>
                      </div>
                      <div class="metadata-item">
                        <i class="fas fa-code-branch icon icon--metadata"></i>
                        <span class="metadata-value">Ver.1.0</span>
                      </div>
                    </div>
                    <div class="editor-body">
                      <div class="editor-gutter">
                        <button class="editor-button add-section"><i class="fa-solid fa-plus fa-flip-horizontal fa-2xs"></i></button>
                        <button class="editor-button remove-section"><i class="fa-solid fa-trash fa-2xs"></i></button>
                      </div>
                      <div>
                        <div class="sections">
                            <div class="section">
                                <h2 class="">Requirement name:</h2>
                                <div class="spec-contents">
                                    <p class="editable editable--description" contenteditable>Describe why the requirement is important to the project.</p>
                                    <p class="editable editable--description" contenteditable>Provide instructions on who is responsible and how to achieve it.</p>
                                </div>
                                <h3>APPLIES TO:</h3>
                                <div class="applicables">
                                    <span class="editable editable--facet" contenteditable>xxxxxxxxxxxxx</span>
                                </div>
                                <h3>REQUIREMENTS:</h3>
                                <div class="requirements">
                                    <span class="editable editable--facet" contenteditable>yyyyyyyyyyyyy</span>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
          `;

        setUpEditorBar();
    });

    function setUpEditorBar() {
        // Function to update editor body height
        function updateEditorHeight() {
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
        const editorContent = document.querySelector(".sections");

        function addSection() {
            const newSection = document.createElement("div");
            newSection.classList.add("section");
            newSection.innerHTML = `
          <div class="section-separator"></div>
          <h2 class="">Requirement name:</h2>
          <div class="spec-contents">
              <p class="editable editable--description" contenteditable>Describe why the requirement is important to the project.</p>
              <p class="editable editable--description" contenteditable>Provide instructions on who is responsible and how to achieve it.</p>
          </div>
          <h3>APPLIES TO:</h3>
          <div class="applicables">
              <span class="editable editable--facet" contenteditable>xxxxxxxxxxxxx</span>
          </div>
          <h3>REQUIREMENTS:</h3>
          <div class="requirements">
              <span class="editable editable--facet" contenteditable>yyyyyyyyyyyyy</span>
          </div>
        `;
            editorContent.appendChild(newSection);
            updateEditorHeight(); // Update editor height when a section is added
        }

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
