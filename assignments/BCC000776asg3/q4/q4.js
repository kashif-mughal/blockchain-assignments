var citiesList = [];

citiesList[0] = "Karachi";
citiesList[1] = "Lahore";
citiesList[2] = "Islamabad";
citiesList[3] = "Rawalpindi";
citiesList[4] = "Islamabad";

document.write('<b>Cities List:</b><br>');

document.write(citiesList);
document.write('<br>');

var selectedCities = citiesList.slice(1,4);

document.write('<b>Cities List:</b><br>');
document.write(selectedCities);
