An investigation into dockerising a test suite using the `--exit-code-from` parameter of `docker-compose` so a CI build can fail if the tests fail.

```
$ ./run-tests.sh
$ echo $?
1
```

:fist:
