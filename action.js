 let listaNumeros = [];

        const numberinput = document.getElementById("numberinput");
        const agregarButton = document.getElementById("agregarButton");
        const limpiarButton = document.getElementById("limpiarButton");
        const finalizarButton = document.getElementById("finalizarButton");
        const numMax = document.getElementById("numMax");
        const numMin = document.getElementById("numMin");

        agregarButton.addEventListener("click", agregarNumero);
        limpiarButton.addEventListener("click", limpiarlista);
        finalizarButton.addEventListener("click", finalizarlista);

        function agregarNumero() {
            const numero = parseInt(numberinput.value);
            listaNumeros.push(numero);
            console.log("Número agregado exitosamente");
            numberinput.value = "";
        }

        function limpiarlista() {
            listaNumeros = [];
            console.log("Lista ha sido limpiada.");
            numMax.value = "";
            numMin.value = "";
        }

        function finalizarlista() {
            if (listaNumeros.length > 0) {
                const maximo = Math.max(...listaNumeros);
                const minimo = Math.min(...listaNumeros);
                numMax.value = maximo;
                numMin.value = minimo;
            } else {
                console.log("La lista está vacía");
            }
        }