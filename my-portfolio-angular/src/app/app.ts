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
      description: 'Developed a real-time screen translator using AI-driven OCR for instant text detection.',
      tags: ['Google Cloud Vision', 'Translation API', 'Python', 'Google Cloud CLI'],
      details: 'Implemented a custom hotkey system and a resizable floating overlay for a seamless UI/UX. Managed Cloud project configurations and secure authentication via Google Cloud CLI.',
      image: 'https://images.unsplash.com/photo-1543165365-072e2ed0d45a?auto=format&fit=crop&q=80&w=800' // รูปตัวอย่าง
    },
    {
      title: 'Cultura',
      company: 'NECTEC',
      year: '2025 - Present',
      color: 'bg-blue-50 text-blue-600',
      hover: 'hover:text-blue-600',
      description: 'Community Enterprise Tourism Management System.',
      tags: ['React', 'Node.js', 'TypeScript', 'Prisma', 'Docker'],
      details: 'Built a scalable backend with Express.js and TypeScript, utilizing strict type-safety. Integrated Prisma to streamline database interactions and employed Docker for environment parity.',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Business Location Analysis',
      company: 'MyOrder',
      year: '2025',
      color: 'bg-orange-50 text-orange-600',
      hover: 'hover:text-orange-600',
      description: 'Strategic branch expansion tool using spatial data.',
      tags: ['Laravel', 'MySQL', 'Google Maps API'],
      details: 'Integrated Google Sign-In and Google Maps API to visualize spatial data and provide location-based insights. Implemented advanced data visualization by integrating GPS coordinates and sales data.',
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800'
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
