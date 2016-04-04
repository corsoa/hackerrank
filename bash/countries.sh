#!/bin/bash
COUNTRIES=(Namibia Nauru Nepal Netherlands NewZealand Nicaragua Niger Nigeria NorthKorea Norway)
for ((i=0; i<${#COUNTRIES[*]}; i++));
do
  if ((i >= 3 && i <=7))
  then
    echo -n ${COUNTRIES[i]}
    echo -n ' '
  fi
done
