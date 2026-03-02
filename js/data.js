/**
 * ============================================================
 *  RESUME DATA — Chỉnh sửa file này để cập nhật CV
 *  Hỗ trợ: tiếng Anh (en) và tiếng Việt (vi)
 * ============================================================
 */

var RESUME_DATA = {

  /* ── THÔNG TIN CÁ NHÂN ── */
  profile: {
    name:     { en: "NGUYEN QUANG <span>TUNG</span>",  vi: "NGUYỄN QUANG <span>TÙNG</span>" },
    role:     { en: "AI / ML Engineer",                vi: "AI / ML Engineer" },
    phone:    "***.***.****",
    email:    "quangtung.work73@gmail.com",
    address:  { en: "Thu Duc District — Ho Chi Minh City", vi: "Quận Thủ Đức — TP. Hồ Chí Minh" },
    bio: {
      en: `I am very passionate about the field of <strong>Artificial Intelligence</strong> and have invested
           significant time and effort exploring it deeply. I continuously update my knowledge, practice,
           and sharpen my programming skills to implement meaningful AI/ML projects and solve real-world problems.`,
      vi: `Tôi rất đam mê lĩnh vực <strong>Trí Tuệ Nhân Tạo</strong> và đã dành nhiều thời gian, nỗ lực để học hỏi
           và khám phá sâu hơn về lĩnh vực này. Tôi liên tục cập nhật kiến thức mới, thực hành
           và nâng cao kỹ năng lập trình để hiện thực hóa các ý tưởng và dự án AI/ML có giá trị thực tiễn.`,
    },
    avatar: "img/avatar-square2.jpg",
    cvLinks: {
      vi: "https://drive.google.com/file/d/1jDliin3fOYL3oNd6EcVEmRyRoXCPg8W9/view?usp=sharing",
      en: "https://drive.google.com/file/d/1ivL0z7RnDSmPI-gvFlnEMf_Y-nnqRxe0/view?usp=sharing",
    },
  },

  /* ── MẠNG XÃ HỘI ── */
  socials: [
    { icon: "fab fa-github",      url: "https://github.com/nguyenquangtung",          label: "GitHub"   },
    { icon: "fab fa-gitlab",      url: "https://gitlab.com/TungNguyen73",             label: "GitLab"   },
    { icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/tungnguyen73/",   label: "LinkedIn" },
    { icon: "fab fa-youtube",     url: "https://www.youtube.com/@tungquangnguyen731", label: "YouTube"  },
    { icon: "fab fa-facebook-f",  url: "https://www.facebook.com/nqt7301/",           label: "Facebook" },
  ],

  /* ── KỸ NĂNG ── */
  skills: [
    {
      category: { en: "Programming Languages", vi: "Ngôn ngữ lập trình" },
      badges: [
        { label: "Python",      logo: "python",              color: "3776AB" },
        { label: "C",           logo: "C",                   color: "A8B9CC" },
        { label: "C++",         logo: "cplusplus",           color: "00599C" },
        { label: ".Net",        logo: "dotnet",              color: "512BD4" },
        { label: "HTML5",       logo: "html5",               color: "E34F26" },
        { label: "CSS3",        logo: "css3",                color: "1572B6" },
        { label: "MySQL",       logo: "mySQL",               color: "4479A1" },
        { label: "SQL_Server",  logo: "microsoftsqlserver",  color: "CC2927" },
      ],
      items: [
        {
          name: "Python",
          desc: {
            en: "Data collection & preprocessing, building/training ML models, evaluation, visualization, deployment.",
            vi: "Thu thập & tiền xử lý dữ liệu, xây dựng/huấn luyện mô hình ML, đánh giá, trực quan hóa, triển khai.",
          },
        },
        {
          name: "C# (.Net)",
          desc: {
            en: "Desktop software, basic programming tasks.",
            vi: "Lập trình phần mềm desktop, thực hiện các tác vụ cơ bản.",
          },
        },
        {
          name: "HTML / CSS",
          desc: {
            en: "Responsive web design, BEM methodology.",
            vi: "Thiết kế web responsive chuẩn, phương pháp luận BEM.",
          },
        },
        {
          name: "Database",
          desc: {
            en: "SQL queries, MySQL / Microsoft SQL Server.",
            vi: "Truy vấn SQL, MySQL / Microsoft SQL Server.",
          },
        },
      ],
    },
    {
      category: { en: "Frameworks / Libraries", vi: "Framework / Thư viện" },
      badges: [
        { label: "TensorFlow",   logo: "tensorflow",  color: "FF6F00" },
        { label: "Keras",        logo: "keras",        color: "D00000" },
        { label: "OpenCV",       logo: "opencv",       color: "5C3EE8" },
        { label: "Pandas",       logo: "pandas",       color: "150458" },
        { label: "Scikit--learn",logo: "scikitlearn",  color: "F7931E" },
        { label: "Flask",        logo: "flask",        color: "ffffff" },
      ],
      items: [
        {
          name: "Keras / TensorFlow",
          desc: {
            en: "Model design, training, evaluation, fine-tuning, data preprocessing, deployment, and optimization.",
            vi: "Thiết kế kiến trúc mô hình, huấn luyện, đánh giá, tinh chỉnh, tiền xử lý dữ liệu, triển khai và tối ưu.",
          },
        },
        {
          name: "Flask",
          desc: {
            en: "Build APIs for AI/ML models, request handling, security and performance optimization.",
            vi: "Xây dựng API cho mô hình AI/ML, xử lý request, bảo mật, tối ưu hiệu năng.",
          },
        },
        {
          name: "OpenCV",
          desc: {
            en: "Image/video processing, feature extraction, classification models, real-world deployment.",
            vi: "Xử lý ảnh/video, trích xuất đặc trưng, xây dựng mô hình phân loại, nhận diện và triển khai thực tế.",
          },
        },
        {
          name: "Pandas",
          desc: {
            en: "Data manipulation, analysis, normalization, statistics, and mining.",
            vi: "Xử lý, phân tích, chuẩn hóa dữ liệu, thống kê và khai thác dữ liệu trong AI/ML.",
          },
        },
        {
          name: "Scikit-learn",
          desc: {
            en: "Preprocessing, training, classification, regression, clustering, feature extraction.",
            vi: "Tiền xử lý, huấn luyện, phân loại, hồi quy, phân cụm, trích xuất đặc trưng.",
          },
        },
        {
          name: "Matplotlib / Plotlib",
          desc: {
            en: "Data visualization, graphs, model result analysis.",
            vi: "Trực quan hóa dữ liệu, vẽ đồ thị, phân tích kết quả mô hình.",
          },
        },
      ],
    },
    {
      category: { en: "Tools & Platforms", vi: "Công cụ & Nền tảng" },
      badges: [
        { label: "VS_Code",      logo: "visual-studio-code", color: "007ACC" },
        { label: "Google_Colab", logo: "googlecolab",        color: "F9AB00" },
        { label: "Jupyter",      logo: "jupyter",            color: "F37626" },
        { label: "Git",          logo: "git",                color: "F05032" },
        { label: "GitHub",       logo: "github",             color: "ffffff" },
        { label: "Anaconda",     logo: "anaconda",           color: "44A833" },
      ],
      items: [
        {
          name: "VS Code",
          desc: { en: "Debug, extensions, Docker basics.", vi: "Debug, extensions, Docker cơ bản." },
        },
        {
          name: "Google Colab / Jupyter",
          desc: {
            en: "ML workflows, model building, data analysis and visualization.",
            vi: "Quy trình ML, xây dựng mô hình, phân tích và trực quan hóa dữ liệu.",
          },
        },
        {
          name: "Git / GitHub / GitLab / Sourcetree",
          desc: {
            en: "Source control, branching strategies, code review.",
            vi: "Quản lý source code, chiến lược branch, code review.",
          },
        },
        {
          name: "Agile / Scrum",
          desc: {
            en: "Sprint planning, Trello, Slack, Skype.",
            vi: "Sprint planning, Trello, Slack, Skype.",
          },
        },
      ],
    },
    {
      category: { en: "Others", vi: "Khác" },
      badges: [],
      items: [
        {
          name: "English",
          desc: {
            en: "Intermediate — Listening, Speaking, Reading, Writing.",
            vi: "Trung cấp — Nghe, Nói, Đọc, Viết.",
          },
        },
        {
          name: null,
          desc: {
            en: "Quick adaptability to Agile/Scrum environments.",
            vi: "Khả năng thích nghi nhanh với môi trường Agile/Scrum.",
          },
        },
        {
          name: "Soft Skills",
          desc: {
            en: "Teamwork, curiosity-driven learning, time management.",
            vi: "Làm việc nhóm, chủ động học hỏi, quản lý thời gian.",
          },
        },
      ],
    },
  ],

  /* ── DỰ ÁN ── */
  projects: [
    {
      title:  { en: "Camera Calibration",     vi: "Camera Calibration" },
      tech:   "OpenCV · Python · PyPI",
      date:   { en: "April 2024 — June 2024", vi: "04/2024 — 06/2024" },
      links: [
        { label: { en: "Source Code", vi: "Source Code" }, icon: "fab fa-github",   url: "https://github.com/nguyenquangtung/Camera_Calibration" },
        { label: { en: "PyPI Package", vi: "PyPI Package" }, icon: "fas fa-box-open", url: "https://pypi.org/project/TH-camera-calibration/" },
      ],
      desc: {
        en: "Built and published a Python package on PyPI for camera calibration (lens distortion removal), improving accuracy for computer-vision applications.",
        vi: "Xây dựng và phát hành package Python lên PyPI để hiệu chỉnh camera (loại bỏ biến dạng thấu kính), giúp nâng cao độ chính xác cho các ứng dụng thị giác máy tính.",
      },
    },
    {
      title:  { en: "AI Chess & AI Chinese Chess — Robot Arm Interaction", vi: "AI Cờ Vua & AI Cờ Tướng — Tương tác với Robot Arm" },
      tech:   "YOLOv8 · Arduino · Robotics",
      date:   { en: "Aug 2023 — Dec 2023", vi: "08/2023 — 12/2023" },
      links: [
        { label: { en: "Demo: Chess",   vi: "Demo: Cờ Vua"   }, icon: "fab fa-youtube", url: "https://youtu.be/7EVB89qOXaM?si=-G3MY66mkipP_fBe" },
        { label: { en: "Demo: Xiangqi", vi: "Demo: Cờ Tướng" }, icon: "fab fa-youtube", url: "https://youtube.com/shorts/JhGkF8fEN1g?si=yWoF7oWUL2kUH6PH" },
      ],
      desc: {
        en: "Combined image processing (YOLOv8), Arduino, and robotics to build an interactive chess system where a robot arm plays Chess and Chinese Chess against human opponents in real-time.",
        vi: "Kết hợp xử lý ảnh (YOLOv8), Arduino và robotics để xây dựng hệ thống chơi cờ tương tác, trong đó cánh tay robot đánh cờ vua và cờ tướng với người chơi theo thời gian thực.",
      },
    },
    {
      title:  { en: "Driver Drowsiness Detection System", vi: "Hệ thống phát hiện tài xế buồn ngủ" },
      tech:   "CNN · OpenCV · Keras · TensorFlow",
      date:   { en: "Feb 2023 — April 2023", vi: "02/2023 — 04/2023" },
      links: [
        { label: { en: "Source Code", vi: "Source Code" }, icon: "fab fa-github",  url: "https://github.com/nguyenquangtung/DL_Driver-drowsiness-detection.git" },
        { label: { en: "Demo",        vi: "Demo"        }, icon: "fab fa-youtube", url: "https://youtu.be/X8ZFH_fZsIo" },
      ],
      desc: {
        en: "Trained a CNN model on open/closed eye datasets. Used OpenCV to capture live camera feed and classify each frame in real-time to detect driver drowsiness and trigger alerts.",
        vi: "Huấn luyện mô hình CNN phân loại mắt mở/nhắm. Dùng OpenCV thu hình từ camera trực tiếp và phân loại từng frame theo thời gian thực để phát hiện buồn ngủ và cảnh báo.",
      },
    },
    {
      title:  { en: "Chatbot", vi: "Chatbot" },
      tech:   "Keras Sequential · Flask · NLP",
      date:   { en: "Aug 2022 — Dec 2022", vi: "08/2022 — 12/2022" },
      links: [
        { label: { en: "Source Code", vi: "Source Code" }, icon: "fab fa-github",  url: "https://github.com/nguyenquangtung/ML-Chatbox.git" },
        { label: { en: "Demo",        vi: "Demo"        }, icon: "fab fa-youtube", url: "https://youtu.be/MSysQp4dc1I" },
      ],
      desc: {
        en: "NLP-based chatbot using tokenizer + label encoder (sklearn), a Sequential Keras neural network, and a Flask API. Deployed via HTML/CSS/JavaScript front-end.",
        vi: "Chatbot dựa trên NLP (tokenizer + label encoder của sklearn), mạng nơ-ron Sequential Keras và Flask API. Triển khai giao diện người dùng bằng HTML/CSS/JavaScript.",
      },
    },
    {
      title:  { en: "Human Skeleton Estimation", vi: "Ước tính bộ xương người" },
      tech:   "MediaPipe · CNN MobileNet · cvzone",
      date:   { en: "Feb 2022 — June 2022", vi: "02/2022 — 06/2022" },
      links: [
        { label: { en: "Source Code", vi: "Source Code" }, icon: "fab fa-github",  url: "https://github.com/nguyenquangtung/DIP-Human-Skeleton-Estimating.git" },
        { label: { en: "Demo",        vi: "Demo"        }, icon: "fab fa-youtube", url: "https://youtu.be/DQVGjCHT1J4" },
      ],
      desc: {
        en: "Real-time human pose estimation using MediaPipe and CNN MobileNet. Also supports hand tracking, face detection, and face mesh via cvzone library.",
        vi: "Ứng dụng ước tính tư thế người theo thời gian thực sử dụng MediaPipe và CNN MobileNet. Hỗ trợ nhận diện bàn tay, khuôn mặt và lưới khuôn mặt qua thư viện cvzone.",
      },
    },
    {
      title:  { en: "The Band — Static Website", vi: "The Band — Website tĩnh" },
      tech:   "HTML · CSS · JavaScript",
      date:   { en: "June 2022 — July 2022", vi: "06/2022 — 07/2022" },
      links: [
        { label: { en: "Source Code", vi: "Source Code" }, icon: "fab fa-github",          url: "https://github.com/nguyenquangtung/UI-Web-The-Band.git" },
        { label: { en: "Live Demo",   vi: "Live Demo"   }, icon: "fas fa-external-link-alt", url: "https://ui-web-the-band.vercel.app/" },
      ],
      desc: {
        en: "A responsive static website for a music band, built with plain HTML, CSS, and JavaScript.",
        vi: "Website tĩnh responsive cho một ban nhạc, được xây dựng bằng HTML, CSS và JavaScript thuần.",
      },
    },
  ],

  /* ── KINH NGHIỆM ── */
  experience: [
    {
      company: { en: "i-Soft Joint Stock Company",            vi: "Công ty Cổ phần i-Soft" },
      infoUrl: "https://i-soft.com.vn/",
      position: { en: "AI / Computer Vision Engineer",        vi: "AI / Computer Vision Engineer" },
      date:     { en: "02/2024 — Present",                    vi: "02/2024 — Hiện tại" },
      evalUrl:  null,
      desc: {
        en: "Full-time AI/CV Engineer. Working on computer vision projects, R&D tasks, and integrating AI solutions into production systems.",
        vi: "Kỹ sư AI/CV toàn thời gian. Tham gia các dự án thị giác máy tính, R&D và tích hợp giải pháp AI vào hệ thống thực tế.",
      },
    },
    {
      company: { en: "SVN Automation (Sophic Automation)",    vi: "Công ty SVN Automation (Sophic Automation)" },
      infoUrl: "https://svnautomation.com/",
      position: { en: "AI / Computer Vision Intern",          vi: "Thực tập sinh AI / Computer Vision" },
      date:     { en: "08/2023 — 12/2023",                    vi: "08/2023 — 12/2023" },
      evalUrl:  "https://drive.google.com/file/d/1vd0iMz5V-0zz1_WxLj_czNVBnpw956sM/view?usp=sharing",
      evalLabel:{ en: "evaluation form", vi: "phiếu đánh giá" },
      desc: {
        en: "Computer vision intern in the R&D Department. Researched AI Computer Vision, Embedded Software, and Software Applications. Contributed to real projects controlling robot arms.",
        vi: "Thực tập sinh thị giác máy tính tại phòng R&D. Nghiên cứu AI Computer Vision, Embedded Software, Software Application. Tham gia dự án thực tế điều khiển cánh tay robot.",
      },
    },
    {
      company: { en: "TMA Solutions Company",                 vi: "Công ty TMA Solutions" },
      infoUrl: "https://www.tmasolutions.com/",
      position: { en: "AI / Computer Vision Intern",          vi: "Thực tập sinh AI / Computer Vision" },
      date:     { en: "03/2023 — 06/2023",                    vi: "03/2023 — 06/2023" },
      evalUrl:  "https://drive.google.com/file/d/1bUV5jV6N-Jl9px__51hLIMi3fSIY_OUH/view?usp=sharing",
      evalLabel:{ en: "evaluation form", vi: "phiếu đánh giá" },
      desc: {
        en: "Intern in the \"Artificial Intelligence Innovation\" room. Researched SOTA models (YOLO), contributed to real projects, and developed self-directed research and problem-solving skills.",
        vi: "Thực tập tại phòng \"Artificial Intelligence Innovation\". Nghiên cứu mô hình SOTA (YOLO), tham gia dự án thực tế, rèn luyện kỹ năng tự học và giải quyết vấn đề.",
      },
    },
    {
      company: { en: "Faculty of High Quality Training — HCMc UTE", vi: "Khoa Đào tạo Chất lượng cao — ĐH SPKT TP.HCM" },
      infoUrl: "https://fhq.hcmute.edu.vn/",
      position: { en: "Teaching Assistant",                   vi: "Trợ giảng (Teaching Assistant)" },
      date:     { en: "02/2021 — 05/2023",                    vi: "02/2021 — 05/2023" },
      evalUrl:  null,
      desc: {
        en: "Teaching assistant for \"Statistical Probability and Applications for Engineers.\" Supported students in rebuilding foundational knowledge and solving problems.",
        vi: "Trợ giảng môn \"Xác suất thống kê và Ứng dụng cho Kỹ sư.\" Hỗ trợ sinh viên ôn lại kiến thức nền tảng và giải quyết bài tập.",
      },
    },
    {
      company: { en: "THÊM SAI GON ULTRASONICS CO., LTD",    vi: "Công ty TNHH THÊM SÀI GÒN ULTRASONICS" },
      infoUrl: "https://www.google.com/search?q=Them+sai+gon+Ultrasonic",
      position: { en: "Core Technician & Technology Assistant", vi: "Kỹ thuật viên & Hỗ trợ Công nghệ" },
      date:     { en: "05/2020 — 05/2022",                    vi: "05/2020 — 05/2022" },
      evalUrl:  null,
      desc: {
        en: "Permanent staff. Managed digital operations, communication, material management, customer care, and maintenance of industrial ultrasonic heating systems.",
        vi: "Nhân viên chính thức. Xử lý vấn đề kỹ thuật số, quản lý vật tư, chăm sóc khách hàng, lắp đặt và bảo trì hệ thống siêu âm công nghiệp.",
      },
    },
  ],

  /* ── HỌC VẤN ── */
  education: [
    {
      school:  { en: "Ho Chi Minh City University of Technical Education (HCMC UTE)", vi: "Đại học Sư phạm Kỹ thuật TP. Hồ Chí Minh (HCMC UTE)" },
      major:   { en: "Software Engineering", vi: "Công nghệ Phần mềm" },
      icon:    "fas fa-book",
      date:    { en: "07/2019 — 12/2023",    vi: "07/2019 — 12/2023" },
    },
    {
      school:  { en: "Nguyen Du Specialized High School, Đắk Lắk", vi: "Trường THPT Chuyên Nguyễn Du, Đắk Lắk" },
      major:   { en: "Specialized: Physics", vi: "Chuyên: Vật lý" },
      icon:    "fas fa-atom",
      date:    { en: "2016 — 2019",          vi: "2016 — 2019" },
    },
  ],

  /* ── CUỘC THI ── */
  competitions: [
    {
      title: "🏆 AWS DeepRacer League 2023",
      desc: {
        en: "<strong>Top 2</strong> Vietnam Student Ranking &nbsp;·&nbsp; <strong>Top 10%</strong> Asia Pacific Ranking",
        vi: "<strong>Top 2</strong> Bảng xếp hạng sinh viên Việt Nam &nbsp;·&nbsp; <strong>Top 10%</strong> Bảng xếp hạng Châu Á - Thái Bình Dương",
      },
      certUrl:   "https://drive.google.com/file/d/1QmdfOxvJBmb9indzbbTK3kPoDEkYmWqS/view?usp=sharing",
      certLabel: { en: "View Certificate →", vi: "Xem chứng chỉ →" },
      date:      "03/2023",
    },
  ],

  /* ── CHỨNG CHỈ ── */
  certifications: [
    {
      label: "Machine Learning Specialization — Stanford & DeepLearning.AI (Coursera)",
      url:   "https://coursera.org/share/f173e4381ce7ea8b319d2cabe44541e0",
    },
    {
      label: "Foundational C# with Microsoft — freeCodeCamp",
      url:   "https://www.freecodecamp.org/certification/NguyenQuangTung/foundational-c-sharp-with-microsoft",
    },
    {
      label: "Software Development with Agile Scrum — Axon Active",
      url:   "https://verified.sertifier.com/en/verify/32138525036931/?ref=email",
    },
    {
      label: { en: "Teaching Assistant Skill — HCMc UTE", vi: "Kỹ năng Trợ giảng — ĐH SPKT TP.HCM" },
      url:   "https://drive.google.com/file/d/1zjiT1vctpta1w0QFWT_MZphgPBmSs73h/view?usp=sharing",
    },
    {
      label: "Google Cloud ACE",
      children: [
        { label: "Big Data and Machine Learning Fundamentals — Google Cloud", url: "https://drive.google.com/file/d/1oqvtYnX-81nNHIIMRZUKllRUPUNqHT7E/view?usp=sharing" },
        { label: "Fundamentals Core Infrastructure — Google Cloud",          url: "https://drive.google.com/file/d/1EPAkpCCNWCe14IserW7-uRTDiOZIPY5m/view?usp=sharing" },
      ],
    },
    {
      label: "HackerRank Certificates",
      children: [
        { label: "SQL (Basic) — HackerRank",      url: "https://www.hackerrank.com/certificates/09495e205c27" },
        { label: "SQL (Intermediate) — HackerRank", url: "https://www.hackerrank.com/certificates/e86c5942eb70" },
        { label: "Python (Basic) — HackerRank",   url: "https://www.hackerrank.com/certificates/6a96d048f9dc" },
      ],
    },
  ],
};
