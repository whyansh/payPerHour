document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission and page reload

    let annualSalary = Number(document.getElementById("pckg").value);
    let workingHours = Number(document.getElementById("wkhrs").value);
    let sat1 = document.getElementById("isatoff").checked ? 1 : 0;
    let sat0 = document.getElementById("isatoff").checked ? 0 : 1;
    let OFFS = Number(document.getElementById("offs").value);

    let monthlypay = annualSalary / 12;
    let totalwkdays = 365 - sat1 - sat0 - (4 * 12) - OFFS;
    let totalwkhours = totalwkdays * workingHours;
    let hpay = annualSalary / totalwkhours;
    let freehours = (365 * 24) - totalwkhours;

    document.getElementById("hourlyPay").textContent = `your hourly pay is ₹${hpay}/-`;
    document.getElementById("monthlyPay").textContent = `you earn ₹${monthlypay}/- monthly`;
    document.getElementById("wkDays").textContent = `you work ${totalwkdays} days in a year`;
    document.getElementById("offDays").textContent = `you enjoy a total of ${sat1 + sat0 + OFFS + (4 * 12)} off days to relax`;
    document.getElementById("hrsTotal").textContent = `you work ${totalwkhours} hrs a year`;
    document.getElementById("freeHrs").textContent = `you have a total of ${freehours} hrs of free-time in a year(add sleep in there).`;
});