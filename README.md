# thomas-blog
A blogging and portfolio website made with Jekyll, host using docker.

www.thomasmtran.com 

# How to build site

    docker-compose run --rm build

# How to test site on local server

    docker-compose up test

Visit http://localhost:4000 to see test site

Use `ctrl-c` to stop local server

Finally kill the test container

    docker-compose down

# How to host static website behind a reverse proxy

Use linuxserver's `swag` docker image

https://fleet.linuxserver.io/

Follow site instructions to properly setup `swag` container.

e.g. domain name, subdomains

Clone the repo into `<bind-mounted-swag-config-folder>/www/`

    git clone https://github.com/thomastran8/thomas-blog.git

Copy `thomasblog.subdomain.conf` to subdomain folder

    cp thomasblog.subdomain.conf <bind-mounted-swag-config-folder>/nginx/proxy-confs

Restart swag docker container

    docker restart swag
