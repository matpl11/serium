# Serium - generator blankietów ścisłego zarachowania
Oprogramowanie ma pozwalać na generowanie blankietów druków ścisłej rejestracji (takich jak na przykład blankiety do drukowania biletów komunikacji miejskiej czy kolejowej).
Na razie jednak długa droga do tego, żeby stał się użyteczny.

Objaśnienia zostaną zamieszczone w najbliższym czasie.


## Rozwiązywanie problemów

* Generowanie pliku PDF skutkuje wyrzuceniem błędu aplikacji i crasha.
Wyeksportuj zmienną środowiskową
`export OPENSSL_CONF=/dev/null`