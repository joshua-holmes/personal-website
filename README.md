# Docker Template: React
Made by:<br>
Joshua Holmes<br>
[jpholmes.com](https://www.jpholmes.com)<br>
[github.com/joshua-holmes](https://github.com/joshua-holmes)<br>
[joshua.phillip.holmes@gmail.com](mailto:joshua.phillip.holmes@gmail.com)

## What Is This?
This project serves as a template that will allow you to toss your React (front-end only) application into a folder, configure a few settings, then quickly have a Dockerized app with it's own contained environment! From there, the app can be deployed on a VPS (Virtual Private Server) with almost no environment configuration. Using Docker also makes it easier to manage multiple apps running on the same VPS, which makes it very cost-effective when you have more than a few apps deployed. This template aims to make Docker as easy to setup as it is to use!

*Note: If you have a backend, see [Docker Template: Ruby on Rails](https://github.com/joshua-holmes/docker-template-ruby-on-rails), which is for a RoR backend with an optional React frontend.*

## Instructions: Speedy Version!
1. Copy and paste your React application (or make a new one) inside `app/` so that `app/` is the root directory of your React app.
2. Run `bin/dockerize -p <PORT_NUMBER>` in your project's local root directory where `<PORT_NUMBER>` is a port number you want your Docker Container to run on.
```
# (example) in your local repo, if you want to use port 3001, run:
bin/dockerize -p 3001
```
3. **Your app is dockerized!** Upload your project to GitHub and then pull it down onto your server. Read the "Operating" section below to learn how to launch your app once it is on the server.

## Instructions: Manual Version (good for learning)
1. Copy and paste your React application (or make a new one) inside `app/` so that `app/` is the root directory of your React app.
2. Open `docker-compose.yml` file in this project's root directory and change the first port number only, to specify which port you want your app to run on. For example change it to `"4000:3000"` if you want to run the app on port 4000. Do not change the second number. If you read the speedy version above, changing the port in this step is the only thing `bin/dockerize -p <PORT_NUMBER>` does in this template.
3. **Your app is dockerized!** Upload your project to GitHub and then pull it down onto your server. Read the "Operating" section below to learn how to launch your app once it is on the server.

## Operating
**You can run your app now!!** Make sure Docker and Docker Compose are installed on your server, then **run `sudo docker compose up --build -d`** from your project's root directory to build the image on your server and run your app. To see your app, **visit `http://<YOUR_SERVERS_PUBLIC_IP>:<PORT>`**. To take down your app, run `sudo docker compose down`. If your app is running and you've made changes to it and want to update the app on the server, I've included a useful script that will automatically bring your app offline, run `git pull`, rebuild the Docker image, and bring it back online, all in one command! **Simply run `bin/update-app`** from the root directory of your project.

***Warning:*** *When you run your app, the command line will tell you it is running on port 3000, even if this is not true. Just don't fall for it's tricks and visit the port you specified earlier. It is referring to the internal Docker port, not the external one which is the one you use when you visit your app.*

***Another warning:*** *You may need to enable the port on your server firewall before being able to view the app by directly typing in the IP address and port in your browser. If you use Nginx or Apache, changing firewall settings will not be necessary because all traffic typically comes in through port 80 or 443, then is redirected to your app's port internally.*

## Where To Go Next
If you are new to VPS server deployment and are wondering how you get your domain name connected, and more, here are some next steps to look into:
1. Buy a domain from Name Cheap or Google Domains. Usually this is around $10-$12 per year.
2. Go into the DNS settings and create an A record that points to your server's public IP address (the IP should be provided by your server platform provider. Usually it's in your web portal after you login.).
3. Install a routing software like Nginx to forward requests to the appropriate port that your app is running on.
4. Install Let's Encrypt on your server to install an SSL Certificate so your server can accept HTTPS and so your browser sees your site as safe.

---

## ***FREE*** Knowledge! (A.K.A. tips and FAQs)

### _Docker tips & commands_
#### _TIPS_
1. Docker commands should always be run with `sudo` because the Docker daemon is being run with admin priviledges. There is a way to get around it, but to me it just seems easier to use `sudo`. Feel free to Google around if that's the direction you want to go.
2. Some installations of Docker Compose come with an alias, allowing you to use the `docker-compose` command instead of `docker compose`. Others do not, so I use `docker compose` in this instructional set, as well as in my custom bash scripts.
3. A Docker Image is like a screenshot of your app with it's environment included. The image even includes it's own Linux distro and file system. However, since it is a screenshot, the original cannot be modified. If you make a change, you must take a new screenshot.
4. A Docker Container runs a Docker Image. It allows code to be stored in memory so your app can be dynamic. It is similar to a virtual machine, but instead of the environment being stored in the VM, it is stored in the image. Containers are much more performant than VMs.
5. A Docker Volume is a way of syncing data between a specified folder on your container with a folder on your local machine. The reason these are necessary is because, remember, data cannot be persisted to Docker Images, since images cannot be modified. Since this is the case, the Docker Container stores the data in memory and syncs it with a folder on the local machine, so when the docker is shut off, the data can be accessed next time a connected container is run. The best use for these volumes is to persist data in a database. In this project, the database in the Docker Container is syncing with our project folder `.docker/volumes/database/`. If this data is ever needed to be accessed in the future, that is where you can find it.
6. A Docker Network ties two or more Docker Containers together and allows them to interact with each other. In the example app included with this project, the PostgreSQL database is running in a container, and the RoR app is running in a seperate container. They are able to communicate with each other through the Docker Network.
7. Docker Compose is a solution for allowing you to configure Docker settings in a YAML file, instead of typing those settings in the command every time you run a container. For example, after specifying the port, environment variables, network, and more, the command to run my container might look like this: `sudo docker -p 3000:3000 ...` etc, etc. By placing my settings in a YAML file, Docker Compose can read the file and apply those settings automatically.
#### _COMMANDS_
_Note: When using `docker compose` commands, be sure you are in the root directory of the project you want to manipulate. Docker Compose uses the `docker-compose.yml` file in the root directory to know which settings to apply your commands to._
1. `sudo docker compose build` will build a docker image with your app in it and save it to a mysterious directory on your computer. Images _do not ever change_, so anytime you update your app, you must build a new image to replace the old. This command can be used for that. Everytime you build an image, it replaces the old automatically.
2. `sudo docker compose up` will take the image built from the directory you are in and run it on the port specified in the `docker-compose.yml` file! If you add the `--build` flag, it will build a new image first, then run that image. It essentailly functions like `sudo docker compose build` immediately followed by `sudo docker compose up`. If you add the `-d` flag, it runs your app in the background, so you don't need to stare at a terminal the whole time your app is up. My favorite command to use when updating my app on my server is `sudo docker compose up --build -d` because it builds my app, then runs it in the background.
3. `sudo docker compose down` will take your app offline.
4. `sudo docker ps` will show you all containers that are online and listening on one of your ports. `sudo docker ps -a` will show you all containers that are online _or_ offline.
5. `sudo docker images` will show all images saved on your system.
6. `sudo docker stop <CONTAINER_ID>` takes a container offline, using the container's ID.
7. `sudo docker rm <CONTAINER_ID>` deletes a container from your local storage. If you login to root using `su` and then typing your password, you can use `docker rm $(docker ps -aq)` to delete all containers on your system. Notice `sudo` is not used. That is because as root, you don't need `sudo` to elevate your privileges, since root already has highest privileges.
8. `sudo docker rmi <IMAGE_ID>` deletes an image from your local storage. _Before deleting images, make sure a container is not reliant on that image._ If you login to root using `su` and then typing your password, you can use `docker rmi $(docker images -aq)` to delete all images on your system. Notice `sudo` is not used here either.