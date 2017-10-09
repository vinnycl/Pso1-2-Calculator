sectionIds = new Array("Viridia", "Greenill", "Skyly", "Bluefull", "Purplenum", "Pinkal", "Redria", "Oran", "Yellowboze", "Whitill");
zero = "FPZdnx2(<";
one = "GQeoy3)=[";
two = "HRfpz4*\\> ";
three = "ISgq5!+{]?";
four = "JThr6@^}\",";
five = "AKUis7#-_|";
six = "BLVjt8~$\'.";
seven = "CMWaku9%/";
eight = "DNXblv0&:";
nine = "EOYcmw1`";

function getNumberForChar(char) {
  if (zero.indexOf(char) != -1) return 0;
  if (one.indexOf(char) != -1) return 1;
  if (two.indexOf(char) != -1) return 2;
  if (three.indexOf(char) != -1) return 3;
  if (four.indexOf(char) != -1) return 4;
  if (five.indexOf(char) != -1) return 5;
  if (six.indexOf(char) != -1) return 6;
  if (seven.indexOf(char) != -1) return 7;
  if (eight.indexOf(char) != -1) return 8;
  if (nine.indexOf(char) != -1) return 9;
  console.log("No match for " + char);
}

function charNameChanged() {
  charName = document.getElementById("charName").value;
  sectionId = document.getElementById("sectionId");
  logoId = document.getElementById("logoId");
  tekkerId = document.getElementById("tekkerId");
  listId = document.getElementById("listId");
  if (charName.length == 0) sectionId.removeChild(sectionId.firstChild);
  else {
    result = 0;
    for (i = 0; i < charName.length; i++) {
      result += getNumberForChar(charName.charAt(i));
    }
    while (result > 9) result -= 10;
    text = document.createTextNode(sectionIds[result]);
    if (sectionId.childNodes.length == 1) sectionId.removeChild(sectionId.firstChild);
    sectionId.appendChild(text);
    logoId.src="id/"+sectionId.innerText+".gif";
    tekkerId.src="tekker/tekker-"+sectionId.innerText+".gif";
    listId.className = sectionId.innerText;
  }
}