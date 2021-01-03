# thomas-blog
A blogging and portfolio website made with Jekyll

# How to build site

    docker-compose run --rm build

# How to test site on local server

    docker-compose up test

Visit http://localhost:4000 to see test site

Use `ctrl-c` to stop local server

Finally kill the test container

    docker-compose down

# How to host static website behind a reverse proxy

Use linuxserver's swag docker image

https://fleet.linuxserver.io/

Follow instructions to properly setup swag container on their site.
e.g. domain name

Clone the repo into `<bind-mounted-swag-config-folder>/www/`

    git clone https://github.com/thomastran8/thomas-blog.git

Copy `thomasblog.subdomain.conf` to subdomain folder

    cp thomasblog.subdomain.conf <bind-mounted-swag-config-folder>/nginx/proxy-confs
