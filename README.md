# react-gauge-meter
## Install

```bach
$ npm install react-gauge-meter
```

## Usage

Code of a simple demo code showed below. For more example can see: [https://git.hust.cc/echarts-for-react/](https://git.hust.cc/echarts-for-react/)

```ts
import ReactGuageMeter from 'react-gauge-meter';  // or var ReactECharts = require('echarts-for-react');

<ReactGuageMeter
  firstColor="red"
  secondColor="green"
  thirdColor="blue"
  value={50}
  style={{height: '500px', width: '100%'}}
/>
```
## Props of Component

 - **`firstColor`** (required, color)
for example: #67e0e3 or red
 - **`secondColor`** (required, color)

 - **`thirdColor`** (required, color)

 - **`style`** (optional, object)

the `style` of echarts div. `object`, default is {height: '300px'}.

## LICENSE

MIT@[kokim2020](https://github.com/kokim2022).
