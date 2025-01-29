const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyOriginSelect = document.querySelector(".currency-origin");



function convertValues() {

    if (currencyOriginSelect.value === currencySelect.value) {
        alert("Por favor, selecione moedas diferentes para conversão.");
        return; 
    }
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const convertValueToConvert = document.querySelector(".currency-value-to-convert")
    const convertValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.9
    const euroToday = 6.2
    const libraToday = 7.3
    
 

    if (currencyOriginSelect.value === "real") {
        // Real -> Outro
        convertValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue);

        if (currencySelect.value === "dolar") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarToday);  // Real para Dólar

        } else if (currencySelect.value === "euro") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroToday); // Real para Euro
        }
        else if (currencySelect.value === "libra") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraToday); // Real para Libra
        }

    }

    else if (currencyOriginSelect.value === "dolar") {
        // Dólar -> Real
        convertValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue);

        if (currencySelect.value === "real") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * dolarToday);  // Dólar para Real
        } else if (currencySelect.value === "euro") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * dolarToday / euroToday);  // Dólar para Euro
        }
        else if (currencySelect.value === "libra") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * dolarToday / libraToday);  // Dólar para Libra
        }
    }

    else if (currencyOriginSelect.value === "euro") {
        // Euro -> Real
        convertValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue);

        if (currencySelect.value === "real") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * euroToday);  // Euro para Real

        } else if (currencySelect.value === "dolar") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * euroToday / dolarToday);  // Euro para Dólar
        }
        else if (currencySelect.value === "libra") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * euroToday / libraToday);  // Euro para Libra
        }
    }

    else if(currencyOriginSelect.value === "libra"){
        //libra -> Real
        convertValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(inputCurrencyValue);

          if (currencySelect.value === "real") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * libraToday);  //libra para Real

        } else if (currencySelect.value === "dolar") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * libraToday / dolarToday);  // libra para Dólar
        }
        else if (currencySelect.value === "euro") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * libraToday / euroToday);  // libra para Euro
        }
    }   

}

function currencyChange() {

    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");
    const currencyNameOrigin = document.getElementById("currency-name-origin");
    const currencyImageOrigin = document.querySelector(".currency-img-origin");


    
    if (currencyOriginSelect.value === "real") {
        currencyNameOrigin.innerHTML = "Real Brasileiro";
        currencyImageOrigin.src = "assets/moeda-real.png";
    } else if (currencyOriginSelect.value === "dolar") {
        currencyNameOrigin.innerHTML = "Dólar Americano";
        currencyImageOrigin.src = "assets/moeda-dolar.png";
    } else if (currencyOriginSelect.value === "euro") {
        currencyNameOrigin.innerHTML = "Euro";
        currencyImageOrigin.src = "assets/moeda-euro.png";
    }
    else if (currencyOriginSelect.value === "libra") {
        currencyNameOrigin.innerHTML = "Libra";
        currencyImageOrigin.src = "assets/moeda-libra.png";
    }

    
    if (currencySelect.value === "real") {
        currencyName.innerHTML = "Real Brasileiro";
        currencyImage.src = "assets/moeda-real.png";
    } else if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImage.src = "assets/moeda-dolar.png";
    } else if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "assets/moeda-euro.png";
    }
    else if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra";
        currencyImage.src = "assets/moeda-libra.png";
    }


    convertValues()
}

convertButton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", currencyChange);
currencyOriginSelect.addEventListener("change", currencyChange);


