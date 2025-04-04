import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [activeExample, setActiveExample] = useState(null);

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept key={index} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.keys(EXAMPLES).map((key, index) => (
              <TabButton
                handleClick={() => {
                  setActiveExample(key);
                  console.log(EXAMPLES[key].title, "clicked");
                }}
                isActive={activeExample == key}
                key={index}
              >
                <span>{EXAMPLES[key].title}</span>
              </TabButton>
            ))}
          </menu>
          <div id="tab-content">
            <h3>
              {(activeExample && EXAMPLES[activeExample]?.title) ||
                "Please select a button"}
            </h3>
            {activeExample && (
              <div>
                <p>{EXAMPLES[activeExample]?.description}</p>
                <pre>
                  <code>{EXAMPLES[activeExample]?.code}</code>
                </pre>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
