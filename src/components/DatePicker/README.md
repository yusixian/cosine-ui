## 组件介绍

### DatePicker组件
DatePicker 组件开发
代码及在线预览地址：[DatePicker（by cos）](https://codepen.io/yusixian/pen/wvPLgWN)

1. 日、月、年选择面板的实现交互：
a.日面板实现：实现点击日期选择具体日期，点击头部面部左右箭头可前往上一年/下一年、上一月/下一月
b.月面板实现：点击日面板头部月份进入，点击月份则选择具体月份并返回日面板，点击头部面部左右箭头前往上一年/下一年
c.年面板实现：点击日面板头部月份进入，以十年为区间，点击年份则选择该年并返回日面板，点击头部面部左右箭头前往上个十年/下个十年
d.根据输入框输入实时变换日期
2. 对外API的实现
a. 支持默认日期的设置 `defaultDate` 通过设置defaultDate为moment对象实现默认日期的设置
b. 支持日期的获取 `onDateChange` 通过日期变化的回调函数获取当前日期，返回moment对象
示例：
```js
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nowDate: 'No Value!'
        }
    }
    handleDateChange(date) {
        this.setState({nowDate: date.format('YYYY-MM-DD')});
    }
    render() {
        return (
            <div className="App">
                <div>nowDate: {this.state.nowDate}</div>
                <DatePicker defaultDate={moment()} onDateChange={(date) => this.handleDateChange(date)} />
            </div>
        );
    }
}
```
3. 面板展示与切换动画
通过 `picker-panel` 中初始透明度 `opacity`为 0，变化原点`transform-origin`为左上角，初始大小为 `scale(0)` ，通过自定义属性 `data-active` 为true控制显示
```css
.picker-panel {
    z-index: 10;
    position: absolute;
    background-color: white;
    top: 30px;
    left: 0;
    width: 300px;
    height: 300px;
    border-radius: 3px;
    border: 1px solid $gray-4;
    box-shadow:2px 2px 10px rgba(0, 0, 0, 0.4);

    display: flex;
    flex-direction: column;

    opacity: 0;
    transform: scale(0);
    transform-origin: top left;
    transition: all 300ms ease-in-out;
    &[data-active=true] {
        transform: scale(1);
        opacity: 1;
    }
}
```
