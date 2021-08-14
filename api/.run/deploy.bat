cd C:\Users\Arno\.m2\repository\me\tram13\api\0.0.1-SNAPSHOT || exit
rename api-0.0.1-SNAPSHOT.jar spring.jar
move spring.jar D:\Documents\Projects\webserver-backend\api\build\spring.jar
del api-0.0.1-SNAPSHOT.pom
del maven-metadata-local.xml
del _remote.repositories
ssh nas@tram13.me "sudo update webserver"