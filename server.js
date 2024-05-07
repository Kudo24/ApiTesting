// Import required modules
const express = require("express");

// Create an instance of Express
const app = express();

// Define sample static data
const faqsData = [
  { faqs_id: 1, question: "Question 1", answer: "Answer 1" },
  { faqs_id: 2, question: "Question 2", answer: "Answer 2" },
  { faqs_id: 3, question: "Question 3", answer: "Answer 3" },
];

const namesData = [
  { id: 1, name: "alistaire", age: 21 },
  { id: 2, name: "andrei", age: 22 },
  { id: 3, name: "dennis", age: 23 },
  { id: 4, name: "angelo", age: 24 },
  { id: 5, name: "banjo", age: 25 },
];

app.get("/", (req, res) => {
  res.json({ message: "connected" });
});
app.get("/names", (req, res) => {
  res.json(namesData);
});
// Endpoint to get all FAQs
app.get("/faqs", (req, res) => {
  res.json(faqsData);
});

// Endpoint to get a specific FAQ by ID
app.post("/query", (req, res) => {
  const id = req.body.faqs_id;
  const faq = faqsData.find((item) => item.faqs_id === id);
  if (faq) {
    res.json(faq);
  } else {
    res.status(404).json({ error: "FAQ not found" });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
