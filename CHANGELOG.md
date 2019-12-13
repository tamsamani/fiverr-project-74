## Change log

---

here I will describe all changes in code.

### version 1.0.2 (13/12/2019)

---

in this minor version I will change in API getting & store managmement app

**ADDED**

-   add `axios` a lib for fetch data from api, it's helpfull
-   add `<Loader />` Component for wait till loading API data.
-   add `<Header />` Component for make menu and other navigation components seperated than routes.

**CHANGED**

-   `cones.json` no longer loaded as static from json in chart & table pages.
-   replace routes to `<Routes />` Component who wrapped whole routes seperatly.

**FIXED**

-   Fix non-exist option of Risk

### version 1.0.1 (11/12/2019)

---

in this version I will refactoring the code & make it enhanced.

**ADDED**

-   add prettier standard code for react : it's will help keep code formated in correct way.
-   add babel proposal class properties for make auto bind & auto class properties assignments.

**CHANGED**

-   correct variable declaration from `var` to `let` in all files, because React work in strict mode.
-   change declaration of `let` to `const` for objects.
-   change files `utils.js` some with enhanced and clear expression + change not efficiency loops by array itterators functions.
-   change in class constructor that's not required.
