# Stage 1: Build โปรเจกต์ Angular
FROM node:20-alpine as build-step
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: นำไฟล์ที่ Build เสร็จแล้วไปวางบน Nginx
FROM nginx:alpine
# Copy ไฟล์ที่ Build แล้ว (ตรวจสอบชื่อโฟลเดอร์ใน dist/ ให้ตรงกับโปรเจกต์)
COPY --from=build-step /app/dist/my-portfolio-angular/browser /usr/share/nginx/html
# Copy ไฟล์ config ของ Nginx ที่สร้างไว้
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]