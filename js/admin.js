/* ==========================================
   admin.js
   Dashboard Admin
   Masjid Al-Amin Sidosermo
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    loadDashboard();

    loadRanking();

});

/* ==========================================
   LOAD DASHBOARD
========================================== */

async function loadDashboard() {

    try {

        const data = await getDashboard();

        document.getElementById("totalTakmir").textContent =
            data.totalTakmir || 0;

        document.getElementById("totalAbsensi").textContent =
            data.totalAbsensi || 0;

        document.getElementById("totalShalat").textContent =
            data.totalShalat || 0;

    } catch (err) {

        console.error(err);

    }

}

/* ==========================================
   LOAD RANKING
========================================== */

async function loadRanking() {

    try {

        const ranking = await getRanking();

        const tbody = document.getElementById("rankingBody");

        tbody.innerHTML = "";

        if (ranking.length === 0) {

            tbody.innerHTML = `
                <tr>
                    <td colspan="3" style="text-align:center">
                        Belum ada data.
                    </td>
                </tr>
            `;

            return;

        }

        ranking.forEach((item, index) => {

            tbody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.nama}</td>
                    <td>${item.total}</td>
                </tr>
            `;

        });

    } catch (err) {

        console.error(err);

    }

}
