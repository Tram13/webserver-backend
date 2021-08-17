cd /mnt/c/Users/Arno/.m2/repository/me/tram13/api/0.0.1-SNAPSHOT || exit
mv api-0.0.1-SNAPSHOT.jar spring.jar
mv spring.jar /mnt/d/Documents/Projects/webserver-backend/api/build/spring.jar
rm api-0.0.1-SNAPSHOT.pom
rm maven-metadata-local.xml
rm _remote.repositories
cd /mnt/d/Documents/Projects/webserver-backend/api || exit
git add build/spring.jar
git commit -m "updated build"
