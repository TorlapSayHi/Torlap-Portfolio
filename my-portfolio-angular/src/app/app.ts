import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  company: string;
  year: string;
  color: string;
  hover: string;
  description: string;
  tags: string[];
  details: string;
  images: string[];
  currentImgIndex: number;
}
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-portfolio-angular');
  projects: Project[] = [
    {
      title: 'Torslate',
      company: '',
      year: '2025',
      color: 'bg-purple-50 text-purple-600',
      hover: 'hover:text-purple-600',
      description: 'โปรแกรมแปลภาษาบนหน้าจอแบบเรียลไทม์ด้วย AI (OCR)',
      tags: ['Google Cloud Vision', 'Translation API', 'Python'],
      details: 'เครื่องมือแปลภาษาบนหน้าจอที่ผสานพลัง AI จาก Google Cloud Vision และ Translation API เพื่อแปลข้อความที่คัดลอกไม่ได้แบบเรียลไทม์ มาพร้อมระบบ Floating Window ที่ปรับแต่งได้อิสระและสั่งงานผ่าน Hotkey ช่วยลดกำแพงภาษาในการใช้งานคอมพิวเตอร์ได้อย่างมีประสิทธิภาพ จัดการความปลอดภัยของระบบด้วย Google Cloud CLI',
      images: [
        'assets/images/Torslate-1.png',
        'assets/images/Torslate-2.png',
        'assets/images/Torslate-3.png',
        'assets/images/Torslate-4.png',
        'assets/images/Torslate-5.png',
        'assets/images/Torslate-6.png',
        'assets/images/Torslate-7.png',
      ],
      currentImgIndex: 0
    },
    {
      title: 'Cultura',
      company: 'NECTEC',
      year: '2025 - Present',
      color: 'bg-blue-50 text-blue-600',
      hover: 'hover:text-blue-600',
      description: 'ระบบบริหารจัดการวิสาหกิจชุมชนท่องเที่ยวร่วมกับ NECTEC [cite: 178, 179]',
      tags: ['React', 'Node.js', 'TypeScript', 'Prisma', 'Docker'],
      details: 'ระบบบริหารจัดการวิสาหกิจชุมชนท่องเที่ยวที่พัฒนาร่วมกับ NECTEC โดยใช้ React และ Node.js (TypeScript) จุดเด่นคือระบบจัดการสิทธิ์ผู้ใช้งานแบบ 4 ระดับ และโครงสร้างหลังบ้านที่รองรับการทำงานซับซ้อนได้อย่างเสถียร ตัวระบบออกแบบมาเป็น Responsive เพื่อให้ใช้งานได้ทุกอุปกรณ์ และใช้ Docker เพื่อควบคุมสภาพแวดล้อมการทำงานให้เหมือนกันในทุกขั้นตอน',
      images: [
        'assets/images/Cultura-1.png',
        'assets/images/Cultura-2.png',
        'assets/images/Cultura-3.png',
        'assets/images/Cultura-4.png',
        'assets/images/Cultura-5.png',
      ],
      currentImgIndex: 0
    },
    {
      title: 'My Location',
      company: 'MyOrder',
      year: '2025',
      color: 'bg-orange-50 text-orange-600',
      hover: 'hover:text-orange-600',
      description: 'เครื่องมือวิเคราะห์ทำเลเพื่อขยายสาขาร่วมกับ MyOrder [cite: 186, 187]',
      tags: ['Laravel', 'MySQL', 'Google Maps API'],
      details: 'แอปพลิเคชัน Full-Stack สำหรับวิเคราะห์พิกัดเชิงธุรกิจที่ช่วยในการตัดสินใจขยายสาขาของ MyOrder โดยใช้ Google Maps API เพื่อแสดงผลยอดขายและตำแหน่ง GPS ลงบนแผนที่แบบ Interactive ระบบช่วยให้นักวิเคราะห์มองเห็นภาพรวมของพื้นที่ที่มีศักยภาพได้อย่างชัดเจน พัฒนาด้วย Laravel และ MySQL พร้อมระบบ Google Sign-In เพื่อความสะดวกและปลอดภัย',
      images: [
        'assets/images/My-Location-1.png',
        'assets/images/My-Location-2.png',
        'assets/images/My-Location-3.png',
        'assets/images/My-Location-4.png',
        'assets/images/My-Location-5.png',
        'assets/images/My-Location-6.png',
        'assets/images/My-Location-7.png',
        'assets/images/My-Location-8.png',
        'assets/images/My-Location-9.png',
      ],
      currentImgIndex: 0
    }
  ];


  certificates = [
    {
      title: 'Data Analytics Foundation',
      issuer: 'Voxy',
      date: 'Jul 2025',
      image: 'assets/images/certificate/cer-voxy.png',
      description: 'asdasddddasdsdasdas.'
    },
    {
      title: 'Data Analytics Foundation',
      issuer: 'True digital academy',
      date: 'Jan 2025',
      image: 'assets/images/certificate/cer-data-analytics.png',
      description: 'การวิเคราะห์ข้อมูล 4 ระดับ: ศึกษาความแตกต่างของ Descriptive, Diagnostic, Predictive และ Prescriptive Analytics การสร้างวัฒนธรรมข้อมูล: เรียนรู้องค์ประกอบ 4 ด้าน (Mindset, Skillset, Toolset, Dataset) เพื่อขับเคลื่อนองค์กรด้วยข้อมูล กรณีศึกษาและเครื่องมือ: ทำความเข้าใจการประยุกต์ใช้ข้อมูลในธุรกิจ (เช่น Banking, Healthcare) และความแตกต่างระหว่าง Spreadsheet กับ BI.'
    },
    {
      title: 'Interpersonal Communication Skills in Workplace',
      issuer: 'Thai MOOC',
      date: 'Jan 2025',
      image: 'assets/images/certificate/cer-mooc-communication-skill.png',
      description: 'asdasddddasdsdasdas.'
    },
    {
      title: 'Effective Presentation Technique',
      issuer: 'Thai MOOC',
      date: 'Jan 2025',
      image: 'assets/images/certificate/cer-mooc-eff-presentation.png',
      description: 'asdasddddasdsdasdas.'
    },
    {
      title: 'Creating a Basic Web Page with HTML and CSS',
      issuer: 'Thai MOOC',
      date: 'Jan 2025',
      image: 'assets/images/certificate/cer-mooc-html-css.png',
      description: 'asdasddddasdsdasdas.'
    },

    {
      title: 'Build Dynamic User Interfaces (UI) for Websites',
      issuer: 'Coursera',
      date: 'Dec 2024',
      image: 'assets/images/certificate/cer-build-dynamic.png',
      description: 'asdasddddasdsdasdas.'
    },
    {
      title: 'Build Wireframes and Low-Fidelity Prototypes',
      issuer: 'Coursera',
      date: 'Dec 2024',
      image: 'assets/images/certificate/cer-build-wireframes.png',
      description: 'asdasddddasdsdasdas.'
    },
    {
      title: 'Conduct UX Research and Test Early Concepts',
      issuer: 'Coursera',
      date: 'Dec 2024',
      image: 'assets/images/certificate/cer-conduct-ux.png',
      description: 'asdasddddasdsdasdas.'
    },
    {
      title: 'Create High-Fidelity Designs and Prototypes in Figma',
      issuer: 'Coursera',
      date: 'Dec 2024',
      image: 'assets/images/certificate/cer-create-high-fidelity.png',
      description: 'asdasddddasdsdasdas.'
    },
    {
      title: 'Design a User Experience for Social Good & Prepare for Jobs',
      issuer: 'Coursera',
      date: 'Dec 2024',
      image: 'assets/images/certificate/cer-design-a-user.png',
      description: 'asdasddddasdsdasdas.'
    },
    {
      title: 'Foundations of User Experience (UX) Design',
      issuer: 'Coursera',
      date: 'Dec 2024',
      image: 'assets/images/certificate/cer-foundations-of-user.png',
      description: 'asdasddddasdsdasdas.'
    },
    {
      title: 'Start the UX Design Process Empathize Define and Ideate',
      issuer: 'Coursera',
      date: 'Dec 2024',
      image: 'assets/images/certificate/cer-start-the-ux.png',
      description: 'asdasddddasdsdasdas.'
    },
  ];

  selectedProject: any = null;

  openProject(project: any) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
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

  nextModalImage() {
    if (this.selectedProject) {
      if (this.selectedProject.currentImgIndex < this.selectedProject.images.length - 1) {
        this.selectedProject.currentImgIndex++;
      } else {
        this.selectedProject.currentImgIndex = 0;
      }
    }
  }

  prevModalImage() {
    if (this.selectedProject) {
      if (this.selectedProject.currentImgIndex > 0) {
        this.selectedProject.currentImgIndex--;
      } else {
        this.selectedProject.currentImgIndex = this.selectedProject.images.length - 1;
      }
    }
  }

  closeProject() {
    if (this.selectedProject) {
      this.selectedProject.currentImgIndex = 0;
    }
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }
}
