import React, { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>

        {/* assign people prop with people state */}
        <List people={people} />

        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
};

export default App;
