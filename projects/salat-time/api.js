let salateTimes = [
  ["Dhuhr", "الظهر"],
  ["Sunrise", "الشروق"],
  ["Fajr", "الصبح"],
  ["Isha", "العشاء"],
  ["Maghrib", "المغرب"],
  ["Asr", "العصر"],
];
let monthsAR = {
  January: "يناير",
  February: "فبراير",
  March: "مارس",
  April: "أبريل",
  May: "مايو",
  June: "يونيو",
  July: "يوليو",
  August: "أغسطس",
  September: "سبتمبر",
  October: "أكتوبر",
  November: "نوفمبر",
  December: "ديسمبر",
};
let moroccoCities = [
  ["Fes", "فاس"],
  ["Casablanca", "الدار البيضاء"],
  ["Tangier", "طنجة"],
  ["Marrakech", "مراكش"],
  ["Sale", "الرباط"],
  ["Mediouna", "مديونة"],
  ["Rabat", "الرباط"],
  ["Meknes", "مكناس"],
  ["Oujda-Angad", "وجدة-أنجاد"],
  ["Kenitra", "القنيطرة"],
  ["Agadir", "أكادير"],
  ["Tetouan", "تطوان"],
  ["Taourirt", "تاوريرت"],
  ["Temara", "التمارة"],
  ["Safi", "آسفي"],
  ["Khénifra", "خنيفرة"],
  ["Laâyoune", "العيون"],
  ["Mohammedia", "المحمدية"],
  ["Kouribga", "خريبكة"],
  ["El Jadid", "الجديدة"],
  ["Béni Mellal", "بني ملال"],
  ["Ait Melloul", "آيت ملول"],
  ["Nador", "الناظور"],
  ["Taza", "تازة"],
  ["Settat", "سطات"],
  ["Barrechid", "برشيد"],
  ["Al Khmissat", "الخميسات"],
  ["Inezgane", "إنزكان"],
  ["Ksar El Kebir", "قصر الكبير"],
  ["Larache", "العرائش"],
  ["Guelmim", "كلميم"],
  ["Berkane", "بركان"],
  ["Khemis Sahel", "خميس الساحل"],
  ["Ad Dakhla", "الداخلة"],
  ["Bouskoura", "بوسكورة"],
  ["Al Fqih Ben Çalah", "الفقيه بن صالح"],
  ["Oued Zem", "وادي زم"],
  ["Sidi Slimane", "سيدي سليمان"],
  ["Errachidia", "الرشيدية"],
  ["Guercif", "جرسيف"],
  ["Oulad Teïma", "أولاد تايمة"],
  ["Ben Guerir", "بنكرير"],
  ["Sefrou", "صفرو"],
  ["Fnidq", "فنيدق"],
  ["Sidi Qacem", "سيدي قاسم"],
  ["Moulay Abdallah", "مولاي عبد الله"],
  ["Youssoufia", "اليوسفية"],
  ["Martil", "مرتيل"],
  ["Aïn Harrouda", "عين الحرودة"],
  ["Skhirate", "الصخيرات"],
  ["Ouezzane", "وزان"],
  ["Sidi Yahya Zaer", "سيدي يحيى زائر"],
  ["Al Hoceïma", "الحسيمة"],
  ["M diq", "مليلية"],
  ["Sidi Bennour", "سيدي بنور"],
  ["Midalt", "ميدلت"],
  ["Azrou", "ازرو"],
  ["My Drarga", "مي درارجة"],
  ["Ain El Aouda", "عين العودة"],
  ["Beni Yakhlef", "بني يخلف"],
  ["Ad Darwa", "الدروة"],
  ["Al Aaroui", "العروي"],
  ["Qasbat Tadla", "قصبة تادلة"],
  ["Boujad", "بوجعد"],
  ["Jerada", "جرادة"],
  ["Mrirt", "مريرت"],
  ["El Aïoun", "العيون"],
  ["Azemmour", "أزمور"],
  ["Temsia", "تمسية"],
  ["Zagora", "زاكورة"],
  ["Ait Ourir", "آيت أورير"],
  ["Aziylal", "آزيلال"],
  ["Sidi Yahia El Gharb", "سيدي يحيى الغرب"],
  ["Biougra", "بيوكرى"],
  ["Zaïo", "زايو"],
  ["Aguelmous", "أگلموس"],
  ["El Hajeb", "الحاجب"],
  ["Zeghanghane", "زكان"],
  ["Imzouren", "إمزورن"],
  ["Tit Mellil", "تيت مليل"],
  ["Mechraa Bel Ksiri", "مشرع بل كسيري"],
  ["Al Attawia", "العطاوية"],
  ["Demnat", "دمنات"],
  ["Arfoud", "ارفود"],
  ["Tameslouht", "تمصلوحت"],
  ["Bou Arfa", "بو عرفة"],
  ["Sidi Smai ++il", "سيدي إسماعيل"],
  ["Souk et Tnine Jorf el Mellah", "سوق و تنين جرف الملاح"],
  ["Mehdya", "المهدية"],
  ["Aïn Taoujdat", "عين تاوجدا"],
  ["Chichaoua", "الشيشاوة"],
  ["Tahla", "تاهلة"],
  ["Oulad Yaïch", "أولاد يعيش"],
  ["Moulay Bousselham", "مولاي بوسلهام"],
  ["Iheddadene", "إحدادن"],
  ["Missour", "ميسور"],
  ["Zawyat ech Cheïkh", "زاوية الشيخ"],
  ["Bouknadel", "بوقنادل"],
  ["Oulad Tayeb", "أولاد طيب"],
  ["Oulad Barhil", "أولاد برحيل"],
  ["Bir Jdid", "بئر جديد"],
  ["Tifariti", "تيفاريتي"],
];
const currentTime = new Date();

const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const year = currentTime.getFullYear();
const month = currentTime.getMonth() + 1; // Months are zero-based, so add 1
const day = currentTime.getDate();

// make a request to get praying times
function readSalatTime(city) {
  axios
    .get(
      `https://api.aladhan.com/v1/timingsByCity/${day}-${month}-${year}?city=${city}&country=morocco&method=1`
    )
    .then((response) => {
      console.log(response.data);
      let slatTimesJson = response.data["data"]["timings"];
      // for fill the praying times
      document.getElementById("cards").innerHTML = "";
      for (let i = 0; i < salateTimes.length; i++) {
        document.getElementById("cards").innerHTML += `
        <div id="card-item">
            <p class="card-item-text">${salateTimes[i][1]}</p>
            <hr />
            <p class="card-item-text">${slatTimesJson[salateTimes[i][0]]}</p>
          </div>
       `;
      }
      // for fill the hijri and miladi dates and time
      let dateJson = response.data["data"]["date"];
      document.getElementById("infos").innerHTML = "";
      document.getElementById("infos").innerHTML += `
          <p>هجري : ${dateJson["hijri"]["day"]} ${
        dateJson["hijri"]["month"]["ar"]
      } ${dateJson["hijri"]["year"]}</p>
          <p>ميلادي : ${dateJson["gregorian"]["day"]} ${
        monthsAR[dateJson["gregorian"]["month"]["en"]]
      } ${dateJson["gregorian"]["year"]}</p>
      <p>الوقت : ${hours}:${minutes}</p>
      `;
    })
    .catch((error) => {
      console.log(error);
    });
}

function fillCities() {
  for (let i = 0; i < moroccoCities.length; i++) {
    document.getElementById("cities").innerHTML += `
    <option value="${moroccoCities[i][0]}">${moroccoCities[i][1]}</option>
        `;
  }
}

readSalatTime("fes");
fillCities();
