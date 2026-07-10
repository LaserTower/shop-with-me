git fetch
git reset --hard origin/main
docker compose up build_front
docker compose up -d nginx
