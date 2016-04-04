   #/bin/bash
   read -r x
   read -r y
   if ((x > y))
   then
       echo "X is greater than Y"
   elif ((x < y))
   then
       echo "X is less than Y"
 else
      echo "X is euql to Y"
fi

