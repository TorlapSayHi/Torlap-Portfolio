import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

/** * Interface: กำหนดโครงสร้างข้อมูลของ Project
 * เพื่อให้ง่ายต่อการใช้งานและป้องกันความผิดพลาดในการพิมพ์ชื่อฟิลด์
 */
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
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App {
  protected readonly title = signal('my-portfolio-angular');
  /** *ส่วนรวบรวมข้อมูลผลงาน (Projects)
     */
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
      description: 'ระบบบริหารจัดการวิสาหกิจชุมชนท่องเที่ยวร่วมกับ NECTEC',
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
      year: '2024 - 2025',
      color: 'bg-orange-50 text-orange-600',
      hover: 'hover:text-orange-600',
      description: 'เครื่องมือวิเคราะห์ทำเลเพื่อขยายสาขาร่วมกับ MyOrder',
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
    },
    {
      title: 'Torlap Portfolio',
      company: '',
      year: '2026',
      color: 'bg-orange-50 text-orange-600',
      hover: 'hover:text-orange-600',
      description: 'เว็บไซต์ส่วนตัวของ Torlap Ritchai',
      tags: ['Angular', 'Tailwind CSS', 'TypeScript'],
      details: 'เว็บไซต์ส่วนตัวของ Torlap Ritchai ที่แสดงผลงานและประสบการณ์การทำงาน โดยใช้ Angular Tailwind-CSS TypeScript เพื่อสร้างประสบการณ์ผู้ใช้ที่ทันสมัยและตอบสนองได้ดี พร้อมดีไซน์ที่เรียบง่ายและใช้งานง่าย *เว็ปที่คุณกำลังดูอยู่ ณ ตอนนี้*',
      images: [
        'assets/images/torlap-cv.png',
        'assets/images/torlap-cv-mobile.png',
      ],
      currentImgIndex: 0
    }
  ];

  /** * ส่วนรวบรวมข้อมูลเกียรติบัตร (Certificates)
     */
  certificates = [
    {
      title: 'Data Analytics Foundation',
      issuer: 'Voxy',
      date: 'Jul 2025',
      image: 'assets/images/certificate/cer-voxy.png',
      description: 'พัฒนาทักษะภาษาอังกฤษเฉพาะทางสำหรับการสื่อสาร'
    },
    {
      title: 'Data Analytics Foundation',
      issuer: 'True digital academy',
      date: 'Jan 2025',
      image: 'assets/images/certificate/cer-data-analytics.png',
      description: 'ปูพื้นฐานการวิเคราะห์ข้อมูล 4 ระดับ และการสร้างวัฒนธรรมข้อมูล (Data Culture) เพื่อขับเคลื่อนองค์กรด้วยข้อมูลอย่างเป็นระบบ'
    },
    {
      title: 'Interpersonal Communication Skills in Workplace',
      issuer: 'Thai MOOC',
      date: 'Jan 2025',
      image: 'assets/images/certificate/cer-mooc-communication-skill.png',
      description: 'พัฒนาทักษะการสื่อสารระหว่างบุคคลและการทำงานร่วมกันในองค์กร เพื่อสร้างความสัมพันธ์ที่ดีและบรรลุเป้าหมายร่วมกัน.'
    },
    {
      title: 'Effective Presentation Technique',
      issuer: 'Thai MOOC',
      date: 'Jan 2025',
      image: 'assets/images/certificate/cer-mooc-eff-presentation.png',
      description: 'เรียนรู้เทคนิคการนำเสนออย่างมีประสิทธิภาพ ตั้งแต่การเตรียมเนื้อหา การเลือกสื่อ จนถึงการสื่อสารเพื่อจูงใจผู้ฟัง.'
    },
    {
      title: 'Creating a Basic Web Page with HTML and CSS',
      issuer: 'Thai MOOC',
      date: 'Jan 2025',
      image: 'assets/images/certificate/cer-mooc-html-css.png',
      description: 'พื้นฐานการพัฒนาเว็บไซต์ด้วยการโครงสร้าง HTML และการตกแต่งความสวยงามด้วย CSS เบื้องต้น.'
    },

    {
      title: 'Build Dynamic User Interfaces (UI) for Websites',
      issuer: 'Coursera',
      date: 'Dec 2024',
      image: 'assets/images/certificate/cer-build-dynamic.png',
      description: 'การออกแบบส่วนติดต่อผู้ใช้งานที่ตอบสนองได้ดี (Dynamic UI) เพื่อเพิ่มประสิทธิภาพการใช้งานบนเว็บไซต์.'
    },
    {
      title: 'Build Wireframes and Low-Fidelity Prototypes',
      issuer: 'Coursera',
      date: 'Dec 2024',
      image: 'assets/images/certificate/cer-build-wireframes.png',
      description: 'การวางโครงร่างเว็บไซต์ (Wireframes) และสร้างต้นแบบเบื้องต้นเพื่อทดสอบลำดับการใช้งาน (User Flow).'
    },
    {
      title: 'Conduct UX Research and Test Early Concepts',
      issuer: 'Coursera',
      date: 'Dec 2024',
      image: 'assets/images/certificate/cer-conduct-ux.png',
      description: 'กระบวนการวิจัยผู้ใช้งานและการทดสอบการใช้งาน (Usability Testing) เพื่อตรวจสอบและปรับปรุงแนวคิดการออกแบบ.'
    },
    {
      title: 'Create High-Fidelity Designs and Prototypes in Figma',
      issuer: 'Coursera',
      date: 'Dec 2024',
      image: 'assets/images/certificate/cer-create-high-fidelity.png',
      description: 'การสร้างงานออกแบบที่มีความละเอียดสูงและการทำ Prototype ที่ใช้งานได้จริงผ่านเครื่องมือ Figma.'
    },
    {
      title: 'Design a User Experience for Social Good & Prepare for Jobs',
      issuer: 'Coursera',
      date: 'Dec 2024',
      image: 'assets/images/certificate/cer-design-a-user.png',
      description: 'การประยุกต์ใช้การออกแบบ UX เพื่อสร้างผลกระทบเชิงบวกทางสังคมและการเตรียมความพร้อมสู่สายงานมืออาชีพ.'
    },
    {
      title: 'Foundations of User Experience (UX) Design',
      issuer: 'Coursera',
      date: 'Dec 2024',
      image: 'assets/images/certificate/cer-foundations-of-user.png',
      description: 'พื้นฐานสำคัญของการออกแบบ UX ครอบคลุมเรื่องการเข้าถึง (Accessibility) และการออกแบบที่คำนึงถึงความเท่าเทียม.'
    },
    {
      title: 'Start the UX Design Process Empathize Define and Ideate',
      issuer: 'Coursera',
      date: 'Dec 2024',
      image: 'assets/images/certificate/cer-start-the-ux.png',
      description: 'เริ่มต้นกระบวนการออกแบบด้วยการสร้างความเข้าใจผู้ใช้อย่างลึกซึ้ง (Empathize) การนิยามปัญหา และการระดมความคิดแก้ไข.'
    },
  ];


  heroImages: string[] = [
    'assets/images/torlap-img-5.jpg',
    'assets/images/getstudentimage.jpg',
    'assets/images/torlap-img-1.jpg',
    'assets/images/torlap-img-2.jpg',
    'assets/images/torlap-img-3.jpg',
    'assets/images/torlap-img-4.jpg',
  ];
  currentHeroIndex = signal(0);
  previousHeroIndex = signal(-1); // เก็บค่ารูปก่อนหน้าเพื่อทำ Animation ขาออก
  private touchStartX = 0;

  nextHero() {
    this.previousHeroIndex.set(this.currentHeroIndex());
    this.currentHeroIndex.update(val => (val + 1) % this.heroImages.length);
  }

  prevHero() {
    this.previousHeroIndex.set(this.currentHeroIndex());
    this.currentHeroIndex.update(val => (val - 1 + this.heroImages.length) % this.heroImages.length);
  }

  // ฟังก์ชันตรวจจับการปัด (Swipe) สำหรับมือถือ
  onHeroTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  onHeroTouchEnd(event: TouchEvent) {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = this.touchStartX - touchEndX;

    if (Math.abs(deltaX) > 50) { // ปัดมากกว่า 50px
      deltaX > 0 ? this.nextHero() : this.prevHero();
    }
  }
  selectedProject: any = null;
  isEmailCopied: boolean = false;

  /** * เปิด Modal แสดงรายละเอียดโปรเจค
     */
  openProject(project: any) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  /** * เลื่อนดูเกียรติบัตร (Certificates) แนวนอน
     */
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

  /** * เลื่อนดูโปรเจค (Projects) แนวนอน
     */
  scrollProjects(direction: number) {
    const container = document.getElementById('projectContainer');
    if (container) {
      // คำนวณระยะการเลื่อนตามขนาดหน้าจอ (Mobile จะเลื่อนเยอะกว่า PC ในแง่สัดส่วน)
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 432;
      container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  isShowScrollButton = false;
  /** * ตรวจจับการ Scroll หน้าจอ เพื่อแสดงปุ่ม Back to Top
     */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // ถ้าเลื่อนลงมามากกว่า 300px ให้แสดงปุ่ม
    this.isShowScrollButton = window.pageYOffset > 300;
  }
  /** * เลื่อนหน้าจอกลับไปด้านบนสุด
  */
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  /** * เลื่อนดูรูปถัดไปใน Modal
  */
  nextModalImage() {
    if (this.selectedProject) {
      if (this.selectedProject.currentImgIndex < this.selectedProject.images.length - 1) {
        this.selectedProject.currentImgIndex++;
      } else {
        this.selectedProject.currentImgIndex = 0;
      }
    }
  }

  /** * เลื่อนดูรูปก่อนหน้าใน Modal
  */
  prevModalImage() {
    if (this.selectedProject) {
      if (this.selectedProject.currentImgIndex > 0) {
        this.selectedProject.currentImgIndex--;
      } else {
        this.selectedProject.currentImgIndex = this.selectedProject.images.length - 1;
      }
    }
  }

  /** * ปิด Modal และรีเซ็ตค่าต่างๆ
     */
  closeProject() {
    if (this.selectedProject) {
      this.selectedProject.currentImgIndex = 0;
    }
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  /** * คัดลอกอีเมลลง Clipboard และแสดงสถานะแจ้งเตือน
  */
  copyEmail() {
    const email = 'torlap.ritchai@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      // เปลี่ยนสถานะเป็น Copied
      this.isEmailCopied = true;
      // หลังจาก 2 วินาที ให้กลับเป็นสถานะปกติ
      setTimeout(() => {
        this.isEmailCopied = false;
      }, 2000);
    }).catch(err => {
      console.error('Could not copy text: ', err);
      // ถ้า Browser ไม่รองรับ ให้เปิด App Mail แทน (Fallback)
      window.location.href = `mailto:${email}`;
    });
  }
}
