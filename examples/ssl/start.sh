#!/bin/sh -e
#
# Use ./genkeycert.sh before running!
#
# Demonstrates usage of SSL support in the executable(1) binary.
#

../../bin/spark --ssl-key privatekey.pem --ssl-crt certificate.pem
