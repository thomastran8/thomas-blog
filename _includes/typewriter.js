<script>
var title = document.getElementById('title');

var siteName = {{ page.title | jsonify }};

if (siteName == null)
{
    var typewriter = new Typewriter(title, {
        loop: true});

    typewriter.typeString('Hello world!')
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
else
{
    var typewriter = new Typewriter(title, {
        loop: false});

    var directory = '/';

    {% if page.path contains '_posts' %}
        {% unless page.path contains '_pages' %}
            directory += "Posts/";
        {% endunless %}
    {% endif %}

    if (/\s/g.test(siteName))
        siteName = '\'' + siteName + '\'';
    
    typewriter.typeString(directory+siteName)
        .start();
}
</script>