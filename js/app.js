$('#flashMessage')
    .hide()
    .slideDown(1000)
    .delay(3000)
    .slideUp();

const title = "My First Blog Post";
const content = "This is my first blog post!";

$('#blogTitlePreview').text(title);
$('#blogContentPreview').text(content);