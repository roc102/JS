// 3. Promises and Asynchronous JavaScript:

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Some data";
      resolve(data);
    }, 1000);
  });
};

fetchData()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//   Fetching data from an API using promises:

fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/*
    Scenario: Online Payment Processing

        * Synchronous Request (Not Ideal): *

        Imagine you're trying to make a payment on an online shopping website.
        With synchronous requests, when you click "Pay Now," the entire website waits for the payment to be processed before anything
        else can happen.
        If there's a delay in processing the payment, the entire page freezes,
        and you're stuck waiting without being able to do anything else on the website.


       * Asynchronous Request (Preferred): *

        Now, imagine the same scenario, but with asynchronous requests.
        When you click "Pay Now," the website starts processing your payment in the background without freezing the page.
        This means you can continue browsing the website or even leave the page while the payment is being processed.
        Once the payment is successfully processed, you receive a confirmation without any interruption to your browsing experience.

  */
