#!/bin/bash

cd "$(dirname ${BASH_SOURCE[0]})"

compose_opts="-f docker-compose.yml -p tei-web"

case $1 in
    shell)
	set -- exec app bash
	;;
    up)
	trap "docker-compose ${compose_opts} down" SIGINT
	;;
esac

docker-compose ${compose_opts} "$@"
