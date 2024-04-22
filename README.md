### FAQ
sudo docker exec -i 33110cd6ebb2 psql -U postgres -d raffle < ./docs/raffle.dump
sudo docker cp ./docs/raffle.dump postgres:/raffle.dump