# 用python實作桶排序法(Bucket sort) 
## 原理
將資料先分類丟進不同的桶子中，再將所有桶子以插入排序等適合少量資料的演算法進行排序之後，依照桶子的順序把桶子中的元素串接在一起

## 程式實作
參考<https://blog.csdn.net/ggdhs/article/details/90613650>的程式碼<br>
已完全理解,並進行小部分的修改讓程式易於閱讀<br>
<br>
1.建立5個空的桶子<br>
原程式碼:<br>
![](https://github.com/ja1223/se109a/blob/master/final/photo/1.jpg)<br>
修改後:<br>
![](https://github.com/ja1223/se109a/blob/master/final/photo/1-1.jpg)<br>
<br>
2.將數值分配到桶子內<br>
原程式碼:<br>
![](https://github.com/ja1223/se109a/blob/master/final/photo/2.jpg)<br>
修改後:<br>
![](https://github.com/ja1223/se109a/blob/master/final/photo/2-1.jpg)<br>
<br>
3.在程式碼中多加了2個print來觀察是否正確排序
![](https://github.com/ja1223/se109a/blob/master/final/photo/3-1.jpg)<br>
![](https://github.com/ja1223/se109a/blob/master/final/photo/3-2.jpg)<br>
<br>
[程式碼](https://github.com/ja1223/se109a/blob/master/final/BucketSort.py)中有寫許多註解

## 結果
![](https://github.com/ja1223/se109a/blob/master/final/photo/result.jpg)

## 測試
[傳統測試程式碼](https://github.com/ja1223/se109a/blob/master/final/test.py)<br>
測試結果:<br>
![](https://github.com/ja1223/se109a/blob/master/final/photo/testresult.jpg)
[tdd測試程式碼](https://github.com/ja1223/se109a/blob/master/final/tdd.py)<br>
測試結果:<br>
![](https://github.com/ja1223/se109a/blob/master/final/photo/tddresult.jpg)
## 複雜度
複雜度為O(n²)

## 參考資料

<https://blog.csdn.net/ggdhs/article/details/90613650><br>
<https://magiclen.org/bucket-sort/>

