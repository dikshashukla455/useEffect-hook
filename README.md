# useEffect-hook-demo

In the above code, we're using the useEffect hook to update the title of the document with the current count whenever the count state variable changes. We pass an array as the second argument to useEffect containing the variables that the effect depends on. In this case, we only want the effect to run when the count variable changes, so we include it in the array.

Whenever the count variable changes, the useEffect callback function will run, updating the title of the document with the new count.

Try running this code in a React project and see how the document title changes as you click the "Increment Count" button!

Cypress Testing:

In the first test case, we simulate a user clicking the "Increment Count" button and check that the count increases by 1.

In the second test case, we check that the document title is updated correctly when the count changes. We check that the title initially contains "Count: 0", then simulate two clicks of the "Increment Count" button and check that the title changes to "Count: 1" and "Count: 2" respectively.

Note that we use the cy.get() command to get the title element and then use the should() command to check that it contains the expected value. This is a powerful feature of Cypress that allows us to easily test interactions between different parts of the app.
