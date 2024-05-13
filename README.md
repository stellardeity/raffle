### FAQ
sudo docker exec -i ee2ee23718b2 psql -U postgres -d raffle < ./docs/raffle.dump
sudo docker cp ./docs/raffle.dump postgres:/raffle.dump