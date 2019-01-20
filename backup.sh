#!/bin/bash
DBNAME="user2159_kolodischi_new"
HOST='localhost'
USER='root'
PASSWD='nx2rMWedIL'
MYSQLFILENAME=`date +%F_%H-%M`-$DBNAME.sql
mysqldump --user=$USER --host=$HOST --password=$PASSWD $DBNAME > /var/www/kolodischi/data/www/backup/db/$MYSQLFILENAME
zip /var/www/kolodischi/data/www/backup/db/$MYSQLFILENAME.zip /var/www/kolodischi/data/www/backup/db/$MYSQLFILENAME
rm /var/www/kolodischi/data/www/backup/db/$MYSQLFILENAME
sudo rsync -au --exclude .git --exclude public/piximage /var/www/kolodischi/data/www/new.kolodischi.info/ /var/www/kolodischi/data/www/backup/files/