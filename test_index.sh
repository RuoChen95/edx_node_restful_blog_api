curl "http://localhost:3000/profile"

curl -H "Content-Type:application/json" -X POST -d '{"username": "admin", "email":" ", "url": " ", "bug": 3}' localhost:3000/profile

sleep 1

curl -H "Content-Type:application/json" -X POST -d '{"username": "admin", "email":"kkkk", "url": "1", "bug": 3}' localhost:3000/profile

curl "http://localhost:3000/profile"