# ml-recommendation-engine-part2

## Frontend

Install nvm, node.js and npm

```bash
apt update
apt -y upgrade
apt -y install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
source ~/.bashrc
nvm install node 
npm install -y -g create-react-app react-scripts
```

```bash
npx create-react-app frontend
```

Copy frontend folder from this repo to your frontend folder

```bash
https://github.com/ray-chunkit-chung/freeecommercewebsite

### Dockerize frontend

1. Build dockerfile to your dockerhub account
2. In VSCode, right click Dockerfile > build image >> Name your image: ${dockerhub_id}/${image_name}
3. In VSCode, right click the image > Push >> Enter ${dockerhub_id}
4. Create new app service in azure to pull from your dockerhub
