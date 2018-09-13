<script src="https://unpkg.com/typewriter-effect@2.1.1/dist/core.js"></script>
<script>
var title = document.getElementById('page-title');

var siteName = {{ page.title | jsonify }};

if (siteName == null)   // home page
{
    if ({{ page.path | jsonify }} == "404.html")
    {
        var typewriter = new Typewriter(title, {
            loop: false,
            delay: 50});

        typewriter.typeString("/404").start();
    }
    else
    {
        var typewriter = new Typewriter(title, {
            loop: false,
            delay: 50});

        typewriter.typeString("/Home").start();
    }
}
else    // either posts or projects
{
    var typewriter = new Typewriter(title, {
        loop: false,
        delay: 50});

    var directory = '/';

    {% if page.path contains '_posts/posts/' %}
        directory += "Posts/";
    {% elsif page.path contains '_posts/projects/' %}
        directory += "Projects/";
    {% endif %}

    // Enclose in quotes if string has  whitespace
    if (/\s/g.test(siteName))
        siteName = '\'' + siteName + '\'';
    
    typewriter.typeString(directory+siteName).start();
}
</script>
