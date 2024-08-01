1. online react tool

    [code sand box](https://codesandbox.io)

    [online code editor](https://react.new)

    [Jonas' Resources page](https://codingheroes.io/resources/)

    [React](https://react.dev/) (Documentation that you should keep open at all times)

    [Create React App](https://create-react-app.dev/docs/getting-started) (This is how we'll setup our first app)

    [Vite](https://vitejs.dev/guide/?ref=jonas.io): Getting Started (For real-world React apps

    [Adding React URL to an HTML Document](https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html) (For the "Pure React" lecture)

2. Why React?

3. What is React?

4. React vs new React apps

5. Setting up new React apps

6. essential extensions

    1. eslint - automatically find errors or advices
    2. prettier - format code
    3. One Monokay Theme - color theme
    4. Material icons - dictionary tree
    5. settings
        - Auto save: OnFoucesChange
        - defualt formatter : prettier -code formatter
        - format On Save: true
        - eslint:Run - onSave
    6. Snippets settings: ./code/00-setup/snippets.json \
    7. quokka: realtime to monitor the results, etc, varialbles.

7. What is JSX?

-   **Declarative** syntax to **describe** what components **look like** and **how they work**
-   Components must **return** a block of JSX
-   Extension of JavaScript that allows us to **embed JavaScript, CSS and React components into HTML**
-   **Bebel** will help to convert JSX to JavaScript.
-   Each JSX element is **converted** to a React.createElement function call
-   we could use React **without JSX**

8. **IMPERATIVE (命令式)** : How to do things

-   Manual Dom element selections and DOM traversing
-   Step-by-step DOM mutations until we reach the desired UI

9. **DECLARATIVE （声明式）** : what we want

-   Describe what UI should look like using JSX, **base on current data**
-   React is an **abstraction** away from DOM: \*\*we never touch the DOM"
-   Instead, we think of the UI as a **reflection of the current data**

10. **RULES** OF JSX: general jsx rules

-   Statements are **not allowed** (if/else, for, switch)
-   JSX produces a **JavaScript expression**
    -   We can place \*\*other pieces of JSX inside `{}`
    -   We can write JSX **anywhere** inside a component (in if/else, assign to variables, pass it into functions)
-   A piece of JSX can only have **one root element.** If you need more, use `<React.Fragment>` or the short `<>`

11. `STATE`

> Data that a component **can hold over time**, necessary for information that it needs to **remmeber** throughout the app's lifecycle. --- **Component's memory**

> Updating **component state** triggers React to **re-render the component**

-   Update the componnet's view (by re-rednering it)
-   Persist local variables between renders

12. STATE VS. PROPS

| State                                       | PROPS                                                                                                  |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Internal** data, owned by component       | **External** data, owned by parent component                                                           |
| Component "memory"                          | Similar to function paremeters                                                                         |
| Can be updated by the component itself      | Read-only                                                                                              |
| Updating state cause component to re-render | **Receiving new props causes component to re-render** Usually when the parent's state has been updated |
| Used to make components interactive         | Used by parent to cinfigure child component ("settings")                                               |

13. The **Children** prop

-   The children prop allow us **to pass JSX into an element** (besides regular props)
-   Essential tool to make **reusable** and **configurable** components (especially component **content**)
-   Really useful for **generic** components that **do not know their content** before used (e.g. modal)

14. Key Prop

-   Special prop that we use to tell the diffing algorithm that an element is **unique**
-   Allows React to **distinguish** between multiple instances of the same compoinent type
-   when a key **stays the same across renders**, the element will be kept in the DOM (even if the position in the tree changes)
    > Use Keys in Lists
-   When a key **changes between renders**, the element will be destroyed and a new one will be created (even if the position in the tree is the same as before)
    > **Using keys to reset state**
-   JSX works essentially like HTML, but we can enter "**JavaScript mode**' by using `{}` (for text or attributes)
-   We can place **JavaScript expressions** inside {}.

    > Example: reference variables, create arrays or objects, [].map(), ternary operator

-   Statements are **not allowed** (if/else, for, switch)
-   JSX produces a **JavaScript expression**
    -   We can place \*\*other pieces of JSX inside `{}`
    -   We can write JSX **anywhere** inside a component (in if/else, assign to variables, pass it into functions)
-   A piece of JSX can only have **one root element.** If you need more, use `<React.Fragment>` or the short `<>`
