import { motion } from 'framer-motion';
import './App.scss';
import * as React from 'react';

const spring = {
  type: 'spring',
  stiffness: 750,
  damping: 110,
};

const animateProps = {
  transition: spring,
  initial: 'hidden',
  animate: 'visible',
  variants: {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  },
};

function App() {
  const [boxes, setBoxes] = React.useState([1, 2, 3, 4]);
  const [flexValues, setFlexValues] = React.useState({
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  });

  function handleFlexValueChanges(e) {
    const name = e.target.name;
    setFlexValues((prevValue) => ({ ...prevValue, [name]: e.target.value }));
  }

  return (
    <main>
      <h1 style={{ textAlign: 'center' }}>Flexbox Visualizer</h1>
      <div className="container" style={flexValues}>
        {boxes.map((v) => {
          return (
            <motion.div
              key={v}
              className={`item item-${v}`}
              layout
              {...animateProps}
            >
              {v}
            </motion.div>
          );
        })}
      </div>

      <div className="controls">
        <div className="control">
          <label htmlFor="flexDirection">Direction</label>
          <select
            name="flexDirection"
            value={flexValues.direction}
            id="flexDirection"
            onChange={handleFlexValueChanges}
          >
            <option value="row">row</option>
            <option value="row-reverse">row-reverse</option>
            <option value="column">column</option>
            <option value="column-reverse">column-reverse</option>
          </select>
        </div>

        <div className="control">
          <label htmlFor="justifyContent">Justify Content</label>
          <select
            name="justifyContent"
            value={flexValues.justifyContent}
            id="justifyContent"
            onChange={handleFlexValueChanges}
          >
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
            <option value="space-evenly">space-evenly</option>
          </select>
        </div>

        <div className="control">
          <label htmlFor="alignItems">Align Items</label>
          <select
            name="alignItems"
            value={flexValues.alignItems}
            id="alignItems"
            onChange={handleFlexValueChanges}
          >
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="stretch">stretch</option>
            <option value="baseline">baseline</option>
          </select>
        </div>
      </div>
    </main>
  );
}

export default App;
