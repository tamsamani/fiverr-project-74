## Change log

---

here I will describe all changes in code.

### version 1.0.4 (14/12/2019)

---

make the webpage beauty. by add style & some animations.

**ADDED**

-   add `React-bootstrap` & `bootstrap` as UI Library
-	add Formater for Currency (to keep price vlaue clear)
-	add Styled Slider for `bootstrap`
-	add `Layout`


**CHANGED**

-	Update Inputs by `bootstrap` Style.
-	Change Select by Slider in Some Features.
-	Change General Page Partitions by add `<Layout />`
-	Change Loader Spinner instead static text.

### version 1.0.3 (13/12/2019)

---

added some controlers & features to app.

**ADDED**

-   add Feature for change & set initial Investement budget.
-   add Another Features for other Inputs (like fee, years ...).

**CHANGED**

-   update chart for no longer required update state of chart. (auto change on dispatch).
-   apply new features on state data view.

### version 1.0.2 (13/12/2019)

---

in this minor version I will change in API getting & store managmement app

**ADDED**

-   add Simple store & Reducer for managing data of API & apply on general Index file
-   add `axios` a lib for fetch data from api, it's helpfull
-   add `<Loader />` Component for wait till loading API data.
-   add `<Header />` Component for make menu and other navigation components seperated than routes.

**CHANGED**

-   `cones.json` no longer loaded as static from json in chart & table pages.
-   replace routes to `<Routes />` Component who wrapped whole routes seperatly.
-   move each component & module to Right folder instead keep all in `src/` root.
-   make API more Dynamilcally by make it change every 6 secs with looseless changes dependamt to real `cones` JSON file.
-   Update App, table, chart & Risk component by new Store managing.

**FIXED**

-   Fix non-exist options of Risk

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
