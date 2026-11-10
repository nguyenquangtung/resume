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
    role:     { en: "AI Engineer · Computer Vision & Edge AI", vi: "AI Engineer · Computer Vision & Edge AI" },
    // phone:    "***.***.****",
    phone:    "037.667.4647",
    email:    "quangtung.work73@gmail.com",
    address:  { en: "Thu Duc District — Ho Chi Minh City", vi: "Quận Thủ Đức — TP. Hồ Chí Minh" },
    bio: {
      en: `AI Engineer focused on <strong>Computer Vision</strong> and <strong>Edge AI</strong>. I train models with
           PyTorch/YOLO, optimize them with ONNX/TensorRT, and deploy them on <strong>NVIDIA Jetson</strong> for real-time
           production use: license plate OCR, industrial inspection with HIKROBOT/COGNEX smart cameras, and robot guidance.
           I also build <strong>LLM applications</strong> (local Qwen, Gemini API, FastAPI), such as an on-premise chatbot
           that answers factory OEE questions.`,
      vi: `AI Engineer tập trung vào <strong>Computer Vision</strong> và <strong>Edge AI</strong>. Tôi huấn luyện mô hình bằng
           PyTorch/YOLO, tối ưu với ONNX/TensorRT và triển khai trên <strong>NVIDIA Jetson</strong> chạy thời gian thực trong
           sản xuất: OCR biển số xe, kiểm tra ngoại quan công nghiệp với smart camera HIKROBOT/COGNEX và dẫn đường robot.
           Tôi cũng phát triển <strong>ứng dụng LLM</strong> (Qwen chạy local, Gemini API, FastAPI), ví dụ chatbot nội bộ
           trả lời các câu hỏi về chỉ số OEE của nhà máy.`,
    },
    highlights: [
      { number: "2.5+",  label: { en: "Years in AI & CV",       vi: "Năm kinh nghiệm AI & CV" } },
      { number: "Jetson", label: { en: "Orin · Nano · TensorRT", vi: "Orin · Nano · TensorRT" } },
      { number: "Top 2", label: { en: "AWS DeepRacer VN",        vi: "AWS DeepRacer VN" } },
      { number: "AOI",   label: { en: "HIKROBOT · COGNEX",       vi: "HIKROBOT · COGNEX" } },
    ],
    // status: {
    //   en: "Open to Opportunities · AI & Computer Vision",
    //   vi: "Sẵn sàng đón nhận cơ hội mới · AI & Computer Vision",
    // },
    status: null,
    avatar: "img/avatar-square2.jpg",
    cvLinks: {
      vi: "https://drive.google.com/file/d/1f4Qm2soKO4Q06PXGCURteL3yQzeIdxpj/view?usp=sharing",
      en: "https://drive.google.com/file/d/1Bu0ef_gwbhGyUAgAg3yLXdtEZkS4Sn5o/view?usp=sharing",
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
      id: "vision",
      category: { en: "Computer Vision & Deep Learning", vi: "Thị giác máy tính & Deep Learning" },
      icon: "fas fa-camera",
      badges: [
        { label: "PyTorch",      logo: "pytorch",            color: "EE4C2C" },
        { label: "YOLO",         logo: "yolo",               color: "00FFFF" },
        { label: "OpenCV",       logo: "opencv",             color: "5C3EE8" },
        { label: "TensorFlow",   logo: "tensorflow",         color: "FF6F00" },
        { label: "Keras",        logo: "keras",              color: "D00000" },
        { label: "MediaPipe",    logo: "google",             color: "4285F4" },
        { label: "Smart_Camera", logo: "camerasecurity",     color: "06B6D4" },
      ],
      items: [
        {
          name: "Deep Learning (PyTorch / YOLO)",
          highlight: true,
          desc: {
            en: "Dataset preparation, training and fine-tuning detection/classification models (YOLO, CNN, MobileNet) with PyTorch; evaluation with mAP, precision/recall and confusion matrices.",
            vi: "Chuẩn bị dữ liệu, huấn luyện và fine-tune mô hình phát hiện/phân loại (YOLO, CNN, MobileNet) bằng PyTorch; đánh giá bằng mAP, precision/recall và confusion matrix.",
          },
        },
        {
          name: "OCR & License Plate Recognition",
          highlight: true,
          desc: {
            en: "Two-stage pipelines (plate detection, then character recognition) running in real time on camera streams, including preprocessing for skewed, blurred and low-light images.",
            vi: "Pipeline 2 bước (phát hiện biển số, nhận dạng ký tự) chạy thời gian thực trên luồng camera, kèm tiền xử lý cho ảnh nghiêng, mờ và thiếu sáng.",
          },
        },
        {
          name: "Smart Camera (HIKROBOT, COGNEX)",
          highlight: true,
          desc: {
            en: "Industrial machine vision setup & programming with HIKROBOT (MVS) & COGNEX (In-Sight / VisionPro): surface defect inspection (AOI), barcode/QR reading, dimension measurement, OCR and robot guidance.",
            vi: "Cấu hình, tối ưu nguồn sáng/thấu kính và lập trình camera HIKROBOT (MVS) & COGNEX (In-Sight / VisionPro): kiểm tra lỗi ngoại quan (AOI), đọc barcode/QR, đo kích thước, OCR và dẫn đường robot arm.",
          },
        },
        {
          name: "OpenCV & Image Processing",
          desc: {
            en: "Image/video processing, feature extraction, camera calibration (lens distortion removal) and object tracking on manufacturing lines.",
            vi: "Xử lý ảnh/video, trích xuất đặc trưng, hiệu chỉnh camera (loại bỏ méo thấu kính) và bám vết đối tượng trên dây chuyền sản xuất.",
          },
        },
      ],
    },
    {
      id: "edge",
      category: { en: "Edge AI & Model Optimization", vi: "Edge AI & Tối ưu mô hình" },
      icon: "fas fa-microchip",
      badges: [
        { label: "NVIDIA_Jetson", logo: "nvidia",            color: "76B900" },
        { label: "TensorRT",      logo: "nvidia",            color: "76B900" },
        { label: "ONNX",          logo: "onnx",              color: "ffffff" },
        { label: "Docker",        logo: "docker",            color: "2496ED" },
        { label: "Linux",         logo: "linux",             color: "FCC624" },
      ],
      items: [
        {
          name: "NVIDIA Jetson (Nano / Orin)",
          highlight: true,
          desc: {
            en: "Deploying computer vision models on Jetson Nano and Jetson Orin for real-time inference at the edge, close to the camera and without cloud dependency.",
            vi: "Triển khai mô hình thị giác máy tính trên Jetson Nano và Jetson Orin, suy luận thời gian thực ngay tại thiết bị, không phụ thuộc cloud.",
          },
        },
        {
          name: "ONNX → TensorRT",
          highlight: true,
          desc: {
            en: "Exporting PyTorch models to ONNX and building TensorRT engines to cut latency and raise FPS on edge GPUs.",
            vi: "Chuyển mô hình PyTorch sang ONNX và build TensorRT engine để giảm độ trễ, tăng FPS trên GPU của thiết bị edge.",
          },
        },
      ],
    },
    {
      id: "llm",
      category: { en: "LLM & Generative AI", vi: "LLM & Generative AI" },
      icon: "fas fa-comments",
      badges: [
        { label: "Qwen_(local)",  logo: "alibabacloud",       color: "FF6A00" },
        { label: "Gemini_API",    logo: "googlegemini",       color: "8E75B2" },
        { label: "FastAPI",       logo: "fastapi",            color: "009688" },
      ],
      items: [
        {
          name: "Local LLM (Qwen)",
          highlight: true,
          desc: {
            en: "Running open-source LLMs on-premise so factory data never leaves the internal network; built a chatbot that answers OEE (Overall Equipment Effectiveness) questions from production data.",
            vi: "Chạy LLM mã nguồn mở on-premise để dữ liệu nhà máy không ra ngoài mạng nội bộ; xây dựng chatbot trả lời câu hỏi về chỉ số OEE từ dữ liệu sản xuất.",
          },
        },
        {
          name: "LLM API Integration (Gemini)",
          desc: {
            en: "Prompt design and integrating Gemini API into applications, with FastAPI services exposing AI features to other systems.",
            vi: "Thiết kế prompt và tích hợp Gemini API vào ứng dụng, xây dựng service FastAPI để cung cấp tính năng AI cho các hệ thống khác.",
          },
        },
      ],
    },
    {
      id: "backend",
      category: { en: "Backend, MLOps & Automation", vi: "Backend, MLOps & Tự động hóa" },
      icon: "fas fa-code",
      badges: [
        { label: "Python",          logo: "python",              color: "3776AB" },
        { label: "FastAPI",         logo: "fastapi",             color: "009688" },
        { label: "Flask",           logo: "flask",               color: "ffffff" },
        { label: "C#",              logo: "dotnet",              color: "512BD4" },
        { label: "C++",             logo: "cplusplus",           color: "00599C" },
        { label: "SQL_Server",      logo: "microsoftsqlserver",  color: "CC2927" },
        { label: "MySQL",           logo: "mysql",               color: "4479A1" },
        { label: "GitHub_Actions",  logo: "githubactions",       color: "2088FF" },
        { label: "Git",             logo: "git",                 color: "F05032" },
        { label: "Power_Automate",  logo: "microsoft",           color: "0066FF" },
      ],
      items: [
        {
          name: "Python & FastAPI / Flask",
          highlight: true,
          desc: {
            en: "REST APIs for serving model inference, data pipelines, and packaging tools on PyPI.",
            vi: "Xây dựng REST API phục vụ suy luận mô hình, pipeline dữ liệu và đóng gói công cụ lên PyPI.",
          },
        },
        {
          name: "Docker & CI/CD (GitHub Actions)",
          desc: {
            en: "Containerizing AI services (Dockerfile, multi-stage builds, Docker Compose) and automating test, lint and release workflows.",
            vi: "Container hóa service AI (Dockerfile, multi-stage build, Docker Compose) và tự động hóa test, lint, đóng gói phát hành.",
          },
        },
        {
          name: "C# (.NET)",
          desc: {
            en: "Industrial desktop applications (WinForms/WPF), camera SDK integration, robot communication via serial/TCP/IP.",
            vi: "Phần mềm desktop công nghiệp (WinForms/WPF), tích hợp camera SDK, giao tiếp robot qua serial/TCP/IP.",
          },
        },
        {
          name: "Database (SQL Server, MySQL)",
          desc: {
            en: "Schema design, query tuning and data logging for industrial inspection systems.",
            vi: "Thiết kế lược đồ, tối ưu truy vấn và lưu log dữ liệu cho hệ thống kiểm tra công nghiệp.",
          },
        },
        {
          name: "Power Apps & Power Automate",
          desc: {
            en: "Low-code business apps and workflow automation across SharePoint, Teams, Outlook and REST APIs.",
            vi: "Ứng dụng low-code và tự động hóa quy trình liên thông SharePoint, Teams, Outlook và REST API.",
          },
        },
      ],
    },
    {
      id: "data",
      category: { en: "Data Science & Analysis", vi: "Khoa học dữ liệu & Phân tích" },
      icon: "fas fa-chart-line",
      badges: [
        { label: "Pandas",        logo: "pandas",       color: "150458" },
        { label: "Scikit--learn", logo: "scikitlearn",  color: "F7931E" },
        { label: "Jupyter",       logo: "jupyter",      color: "F37626" },
        { label: "Google_Colab",  logo: "googlecolab",  color: "F9AB00" },
        { label: "VS_Code",       logo: "visual-studio-code", color: "007ACC" },
      ],
      items: [
        {
          name: "Pandas & Scikit-learn",
          desc: {
            en: "Data cleansing, normalization, statistical exploratory data analysis (EDA), classical ML algorithms (SVM, Random Forest, Clustering).",
            vi: "Làm sạch, chuẩn hóa, phân tích khám phá dữ liệu (EDA), áp dụng các thuật toán ML truyền thống (SVM, Random Forest, Clustering).",
          },
        },
        {
          name: "Data Visualization & Model Analysis",
          desc: {
            en: "Matplotlib, Seaborn, plotting loss/accuracy curves, confusion matrices, and model performance evaluation metrics.",
            vi: "Matplotlib, Seaborn, trực quan hóa biểu đồ hàm mất mát, ma trận nhầm lẫn (confusion matrix) và các chỉ số đánh giá mô hình.",
          },
        },
      ],
    },
    {
      id: "softskills",
      category: { en: "Methodology & Soft Skills", vi: "Phương pháp & Kỹ năng mềm" },
      icon: "fas fa-users",
      badges: [],
      items: [
        {
          name: "English",
          desc: {
            en: "Intermediate proficiency — capable of reading technical documentation, communicating, and collaborating in professional environments.",
            vi: "Trình độ trung cấp — đọc hiểu tài liệu kỹ thuật chuyên sâu, giao tiếp và cộng tác hiệu quả trong môi trường làm việc quốc tế.",
          },
        },
        {
          name: "Agile / Scrum",
          desc: {
            en: "Sprint planning, daily standup, iterative development, Jira, Trello, Slack.",
            vi: "Quy trình Agile/Scrum, kế hoạch sprint, bàn giao lặp, phối hợp hiệu quả qua Jira, Trello, Slack.",
          },
        },
        {
          name: "Critical Thinking & Self-learning",
          desc: {
            en: "Proactive problem solver, rapid technology adoption, research mindset, and high adaptability to industrial challenges.",
            vi: "Tư duy phản biện, khả năng tự học công nghệ mới nhanh chóng, tinh thần R&D và thích ứng linh hoạt với bài toán thực tế.",
          },
        },
      ],
    },
  ],

  /* ── DỰ ÁN ── */
  projects: [
    {
      title:   { en: "License Plate Recognition on NVIDIA Jetson", vi: "Nhận dạng biển số xe trên NVIDIA Jetson" },
      tech:    "PyTorch · YOLO · OCR · ONNX · TensorRT · Jetson Orin",
      context: { en: "i-Soft · Production", vi: "i-Soft · Thực tế" },
      featured: true,
      links:   [],
      desc: {
        en: "End-to-end ANPR pipeline: YOLO detects plates, an OCR model reads the characters, and the models are converted to TensorRT to run in real time on Jetson Nano / Orin at the camera site.",
        vi: "Pipeline nhận dạng biển số hoàn chỉnh: YOLO phát hiện biển số, mô hình OCR đọc ký tự, sau đó chuyển sang TensorRT để chạy thời gian thực trên Jetson Nano / Orin ngay tại vị trí camera.",
      },
    },
    {
      title:   { en: "On-premise LLM Chatbot for OEE Analytics", vi: "Chatbot LLM nội bộ phân tích OEE" },
      tech:    "Qwen (local LLM) · FastAPI · SQL",
      context: { en: "i-Soft · Production", vi: "i-Soft · Thực tế" },
      featured: true,
      links:   [],
      desc: {
        en: "Chatbot running a local Qwen model that lets factory staff ask about OEE (availability, performance, quality) in natural language. Data stays inside the company network.",
        vi: "Chatbot chạy mô hình Qwen local, cho phép nhân viên nhà máy hỏi về OEE (availability, performance, quality) bằng ngôn ngữ tự nhiên. Dữ liệu không rời khỏi mạng nội bộ công ty.",
      },
    },
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
  ],

  /* ── KINH NGHIỆM ── */
  experience: [
    {
      company: { en: "i-Soft Joint Stock Company",            vi: "Công ty Cổ phần i-Soft" },
      infoUrl: "https://i-soft.com.vn/",
      position: { en: "AI / Computer Vision Engineer",        vi: "AI / Computer Vision Engineer" },
      date:     { en: "02/2024 — Present",                    vi: "02/2024 — Hiện tại" },
      evalUrl:  null,
      tech:     "PyTorch · YOLO · OCR · ONNX · TensorRT · Jetson Nano/Orin · Qwen · Gemini API · FastAPI · Docker",
      desc: {
        en: "Full-time AI Engineer building computer vision and LLM solutions that run in production, from model training to deployment on edge devices.",
        vi: "AI Engineer toàn thời gian, phát triển giải pháp thị giác máy tính và LLM chạy thực tế, từ huấn luyện mô hình đến triển khai trên thiết bị edge.",
      },
      items: [
        {
          text: {
            en: "Built license plate recognition (detection + OCR) and deployed it on NVIDIA Jetson Nano / Orin, converting models via ONNX to TensorRT for real-time inference.",
            vi: "Xây dựng hệ thống nhận dạng biển số xe (phát hiện + OCR) và triển khai trên NVIDIA Jetson Nano / Orin, chuyển mô hình qua ONNX sang TensorRT để suy luận thời gian thực.",
          },
        },
        {
          text: {
            en: "Developed an on-premise chatbot on a local Qwen LLM that answers OEE questions from factory production data, keeping all data inside the internal network.",
            vi: "Phát triển chatbot nội bộ dùng LLM Qwen chạy local, trả lời câu hỏi về OEE từ dữ liệu sản xuất của nhà máy, toàn bộ dữ liệu nằm trong mạng nội bộ.",
          },
        },
        {
          text: {
            en: "Trained and fine-tuned PyTorch/YOLO models for inspection and detection, and exposed AI features through FastAPI services and Gemini API integrations.",
            vi: "Huấn luyện và fine-tune mô hình PyTorch/YOLO cho bài toán kiểm tra, phát hiện; cung cấp tính năng AI qua service FastAPI và tích hợp Gemini API.",
          },
        },
      ],
    },
    {
      company: { en: "SVN Automation (Sophic Automation)",    vi: "Công ty SVN Automation (Sophic Automation)" },
      infoUrl: "https://svnautomation.com/",
      position: { en: "AI / Computer Vision Intern",          vi: "Thực tập sinh AI / Computer Vision" },
      date:     { en: "08/2023 — 12/2023",                    vi: "08/2023 — 12/2023" },
      evalUrl:  "https://drive.google.com/file/d/10ixtqBD4EhLYSs70Dba8zXHACazA1ci8/view?usp=sharing",
      evalLabel:{ en: "evaluation form", vi: "phiếu đánh giá" },
      desc: {
        en: "Computer vision intern in the R&D Department. Researched AI Computer Vision, Embedded Software, and Software Applications. Contributed to real projects controlling robot arms.",
        vi: "Thực tập sinh thị giác máy tính tại phòng R&D. Nghiên cứu AI Computer Vision, Embedded Software, Software Application. Tham gia dự án thực tế điều khiển cánh tay robot.",
      },
      items: [
        {
          text: {
            en: "Built an AI Chess system combining YOLOv8, board-state recognition, Arduino, and robot-arm control.",
            vi: "Xây dựng hệ thống AI Cờ Vua kết hợp YOLOv8, nhận diện trạng thái bàn cờ, Arduino và điều khiển cánh tay robot.",
          },
          videoUrl: "https://youtu.be/7EVB89qOXaM?si=-G3MY66mkipP_fBe",
        },
        {
          text: {
            en: "Extended the robot-arm interaction workflow for AI Chinese Chess.",
            vi: "Mở rộng quy trình tương tác với cánh tay robot cho bài toán AI Cờ Tướng.",
          },
          videoUrl: "https://youtube.com/shorts/JhGkF8fEN1g?si=yWoF7oWUL2kUH6PH",
        },
      ],
    },
    {
      company: { en: "TMA Solutions Company",                 vi: "Công ty TMA Solutions" },
      infoUrl: "https://www.tmasolutions.com/",
      position: { en: "AI / Computer Vision Intern",          vi: "Thực tập sinh AI / Computer Vision" },
      date:     { en: "03/2023 — 06/2023",                    vi: "03/2023 — 06/2023" },
      evalUrl:  "https://drive.google.com/file/d/10sZKGm3iV_7flqw0F2Fyjcfza0uGQcB_/view?usp=sharing",
      evalLabel:{ en: "evaluation form", vi: "phiếu đánh giá" },
      desc: {
        en: "Intern in the \"Artificial Intelligence Innovation\" room. Researched SOTA models (YOLO), contributed to real projects, and developed self-directed research and problem-solving skills.",
        vi: "Thực tập tại phòng \"Artificial Intelligence Innovation\". Nghiên cứu mô hình SOTA (YOLO), tham gia dự án thực tế, rèn luyện kỹ năng tự học và giải quyết vấn đề.",
      },
      items: [
        {
          text: {
            en: "Researched YOLO-based computer vision models and evaluated practical application scenarios.",
            vi: "Nghiên cứu các mô hình thị giác máy tính dựa trên YOLO và đánh giá khả năng áp dụng thực tế.",
          },
        },
        {
          text: {
            en: "Developed a driver drowsiness detection prototype using CNN, OpenCV, Keras, and TensorFlow.",
            vi: "Phát triển prototype phát hiện tài xế buồn ngủ sử dụng CNN, OpenCV, Keras và TensorFlow.",
          },
          videoUrl: "https://youtu.be/X8ZFH_fZsIo",
        },
      ],
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
      title: "AWS DeepRacer League 2023",
      desc: {
        en: "<strong>Top 2</strong> Vietnam Student Ranking &nbsp;·&nbsp; <strong>Top 10%</strong> Asia Pacific Ranking",
        vi: "<strong>Top 2</strong> Bảng xếp hạng sinh viên Việt Nam &nbsp;·&nbsp; <strong>Top 10%</strong> Bảng xếp hạng Châu Á - Thái Bình Dương",
      },
      certUrl:   "https://drive.google.com/file/d/1-D21KijYI-LvO0kebTCNKKw5swgm8nZv/view?usp=sharing",
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
      // url:   "https://www.freecodecamp.org/certification/NguyenQuangTung/foundational-c-sharp-with-microsoft",
      url:   "https://drive.google.com/file/d/10A0vouhadfdGOZEwGZuaQATn6Yhg464p/view?usp=sharing",
    
      
    },
    {
      label: "Software Development with Agile Scrum — Axon Active",
      url:   "https://verified.sertifier.com/en/verify/32138525036931/?ref=email",
    },
    {
      label: { en: "Teaching Assistant Skill — HCMc UTE", vi: "Kỹ năng Trợ giảng — ĐH SPKT TP.HCM" },
      url:   "https://drive.google.com/file/d/1-XnNRhMQIyw2WXsKHFrmx3nA4GVBzLlq/view?usp=sharing",
    },
    {
      label: "Google Cloud ACE",
      children: [
        { label: "Big Data and Machine Learning Fundamentals — Google Cloud", url: "https://drive.google.com/file/d/1-DZMMI5XhMPZkWWStXdKohTDCcCMX-WA/view?usp=sharing" },
        { label: "Fundamentals Core Infrastructure — Google Cloud",          url: "https://drive.google.com/file/d/1-KUfymY2QkvNtRDoFqfUp8_32n_tVxNt/view?usp=sharing" },
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
