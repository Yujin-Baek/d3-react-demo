import React from 'react';
import { Graph } from 'react-d3-graph';

const data = {
  nodes: [
    { id: '1', label: 'Node 1' },
    { id: '2', label: 'Node 2' },
    { id: '3', label: 'Node 3' },
    { id: '4', label: 'Node 4' },
    { id: '5', label: 'Node 5' },
    { id: '6', label: 'Node 6' },
    { id: '7', label: 'Node 7' }
  ],
  links: [
    { source: '1', target: '2' },
    { source: '1', target: '3' },
    { source: '1', target: '4' },
    { source: '1', target: '5' },
    { source: '1', target: '6' },
    { source: '1', target: '7' },
    { source: '2', target: '1' },
    { source: '2', target: '3' },
    { source: '2', target: '4' },
    { source: '2', target: '5' },
    { source: '2', target: '6' },
    { source: '2', target: '7' },
    { source: '3', target: '1' },
    { source: '3', target: '2' },
    { source: '3', target: '4' },
    { source: '3', target: '5' },
    { source: '3', target: '6' },
    { source: '3', target: '7' },
    { source: '4', target: '1' },
    { source: '4', target: '2' },
    { source: '4', target: '3' },
    { source: '4', target: '5' },
    { source: '4', target: '6' },
    { source: '4', target: '7' },
    { source: '5', target: '1' },
    { source: '5', target: '2' },
    { source: '5', target: '3' },
    { source: '5', target: '4' },
    { source: '5', target: '6' },
    { source: '5', target: '7' },
    { source: '6', target: '1' },
    { source: '6', target: '2' },
    { source: '6', target: '3' },
    { source: '6', target: '4' },
    { source: '6', target: '5' },
    { source: '6', target: '7' },
    { source: '7', target: '1' },
    { source: '7', target: '2' },
    { source: '7', target: '3' },
    { source: '7', target: '4' },
    { source: '7', target: '5' },
    { source: '7', target: '6' }
  ]
};

const options = {
  nodeHighlightBehavior: true,
  directed: true,
  height: 400,
  width: 800
};

const GraphComponent = () => {
  return (
    <div>
      <Graph id="graph-id" data={data} options={options} />
    </div>
  );
};

export default GraphComponent;
