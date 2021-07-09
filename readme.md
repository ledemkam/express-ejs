EJS installieren npm i ejs

Registrieren wir die view engine

app.set('view engine', "ejs") app.set('view engine', "NAME DER ENGINE")

express holt sich die view engine selbstständig aus den node_modules

Standartordner für Template Dateien: views

Wenn man einen anderen Ordner haben wollte: app.set('views', 'deinNeuerOrdner')

Neu: res.render('DateiName') ohne Dateiendung. Die weiß express durch das .set('view engine') render erzeugt eine html Datei aus der Template Datei

EJS-Tags <% %> : umgibt "JS" / Funktionalität <%= %> : Bekommen wir Inhalt in unser HTML <%# %> : Kommentar, keine Ausgabe, keine Ausführung

<% if (isLoggedIn) { %> <%= name %> <% } else { %> Not logged in <% } %>

Partials / Components befinden sich in partials Ordner wir importieren sie mit <%- include('RELATIVER/PFAD/ZUR/DATEI') %>
