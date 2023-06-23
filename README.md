# react-gauge-meter
## Install

```bach
$ npm install react-gauge-meter
```

## Usage

For Demo, you can see: [https://kokim2022.github.io/react-gauge-meter/](https://kokim2022.github.io/react-gauge-meter/)

```ts
import ReactGaugeMeter from 'react-gauge-meter'; 

<ReactGaugeMeter
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

## Live
https://kokim2022.github.io/react-gauge-meter

## LICENSE

MIT@[kokim2020](https://github.com/kokim2022).
