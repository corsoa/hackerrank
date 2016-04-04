#!/bin/bash
read res
if [ "$res" = "y" ] || [ "$res" = "Y" ]
then
  echo 'YES'
else
  echo 'NO'
fi
