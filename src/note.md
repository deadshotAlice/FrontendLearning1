
### 解决的问题喵：<br>
1.3DMacbook过小问题：<br>
调scale,注意canvas和主盒子高度,canvas样式自带内联style。<br>
2.3DMacbook显示遮挡：<br>
调fov<br>
3.scale的调整问题喵<br>
分清一下显示scale和实用scale,
有条件喵。建议统一。<br>
4.useMediaQuery:<br>
适配屏幕喵。
体现下React的优越性，如果直接原生windows.innerwidth不能重新渲染会卡住。<br>
5.回弹不生效问题：<br>
OrbitControls抢事件喵。<br>
6.Macbook初始16寸飞出问题:<br>
设计一个新的duration,不要写死喵。<br>
然后整一个initial和判断，以及一个prev用useref抓取数据。保证永远不等喵。<br>
<mark>输出的可是布尔值喵！</mark>
7.用户酱找茬开F12导致动画出现两次以及一个超长pin-spacer问题喵：<br>
``` JS
useGSAP(()=>{
    
},[istablet])
```
会被神奇地控制两次。<br>
```JS
{ dependencies: [isTablet], revertOnUpdate: true }
```
这样才对喵。<br>
8。视频底边透亮缝隙问题:<br>
clip-path裁一下？<br>
