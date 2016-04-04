#!/bin/sh
read toEval
echo "scale = 3; $toEval" | bc -l
