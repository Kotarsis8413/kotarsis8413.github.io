commis = {
    "mts": "1%",
    "ym": "11%"
}
commiscalc = {
    "mts": 1/100,
    "ym": 11/100
}

function calculate() {
    summ = document.getElementById("summ").value;
    service = document.getElementById("service").value;

    out1 = document.getElementById("none");
    out2 = document.getElementById("commis");
    out3 = document.getElementById("total");

    document.getElementById("none").innerHTML = summ;
    document.getElementById("commis").innerHTML = commis[service];
    withcommision = Number(summ) + summ * commiscalc[service];

    document.getElementById("total").innerHTML = withcommision;
}