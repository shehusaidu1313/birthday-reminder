import React, { useState } from "react";
import data from "./data";
import List from "./List"; // it is only naemd export that need curly braces when importing
function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3> {people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([], console.log("cleared"))}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
