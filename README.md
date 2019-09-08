# react-render-vs-portal
## Measurement method
Mount React components with a short text to 100 of `<div>` elements by `React.render` and `React.createPortal` and measure its time of mounting by Chorome's performance tool.

## Result
### ReactDOM.createPortal: 102.5ms
![image](https://github.com/neetbox/react-render-vs-portal/blob/master/portal.png)

### ReactDOM.render: 163.3ms
![image](https://github.com/neetbox/react-render-vs-portal/blob/master/render.png)
