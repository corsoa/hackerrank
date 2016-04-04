#!/bin/bash
read sideone
read sidetwo
read sidethree

if [ "$sideone" = "$sidetwo" ] && [ "$sidetwo" = "$sidethree" ]
then
  triType="EQUILATERAL"
elif [ "$sideone" = "$sidetwo" ] || [ "$sideone" = "$sidethree" ] || [ "$sidetwo" = "$sidethree" ]
then
  triType="ISOSCELES"
else
  triType="SCALENE"
fi

echo $triType
