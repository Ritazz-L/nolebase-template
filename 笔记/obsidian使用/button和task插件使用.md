# Button和Tasks的插件使用
## Button
### 概述
`Button`为 Obsidian 引入了创新的交互方式，可以在笔记中轻松创建各种功能按钮。不仅能够执行 Obsidian 的内置命令，还能打开链接、进行计算、动态管理笔记结构，甚至支持执行 JavaScript 脚本命令，日常使用率高。
### 基础设置
可以在obsidian第三方插件下载安装，也可以直接到作者的github里下载。
#### 创建按钮
`ctrl + p`打开命令面板，输入`button`，选择`button maker`就可以创建了。
![[笔记/obsidian使用/创建按钮.png]]
![[笔记/obsidian使用/按钮列表.png]]
日常的基础配置只需要设置好四个就可以：名字、类型、id、颜色。、
类型基本上常用的就是`command`命令、`link`网址、`template`模板和`calculate`计算这四种。
#### 如何使用
除了用obsidian的命令创建按钮外，其实可以用简单的代码直接写，也非常方便。
进入编辑模式后，你会发现，你用命令建添加的按钮，其实就是一个简单的代码。
##### 常用语法

| 基本语法    | 描述                                     | 选项                                           |
| ------- | -------------------------------------- | -------------------------------------------- |
| name    | 按钮命名                                   | any string                                   |
| type    | 执行命令或是跳转页面                             | command, link, template, calculate           |
| action  | 根据按钮类型的不同，它可以是命令、链接、模板或等式              |                                              |
| color   | 按钮的颜色设置                                | blue, green, red, purple. yellow             |
| class   | 向按钮添加一个类以获得更多自定义样式。添加自定义类将删除默认类        | a string representing your custom class      |
| ID      | 向按钮添加自定义id以进行样式化                       | 表示id的字符串                                     |
| remove  | 如果为true，则在命令运行后移除按钮                    |                                              |
| replace | 在按钮上方指定一个节标题，它将从节中删除内容（并使用prepend模板替换） | The section header directly above the button |
##### 举例说明
###### 创建一个按钮，打开你想跳转的网址
``` button
name 按钮名称
type link 
action （需要跳转的网页）
```
###### 在主仪表盘内，做一个打开当天日记的按钮，如果没有就直接创建
```button
name 打开日记（名称）
type append command（类型）
action 日记: 打开/创建今天的日记
color blue（设置想要的颜色）
customTextColor #452685（按钮中的文字颜色）
```
###### 根据模板创建
```button
name 通过模板建立新笔记
type note(/newnote1) template
action 模板
```
::: tip 小贴士
1. prepend template: 在按钮前面插入指定样版内容  
2. append template: 在按钮后面插入指定样版内容  
3. note(文档名、路径) template: 用指定的模板建立新笔记到指定职位  
4. 使用Templater时要记得勾选【Trigger Templater on new file creation】
:::
## Tasks
### 概述
这是一个任务管理工具，可以创建、管理和查询任务。Tasks 插件支持设置截止日期、创建重复任务、使用子任务清单等功能，还能为任务添加优先级、计划日期等元数据，以增强管理功能。
### 功能
#### 1.创建任务
通过快捷键`ctrl + p` 命令行输入task，选择`create or edit task`创建任务。
![[笔记/obsidian使用/命令行输入任务插图.png]]![[笔记/obsidian使用/task创建页面.png]]
可以根据需求，创建和计划当天或是本周的任务。
也可以设置obsidian的快捷键，把当前的行内容转换成待办内容。
![[笔记/obsidian使用/转换待办内容.png]]
#### 2.查询任务
在创建的笔记中，可以通过tasks插件提供的代码块来查询相关任务，并集中显示。
##### 常用语法
- `done`  已完成
- `not done`未完成
- `done (in, before, after, in or before, in or after) +日期`完成日期，日期除了用具体日期外，也可以用`today`，`this week`，`next week`等。
- `no done date`没有完成日期
- `done date is invalid`无效完成日期
- `no due date`没有到期日期
- `due (on, before, after, on or before, on or after) <date>`过滤日期
- `is recurring` 、 `is not recurring`是否重复
- `priority is (above, below, not)? (lowest, low, none, medium, high, highest)`优先级登记
- `has tags`  、`no tags`是否有标签
- `path includes`按照文件路径筛选
- `cancelled (on, before, after, on or before, on or after) <date>`取消日期
- `status.type (is, is not) (TODO, DONE, IN_PROGRESS, CANCELLED, NON_TASK)`状态
- `sort by+条件`根据条件排序
::: tip 全局标签设置
可以在插件中设置一个全局标签，这样插件可以只搜索你需要的标签任务
:::
##### 举例说明
个人日常常用的话，只需要用好这几个就够了
- `not done` 筛选未完成任务
- `done`筛选已完成任务
- `due before` 筛选某个日期之前的任务，如 “due before today” 可筛选出逾期任务
- `sort by` 用于按优先级、日期等字段排序，如 “sort by priority” 按优先级排序，“sort by due” 按截止日期排序。
- `重复任务管理`：对于日常习惯追踪或周期性工作，可设置重复任务，如 “- () 每天写 500 字 🔁 every day”，任务完成后，插件会自动生成下一次的任务记录。
###### 今日待办模板
``` tasks 
not done 
due today 
sort by priority asc //按优先级排序，没有需求可以不写
sort by due asc //按日期排序
```
###### 今日已完成任务模板
``` tasks 
done 
due today 
```
###### 逾期未完成模板
``` tasks 
not done 
due before today 
sort by due asc
```
###### 查询明天的计划安排
``` tasks 
not done 
scheduled on tomorrow 
```

