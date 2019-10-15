#!/bin/sh
cd H:\projectFile\blogdemo\blog1\logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log