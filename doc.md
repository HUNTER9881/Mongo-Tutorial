
# Taqqoslash operatorlar
```
$eq         | ...ga teng olib keladi
$gt         | ... dan katta olib keladi
$gte        | ... dan katta yoki tengni olib keladi
$in         | array ichidagi qaysidir element  ...ga teng bolganini olib keladi
$lt         | ... dan kichikni olib keladi
$lte        | ...dan kichik yoki tengni olib keladi
$ne         | ...ga teng bolmaganni olib keladi
$nin        | array ichidagi qaysidir element  ...ga teng bolmaganini
```

# Logical (Boolean ) operatorlar
```
$and       | va
$not       | emas
$or        | yoki
$nor       | na ... na ...

```

# Arifmetik operatorlar
```
$abs           | absolyut qiymat qataradi
$add           | qo'shish
$multiply      | ko'paytirish
$divide        | bo'lish
$subtract      | ayirish
$inc           | inkriment
$dec           | dikrement
$mul           | kvadratga oshirish - **  
$min           | Math.min()
$max           | Math.max()
$ceil          | Math.ceil()
$floor         | Math.floor()
$mod           | qoldiqni chiqaradi
$pow           | Math.pow()
$round $rand   | Math.round()
$sqrt          | Math.sqrt()
$trunc         | butun qiymatni qaytaradi [$floor , $ceil kabilarga o'xshab]
```


# Aggregation Pipeline Stages
```
$addFields
$bucket
$bucketAuto
$collStats
$count
$facet
$geoNear
$graphLookup
$group
$indexStats
$limit
$listSessions
$lookup
$match
$merge
$out
$planCacheStats
$project
$redact
$replaceRoot
$replaceWith
$sample
$search
$set
$setWindowFields
$skip
$sort
$sortByCount
$unionWith
$unset
$unwind
$currentOp
$listLocalSessions


```






# Array operatorlar
```
$arrayElemAt     - arrayning ichidagi elemntni index qiymati boyicha qaytaradi
$arrayToObject   - key: value larni arrayga o'girib beradi 
$concatArrays    - arraylarni birlashtirish uchun ishlatilinadi
$filter          - filtrlash uchun
$first           - birinchi qiymatni qaytaradi (reduce)
$last            - oxirgi qiymatni qaytaradi (reduceRight)
$in              - massiv ichida element bor yoqligini tekshiradi ( .include()  )
$indexOfArray    - massiv ichida dan keyin shu elemnen bormi deb soraladi   .include(element, number)
$map             - map ga teng
$objectToArray   - dan gacha ketma ketlikda qiymatni qaytaradi 
$reduce          - massiv ichida har bir elementlar bila ishlag funksiyani amalga oshiradi
$reverseArray    - elementlarni teskari qilib beradi
$size            - massiv ichidagi qiymatlarni chiqarib beradi
$slice           - massiv elemetlarni indexi boyicha dan gacha olib beradi
$zip             - yonma yon bolgan qiymatlarni bir birga qogan xolda yangi massiv hosil qiladi 

```

# Shart (Conditional) operatorlar
```
$cond       | va
$switch     | emas

```

# Sana (Date) operatorlar
```
$dateAdd      
$dateDiff     
$dateFromParts
$dateFromString
$dateSubtract
$dateToParts
$dateToString
$dateTrunc
$dayOfMonth
$dayOfWeek
$dayOfYear
$hour
$isoDayOfWeek
$isoWeek
$isoWeekYear
$millisecond
$minute
$month
$second
$toDate
$week
$year

```

# Literal operatorlar
```
$literal
```

# Miscellaneous Operators
```
$getField
$rand
$sampleRate
```

# Obyekt operatorlari
```
$mergeObjects
$objectToArray
$setField
```

# Set operatorlari
```
$allElementsTrue
$anyElementTrue
$setDifference
$setEquals
$setIntersection
$setIsSubset
$setUnion

```

# String operatorlar
```
$concat
$dateFromString
$dateToString
$indexOfBytes
$indexOfCP
$ltrim
$regexFind
$regexFindAll
$regexMatch
$replaceOne
$replaceAll
$rtrim
$split
$strLenBytes
$strLenCP
$strcasecmp
$substr
$substrBytes
$substrCP
$toLower
$toString
$trim
$toUpper
```

# Type  operatorlar
```
$convert
$isNumber
$toBool
$toDate
$toDecimal
$toDouble
$toInt
$toLong
$toObjectId
$toString
$type
```
# Accumulators
```
$accumulator
$avg
$addToSet
$count
$first
$last
$max
$min
$mergeObjects
$min
$push
$stdDevPop
$stdDevSamp
$sum
```
# O'zgaruvchli operatorlar
```
$let
```
# Window operatorlar
```
$addToSet
$avg
$count
$covariancePop
$covarianceSamp
$denseRank
$derivative
$documentNumber
$expMovingAvg
$first
$integral
$last
$max
$min
$rank
$push
```


# Aggregation Pipeline Optimization 
```
($project or $unset or $addFields or $set) + $match
$sort + $match
$redact + $match
$project/$unset + $skip 
$sort + $limit
$limit + $limit
$skip + $skip
$match + $match 
$lookup + $unwind 
$sort + $skip + $limit
$group + $match + $sum
$group + $sum + $avg

```



