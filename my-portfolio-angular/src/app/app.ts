import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// กำหนดโครงสร้างข้อมูลของ Project
// เพื่อควบคุม type ของข้อมูลและลดข้อผิดพลาดในการใช้งาน
interface Project {
  title: string;
  company: string;
  year: string;
  color: string;
  hover: string;
  description: string;
  tags: string[];
  details: string;
  video?: string[];
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

// คลาสหลักของแอปพลิเคชัน ทำหน้าที่ควบคุม logic ทั้งหมดของหน้า
export class App {
  protected readonly title = signal('my-portfolio-angular');
  // ตัวแปรเก็บข้อมูลผลงานทั้งหมด
  // ใช้แสดงในส่วน Selected Projects และ Modal
  projects: Project[] = [
    // ข้อมูลของโปรเจกต์แต่ละชิ้น
    // ประกอบด้วยชื่อ บริษัท ปี เทคโนโลยี รายละเอียด รูป และวิดีโอ
    {
      title: 'Torslate',
      company: '',
      year: '2025',
      color: 'bg-purple-50 text-purple-600',
      hover: 'hover:text-purple-600',
      description: 'โปรแกรมแปลภาษาบนหน้าจอแบบเรียลไทม์ด้วย (OCR)',
      tags: ['Google Cloud Vision', 'Translation API', 'Python'],
      details: 'เครื่องมือแปลภาษาบนหน้าจอที่ผสานพลังจาก Google Cloud Vision และ Translation API เพื่อแปลข้อความที่คัดลอกไม่ได้แบบเรียลไทม์ มาพร้อมระบบ Floating Window ที่ปรับแต่งได้อิสระและสั่งงานผ่าน Hotkey ช่วยลดกำแพงภาษาในการใช้งานคอมพิวเตอร์ได้อย่างมีประสิทธิภาพ จัดการความปลอดภัยของระบบด้วย Google Cloud CLI',
      video: ['assets/videos/Torslate-video-demo.mp4'],
      images: [
        'assets/images/Torslate/Torslate-1.png',
        'assets/images/Torslate/Torslate-2.png',
        'assets/images/Torslate/Torslate-3.png',
        'assets/images/Torslate/Torslate-4.png',
        'assets/images/Torslate/Torslate-5.png',
        'assets/images/Torslate/Torslate-6.png',
        'assets/images/Torslate/Torslate-7.png',
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
      details: 'ระบบบริหารจัดการวิสาหกิจชุมชนท่องเที่ยวที่พัฒนาร่วมกับ NECTEC โดยใช้ React และ Express.js, TypeScript จุดเด่นคือระบบจัดการสิทธิ์ผู้ใช้งานแบบ 4 ระดับ และตัวระบบออกแบบให้ดูเรียบง่าย ใช้งานสะดวก และใช้ Docker เพื่อควบคุมสภาพแวดล้อมการทำงานให้เหมือนกันในทุกขั้นตอน',
      video: [
        'assets/videos/Cultura-video-demo-1.mp4',
        'assets/videos/Cultura-video-demo-2.mp4'
      ],
      images: [
        'assets/images/Cultura/Cultura-1.png',
        'assets/images/Cultura/Cultura-2.png',
        'assets/images/Cultura/Cultura-3.png',
        'assets/images/Cultura/Cultura-4.png',
        'assets/images/Cultura/Cultura-5.png',
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
      video: ['assets/videos/My-Location-video-demo.mp4'],
      images: [
        'assets/images/My-Location/My-Location-1.png',
        'assets/images/My-Location/My-Location-2.png',
        'assets/images/My-Location/My-Location-3.png',
        'assets/images/My-Location/My-Location-4.png',
        'assets/images/My-Location/My-Location-5.png',
        'assets/images/My-Location/My-Location-6.png',
        'assets/images/My-Location/My-Location-7.png',
        'assets/images/My-Location/My-Location-8.png',
        'assets/images/My-Location/My-Location-9.png',
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
    },
    {
      title: 'Torlap888',
      company: '',
      year: '2024',
      color: 'bg-orange-50 text-orange-600',
      hover: 'hover:text-orange-600',
      description: 'โปรเจคในรายวิชา OOP ตอนปี 1 มีมินิเกม 4 เกมให้เล่น',
      tags: ['Java', 'OOP'],
      details: `โปรเจกต์นี้เป็นการจำลอง "ระบบคาสิโน/อาร์เคดจำลอง" บนหน้าจอ Console ที่เขียนด้วยภาษา Java (OOP) โดยผู้เล่นจะได้รับบทเป็นคนที่มีบัญชีธนาคาร (Bank) ต้องบริหารจัดการเงินเพื่อนำไปเล่นเกมต่างๆ และทำกำไรจากการชนะเกม
      โปรเจกต์นี้ประกอบไปด้วย 4 มินิเกม ดังนี้:
       1.Random Number (เกมลอตเตอรี่),
       2.Guess the Hint (ทายคำศัพท์จากคำใบ้),
       3.Remember Number (เกมจำตัวเลข),
       4.Guess Number 0-100 (เกมทายเลขปริศนา)`,
      video: [
        'assets/videos/1randomNumber.mp4',
        'assets/videos/2rememberNumber.mp4',
        'assets/videos/3guessTheHint.mp4',
        'assets/videos/4guessTheNumber.mp4',
      ],
      images: [
        'assets/images/Torlap888/Logo-Torlap888.png',
        'assets/images/Torlap888/diagram-oop.png',
        'assets/images/Torlap888/welcome.jpg',
        'assets/images/Torlap888/quit.jpg',
        'assets/images/Torlap888/info.jpg',
        'assets/images/Torlap888/1stGame-1.jpg',
        'assets/images/Torlap888/1stGame-2.jpg',
        'assets/images/Torlap888/2ndGame-1.jpg',
        'assets/images/Torlap888/2ndGame-2.png',
        'assets/images/Torlap888/3rdGame-1.jpg',
        'assets/images/Torlap888/3rdGame-2.jpg',
        'assets/images/Torlap888/3rdGame-3.jpg',
        'assets/images/Torlap888/3rdGame-4.jpg',
        'assets/images/Torlap888/4thGame-1.jpg',
        'assets/images/Torlap888/4thGame-2.jpg',
        'assets/images/Torlap888/4thGame-3.jpg',
      ],
      currentImgIndex: 0
    },
    {
      title: 'Product Management System (PMS)',
      company: '',
      year: '2025',
      color: 'bg-orange-50 text-orange-600',
      hover: 'hover:text-orange-600',
      description: 'ระบบบริหารจัดการสินค้า พัฒนาด้วย Laravel ใช้สำหรับเพิ่ม แก้ไข ลบ และแสดงข้อมูลสินค้า พร้อมรองรับการจัดการรูปภาพผ่านเว็บอย่างสะดวกและเป็นระบบ',
      tags: ['Laravel', 'PHP', 'MySQL'],
      details: `ระบบนี้เป็นระบบบริหารจัดการสินค้า (Product Management System) พัฒนาด้วย Laravel Framework ใช้สำหรับเพิ่ม แก้ไข ลบ และแสดงข้อมูลสินค้าอย่างเป็นระบบ ผู้ดูแลสามารถจัดการข้อมูลสินค้าได้ผ่านหน้าเว็บที่ใช้งานง่าย รองรับการอัปโหลดและแสดงรูปภาพสินค้าแบบเรียลไทม์ ระบบถูกออกแบบให้ทำงานบนเว็บเซิร์ฟเวอร์ รองรับการใช้งานทั้งในองค์กรและบนอินเทอร์เน็ต ช่วยลดขั้นตอนการจัดการข้อมูลและเพิ่มความสะดวกในการดูแลสินค้า ที่พัฒนาเพื่อให้เว็บไซต์ Power Magnet Engineering **ได้รับการอนุญาติให้เผยแพร่ข้อมูลเกี่ยวกับบริษัทเรียบร้อย**`,
      video: [
        'assets/videos/pme-works-demo.mp4',
      ],
      images: [
        'assets/images/pms/LogoPME.png',
        'assets/images/pms/pms-1.png',
        'assets/images/pms/pms-2.png',
        'assets/images/pms/pms-3.png',
        'assets/images/pms/pms-4.png',
        'assets/images/pms/pms-5.png',
        'assets/images/pms/pms-6.png',
      ],
      currentImgIndex: 0
    }
  ];

  // ตัวแปรเก็บข้อมูลเกียรติบัตร
  // ใช้แสดงใน Section Certificates
  certificates = [
    // ข้อมูลเกียรติบัตรแต่ละใบ
    // ประกอบด้วยชื่อ ผู้ออก วันที่ รูป และคำอธิบาย
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

  // เก็บ path รูปสำหรับ Hero Image Slider
  heroImages: string[] = [
    'assets/images/torlap-img/torlap-img-5.jpg',
    'assets/images/torlap-img/getstudentimage.jpg',
    'assets/images/torlap-img/torlap-img-1.jpg',
    'assets/images/torlap-img/torlap-img-2.jpg',
    'assets/images/torlap-img/torlap-img-3.jpg',
    'assets/images/torlap-img/torlap-img-4.jpg',
  ];
  // ใช้เก็บ index รูป Hero ปัจจุบัน (Reactive)
  currentHeroIndex = signal(0);
  // ใช้เก็บ index รูปก่อนหน้า
  // เพื่อใช้ควบคุม animation ตอนเปลี่ยนรูป
  previousHeroIndex = signal(-1);
  // ใช้เก็บตำแหน่งเริ่มต้นของการ touch
  // สำหรับคำนวณ gesture การปัดบนมือถือ
  private touchStartX = 0;

  // ใช้เก็บทิศทางการเปลี่ยนรูป Hero
  heroDirection: 'next' | 'prev' = 'next';
  // ฟังก์ชันเปลี่ยนรูป Hero ไปภาพถัดไป
  // พร้อมบันทึกรูปก่อนหน้าเพื่อใช้ animation
  nextHero() {
    this.heroDirection = 'next'; // บอกว่ากำลังไปขวา → รูปเก่าเด้งออกซ้าย
    this.previousHeroIndex.set(this.currentHeroIndex());
    this.currentHeroIndex.update(val => (val + 1) % this.heroImages.length);
  }

  // ฟังก์ชันเปลี่ยนรูป Hero ไปภาพก่อนหน้า
  prevHero() {
    this.heroDirection = 'prev'; // บอกว่ากำลังกลับซ้าย → รูปเก่าเด้งออกขวา
    this.previousHeroIndex.set(this.currentHeroIndex());
    this.currentHeroIndex.update(val => (val - 1 + this.heroImages.length) % this.heroImages.length);
  }

  // ตรวจจับจุดเริ่มต้นการ touch
  // สำหรับรองรับการ swipe บนมือถือ
  onHeroTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  // ตรวจจับการสิ้นสุดการ touch
  // คำนวณทิศทางการปัดเพื่อเลื่อนรูป Hero
  onHeroTouchEnd(event: TouchEvent) {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = this.touchStartX - touchEndX;
    // ปัดมากกว่า 50px
    if (Math.abs(deltaX) > 50) {
      deltaX > 0 ? this.nextHero() : this.prevHero();
    }
  }
  // เก็บข้อมูลโปรเจกต์ที่ถูกเลือก
  // ใช้ควบคุมการเปิด/ปิด Modal
  selectedProject: any = null;
  // ใช้เก็บสถานะว่าคัดลอกอีเมลแล้วหรือยัง
  // เพื่อแสดงข้อความแจ้งเตือนใน UI
  isEmailCopied: boolean = false;

  // เปิด Modal แสดงรายละเอียดโปรเจกต์
  // และปิดการ scroll ของ body
  openProject(project: any) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  // เลื่อนรายการ Certificates แนวนอน
  // ใช้กับปุ่มเลื่อนซ้าย-ขวา
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

  // เลื่อนรายการ Projects แนวนอน
  // ปรับระยะเลื่อนตามขนาดหน้าจอ (Responsive)
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

  // ใช้ควบคุมการแสดงปุ่ม Scroll to Top
  isShowScrollButton = false;
  // ดัก event การ scroll ของหน้าจอ
  // เพื่อเช็คตำแหน่ง scroll
  @HostListener('window:scroll', [])
  // ตรวจสอบตำแหน่ง scroll
  // ถ้าเกิน 300px จะแสดงปุ่ม Back to Top
  onWindowScroll() {
    this.isShowScrollButton = window.pageYOffset > 300;
  }

  // เลื่อนหน้าจอกลับไปด้านบนสุดแบบ smooth
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // เลื่อนดูรูปหรือวิดีโอถัดไปใน Modal
  // รองรับทั้ง images และ video
  nextModalImage() {
    if (this.selectedProject) {
      // นับจำนวนวิดีโอที่มี (ถ้าไม่มีให้เป็น 0)
      const videoCount = this.selectedProject.video?.length || 0;
      const totalItems = this.selectedProject.images.length + videoCount;

      if (this.selectedProject.currentImgIndex < totalItems - 1) {
        this.selectedProject.currentImgIndex++;
      } else {
        this.selectedProject.currentImgIndex = 0;
      }
    }
  }

  // เลื่อนดูรูปหรือวิดีโอก่อนหน้าใน Modal
  prevModalImage() {
    if (this.selectedProject) {
      const videoCount = this.selectedProject.video?.length || 0;
      const totalItems = this.selectedProject.images.length + videoCount;

      if (this.selectedProject.currentImgIndex > 0) {
        this.selectedProject.currentImgIndex--;
      } else {
        this.selectedProject.currentImgIndex = totalItems - 1;
      }
    }
  }

  // ปิด Modal
  // รีเซ็ต index รูป และเปิด scroll ของ body กลับมา
  closeProject() {
    if (this.selectedProject) {
      this.selectedProject.currentImgIndex = 0;
    }
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  // คัดลอกอีเมลไปยัง Clipboard
  // แสดงสถานะ Copied และมี fallback สำหรับ browser ที่ไม่รองรับ
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
