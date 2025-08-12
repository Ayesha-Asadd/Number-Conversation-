

    function convertNumber() {
      const number = document.getElementById('numberInput').value.trim();
      const conversionType = document.getElementById('conversionType').value;
      const resultDiv = document.getElementById('result');

      if (!number) {
        resultDiv.textContent = 'Please enter a number.';
        return;
      }

      const url = "https://corsproxy.io/?" + encodeURIComponent("https://www.dataaccess.com/webservicesserver/numberconversion.wso");

      // Dynamically choose XML body based on selected option
      let xmlData = '';
      if (conversionType === "NumberToWords") {
        xmlData =
          `<?xml version="1.0" encoding="utf-8"?>
          <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
              <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
                <ubiNum>${number}</ubiNum>
              </NumberToWords>
            </soap:Body>
          </soap:Envelope>`;
      } else if (conversionType === "NumberToDollars") {
        xmlData =
          `<?xml version="1.0" encoding="utf-8"?>
          <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
              <NumberToDollars xmlns="http://www.dataaccess.com/webservicesserver/">
                <dNum>${number}</dNum>
              </NumberToDollars>
            </soap:Body>
          </soap:Envelope>`;
      }

      // Dynamically set SOAPAction
      const soapAction = `http://www.dataaccess.com/webservicesserver/${conversionType}`;

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "text/xml; charset=utf-8",
          "SOAPAction": soapAction
        },
        body: xmlData
      })
      .then(response => response.text())
      .then(str => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(str, "application/xml");

        let resultTag = '';
        if (conversionType === "NumberToWords") {
          resultTag = xml.getElementsByTagName("m:NumberToWordsResult")[0];
        } else if (conversionType === "NumberToDollars") {
          resultTag = xml.getElementsByTagName("m:NumberToDollarsResult")[0];
        }

        resultDiv.textContent = resultTag ? resultTag.textContent : "No result found.";
      })
      .catch(error => {
        console.error(error);
        resultDiv.textContent = "Error fetching data.";
      });
    }
