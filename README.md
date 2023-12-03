# ml-recommendation-engine-part2

https://raychung-test1-website.azurewebsites.net/

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

<https://github.com/ray-chunkit-chung/freeecommercewebsite>

### Dockerize frontend

1. Build dockerfile to your dockerhub account
2. In VSCode, right click Dockerfile > build image >> Name your image: ${DOCKERHUB_ID}/${image_name}
3. In VSCode, right click the image > Push >> Enter ${DOCKERHUB_ID}
4. Create new app service in azure to pull from your dockerhub

### Personalized content

Products in the following div are personalized for each user

```html
<div class="product-main">
...
    <div class="showcase">

        <div class="showcase-banner">

            <img src="assets/images/products/jacket-3.jpg" alt="Mens Winter Leathers Jackets" width="300" class="product-img default" />
            <img src="assets/images/products/jacket-4.jpg" alt="Mens Winter Leathers Jackets" width="300" class="product-img hover" />

            <p class="showcase-badge">15%</p>

            <div class="showcase-actions">

                <button class="btn-action">
                    <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="btn-action">
                    <ion-icon name="eye-outline"></ion-icon>
                </button>

                <button class="btn-action">
                    <ion-icon name="repeat-outline"></ion-icon>
                </button>

                <button class="btn-action">
                    <ion-icon name="bag-add-outline"></ion-icon>
                </button>

            </div>

        </div>

        <div class="showcase-content">

            <a href="#" class="showcase-category">jacket</a>

            <a href="#">
                <h3 class="showcase-title">Mens Winter Leathers Jackets</h3>
            </a>

            <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
            </div>

            <div class="price-box">
                <p class="price">$48.00</p>
                <del>$75.00</del>
            </div>

        </div>

    </div>
...
</div>
```

## Backend

```bash
npx express-generator backend --view ejs
cd backend
npm install express cors axios dotenv webpack webpack-cli webpack-stream gulp gulp-zip
npm install nodemon --save-dev
```

Remove most of the template code and add the following files

- server.js
- webpack.config.js

### Dockerize backend

<https://medium.com/bb-tutorials-and-thoughts/how-to-build-and-deploy-mern-stack-on-azure-container-instances-1fea781d2002>

<https://medium.com/bb-tutorials-and-thoughts/how-to-build-mern-stack-for-production-1462e70a35cb>

<https://github.com/bbachi/mern-stack-example/tree/main>

```bash
source .env
docker build -t ${DOCKERHUB_ID}/ecommerce-website:latest .
docker run -d -p 3080:80 --name website raychung/ecommerce-website:latest
docker push ${DOCKERHUB_ID}/ecommerce-website:latest 
```
