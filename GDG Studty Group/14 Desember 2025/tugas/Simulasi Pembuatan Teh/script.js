function makingTea(sugarType) {
    return new Promise((resolve, reject) => {
        console.log("⏳ Sedang merebus air... (Tunggu 2 detik)");
        setTimeout(() => {
            if (sugarType == "Gula Batu") {
                resolve("✅ Teh Gula Batu Siap dinikmati!");
            } else {
                reject("❌ Maaf, stok gula habis.");
            }
        }, 2000);
    });
}

makingTea("Gula Batu")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
