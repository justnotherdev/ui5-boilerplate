# README

## Este es un README para el proyecto "<%= name %>"

---

Este es un proyecto base UI5 configurado para desarrollo local al cual se le aplicaron ciertas guias de diseño para mantener una estructura del código estándar para todos los desarrolladores.

Se configuró y probó principalmente en Visual Studio Code (VS Code)

## Detalles del Proyecto

---

-   Versión de UI5 Utilizada: **SAPUI5@1.82.0**

-   Liberias UI5 Utilizadas:

    1.  ui5-middleware-livereload

        -   Permite que al guardar un archivo el navegador refresque automaticamente y refleje el camnbio realizado.

    2.  ui5-middleware-index

        -   Permite indicar el archivo .html que el proyecto utilizara como index al ejecutar el comando _ui5 serve_. (Fue requerido para completar la configuración del livereload).

    3.  ui5-middleware-livetranspile

        -   Permite **que al guardar un archivo** se transpile el codigo JavaScript de ES6+ a ES5 para compatibilidad con un mayor rango de navegadores.

    4.  ui5-task-transpile
        -   Permite definir un task en el archivo ui5.yaml para que al ejecutarse el build del proyecto este se transpile a ES5.

-   Gestor de Paquetes:

    -   Yarn -> ( [¿Porque no NPM?](https://www.whitesourcesoftware.com/free-developer-tools/blog/npm-vs-yarn-which-should-you-choose/#:~:text=During%20the%20installation%20process%2C%20Yarn,download%20of%20previously%20downloaded%20packages) )

-   VS Code Plugins
    -   Prettier
    -   ESLint
    -   EditorConfig for VS Code

Se utilizaron configuraciones para Prettier, ESLint y EditorConfig para poder mantener un código uniforme tanto al desarrollar como al enviar al repositorio. [¿Cual es la diferencia?](https://stackoverflow.com/questions/48363647/editorconfig-vs-eslint-vs-prettier-is-it-worthwhile-to-use-them-all)

-   CommitLint & Husky

    -   Se configuró commit commitlint y husky para definir una estructura para los commits a realizar.

    -   Esta estructura consta de dos elementos principales, uno llamado type y otro subject. El type es la razón principal de este commit, se especifica al inicio del mensaje y estos pueden ser:

        -   **feat, fix, refactor, test, setup**

    -   Por otra parte, el subject es el mensaje en si, detallando brevemente lo que se añadió, arregló, refactorizó, testeó o configuró.

    ```bash
    git commit -m "fix: error en generación de archivo pdf"
    ```

    -   De ingresar otra estructura no se permitirá hacer un commit al repositorio.
