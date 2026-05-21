async function loadPDFs() {

    const response = await fetch('pdfs.json');
    const pdfs = await response.json();

    const grid = document.getElementById('pdf-grid');

    pdfs.forEach(pdf => {

        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${pdf.thumbnail}" alt="${pdf.title}">

            <div class="card-content">
                <h3>${pdf.title}</h3>

                <a class="btn view-btn"
                   href="viewer.html?file=${encodeURIComponent(pdf.file)}"
                   data-file="${pdf.file}">
                   View
                </a>

                <a class="btn btn-download"
                   href="${pdf.file}"
                   download>
                   Download
                </a>
            </div>
        `;

        card.querySelector('.view-btn').addEventListener('click', () => {
            sessionStorage.setItem('pdfToView', pdf.file);
        });

        grid.appendChild(card);

    });

}

loadPDFs();
