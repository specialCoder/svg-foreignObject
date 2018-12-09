# svg-foreignobject
## Intrudction
svg.js库提供的foreignobject存在两个问题：
1. demo介绍过于简单，没有api的使用说明
2. github上的代码多年前的提交记录，直接复制代码不能运行

补充svg.js foreignobject功能
1. E6也可以完美运行
2. 补足使用文档

## Install
    npm install svg.js --save
## Download 
    git clone git@github.com:specialCoder/svg-foreignObject.git
    
直接使用index.js里面的代码

## Start
使用增加foreignobject功能之后的svg.js

    import SVG from './SVG.js'
    
## Example

        import SVG from './SVG.js'
        
        const draw = SVG('id');
        const foreignObject = draw.foreignObject({
            size:{
                width:300,
                height:200
            }
        });
        foreignObject.appendChild('div',{
            innerHtml:'<span>example</span>'
        });




