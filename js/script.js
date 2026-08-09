const certificates = [
  [
    'Computer Networks Requirement Identification',
    'Training Program',
    '2023',
    'Mempelajari analisis kebutuhan perangkat keras dan dasar-dasar topologi jaringan.',
    ['cnri.jpg', 'cnri-1.jpg']
  ],

  [
    'Software Engineering Coding Camp',
    'RevoU',
    '2026',
    'Program pembelajaran praktis untuk pengembangan keterampilan digital.',
    ['revou.jpg']
  ],

  [
    'JavaScript Programming Language Fundamental',
    'Training Program',
    '2026',
    'Fundamental JavaScript untuk membangun antarmuka web interaktif.',
    ['javascript.jpg', 'javascript-1.jpg']
  ],

  [
    'Computer Networks Connectivity',
    'Training Program',
    '2024',
    'Mengikuti pelatihan instalasi LAN/WLAN, konfigurasi jaringan, dan pengujian konektivitas.',
    ['cnc.jpg', 'cnc-1.jpg']
  ],

  [
    'Addressing and Routing in Computer Networks',
    'Training Program',
    '2024',
    'Mempelajari konfigurasi alamat IP, subnetting, dan dasar-dasar static routing.',
    ['arcn.jpg', 'arcn-1.jpg']
  ],

  [
    'Flutter',
    'Edspert.id',
    '2023',
    'Mempelajari Flutter untuk pengembangan aplikasi mobile lintas platform.',
    ['flutter.jpg']
  ],

  [
    'IoT',
    'Edspert.id',
    '2023',
    'Mempelajari konsep dasar Internet of Things serta peluang karier sebagai IoT Engineer.',
    ['iot.jpg']
  ],

  [
    'ReactJS',
    'Edspert.id',
    '2023',
    'Mempelajari dasar React JS serta wawasan karier dalam pengembangan aplikasi web sebagai Front-End Developer.',
    ['reactjs.jpg']
  ],

  [
    'DRONE',
    'Training Program',
    '2024',
    'Mempelajari teknologi drone, prinsip kerja, dan pengoperasian dasar.',
    ['drone.jpg', 'drone-1.jpg']
  ],

  [
    'Computer Networks Failure Tracking and Recovery',
    'Training Program',
    '2025',
    'Mempelajari teknik troubleshooting dan pemulihan jaringan menggunakan perangkat monitoring.',
    ['cnftr.jpg', 'cnftr-1.jpg']
  ],

  [
    'Computer Networks Performance Optimization',
    'Training Program',
    '2025',
    'Mempelajari dasar-dasar optimasi performa jaringan komputer dan analisis jaringan.',
    ['cnpo.jpg', 'cnpo-1.jpg']
  ],

  [
    'Design Embedded System Programming Microcontroller Based Control System',
    'Training Program',
    '2026',
    'Memperoleh pengetahuan praktis mengenai sistem embedded dan pengembangan pemrograman mikrokontroler.',
    ['embedded.jpg', 'embedded-1.jpg']
  ],

  [
    'Creating Intelligent Systems on IoT Devices',
    'Training Program',
    '2026',
    'Mempelajari konsep pengembangan sistem cerdas pada perangkat IoT.',
    ['cisiot.jpg', 'cisiot-1.jpg']
  ]
];


document.addEventListener('DOMContentLoaded', () => {

  const certificateGrid = document.querySelector('#certificate-grid');
  const certificateModal = document.querySelector('#certificate-modal');

  if (!certificateGrid || !certificateModal) {
    console.error('Certificate grid atau modal tidak ditemukan.');
    return;
  }

  let currentImages = [];
  let currentImageIndex = 0;


  // =========================
  // MEMBUAT CARD SERTIFIKAT
  // =========================

  certificates.forEach(
    ([title, issuer, date, description, images], index) => {

      const card = document.createElement('button');

      // Penting
      card.type = 'button';
      card.className = 'certificate-card';

      card.innerHTML = `
        <div class="certificate-icon">

          <img
            src="certificates/${images[0]}"
            alt="Preview sertifikat ${title}"
          >

          <span>
            ${String(index + 1).padStart(2, '0')}
          </span>

        </div>

        <div>
          <small>${issuer}</small>
          <h3>${title}</h3>
        </div>
      `;


      // =========================
      // CARD CLICK
      // =========================

      card.addEventListener('click', () => {

        console.log('Certificate clicked:', title);

        currentImages = images;
        currentImageIndex = 0;

        document.querySelector('#modal-title').textContent = title;
        document.querySelector('#modal-issuer').textContent = issuer;
        document.querySelector('#modal-date').textContent = date;
        document.querySelector('#modal-description').textContent = description;

        updateCertificateImage();

        certificateModal.showModal();
      });


      certificateGrid.appendChild(card);

    }
  );


  // =========================
  // NEXT
  // =========================

  const nextButton = document.querySelector('#certificate-next');

  if (nextButton) {

    nextButton.addEventListener('click', (event) => {

      event.stopPropagation();

      if (currentImages.length <= 1) return;

      currentImageIndex++;

      if (currentImageIndex >= currentImages.length) {
        currentImageIndex = 0;
      }

      updateCertificateImage();

    });

  }


  // =========================
  // PREVIOUS
  // =========================

  const prevButton = document.querySelector('#certificate-prev');

  if (prevButton) {

    prevButton.addEventListener('click', (event) => {

      event.stopPropagation();

      if (currentImages.length <= 1) return;

      currentImageIndex--;

      if (currentImageIndex < 0) {
        currentImageIndex = currentImages.length - 1;
      }

      updateCertificateImage();

    });

  }


  // =========================
  // CLOSE MODAL
  // =========================

  const closeButton = document.querySelector('.modal-close');

  if (closeButton) {

    closeButton.addEventListener('click', () => {
      certificateModal.close();
    });

  }


  // Klik area luar dialog untuk menutup
  certificateModal.addEventListener('click', (event) => {

    if (event.target === certificateModal) {
      certificateModal.close();
    }

  });


  // =========================
  // UPDATE IMAGE
  // =========================

  function updateCertificateImage() {

    const imageElement =
      document.querySelector('#modal-certificate-image');

    const prevButton =
      document.querySelector('#certificate-prev');

    const nextButton =
      document.querySelector('#certificate-next');

    const counter =
      document.querySelector('#certificate-counter');


    if (!imageElement) return;


    imageElement.src =
      `certificates/${currentImages[currentImageIndex]}`;

    imageElement.alt =
      `Sertifikat ${currentImageIndex + 1}`;


    // Jika hanya 1 gambar
    if (currentImages.length <= 1) {

      if (prevButton) prevButton.style.display = 'none';

      if (nextButton) nextButton.style.display = 'none';

      if (counter) counter.style.display = 'none';

    }

    // Jika lebih dari 1 gambar
    else {

      if (prevButton) prevButton.style.display = 'flex';

      if (nextButton) nextButton.style.display = 'flex';

      if (counter) {
        counter.style.display = 'block';

        counter.textContent =
          `${currentImageIndex + 1} / ${currentImages.length}`;
      }

    }

  }

});