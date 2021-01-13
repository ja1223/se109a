
def bucktetSort(numList, bucketNum):
    if len(numList) == 0 or len(numList) == 1:
        return numList  # 陣列只有0個或1個數值所以不用排序，直接return
    maxNum = numList[0]
    minNum = numList[0] # 設最大最小值的變數
    for i in range(1, len(numList)):   # 找最大最小值
        if numList[i] < minNum:
            minNum = numList[i]
        elif numList[i] > maxNum:
            maxNum = numList[i]
        else:
            continue
    bucketSize = (maxNum - minNum + 1) // bucketNum   # 每個桶的範圍=(87 - 8 + 1) // 5 = 16 
    #print(bucketSize)
    buckets = [] # 建立用來放桶子的陣列
    for i in range(bucketNum):#建立5個空的桶子
        buckets.append([])
    for i in range(len(numList)): # 將數值一一分配到桶子內
        bucket = (numList[i] - minNum) // bucketSize # 算要放進哪個桶子
        buckets[bucket].append(numList[i])  
        for i in range(bucketNum): # 對每個桶子進行桶内排序，直接使用python中的sort函式排序
            buckets[i].sort()
    result = [] # 建立用來放結果的陣列
    for i in range(len(buckets)):   # 將桶子中的數值按照順序放進result陣列
        for j in range(len(buckets[i])):
            result.append(buckets[i][j])
    return result # 回傳result陣列
