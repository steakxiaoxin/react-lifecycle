react 父子组件的生命周期执行顺序

#### 首次渲染

```js
父 constructor
父 getDerivedStateFromProps
父 render
    子 constructor
    子 getDerivedStateFromProps
    子 render
    子 componentDidMount
父 componentDidMount
```



#### 父组件数据修改触发重渲染

```js
父 getDerivedStateFromProps
父 shouldComponentUpdate
父 render
    子 getDerivedStateFromProps
    子 shouldComponentUpdate
    子 render
    子 getSnapshotBeforeUpdate
父 getSnapshotBeforeUpdate
	子 componentDidUpdate, snapshot: 1
父 componentDidUpdate, snapshot: 1
```



#### 子组件数据修改触发重渲染

```js
    子 getDerivedStateFromProps
    子 shouldComponentUpdate
    子 render
    子 getSnapshotBeforeUpdate
    子 componentDidUpdate, snapshot: 1
```



#### 父组件调用forceUpdate

```js
父 getDerivedStateFromProps
// 父 shouldComponentUpdate 不执行
父 render
    子 getDerivedStateFromProps
    子 shouldComponentUpdate
    子 render
    子 getSnapshotBeforeUpdate
父 getSnapshotBeforeUpdate
	子 componentDidUpdate, snapshot: 1
父 componentDidUpdate, snapshot: 1
```



#### 子组件调用forceUpdate

```js
    子 getDerivedStateFromProps
    // 子 shouldComponentUpdate 不执行
    子 render
    子 getSnapshotBeforeUpdate
    子 componentDidUpdate, snapshot: 1
```



#### 销毁

```js
父 componentWillUnmount
	子 componentWillUnmount
```



---

#### 新生命周期在各个阶段的调用情况

1. 挂载 
   - constructor
   - getDerivedStateFromProps
   - render
   - componentDidMount
2. 更新 
   - getDerivedStateFromProps
   - shouldComponentUpdate
   - render
   - getSnapshotBeforeUpdate
   - componentDidUpdate
3. 卸载 
   - componentWillUnmount

 

---

![lifecycle.png](https://i.loli.net/2019/06/26/5d1372f95bf2b87751.png)



---

#### 旧生命周期在各个阶段的调用情况

1. 挂载 
   - constructor
   - componentWillMount
   - render
   - componentDidMount
2. 更新 
   - componentWillReceiveProps
   - shouldComponentUpdate
   - componentWillUpdate
   - render
   - componentDidUpdate
3. 卸载 
   - componentWillUnmount