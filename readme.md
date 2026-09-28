** Skills heroes Cli tool bug repport

beschrijving 
de skills heroes cli tool is een opdracht voor het nederlandse vak kampioenschappen 
deze opdracht is een voor berijding geweest op de wetstrijden van skills heroes 
deze opdracht ging over het maken van een cli bug reporter tool 
bekijk onderstaand informatie om te kijken hoe je hem moet gebruiken

-- om deze cli te gebruiken zorg dat je node js hebt geinstaleerd

zodra je node js hebt kan je deze commands gebruiken om een bug aan te maken en om te zien 

gebruik om een bug aan te maken dit format 
node error-tool.js add-report "gui" "de gui werkt niet" low open
--node error-tool.js add-report "title" "beschrijving" priority status

om de errors te lezen gebruik dit format
node error-tool.js list-reports open -- gebruik deze om alle open reports te zien
node error-tool.js list-reports open low -- gebruik deze om alle low geports te zien
node error-tool.js list-reports open high -- gebruik deze om alle high reports te zien
format -- node error-tool.js list-reports status priority
