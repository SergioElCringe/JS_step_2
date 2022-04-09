export default {
    getModal(submissionResult) {
        return submissionResult ? `
        <div class="cool">
            <div>
                <span class="cool-icon">&#10003</span>
                <span>Successfully!</span>
            </div>
            <div>
                <p>Successfully! Wait, we will contact you.</p>
            </div>
        </div>` : `<div class="notcool">
        <div>
            <span class="notcool-icon">&#10006</span>
            <span>Error!</span>
        </div>
        <div>
            <p>Website error! Thy refreshing the page and thy again.</p>
        </div>
    </div>`;
    }
}