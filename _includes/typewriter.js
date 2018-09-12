<script>
var title = document.getElementById('page-title');

var siteName = {{ page.title | jsonify }};

if (siteName == null)
{
    if ({{ page.path | jsonify }} == "404.html")
    {
        var typewriter = new Typewriter(title, {
            loop: false});

        typewriter.typeString("/404").start();
    }
    else
    {
        var typewriter = new Typewriter(title, {
            loop: true});

        typewriter.typeString("Hello world!")
            .pauseFor(2500)
            .deleteAll()
            .typeString("I'm a game developer")
            .pauseFor(2500)
            .deleteChars(14)
            .typeString('web developer')
            .pauseFor(2500)
            .deleteChars(13)
            .typeString('linux tinkerer')
            .pauseFor(2500)
            .deleteChars(14)
            .typeString('problem solver')
            .pauseFor(2500)
            .deleteAll()
            .start();
    }
}
else
{
    var typewriter = new Typewriter(title, {
        loop: false});

    var directory = '/';

    {% if page.path contains '_posts/posts/' %}
        directory += "Posts/";
    {% elsif page.path contains '_posts/projects/' %}
        directory += "Projects/";
    {% endif %}

    // Enclose in quotes if string has  whitespace
    if (/\s/g.test(siteName))
        siteName = '\'' + siteName + '\'';
    
    typewriter.typeString(directory+siteName)
        .start();
}
</script>