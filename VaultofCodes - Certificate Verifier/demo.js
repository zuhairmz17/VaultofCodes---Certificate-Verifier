function verifyStudent() {
  const idInput = document.getElementById('identifier');
  const id = idInput.value.trim().toLowerCase();
  const resultBox = document.getElementById('result');

  if (!id) return alert('Please enter a valid Email or ID');

  showSpinner(true);

  setTimeout(() => {
    // Only for your email
    if (id === "mahmoodzuhair2005@gmail.com") {
      const student = {
        name: "MAHMOOD ZUHAIR AC",
        email: "mahmoodzuhair2005@gmail.com",
        mobile: "9840482397",
        domain: "AI & Prompt Engineering",
        college: "B.S.A. Crescent Institute of Science and Technology",
        start: "2025-06-22",
        duration: "1 Month",
        photo: "img/eid click.jpg",
        assignments: [true, true, true, true], // All ✅
        certificate: "https://drive.google.com/file/d/1pBoc3xOk2VcRXhMFrHxZhtus6y-Mrxv-/view?usp=drivesdk",
        offerLetter: "https://drive.google.com/file/d/1DodC4pF9Ckry-jkpVfUrx40Mx75pb0rc/view?usp=drivesdk",
        remarks: "N/A"
      };

      const html = `
        <div class="card">
          <img src="${student.photo}" alt="Your Photo" />
          <h3>${student.name}</h3>
          <p>Email: ${student.email}</p>
          <p>Mobile: ${student.mobile}</p>
          <p>Domain: ${student.domain}</p>
          <p>College: ${student.college}</p>
          <p>Start Date: ${student.start}</p>
          <p>Duration: ${student.duration}</p>
          <a href="${student.offerLetter}" target="_blank">📄 View Offer Letter</a>

          <h4>Assignment Status</h4>
          <div class="assignment-status">
            ${student.assignments.map((done, i) => `<span>A${i + 1}: ${done ? '✅' : '❌'}</span>`).join('')}
          </div>

          <p>Status: <strong>Completed</strong></p>
          <p>Remarks: ${student.remarks}</p>

          <a href="${student.certificate}" target="_blank">🎓 View Certificate</a>
        </div>
      `;

      resultBox.innerHTML = html;
    } else {
      resultBox.innerHTML = `<p style="text-align:center;color:red;">❌ No student found with this Email or ID.</p>`;
    }

    showSpinner(false);
    showToast('✅ Verification complete.');
  }, 1200);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.className = 'toast show';
  setTimeout(() => toast.className = 'toast', 3000);
}

function showSpinner(show) {
  document.querySelector('.spinner').style.display = show ? 'block' : 'none';
}
