import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-portfolio-angular');
projects = [
    {
      title: 'Torslate',
      company: 'Mini Project',
      year: '2025',
      color: 'bg-purple-50 text-purple-600',
      hover: 'hover:text-purple-600',
      description: 'โปรแกรมแปลภาษาบนหน้าจอแบบเรียลไทม์ด้วย AI (OCR)',
      tags: ['Google Cloud Vision', 'Translation API', 'Python', 'Google Cloud CLI'],
      details: 'พัฒนาเครื่องมือช่วยแปลภาษาจากภาพหน้าจอโดยใช้ Google Cloud APIs เพื่อการสแกนข้อความ (OCR) และแปลภาษาที่แม่นยำสูง ออกแบบระบบให้ใช้งานง่ายด้วยปุ่มคีย์ลัด (Hotkey) และหน้าต่างแสดงผลแบบลอย (Overlay) ที่สามารถปรับขนาดและเคลื่อนย้ายได้อิสระ จัดการระบบความปลอดภัยและการยืนยันตัวตนผ่าน Google Cloud CLI เพื่อให้มั่นใจในมาตรฐานความปลอดภัยของข้อมูล',
      images: [
        'assets/images/Torslate-1.png',
        'assets/images/Torslate-2.png',
        'assets/images/Torslate-3.png',
        'assets/images/Torslate-4.png',
        'assets/images/Torslate-5.png',
        'assets/images/Torslate-6.png',
        'assets/images/Torslate-7.png',
      ],
    },
    {
      title: 'Cultura',
      company: 'NECTEC',
      year: '2025 - Present',
      color: 'bg-blue-50 text-blue-600',
      hover: 'hover:text-blue-600',
      description: 'ระบบบริหารจัดการวิสาหกิจชุมชนท่องเที่ยวแบบครบวงจร',
      tags: ['React', 'Node.js', 'TypeScript', 'Prisma', 'Docker'],
      details: 'พัฒนาระบบ Full-Stack สำหรับจัดการการท่องเที่ยวชุมชนร่วมกับ NECTEC โดยใช้ React และ Tailwind CSS ในการสร้าง UI ที่รองรับการใช้งานทุกอุปกรณ์ (Responsive) ส่วนหลังบ้านเลือกใช้ Express.js ร่วมกับ TypeScript เพื่อให้ระบบมีความเสถียรและลดข้อผิดพลาดด้านชนิดข้อมูล (Type-safety) จัดการฐานข้อมูลผ่าน Prisma ORM เพื่อความรวดเร็วและปลอดภัย และใช้ Docker เพื่อจำลองสภาพแวดล้อมให้ระบบทำงานได้อย่างเสถียรในทุกขั้นตอน',
      images: [
        'assets/images/Cultura-1.png',
        'assets/images/Cultura-2.png',
        'assets/images/Cultura-3.png',
        'assets/images/Cultura-4.png',
        'assets/images/Cultura-5.png'
      ],
    },
    {
      title: 'My Location',
      company: 'MyOrder',
      year: '2025',
      color: 'bg-orange-50 text-orange-600',
      hover: 'hover:text-orange-600',
      description: 'เครื่องมือวิเคราะห์ทำเลเชิงกลยุทธ์เพื่อการขยายสาขาธุรกิจ',
      tags: ['Laravel', 'MySQL', 'Google Maps API', 'Tailwind CSS'],
      details: 'พัฒนาเว็บแอปพลิเคชันแบบ Full-Stack โดยใช้ PHP (Laravel) และ MySQL เพื่อช่วยในการตัดสินใจเชิงกลยุทธ์ขยายสาขา รวบรวมข้อมูลพิกัด GPS และยอดขายมาแสดงผลบนแผนที่โต้ตอบ (Interactive Maps) ผ่าน Google Maps API พร้อมระบบจัดการสิทธิ์ผู้ใช้งานที่รองรับหลายบทบาท (Sales, Supervisor, CEO) เพื่อให้สอดคล้องกับการดำเนินธุรกิจจริง ช่วยให้ผู้บริหารวิเคราะห์ศักยภาพของทำเลได้อย่างแม่นยำ',
      images: [
        'assets/images/My-Location-1.png',
      ],
    }
  ];


  certificates = [
    {
      title: 'Google Cloud Platform Essentials',
      issuer: 'Google Cloud',
      date: 'Dec 2025',
      image: 'https://images.unsplash.com/photo-1523240715634-d1c651177e4d?auto=format&fit=crop&q=80&w=800', // เปลี่ยนเป็น URL รูปจริงของคุณ
      description: 'Fundamental knowledge of GCP services and architecture.'
    },
    {
      title: 'Modern Web Development with React',
      issuer: 'Coursera',
      date: 'Oct 2025',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      description: 'Advanced React patterns and state management.'
    },
    {
      title: 'Full-Stack Development Boot Camp',
      issuer: 'Tech Academy',
      date: 'Aug 2025',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      description: 'Intensive training on Node.js, Express, and databases.'
    }
  ];

  selectedProject: any = null;

  openProject(project: any) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  scrollCertificates(direction: number) {
    const container = document.getElementById('certContainer');
    if (container) {
      const scrollAmount = 350;
      container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  isShowScrollButton = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isShowScrollButton = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
