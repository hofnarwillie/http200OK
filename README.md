# http200ok

[![Actions Status](https://github.com/hofnarwillie/http200OK/workflows/CI/badge.svg)](https://github.com/hofnarwillie/http200OK/actions)

A test HTTP server listening at port 80 and returning 200 OK on all requests. 

https://hub.docker.com/repository/docker/hofnarwillie/http200ok

## Usage

```
docker run -it \
  -e HOST=0.0.0.0 \
  -p 8080:80 \
  hofnarwillie/http200ok
```

> `HOST` defaults to `localhost`
