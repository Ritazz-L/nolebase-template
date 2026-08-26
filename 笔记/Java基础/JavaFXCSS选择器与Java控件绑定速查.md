## 一、常用控件与CSS选择器对照表

| 控件名称          | Java 类名                            | CSS 选择器         | 常用CSS属性示例                                          |
| ------------- | ---------------------------------- | --------------- | -------------------------------------------------- |
| Button        | javafx.scene.control.Button        | .button         | -fx-background-color, -fx-text-fill                |
| Label         | javafx.scene.control.Label         | .label          | -fx-text-fill, -fx-font-size                       |
| TextField     | javafx.scene.control.TextField     | .text-field     | -fx-background-color, -fx-prompt-text-fill         |
| PasswordField | javafx.scene.control.PasswordField | .password-field | -fx-background-color, -fx-prompt-text-fill         |
| TextArea      | javafx.scene.control.TextArea      | .text-area      | -fx-background-color, -fx-control-inner-background |
| CheckBox      | javafx.scene.control.CheckBox      | .check-box      | -fx-text-fill, -fx-mark-color                      |
| RadioButton   | javafx.scene.control.RadioButton   | .radio-button   | -fx-text-fill, -fx-mark-color                      |
| ToggleButton  | javafx.scene.control.ToggleButton  | .toggle-button  | -fx-background-color, -fx-text-fill                |
| ComboBox      | javafx.scene.control.ComboBox      | .combo-box      | -fx-background-color, -fx-mark-color               |
| ListView      | javafx.scene.control.ListView      | .list-view      | -fx-background-color, -fx-control-inner-background |
| TableView     | javafx.scene.control.TableView     | .table-view     | -fx-background-color, -fx-table-cell-border-color  |
| TreeView      | javafx.scene.control.TreeView      | .tree-view      | -fx-background-color, -fx-control-inner-background |
| ProgressBar   | javafx.scene.control.ProgressBar   | .progress-bar   | -fx-accent, -fx-background-color                   |
| Slider        | javafx.scene.control.Slider        | .slider         | -fx-accent, -fx-control-inner-background           |
| DatePicker    | javafx.scene.control.DatePicker    | .date-picker    | -fx-background-color, -fx-mark-color               |
| ScrollPane    | javafx.scene.control.ScrollPane    | .scroll-pane    | -fx-background-color, -fx-background-insets        |
| TabPane       | javafx.scene.control.TabPane       | .tab-pane       | -fx-tab-min-width, -fx-background-color            |
| Accordion     | javafx.scene.control.Accordion     | .accordion      | -fx-background-color, -fx-padding                  |
| SplitPane     | javafx.scene.control.SplitPane     | .split-pane     | -fx-background-color, -fx-padding                  |
| MenuBar       | javafx.scene.control.MenuBar       | .menu-bar       | -fx-background-color, -fx-padding                  |
| ContextMenu   | javafx.scene.control.ContextMenu   | .context-menu   | -fx-background-color, -fx-background-radius        |
| Tooltip       | javafx.scene.control.Tooltip       | .tooltip        | -fx-background-color, -fx-text-fill                |
| ImageView     | javafx.scene.image.ImageView       | .image-view     | -fx-effect, -fx-opacity                            |
| Pane          | javafx.scene.layout.Pane           | .pane           | -fx-background-color, -fx-padding                  |
| StackPane     | javafx.scene.layout.StackPane      | .stack-pane     | -fx-background-color, -fx-alignment                |
| HBox          | javafx.scene.layout.HBox           | .h-box          | -fx-spacing, -fx-alignment                         |
| VBox          | javafx.scene.layout.VBox           | .v-box          | -fx-spacing, -fx-alignment                         |
| GridPane      | javafx.scene.layout.GridPane       | .grid-pane      | -fx-hgap, -fx-vgap                                 |
| BorderPane    | javafx.scene.layout.BorderPane     | .border-pane    | -fx-padding, -fx-background-color                  |
| FlowPane      | javafx.scene.layout.FlowPane       | .flow-pane      | -fx-hgap, -fx-vgap                                 |
| TilePane      | javafx.scene.layout.TilePane       | .tile-pane      | -fx-hgap, -fx-vgap                                 |
| AnchorPane    | javafx.scene.layout.AnchorPane     | .anchor-pane    | -fx-background-color, -fx-padding                  |
## 二、常用CSS属性速查表

### 2.1外观属性

| CSS 属性                | 说明                       | 用法示例                                                            |
| --------------------- | ------------------------ | --------------------------------------------------------------- |
| -fx-background-color  | 设置背景颜色，支持渐变、多色层叠         | -fx-background-color: #3498db;                                  |
| -fx-text-fill         | 设置文本颜色                   | -fx-text-fill: white;                                           |
| -fx-font-size         | 设置字体大小                   | -fx-font-size: 14px;                                            |
| -fx-font-family       | 设置字体族                    | -fx-font-family: "Microsoft YaHei";                             |
| -fx-font-weight       | 设置字体粗细                   | -fx-font-weight: bold;                                          |
| -fx-background-radius | 设置背景圆角半径                 | -fx-background-radius: 5;                                       |
| -fx-border-color      | 设置边框颜色                   | -fx-border-color: #ccc;                                         |
| -fx-border-width      | 设置边框宽度                   | -fx-border-width: 1;                                            |
| -fx-border-style      | 设置边框样式                   | -fx-border-style: solid dashed;                                 |
| -fx-border-radius     | 设置边框圆角半径                 | -fx-border-radius: 5;                                           |
| -fx-padding           | 设置内边距（上 右 下 左）           | -fx-padding: 10 15 10 15;                                       |
| -fx-effect            | 设置特效（阴影、模糊等）             | -fx-effect: dropshadow(gaussian, rgba(0,0,0,0.3), 10, 0, 0, 2); |
| -fx-shadow            | 非标准属性，通常通过 -fx-effect 实现 | 使用 -fx-effect: dropshadow(...) 代替                               |
| -fx-glow              | 非标准属性，通常通过 -fx-effect 实现 | 使用 -fx-effect: glow(...) 代替                                     |
| -fx-blend-mode        | 设置混合模式                   | -fx-blend-mode: multiply;                                       |
### 2.2布局属性

| CSS 属性          | 说明                        | 用法示例                        |
| --------------- | ------------------------- | --------------------------- |
| -fx-pref-width  | 设置首选宽度                    | -fx-pref-width: 200px;      |
| -fx-pref-height | 设置首选高度                    | -fx-pref-height: 40px;      |
| -fx-min-width   | 设置最小宽度                    | -fx-min-width: 100px;       |
| -fx-max-width   | 设置最大宽度                    | -fx-max-width: Infinity;    |
| -fx-alignment   | 设置容器内子节点对齐方式              | -fx-alignment: center-left; |
| -fx-hgrow       | 设置水平增长优先级                 | -fx-hgrow: always;          |
| -fx-vgrow       | 设置垂直增长优先级                 | -fx-vgrow: always;          |
| -fx-spacing     | 设置子节点间距                   | -fx-spacing: 10;            |
| -fx-fill-height | 是否填充高度（FlowPane/TilePane） | -fx-fill-height: true;      |
| -fx-fill-width  | 是否填充宽度（FlowPane/TilePane） | -fx-fill-width: true;       |
### 2.3 状态伪类选择器

| 伪类选择器          | 说明          | 用法示例                                                       |
| -------------- | ----------- | ---------------------------------------------------------- |
| :hover         | 鼠标悬停时触发     | .button:hover { -fx-background-color: #2980b9; }           |
| :focused       | 获得焦点时触发     | .text-field:focused { -fx-border-color: #3498db; }         |
| :pressed       | 鼠标按下时触发     | .button:pressed { -fx-background-color: #1c6ea4; }         |
| :disabled      | 控件被禁用时触发    | .button:disabled { -fx-opacity: 0.5; }                     |
| :selected      | 控件被选中时触发    | .toggle-button:selected { -fx-background-color: #27ae60; } |
| :empty         | 列表/表格无数据时触发 | .list-view:empty { -fx-background-color: #f0f0f0; }        |
| :first-of-type | 同类型第一个子节点   | .list-cell:first-of-type { -fx-border-width: 0 0 1 0; }    |
| :last-of-type  | 同类型最后一个子节点  | .list-cell:last-of-type { -fx-border-width: 0; }           |
| :odd           | 奇数行/项       | .table-row-cell:odd { -fx-background-color: #f9f9f9; }     |
| :even          | 偶数行/项       | .table-row-cell:even { -fx-background-color: white; }      |
## 常见样式场景示例

### 1. 圆角渐变按钮样式（含:hover和:pressed状态）
```
.gradient-button {  
    -fx-background-color: linear-gradient(to bottom, #3498db, #2980b9);  
    -fx-text-fill: white;  
    -fx-font-size: 14px;  
    -fx-background-radius: 8;  
    -fx-padding: 10 24 10 24;  
    -fx-cursor: hand;  
    -fx-effect: dropshadow(gaussian, rgba(0,0,0,0.2), 6, 0, 0, 2);  
}  
  
.gradient-button**_:hover_** {  
    -fx-background-color: linear-gradient(to bottom, #2980b9, #1c6ea4);  
    -fx-effect: dropshadow(gaussian, rgba(0,0,0,0.3), 8, 0, 0, 3);  
}  
  
.gradient-button**_:pressed_** {  
    -fx-background-color: linear-gradient(to bottom, #1c6ea4, #155a8a);  
    -fx-effect: dropshadow(gaussian, rgba(0,0,0,0.2), 3, 0, 0, 1);  
}
```

**Java绑定：**
::: tip
Button btn = **new** Button("渐变按钮");  
btn.getStyleClass().add("gradient-button");
:::
### 2. 带底部边框的文本输入框（仿Material Design风格）

```
.material-field {  
    -fx-background-color: transparent;  
    -fx-border-color: transparent transparent #bdc3c7 transparent;  
    -fx-border-width: 0 0 2 0;  
    -fx-padding: 8 0 8 0;  
    -fx-font-size: 14px;  
    -fx-prompt-text-fill: #95a5a6;  
}  
  
.material-field**_:focused_** {  
    -fx-border-color: transparent transparent #3498db transparent;  
}  
  
.material-field**_:invalid_** {  
    -fx-border-color: transparent transparent #e74c3c transparent;  
}
```

**Java绑定：**
::: tip
TextField field = **new** TextField();  
field.setPromptText("请输入用户名");  
field.getStyleClass().add("material-field");
:::
### 选择器优先级规则

JavaFX CSS 遵循以下优先级顺序（从高到低）：

1. **内联样式**（setStyle()）

2. **ID** **选择器**（#myButton）

3. **类选择器**（.custom-button）

4. **元素/类型选择器**（.button）

```java 示例

_/* 优先级最低：类型选择器 */_  
.button {  
    -fx-background-color: gray;  
}  
  
_/* 优先级中等：类选择器 */_  
.custom-button {  
    -fx-background-color: blue;  
}  
  
_/* 优先级较高：ID选择器 */_  
#submitBtn {  
    -fx-background-color: green;  
}

Button btn = **new** Button("测试");  
btn.setId("submitBtn");  
btn.getStyleClass().add("custom-button");  
_// 最终背景色为 green（ID选择器胜出）_  
  
_// 若添加内联样式，则内联样式胜出：_  
btn.setStyle("-fx-background-color: red;");
```