# Stage 1: Build โปรเจกต์ Angular
FROM node:20-alpine as build-step
WORKDIR /app

# คัดลอกเฉพาะไฟล์ที่ใช้ลง Library ก่อน (ช่วยให้ Build ครั้งต่อไปเร็วขึ้น)
COPY package*.json ./
RUN npm install

# คัดลอกโค้ดทั้งหมดและเริ่ม Build
COPY . .
RUN npm run build

# Stage 2: นำไฟล์ไปวางบน Nginx
FROM nginx:alpine

# ลบไฟล์เริ่มต้นของ Nginx ออกก่อน
RUN rm -rf /usr/share/nginx/html/*

# คัดลอกไฟล์จาก Stage 1 (ตรวจสอบชื่อโฟลเดอร์ dist ให้ตรงกับในเครื่องคุณ)
# หาก Build ใน Docker แล้วพาธเปลี่ยน ลองใช้ /app/dist/my-portfolio-angular/browser
COPY --from=build-step /app/dist/my-portfolio-angular/browser /usr/share/nginx/html

# คัดลอกไฟล์ config ของ Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# คำสั่งสำคัญที่ต้องมีเพื่อให้ Nginx ทำงาน
CMD ["nginx", "-g", "daemon off;"]
