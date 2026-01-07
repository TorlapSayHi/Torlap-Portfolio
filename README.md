# My Personal Portfolio (Angular)

This is my professional portfolio website built with **Angular** and **Tailwind CSS**, focused on showcasing my projects and software engineering skills.

## 🛠 Tech Stack
- **Frontend:** Angular 17+, TypeScript, Tailwind CSS
- **Deployment:** Docker, Nginx Reverse Proxy
- **SSL:** Let's Encrypt (Certbot)
- **Environment:** Linux VPS (Hostinger)

## 🚀 Features
- Fully responsive design
- Optimized for performance and SEO
- Containerized using Docker for consistent environments
- Secure connection with HTTPS

## 📦 Local Development
1. Clone the repository: `git clone <your-repo-link>`
2. Install dependencies: `npm install`
3. Run dev server: `ng serve`
4. Navigate to `http://localhost:4200/`

## 🐳 Deployment (Docker)
This project is deployed using a multi-stage Docker build:
```bash
# Build the image
docker build -t portfolio-image .

# remove container
docker rm -f torlap-new

# Run the container
docker run -d --name torlap-new -p 8080:80 portfolio-image
