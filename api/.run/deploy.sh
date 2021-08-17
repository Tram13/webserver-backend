rename api-0.0.1-SNAPSHOT.jar spring.jar
move spring.jar D:\Documents\Projects\webserver-backend\api\build\spring.jar
del api-0.0.1-SNAPSHOT.pom
del maven-metadata-local.xml
del _remote.repositories
cd D:\Documents\Projects\webserver-backend\api
git add build/spring.jar
git commit -m "updated build"
git push
ssh nas@tram13.me "sudo update webserver"