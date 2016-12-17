#!/bin/bash
if letsencrypt renew | grep -q 'certs are not due for renewal yet'; then
  echo 'Certification renewal not yet required.'
else
  echo 'Certificates were renewed . . . restarting server with renewed certs.'
  /user/local/bin/pm2 delete cyoag
  /user/local/bin/pm2 start npm --name cyoag -- start
fi
