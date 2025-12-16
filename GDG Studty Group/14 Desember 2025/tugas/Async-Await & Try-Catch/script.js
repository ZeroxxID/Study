async function getToDo(id) {
    console.log("Mencoba mengambil data...")
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        let data = await response.json();
        console.log(`✅ Judul Todo: ${data.title}`);
    } catch (error) {
        console.log(`❌ Gagal mengambil data: ${error.massage}`);
    } finally {
        console.log("--- Proses Selesai ---");
    }
}

getToDo(115)
