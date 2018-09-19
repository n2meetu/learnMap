// 树的深度优先遍历
var nodes = {
    node: 6,
    left: {
        node: 5,
        left: {
            node: 4
        },
        right: {
            node: 3
        }
    },
    right: {
        node: 2,
        right: {
            node: 1
        }
    }
}

// 递归
let result=[];
function dfs(nodes) {
    if(nodes.node){
        result.push(nodes.node);
        nodes.left && dfs(nodes.left);
        nodes.right && dfs(nodes.right);
    }
}

dfs(nodes);
console.log(result,'高度：',result.length);
console.log(Math.log(2))


// // 非递归
// function dfs2(nodes){

// }