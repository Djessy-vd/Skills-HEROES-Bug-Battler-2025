# Skills Heroes CLI Bug Reporter

## Beschrijving

De Skills Heroes CLI-tool is een opdracht voor de Nederlandse vakwedstrijden.
Deze opdracht was een voorbereiding op de Skills Heroes-wedstrijden en ging over
het maken van een CLI-bugreporter.

## Benodigdheden

Zorg dat Node.js is geinstalleerd.

## Een bug aanmaken

Gebruik dit format:

```bash
node error-tool.js add-report "title" "beschrijving" priority status
```

Voorbeeld:

```bash
node error-tool.js add-report "gui" "de gui werkt niet" low open
```

## Bugs lezen

Alle open reports bekijken:

```bash
node error-tool.js list-reports open
```

Alle open reports met priority `low` bekijken:

```bash
node error-tool.js list-reports open low
```

Alle open reports met priority `high` bekijken:

```bash
node error-tool.js list-reports open high
```

Het algemene format is:

```bash
node error-tool.js list-reports status priority
```
