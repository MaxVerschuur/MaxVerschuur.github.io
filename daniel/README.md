# Persoonlijke introductie voor Daniel Dalen

Pagina: `https://maxverschuur.github.io/daniel/`

## Video toevoegen

1. Geef het definitieve bestand de naam **`intro.mp4`**.
2. Upload het naar **deze map**: `daniel/intro.mp4`.
3. Commit en push het bestand naar `main`, of gebruik GitHub **Add file → Upload files** in de map `daniel`.

Na de GitHub Pages-publicatie herkent de pagina het bestand bij een nieuw bezoek of na vernieuwen. Er hoeft niets aan de code te worden aangepast. Tot die tijd staat er een vormgegeven aankondiging zonder kapotte videospeler of afspeelknop.

Gebruik bij voorkeur een webgeschikte MP4 met **H.264-video en AAC-audio**, met fast-start metadata. De video start met geluid nadat Daniel op **Bekijk de video** klikt en speelt inline op Safari. De speler behoudt de volledige beeldverhouding en biedt normale afspeel- en schermvullende bediening. Een mislukte start toont een knop om opnieuw te proberen en een directe videolink.

De pagina staat los van de hoofdpagina, gebruikt dezelfde lokale huisstijlbestanden en verwijst met **Portfolio** en **Bekijk mijn werk** rechtstreeks naar `/`. De tekst en styling staan in `daniel/index.html`.

## Lokaal bekijken

Start vanuit de hoofdmap:

```bash
node serve.mjs
```

Bekijk daarna `/daniel/` op de lokale server. Ook zonder video blijft de pagina bruikbaar.
