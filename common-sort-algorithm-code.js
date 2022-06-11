/**
 * 学习算法，就少不了基础的排序算法,常见的基础排序算法主要有以下几种：
 * 1. 冒泡排序
 * 2. 选择排序
 * 3. 插入排序
 * 4. 归并排序
 * 5. 快速排序
 * 6. 顺序排序
 * 7. 二分排序
 */

/**
 * 冒泡排序的思想就是逐步比较两个相邻的元素，如果后者小于前者，就将两者互换位置
 */
function bubbleSort(sortArr){
    for(var i=0;i<sortArr.lenght;i++){
        for(var j=0;j<sortArr.length;j++){
            var t = sortArr[j];
            if(sortArr[j]>sortArr[j+1]){
                sortArr[j] = sortArr[j+1];
                sortArr[j+1] = j;
            }
        }
    }
    return sortArr;
}
// 上面的算法还可以在写法上和性能上做得更好，可以尝试优化一下

/**
 * 选择排序的思想就是选择出最小的那个元素，放到第一位，次小的元素放到第二位
 */
function selectSort(sortArr){
    for(var i=0;i<sortArr.length;i++){
        var min = sortArr[i];
        for(var j=i;j<sortArr.length;j++){
            if(sortArr[j]<min){
                sortArr[i]=sortArr[j];
                sortArr[j] = min;
                min = sortArr[i];
            }
        }
    }      
}
// 同理，上面的写法也有更好的方式

/**
 * 插入排序，就是假设第零项已经排好队，接着从第一项开始依次寻找他应该在的位置
 * 将它插入到应该在的位置
 */
function insertSort(sortArr){
    for(var i=1;i<sortArr.length;i++){
        var j=i;
        while(j>0&&sortArr[j]<sortArr[j-1]){
            [sortArr[j],sortArr[j-1]]=[sortArr[j-1],sortArr[j]];
            j--;
        }
    }
}
// 上面的写法同样有更好的写法，但是思想是一样的

/**
 * 归并就是不断切分成小数组进行排序
 */

function mergeSortRec(arr){
    let len = arr.length;
    if(len===1){
        return arr;
    }
    let mid = Math.floor(len/2),
    left = arr.slice(0,mid),
    right = arr.slice(mid,len);
    return merge(mergeSortRec(left),mergeSortRec(right));
}

function merge(left,right){
    let result = [],
    l=0,
    r=0;
    while(l<left.length&&r<right.length){
        if(left[l]<right[r]){
            result.push(left[l++]);
        }else{
            result.push(right[r++]);
        }
    }
    while(l<left.length){
        result.push(left[l++]);
    }
    while(r<right.length){
        result.push(right[r++]);
    }
    return result;
}

// 归并排序是一种分治思想，已经稍微有点难度了，可以算成中等

/**
 * 快速排序
 */
function quickSort(arr,left,right){
    let index;
    if(arr.length>1){
        index = partition(arr,left,right);
        if(left<index-1){
            quickSort(arr,left,index-1);
        }
        if(index<right){
            quickSort(arr,index,right);
        }
    }
}
function partition(arr,left,right){
    let part = arr[Math.floor(right+left)/2],
    i=left,
    j=right;
    while(i<=j){
        while(arr[i]<part){
            i++;
        }
        while(arr[j]>part){
            j--;
        }
        if(i<=j){
            [arr[i],arr[j]] = [arr[j],arr[i]];
            i++;
            j--;
        }
    }
    return i;
}
// 主要思想就是将小的移到一遍，大的移到另一边，一直循环直到最终找到可排序区间为不可再分为止